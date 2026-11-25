---
title: Harmony in A Township Tale
description: Prefixes, postfixes and transpilers on the game's code, private members, async methods, properties, generics, patch timing, threads and sides.
sidebar_position: 1
---

# Harmony in A Township Tale

The game has no hooks for mods, so nearly every mod changes it with [Harmony](https://harmony.pardeike.net/articles/intro.html). MelonLoader ships Harmony (`0Harmony.dll`, version 2.10) and gives every mod and plugin its own instance, `HarmonyInstance`. This page is about what's particular to this game. Harmony's own docs cover the rest.

Every example here compiles against att-stubs. Examples that use a private member say so.

## Two ways to apply a patch

**Attribute patches.** MelonLoader finds every `[HarmonyPatch]` class in your mod and applies it for you, before your `OnInitializeMelon` runs. That's the quickest way, but:

- They're applied on every side, client and server. Your patch has to check where it is (see [Server or client](#server-or-client)).
- If a target is missing, that patch class fails with an error in the log and the others still apply.

**Manual patches.** Call `HarmonyInstance.Patch(...)` yourself, when and where you want. Steady, Lens, Rover, TavernEssentials and ATT-Optimizations all do this. It lets you patch only on the side that needs it, skip a patch whose target isn't in this build, and patch later than MelonLoader would. A small helper is enough:

```csharp
// Patch one method, or log and carry on if this build doesn't have it.
public static bool Try(HarmonyLib.Harmony harmony, System.Reflection.MethodBase target, HarmonyMethod prefix = null, HarmonyMethod postfix = null)
{
    if (target == null)
    {
        MelonLoader.MelonLogger.Warning("Patch target not found, skipped.");
        return false;
    }
    try
    {
        harmony.Patch(target, prefix, postfix);
        return true;
    }
    catch (System.Exception e)
    {
        MelonLoader.MelonLogger.Warning($"Couldn't patch {target.DeclaringType?.Name}.{target.Name}: {e.Message}");
        return false;
    }
}
```

A mod with only manual patches has no `[HarmonyPatch]` attributes, so MelonLoader's automatic pass finds nothing to do.

## Prefix, postfix, finalizer, transpiler

A **postfix** runs after the original. Use it to read or change the result, or to react to something happening. This one runs on the server when a player's character is set up:

```csharp
[HarmonyPatch(typeof(Player), nameof(Player.InitializePlayerOnServer))]
static class PlayerJoined
{
    // Runs when the method returns its Task, which is at its first await, not when the player is ready.
    static void Postfix(Player __instance, Task __result)
    {
        MelonLogger.Msg($"Initializing {__instance.UserInfo?.Username}");
        __result.ContinueWith(t => MainThreadDispatcher.Run(() => MelonLogger.Msg($"Ready: {__instance.UserInfo?.Username}")));
    }
}
```

A **prefix** runs before. Return `false` to skip the original. For a method that returns something, set `__result` too, or the caller gets `null` (for an async method, a `null` Task, which throws when awaited). Here, the public IP lookup asks Alta's dead web API and waits about a minute; this answers at once:

```csharp
[HarmonyPatch(typeof(ServerUtilities), nameof(ServerUtilities.GetPublicIPAddress))]
static class NoPublicIp
{
    // Skips the original: the async method never starts, so __result must be set.
    static bool Prefix(ref Task<IPAddress> __result)
    {
        __result = Task.FromResult(IPAddress.Any);
        return false;
    }
}
```

A **finalizer** runs even when the original throws, and can swallow the exception by returning `null`. Rover uses them on sounds that throw on a headless client, and Steady on `DelayedImpactResolver.Update`, whose exception would otherwise drop it from the update loop for good.

```csharp
// A finalizer that returns null swallows whatever the original threw.
static Exception Swallow(Exception __exception) => null;
```

A **transpiler** rewrites the original's IL. Use it when you need to change one thing in the middle of a method, like a hard-coded number. Make it check it found exactly what it expected, and leave the code alone otherwise, since another mod may have changed it first:

```csharp
// Swap the hard-coded 1760 in WebSocketRemoteConsole.Start for a method call. TavernLib already does this.
[HarmonyPatch(typeof(WebSocketRemoteConsole), nameof(WebSocketRemoteConsole.Start))]
static class ConsolePort
{
    public static int Port() => 1770;

    static IEnumerable<CodeInstruction> Transpiler(IEnumerable<CodeInstruction> instructions)
    {
        var found = 0;
        foreach (var instruction in instructions)
        {
            if (instruction.LoadsConstant(1760))
            {
                found++;
                yield return new CodeInstruction(OpCodes.Call, AccessTools.Method(typeof(ConsolePort), nameof(Port))).MoveLabelsFrom(instruction);
                continue;
            }
            yield return instruction;
        }
        if (found != 1) MelonLogger.Warning($"Expected one 1760 in WebSocketRemoteConsole.Start, found {found}");
    }
}
```

## Private members

Most of what you want is private. You have three ways in.

**att-stubs.** The `Root.Township` in [att-stubs](../../mod/game-mods/game-files-or-stubs.md) has every member made public, so private fields and methods compile as if they were public. TavernLib builds against a publicized copy the same way and reads private fields like `MessageProcessor.size` directly, and the game's Mono runtime doesn't refuse it. The catch: against the real game's DLL that code won't compile, and a renamed field fails only when it runs.

```csharp
static class DockPatch
{
    // With att-stubs, pickupRange is public and this compiles. Against the real game it doesn't.
    public static void AfterAwake(PickupDock __instance)
    {
        if (__instance.pickupRange != null) __instance.pickupRange.enabled = true;
    }
}
```

The stubs also make protected members public, so an override of a protected member must be declared `public` when you build against them. Rover switches on a `STUBS` define for this.

**Harmony's injected arguments.** A parameter named with three underscores and the field's name gets that field, by `ref` if you want to change it. This works against both the stubs and the real game:

```csharp
[HarmonyPatch(typeof(GarbageCollectTimer), "Start")]
static class GcInterval
{
    // Triple underscore: Harmony hands you the private field by name. Works against the real game too.
    static void Prefix(ref float ___interval) => ___interval = 300f;
}
```

A private method is named as a string: `[HarmonyPatch(typeof(GarbageCollectTimer), "Start")]` or `AccessTools.Method(typeof(PickupDock), "Awake")`.

**AccessTools and Traverse**, anywhere else. `AccessTools.FieldRefAccess` is fast enough for code that runs often. `Traverse` is handy for a one-off.

```csharp
static class ReflectionWays
{
    static readonly AccessTools.FieldRef<GarbageCollectTimer, float> Interval =
        AccessTools.FieldRefAccess<GarbageCollectTimer, float>("interval");

    public static float Read(GarbageCollectTimer timer) => Interval(timer);

    public static float ReadSlowly(GarbageCollectTimer timer) => Traverse.Create(timer).Field("interval").GetValue<float>();
}
```

For a type you can't name at all (internal, or in a mod you don't reference), use `AccessTools.TypeByName("Namespace.Type")`. TavernEssentials finds every TavernLib type this way so it doesn't need TavernLib to build.

