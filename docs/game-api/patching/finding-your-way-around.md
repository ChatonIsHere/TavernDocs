---
title: Finding your way around
description: Decompiling the game, searching it, finding where something happens, and the traps that catch people the first time.
sidebar_position: 3
---

# Finding your way around

The game is about 5,600 source files once decompiled, with no docs and few comments. This page is how to find the code behind something you see in the game, and the traps to know before you patch it.

## Client builds and server builds

There are two builds of `Root.Township.dll`, both with assembly version 0.0.39.2:

| Build | Where it comes from | Server code |
| --- | --- | --- |
| The original client download | Steam or Alta's launcher, before Tavern | Compiled out. `GameModeManager.StartServer` returns false, `ServerHandler` is a stub, and `ServerPlayerConnectionHandlerOld`, `ServerCacheManager`, `StreamerManager.SaveWorld` and most console command bodies are missing. |
| The server build | TavernDefaults' patch installs it on every Tavern client and server; att-stubs is made from it | All there. |

Always decompile the server build: the `Root.Township.dll` from a game the Tavern launcher has set up, or from a server. If a method seems to do nothing, or a check seems missing, make sure you aren't reading the client download. A quick test is whether `ServerHandler` has a `PlayerLimit` property.

## Decompiling

Use [ILSpy](https://github.com/icsharpcode/ILSpy) or [dnSpyEx](https://github.com/dnSpyEx/dnSpy). Open `A Township Tale_Data\Managed\Root.Township.dll`, and the `Alta.*` and `Township.*` DLLs next to it, so references between them resolve.

The most useful thing either tool does is find callers: in ILSpy, right-click a member and pick **Analyze**, then **Used By**. That's how you work out which side runs something and whether a method is a good hook.

To search with your own tools, save the whole assembly as a project and search the folder:

```powershell
dotnet tool install -g ilspycmd
ilspycmd -p -o C:\att-src\Root.Township "C:\Games\Alta\A Township Tale\A Township Tale_Data\Managed\Root.Township.dll"
rg -n "Running garbage collection" C:\att-src
```

About 2,100 of the game's types have no namespace. ILSpy puts them at the top level of the project.

Compiler-made names (`<ScanAsync>d__42`, `<>c__DisplayClass12_0`, `<Wander>b__3`) are what async methods, iterators and lambdas turn into. Their numbers can change with any rebuild, so find them by prefix at run time rather than by full name.

## Finding where something happens

**From a log line.** The game logs through NLog, nearly always with a logger per class (`LogManager.GetCurrentClassLogger()`), so the logger name in a line is the class that wrote it. Search the decompiled code for the message text: a message like "Running garbage collection" leads straight to `GarbageCollectTimer`. Messages with placeholders (`{0}`, `{error}`) are written with them, so search for the fixed part. The game's own log files are set up in `StreamingAssets\NLog.config` (see [Logging](../console-and-utilities/logging.md)), and TavernLib's `/debug_helper` argument copies them into MelonLoader's log too. [Log messages](log-messages.md) lists the game's messages and where each comes from.

**From a console command.** Commands are methods with a `[Command("name", "description")]` attribute, in classes marked `[Module("name", ...)]`. Search for the command's name in quotes, then follow what the method calls. That usually lands you on the server-side code for the same feature. See [Built-in commands](../console-and-utilities/built-in-commands.md).

**From a network message.** Top-level messages are `MessageType` values with a handler set through `Connection.SetHandler`. Messages to one entity go through its behaviours. Search for the handler's name, or for the struct it reads. See [Networking and players](../networking/overview.md).

**From an object in the world.** The game's prefabs carry most of their setup as data, not code: which behaviours an object has and their field values. A field's value in code is often not the one used. `GarbageCollectTimer.interval` is 2 in the code and 30 in the game's data. Look the prefab up by name (`PrefabManager`), list its components, and start from the behaviours you find. See [Prefabs](../world/prefabs.md).

**From what's slow.** On a server, Canary's `canary profile start` times every script's `Update` and every mod's patches for a few minutes. The game's own update modules (`UnityUpdateManager`, `UpdateModule`) group what runs each frame. See [Update modules](../console-and-utilities/update-modules.md).

**Which side runs it.** Follow the callers until you reach something that decides: an `IsServer` check, a `[ServerOnly]` command, a method named `...AsServer` or `...AsLocalPlayer`, a network handler that only one side registers, or a type that only exists in the server build. If you can't tell, log from a patch on both sides and see.

## Traps

### Headless is not the same as server

`ApplicationManager.IsHeadless` is true for `-batchmode` or `-nographics`, and the game switches several things off on it:

- `PickupDock.Awake` turns off every dock's pickup range, so a headless client can't take things out of docks.
- `LocationChunk.Initialize` doesn't hook up chunk effects, including the one that turns the master terrain off in the mine, so a headless client walks into terrain no player touches.
- `GarbageCollectTimer` only starts its forced collection when headless.

A headless client (a bot, a test client) gets all of that, and every mod that takes "headless" to mean "server" runs its server half there. ATT-Optimizations' mods check `Application.isBatchMode`, which is true for any `-batchmode` game. To mean "server", check for `/start_server`.

Without a GPU or audio, more breaks. Rover found:

- `DarknessReader`'s compute shader has no kernel and its constructor throws inside `PlayerController.LinkToPlayer`, which skips the rest of the local player's set-up.
- Sound calls throw (`AudioManager` has nothing set), and some throw halfway through something that matters: the undock sound plays in the middle of `Pickup.Interact`, so the item leaves the dock with no joint to the hand and falls.
- `SmoothLocomotion.isLoaded` can stay false after the spawn chunk loads, discarding all movement input. `ForceSetIsLoaded()` sets it.

### Alta's web services are gone

Every call to `webapi.townshiptale.com`, `accounts.townshiptale.com` or Alta's AWS endpoints now hangs until it times out. Each one is a delay somewhere:

- The public IP lookup (`ServerUtilities.GetPublicIPAddress`) takes about a minute, then answers 0.0.0.0.
- On a first join, dead shop and store requests hold the player in the character room for about a minute.
- Analytics, friends, server permissions and login refresh each wait too.

TavernEssentials and Steady answer most of them at once (see [Known patch points](known-patch-points.md#altas-web-api-and-the-store)). If you write your own: on Mono, patching `HttpClient.SendAsync` catches nothing. Patch `HttpClientHandler.SendAsync` and `HttpMessageInvoker.SendAsync`, and fail with `TaskCanceledException`, which is what a timeout throws, so callers take their usual timeout path. See [Alta's web API](../console-and-utilities/alta-web-api.md).

`VoiceChat`'s constructor throws in `Player.SetLocal` because Vivox is gone. It's the last line there, so it's harmless.

### Errors that switch things off for good

- **An update method that throws is dropped.** The game's update modules catch the exception, log "Error while invoking Unity Update Method", and deregister that method. It never runs again until a restart. Steady found held-item damage stopping this way after one bad hit. A patch on anything that runs in an update module must not throw.
- **An exception that escapes an `async void` method** (many network handlers are `async void`) isn't caught by whoever called it. TavernLib's comment says it would take the process down, and wraps its whole join handler in a `try`.

### Things that look like checks and aren't

- `ServerSettingsSync.IsServerSyncPermitted` always returns true: any player's settings board could change the server's settings. TavernLib and TavernEssentials both fix this.
- Several built-in commands answer Success having done nothing: `world caves teleport` for a layer that already exists, `wacky destroy` for an entity that can't be destroyed, a command given a player list that matched nobody. TavernLib fixes those it knows.

### The server pauses every 30 seconds

`GarbageCollectTimer` calls `GC.Collect` on a fixed beat on servers. Unity's Mono uses the Boehm collector, which stops the world for the whole collection whatever the "not blocking" flag says, and the pause grows with the heap: about 280 to 460 ms on a fresh server, 650 to 700 ms after the caves have loaded. TavernLib makes the interval configurable and Steady can turn it off.

### Patch timing

Patching a method that calls into Unity's engine before Unity is up leaves those engine calls missing for the rest of the session. Patch early only what you must. See [When to patch](harmony.md#when-to-patch).

### Paths that aren't where you'd think

- `%APPDATA%\TheModdingTavern` is the Tavern launcher's folder, shared by every copy of the game on the PC. Mono asks Windows for `APPDATA`, so setting the variable for one game process doesn't move it.
- The game's Discord link talks to the Discord app on the PC. A second copy of the game (a bot, a local server) can take over the player's Discord status. TavernEssentials skips `DiscordController.Start` on servers.

## See also

- [Harmony in A Township Tale](harmony.md)
- [Known patch points](known-patch-points.md)
- [Startup and app state](../console-and-utilities/startup-and-app-state.md) for every command-line flag the game reads.
