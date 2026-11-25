---
title: Agent
description: The base class of every creature, its members and lifecycle, and how to track creatures.
sidebar_position: 2
---

# Agent

`Alta.Intelligence.Agent` and `Alta.Intelligence.Agent<TThis>` in `Root.Township`. The AI parts run on the server only.

`Agent` is the brain of one creature. It's a component on the creature's prefab (in every shipped creature, on its own child GameObject such as "Spriggull AI" or "Turabada AI", with `isObjectDisabledOnClient` on), a `NetworkEntityBehaviour`, so it belongs to a `NetworkEntity` (`agent.Entity`). Every creature class (`Spriggull`, `Wyrm` and so on) derives from `Agent<TThis>`, which derives from `Agent`, which derives from `Target`.

You get one from `FindObjectsOfType<Agent>()`, from a Harmony patch on one of its methods, from an action (`IActiveAction.GeneralTopic`), or from a creature's entity with `entity.PrefabRoot.GetComponentInChildren<Agent>(true)`.

## Lifecycle

| Step | Where | What happens |
| --- | --- | --- |
| `Awake` | Both | `Agent<TThis>` counts the instance in `SpawnedCount` and turns the walker's GameObject off. |
| `Initialize` | Both | `Target` subscribes to the health object's death. On a client it then turns the component off (and its GameObject, unless the prefab says not to) and stops. On the server it sets up senses and registers with `TargetCollectorManager`. `Agent` sets up channel event sync. |
| `InitializeAsServer` | Server | Finds the `PopulationItem` on the prefab root, builds the AI (`InitializeAi`), subscribes to `HealthChanged`, and if alive registers with `AgentUpdater`. |
| `InitializeAi` | Server | `Agent<TThis>` runs `InitializeStatic` once per class, turns the walker on, creates the `ActionDecider`. Subclasses then pick their starting action set. |
| Ticking | Server | `AgentUpdater` calls the agent's `CheckChange` and `UpdateAgent` (see [AgentUpdater](agent-updater.md)). |
| `Killed` | Both | Marks it not alive. On the server it also deregisters from `AgentUpdater` and cancels the current action. Subclasses turn off collision and set a death animation. |
| Destroyed | Server | `Entity.DestroyedByScene` deregisters it and cancels the action. |

`Killed` runs on clients too, because the health object's death is synced to them (`HealthObject.OnKilled`).

## Members of Agent

All instance members unless marked static.