## Async methods

A lot of the game is `async`: joining, saving, player set-up, every web API call, many network handlers. The method you see is a small stub that creates a state machine and starts it. That changes what a patch does:

- A **prefix** runs before anything. Returning `false` stops the state machine from ever starting. Set `__result` to a finished Task.
- A **postfix** runs when the stub returns, which is at the first `await` that doesn't complete straight away. The work isn't finished. For an `async void` method (common for network handlers), there's no Task to wait on at all.
- To act when the work finishes, replace `__result` with your own Task that awaits the original's:

```csharp
[HarmonyPatch(typeof(CommandService), nameof(CommandService.HandleMatchedCommand))]
static class CommandTiming
{
    // A postfix on an async method sees the Task. To act on the outcome, swap in your own Task that awaits it.
    static void Postfix(CommandSearchResult matchedCommand, ref Task<CommandResult> __result) => __result = Log(matchedCommand, __result);

    static async Task<CommandResult> Log(CommandSearchResult matched, Task<CommandResult> pending)
    {
        var started = DateTime.UtcNow;
        var result = await pending;
        MelonLogger.Msg($"{matched.command?.FullName} took {(DateTime.UtcNow - started).TotalMilliseconds:F0} ms");
        return result;
    }
}
```

TavernLib does this to `HandleMatchedCommand` to unwrap command errors, and Steady and ATT-Optimizations do it to chunk loads to spread them over frames.

- To run on every step of the method, patch the state machine's `MoveNext`. This build's Harmony has no `AccessTools.AsyncMoveNext`, so find it through the `AsyncStateMachineAttribute`:

```csharp
static class StateMachines
{
    // To run on every step of an async method, patch its state machine's MoveNext instead.
    public static void PatchJoinSteps(HarmonyLib.Harmony harmony)
    {
        var join = AccessTools.Method(typeof(GameModeManager), nameof(GameModeManager.JoinServer));
        var machine = join.GetCustomAttribute<AsyncStateMachineAttribute>().StateMachineType;
        var moveNext = AccessTools.Method(machine, "MoveNext");
        harmony.Patch(moveNext, prefix: new HarmonyMethod(typeof(StateMachines), nameof(Step)));
    }

    static void Step() => MelonLogger.Msg("JoinServer resumed");
}
```

The state machine's fields have compiler names (`<>1__state`, `<name>5__2`) that can change with any rebuild of the game. Use them only if you must.

Coroutines are the same idea. A method that returns `IEnumerator` only builds the iterator. A prefix can return your own iterator in its place (Steady's `CaveScans` and `ForestPacing` do), and a transpiler on the compiler-made `<Name>d__N.MoveNext` changes what each step does (Steady's `ScanGc` removes a `GC.Collect()` there). Find that type with `AccessTools.FirstInner(type, t => t.Name.StartsWith("<ScanAsync>d__"))`, not by its number.

## Properties, constructors and interface methods

| Target | How to name it |
| --- | --- |
| A getter or setter | `[HarmonyPatch(typeof(JoinResult), nameof(JoinResult.ErrorMessage), MethodType.Getter)]`, or `AccessTools.PropertyGetter(type, name)` / `PropertySetter`. |
| A constructor | `[HarmonyPatch(typeof(WebServerThread), MethodType.Constructor, typeof(int))]`, or `AccessTools.Constructor(type, argTypes)`. |
| An explicit interface method | Its full name as a string: `AccessTools.Method(typeof(DarknessReader), "IInitializeAsLocalPlayer.InitializeAsLocalPlayer")`. When the interface has a namespace, it's part of the name, as in `"Alta.Chunks.IProceduralGenerationStreamer.LoadDynamic"`. |
| One of several overloads | Give the argument types: `AccessTools.Method(type, name, new[] { typeof(bool) })`. |
| A nested or private type | `AccessTools.Inner(typeof(OptimizationManager), "QualitySetting")`. |

```csharp
[HarmonyPatch(typeof(JoinResult), nameof(JoinResult.ErrorMessage), MethodType.Getter)]
static class JoinMessage
{
    static void Postfix(JoinResult __instance, ref string __result)
    {
        if (__instance.Result == ClientJoinResult.JoinRejected && __instance.Message != null) __result = __instance.Message;
    }
}
```

Harmony's docs warn that small methods, like simple getters, can be inlined into their callers by the JIT, and then a patch on them doesn't run from those callers. If a patch on a tiny method never fires, patch its caller.

## Generic methods

You can't patch an open generic method. Close it with `MakeGenericMethod` and patch that:

```csharp
static class Generics
{
    public static void PatchOne(HarmonyLib.Harmony harmony)
    {
        var open = AccessTools.Method(typeof(NetworkEntity), nameof(NetworkEntity.GetComponentOnEntity));
        var closed = open.MakeGenericMethod(typeof(Pickup));
        harmony.Patch(closed, postfix: new HarmonyMethod(typeof(Generics), nameof(After)));
    }

    // Harmony warns that a closed generic method over a reference type can share its body with
    // other reference types, so this may also run for GetComponentOnEntity of other classes.
    static void After(NetworkEntity __instance) => MelonLogger.Msg($"Looked for a Pickup on {__instance.name}");
}
```