| Member | What it does | Notes |
| --- | --- | --- |
| `bool IsEnabled { get; set; }` | Turns the AI on or off. Off cancels the current action and turns the walker's GameObject off; on picks a new action. | Setter does nothing on a client. `PickupAgent` toggles this when a creature is picked up. |
| `bool IsActing { get; }` | Whether an action is running. | |
| `IActiveAction ActiveAction { get; }` | The running action, or null. | |
| `abstract ITarget Target { get; }` | The current action's target, or null. | |
| `bool HasTarget { get; }` | Whether the current action uses a target and it still exists. | |
| `abstract IActionDecider GeneralActionDecider { get; }` | The decider, typed loosely. | `Agent<TThis>.ActionDecider` is the typed one. |
| `Dictionary<ITarget, float> Hurt { get; }` | How much each attacker has hurt this creature, as a fraction of max health. Fades by `hurtReducePerSecond` (0.1 by default) per second. | See [Targets and senses](targets-and-senses.md#hurt). |
| `bool AddTarget(ITarget target)` | Adds a possible target. False if it's the agent itself, already added, or being ignored for a while. | Collectors call this. Good Harmony target. |
| `bool RemoveTarget(ITarget target, float duration = -1)` | With no duration, removes a possible target (refused while it's in `Hurt`). With a duration, ignores the target for that many seconds instead, and returns false. | |
| `void DoAction(ActionComponent action, ITarget target)` | Starts one action straight away. | `PickupAgent` uses this. |
| `void UseActionComponentSet(ActionComponentSet set)` | Swaps the set of actions the creature chooses from. | This is how creatures change "state". |
| `void CancelCurrentAction()` | Cancels the running action. The next decision comes on the next tick it's picked. | |
| `void FireChannelEvent(HookEventChannel channel, IActiveAction action)` | Runs the prefab's UnityEvent for that channel, and sends it to clients if the channel is networked. | See [Actions and decisions](actions-and-decisions.md#channel-events). |
| `event Action NoActionFound` | Raised when a decision finds nothing to do while idle. | Phantoms fade on this. |
| `float UpdateInterval { get; }` | Seconds between decisions while an action can be cancelled. 0.1 by default. | Serialized per prefab. Shipped prefabs: 0.5 for the spriggull, 0.1 for all others. |
| `float ActionDuration { get; }` | Seconds since the current action started. | |
| `float CreationTime { get; }` | `Time.time` when it initialized on the server. | |
| `PopulationItem PopulationItem { get; }` | Link back to the population that spawned it, or null. | See [Spawning and despawning](spawning-and-despawning.md). |
| `Director Director`, `Walker Walker`, `bool HasWalker` | Its movement parts. Flying or burrowing creatures may have no walker. | See [Movement and pathfinding](movement-and-pathfinding.md). |
| `Rigidbody Rigidbody`, `ColliderGroup Collision`, `NetworkAnimator NetworkAnimator` | Its body, colliders and synced animator. | |
| `ChannelEvent[] ChannelEvents` | The prefab's channel events. | |
| `static Agent Selected { get; set; }` | A debug selection. Nothing in game sets it. | |

## Members of `Agent<TThis>`

| Member | What it does | Notes |
| --- | --- | --- |
| `ActionDecider<TThis> ActionDecider { get; }` | Scores and picks actions. Its `PossibilitySet` is the current action set. | Created in `InitializeAi`, so null until then and always null on clients. |
| `static int SpawnedCount { get; }` | Instances of this class that exist, on this machine. | Counts in `Awake`, uncounts in `OnDestroy`, so clients count too. |
| `static bool IsStaticInitialized { get; }` | Whether `InitializeStatic` ran for this class. | |
| `void PreviewAction(ActionTarget<TThis> newAction)` | Starts the given action and target. | |
| `protected bool StartAction(ActionTarget<TThis> newAction)` | Cancels the current action and starts another. | Protected. |
| `protected override bool ChangeAction()` | Updates its collectors, asks the decider for the best action, and starts it. | `Wyrm` overrides this. |

## Members of Target

`Target` is also used on its own, for things creatures can aim at that aren't creatures, and `PlayerCharacterTarget` derives from it. See [Targets and senses](targets-and-senses.md).

| Member | What it does |
| --- | --- |
| `virtual bool IsAlive { get; }` | False once killed. `PlayerCharacterTarget` overrides it. |
| `bool IsInitialized { get; }` | True once initialized on the server. Always false on clients. |
| `string Name { get; }` | Entity id and prefab name, for logs. |
| `virtual Vector3 Position`, `virtual Vector3 GroundPosition` | Where it is. Creatures override `Position` to point at their body or head. |
| `HealthObject HealthObject`, `StatManager StatManager` | Its health and stats, if it has them. |
| `BasicSenseSet Senses` | What it gives off to other creatures' senses. Server only. |
| `float GetDistance(ITarget other, float yFlexibility = 0)` | Distance between ground positions, ignoring up to `yFlexibility` of height difference. |
| `virtual IEnumerable<AttackParameters> Attacks()` | Where its weapons are and how much damage they'd do right now. Creatures read this from their target to react to swings. |

## Threading and cost

Everything here runs on Unity's main thread. `CheckChange` and `UpdateAgent` run from `FixedUpdate`, so several times a frame on a busy server. `UpdateAgent` runs for every registered agent every physics tick. Keep patches on it cheap.

## Tracking creatures

A postfix on `Agent.InitializeAsServer` sees each creature once, as it comes alive on the server. `ATT-Optimizations` uses the same hook. `Schmeechee` overrides `InitializeAsServer`, but it calls the base, so the patch still runs.

```csharp
using System.Collections.Generic;
using Alta.Intelligence;
using HarmonyLib;

public static class CreatureTracker
{
    public static readonly HashSet<Agent> Live = new HashSet<Agent>();

    [HarmonyPatch(typeof(Agent), nameof(Agent.InitializeAsServer))]
    static class Spawned
    {
        static void Postfix(Agent __instance)
        {
            if (!__instance.IsAlive) return;
            Live.Add(__instance);
            __instance.Entity.DestroyedByScene += (entity, isUnload) => Live.Remove(__instance);
        }
    }

    [HarmonyPatch(typeof(Agent), "Killed")]
    static class Died
    {
        static void Postfix(Agent __instance) => Live.Remove(__instance);
    }
}
```

`Killed` is protected, so the patch names it with a string. Every creature's override calls the base first, so patching `Agent.Killed` covers them all. It also runs on clients, where the set is just empty.

:::warning[Leaks]
Steady found the game itself keeps references to dead creatures: `Agent.providedTargets` keeps a target that was destroyed without `RemoveTarget`, and `ActionDecider`'s target hash set keeps ones it already dropped from its list. If you keep your own collections of agents or targets, remove them on death and unload like above, or you'll keep whole destroyed entities in memory.
:::

## Hooking it

- `InitializeAsServer` (public, virtual): best place to change a creature as it spawns, after its AI exists.
- `Killed` (protected, virtual): death, both sides.
- `AddTarget` and `RemoveTarget` (public, not virtual): what it can target.
- `IsEnabled` setter: switching the AI off. Patching it also catches `PickupAgent`.
- `ChangeAction` is abstract here and implemented on the generic `Agent<TThis>`. Patch `Wyrm.ChangeAction` for wyrms, but for other creatures see the generic types warning on the [overview](overview.md#where-to-hook).
- `ILinkedAgent.CheckChange` and `ILinkedAgent.UpdateAgent` are explicit interface members. Reach them with `AccessTools.Method(typeof(Agent), "Alta.Intelligence.ILinkedAgent.UpdateAgent")`.

## See also

- [AgentUpdater](agent-updater.md)
- [Actions and decisions](actions-and-decisions.md)
- [Common creatures](common-creatures.md)