The same goes for a method in a generic class. Where you can, patch a non-generic method nearby instead.

## When to patch

| When | What's ready | Use it for |
| --- | --- | --- |
| A plugin's `OnPreInitialization` | Nothing of the game. Unity hasn't started. | Patches that must be in before the game reads them at start-up: Rover forces the XR mode, the input device and the player mode here. Only a `MelonPlugin` gets this. |
| A plugin's attribute patches | Same: they're applied as the plugin loads. | TavernLib's patches. |
| A mod's attribute patches, then `OnInitializeMelon` | Unity is up, the first scene isn't. | Most mods. |
| `OnLateInitializeMelon`, `MelonEvents.OnApplicationLateStart` | The game, NLog and the other mods have loaded. | Patches that touch engine code, patching another mod (Rover patches TavernLib here), anything reading the scene. |

:::warning[Patching too early breaks engine calls]
When Harmony patches a method it compiles it again. If that method calls into Unity's engine and you patch it before Unity has registered its internal calls, Mono keeps those calls missing for good. Rover saw this: patching `Teleporter` in `OnPreInitialization` gave `MissingMethodException` on every UI component of the login screen, and the client never joined. TavernLib hit it with console command patches (every transform access failed and the server never finished loading). Keep early patches to methods that don't touch the engine, and patch the rest from `OnLateInitializeMelon` or later.
:::

```csharp
// A plugin loads before the game starts, so it can patch things the game reads at start-up.
public class EarlyPlugin : MelonPlugin
{
    static readonly bool IsServer =
        Environment.GetCommandLineArgs().Any(a => string.Equals(a, "/start_server", StringComparison.OrdinalIgnoreCase));

    public override void OnPreInitialization()
    {
        if (IsServer) return;
        var harmony = new HarmonyLib.Harmony("Placeholder.Early");
        harmony.Patch(AccessTools.Method(typeof(XRUtility), nameof(XRUtility.GetCommandXRMode)),
            prefix: new HarmonyMethod(typeof(EarlyPlugin), nameof(NoVR)));

        // Anything that touches Unity's engine calls waits until the game is up.
        MelonEvents.OnApplicationLateStart.Subscribe(() => LatePatches(harmony));
    }

    static bool NoVR(ref TownshipXRMode __result)
    {
        __result = TownshipXRMode.NoVR;
        return false;
    }

    static void LatePatches(HarmonyLib.Harmony harmony)
    {
        harmony.Patch(AccessTools.Method(typeof(Teleporter), "TeleportStartedSound"),
            finalizer: new HarmonyMethod(typeof(EarlyPlugin), nameof(Swallow)));
    }

    // A finalizer that returns null swallows whatever the original threw.
    static Exception Swallow(Exception __exception) => null;
}
```

Rover does the same: it reads the command line itself and touches game types only inside its patch code, wrapped in a `try`, so a type that fails to load this early leaves it idle instead of crashing.

## The main thread

Patches run on whatever thread calls the original. For most of the game that's Unity's main thread, but not all of it:

- Pathfinding (`AstarPath`, `Seeker`, `Path` and the rest of `Pathfinding`) runs path searches on worker threads.
- Saving can write chunk files off the main thread (Steady's `ChunkSaveFormat.WriteTo` patch runs there).
- Your own `Task.ContinueWith` callbacks and `Task.Run` work run on the thread pool.

Unity objects must only be touched from the main thread. Hand the work back with the game's `MainThreadDispatcher`, which runs it on the next frame:

```csharp
static class Threads
{
    // From a worker thread or a Task continuation, hand Unity work back to the main thread.
    public static void LogLater(string text) => MainThreadDispatcher.Run(() => MelonLogger.Msg($"{text} on frame {UnityEngine.Time.frameCount}"));
}
```

See [Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md). If a patch keeps state, a `[ThreadStatic]` field keeps threads from treading on each other (TavernLib's console token checks and Steady's pathfinding patches do this).

Patches on methods that run every frame, or for every entity, cost every frame. Keep them cheap, and don't allocate in them.

## Server or client

A patch applied with attributes runs on both sides, so check where you are:

```csharp
static class Side
{
    // Started as a dedicated server.
    public static bool IsServerProcess { get; } = CommandLineArguments.Contains(CommandLineArguments.StartServerArgument);

    // -batchmode or -nographics. True on servers, and on headless clients (bots) too.
    public static bool IsHeadless => ApplicationManager.IsHeadless;

    // True while this process hosts the scene, and also in the main menu's local scene on a client.
    public static bool HostsScene => NetworkSceneManager.IsServer;
}
```

- Use the `/start_server` check to decide which patches to apply at all.
- Inside a patch on code both sides run, `NetworkSceneManager.IsServer` tells you whether this call is the hosting side. Remember it's also true in a client's main menu.
- Don't use `ApplicationManager.IsHeadless` to mean "server". A headless client (Rover's bots) is headless too, and TavernEssentials had to be patched to stop it running its server half in a bot.
- `ServerHandler.Initialized` and `ServerHandler.Current` fire and fill on a client too, for the main menu's dummy server (`IsDummyLocalServer`).

The game also marks server-only console commands with `[ServerOnly]`. Many methods only run on one side because of who calls them. As a rule of thumb, methods named `...AsServer` or `...OnServer` are called on the server, and `...AsLocalPlayer` on the client that owns that player. Follow the call sites to be sure.

## Sharing a method with other mods

Several mods often patch the same method (see the [conflicts list](known-patch-points.md#methods-patched-by-more-than-one-mod)). To get along:

- **Skipping prefixes stack badly.** If two prefixes both skip the original, both run, and the last to set `__result` wins. Take a `bool __runOriginal` parameter and step aside when another prefix has already answered. Run late with `[HarmonyPriority(Priority.Last)]` if you're a fallback, as Steady's `AltaCutoff` is:

```csharp
static class Polite
{
    // Runs after other mods' prefixes, and steps aside if one of them already answered.
    [HarmonyPriority(Priority.Last)]
    static bool Prefix(bool __runOriginal, ref Task<IPAddress> __result)
    {
        if (!__runOriginal) return false;
        __result = Task.FromResult(IPAddress.Any);
        return false;
    }

    public static void Apply(HarmonyLib.Harmony harmony) =>
        harmony.Patch(AccessTools.Method(typeof(ServerUtilities), nameof(ServerUtilities.GetPublicIPAddress)),
            prefix: new HarmonyMethod(typeof(Polite), nameof(Prefix)));
}
```

- **A postfix gets the last word.** TavernLib checks console logins in a prefix and puts its verdict back in a postfix, so no other mod's prefix can overwrite it.
- **A whole-method replacement wins over a transpiler.** If one mod's prefix always skips, another mod's transpiler on the same method never runs.
- **Check, don't assume.** `Harmony.GetPatchInfo(method)` lists who patched a method. TavernEssentials uses it to check TavernLib's 8-bit message patch is there before using message types above 31.
- **Don't unpatch other mods** unless you mean to replace them. TavernEssentials removes TavernLib's quit-on-return-to-menu prefix on purpose and says so in its settings.

```csharp
static class WhoElse
{
    // Lists the Harmony ids that already patch a method.
    public static string Owners(System.Reflection.MethodBase method)
    {
        var info = HarmonyLib.Harmony.GetPatchInfo(method);
        return info == null ? "nobody" : string.Join(", ", info.Owners);
    }
}
```

## See also

- [Known patch points](known-patch-points.md): every patch in our mods and the public ones, by game area.
- [Finding your way around](finding-your-way-around.md): decompiling, searching and the traps.
- [Your first mod](../../mod/game-mods/your-first-mod.md) for setting up a project.
