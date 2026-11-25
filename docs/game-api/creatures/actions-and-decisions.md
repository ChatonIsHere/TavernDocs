---
title: Actions and decisions
description: How a creature's possible actions are built, scored and run, and how prefabs hook effects onto them.
sidebar_position: 4
---

# Actions and decisions

All in `Alta.Intelligence` in `Root.Township`. Server only: the decider and the actions only exist once `InitializeAi` has run.

A creature's behaviour is a set of **actions** (wander, follow, jump at, bite, idle, sleep in a nest). Each decision scores every action, and every action against every possible target, and runs the best one until it finishes, is cancelled, or something better comes along.

## The parts

| Type | What it is | Where it lives |
| --- | --- | --- |
| `ActionComponent` | A `MonoBehaviour` that holds one action's settings: weighting, whether it can be cancelled, and its own fields (speed, duration, range). Each kind of action has its own subclass, like `AgentWanderSettings` or `WyrmMeleeSettings`. | On the prefab, under an action set. |
| `ActionComponentSet` | A `MonoBehaviour` whose child `ActionComponent`s make up one set of choices. | On its own prefab asset ("Turabada Aggro Set", "Wyrm AI", ...), which creatures reference. Never copied per creature. |
| `IAction`, `Action<TAgent>`, `BasicAction<TAgent, TActive, TSettings>` | The action itself, built once per `ActionComponent`: its settings, its scoring lists, and whether it uses a target. `BasicAction` keeps a pool of running instances. | `ActionComponent.GetStaticAction()` builds and caches it. |
| `ActionSet<TAgent>` | The actions to choose from, split into `BaseActions` (no target) and `TargetActions`. | Built from an `ActionComponentSet` with `GetActionSet<T>()`. |
| `IActiveAction`, `BasicActiveAction<TAgent, TSettings>` | One running action on one creature. `OnStart`, `Update(bool hasTarget)`, `Finish`, `Cancel`. | Taken from the pool when it starts. |
| `ActionDecider<TAgent>` | Holds the possible targets and the current set (`PossibilitySet`), and picks the best action. | `Agent<TThis>.ActionDecider`. |
| `ActionTarget<TAgent>` | A struct: an action, its target (or null) and its score. | Returned by the decider. |
| `TargetOperation` | One scoring rule. `float Evaluate(Agent agent, ITarget target)`, plus a `Weight`. | Built in code, or from `TargetOperationComponent`s on the prefab. |

The `IAction` objects (and their settings) are shared by every creature that uses the same `ActionComponent`. Only the running `IActiveAction` belongs to one creature. Change a settings field and you change it for all of them. In the shipped game the sets are separate prefab assets that the creature prefabs only point at, so they really are shared: one set of `ActionComponent`s for every spriggull.

## ActionComponent

The settings every action has:

| Member | What it does |
| --- | --- |
| `float Multiplier { get; }` | The action's base score: `baseWeightingMultiplier`, plus a random amount up to `extraRandomMultiplier` if that's above 0. Rolled each time it's read. |
| `bool IsCancellable { get; }` | Whether a new decision can replace it. If false, the creature won't decide again until it finishes or cancels itself. |
| `int CancelPriority { get; }` | To replace a running action, this must be at least the running action's `MinimumCancelPriority`. |
| `int MinimumCancelPriority`, `float MinimumCancelWeighting` | What another action needs (priority, and a score above this) to replace this one. |
| `bool CanCancelSelfWithSameTarget { get; }` | If false, picking the same action and target again just resets the decision timer instead of restarting it. |
| `IAction GetStaticAction()` | Builds the action once, adding the scoring rules from the child objects named "Base Required", "Base Preferred", "Target Required" and "Target Preferred". |
| `void HandleUsed(IActiveAction active)` | Called every time any creature starts this action. The first call initializes the component's AI hooks. Raises `Used`. |
| `event ActionSettingsUsedHandler Used` | Raised from `HandleUsed`. AI hooks subscribe to it. |

Subclasses add what the action needs, read through getters: `AgentNavigationSettings` has `Speed`, `Acceleration`, `IsOvershooting`; `TimedActionComponent` has `Duration`; `RandomTimedActionComponent` has `RandomDuration`.

## How the decider scores

`ActionDecider<TAgent>.GetBestAction(int minimumPriority, float minimumWeighting)` runs on each decision:

1. Drops possible targets that no longer exist.
2. For each **base action** whose `CancelPriority` is high enough: start from `Multiplier`, multiply by every "required" rule. A rule below 0 rules the action out, and so does the score dropping to half the best so far or less. Then multiply by the "preferred" score: the weighted sum of the preferred rules, plus 1, clamped to 0 to 2.
3. For each **target action**, the same, once for each possible target that's initialized and alive, with the target rules added to the base ones.
4. The highest score above `minimumWeighting` wins. The winning target moves to the front of the list.

When the creature is already acting, the minimums come from the running action's `MinimumCancelPriority` and `MinimumCancelWeighting`. If nothing beats them, the running action continues. If the creature was idle and nothing scores, `Agent.NoActionFound` is raised.

So a "required" rule that returns 0 switches an action off for that target, and a "preferred" rule can at most double or zero a score.

### Scoring rules

`CreateTargetOperation` makes the common rules. The game's built-in actions (wyrm attacks, for example) use these in code, and prefabs add more as child objects.

| Factory | Returns |
| --- | --- |
| `Sense(SenseOld sense, float from0 = 0, float to1 = 1, bool isTarget = true)` | How strongly the target (or the creature itself) has a sense, mapped from `from0` to `to1` onto 0 to 1. Reversed ranges give "less is better". |
| `Sense(Sense sense, ...)` | The same with a sense asset. |
| `SameTarget(float sameValue, float differentValue = 1)` | `sameValue` if this is the creature's current target. Used to make creatures stick to or switch targets. |
| `Chance(float chance, float success = 1, float failure = 0)` | A dice roll each time. |
| `Formula<T>(string name, Func<T, ITarget, float> formula)` | Any code you like. |
| `Lifetime(float minimum, float maximum)`, `Grounded(...)`, `RaycastGrounded(...)`, `VelocityLimit(...)`, `Stat(...)`, `RVOBlocked(...)` | Age, grounded checks, speed, a stat value, and whether the RVO avoidance is blocking it. |

See [Targets and senses](targets-and-senses.md) for what the senses are.

## Running actions

`BasicAction.Start` takes a pooled `BasicActiveAction` (or makes one), calls its `Start`, which calls `OnStart`, then calls `Settings.HandleUsed`. While it runs, `AgentUpdater` calls `Update(hasTarget)` every physics tick. It ends with `Finish()` (often on a timer set by `SetDuration`, through `Timeline`) or `Cancel()`, raising `Finished` or `Cancelled`. `Cancel` isn't virtual: actions that need to clean up subscribe to their own `Cancelled` event.

### Built-in actions

Generic ones, usable by any creature. Each is set up by the settings class named in brackets.

| Action | What it does |
| --- | --- |
| `ActiveIdle` (`AgentIdleSettings`) | Stands for a while, optionally facing or following the target. Can also teleport the creature to another free spawn point of its population (`moveSpawnChance`). |
| `ActiveWander`, `ActiveBlockCanceleableWander` (`AgentWanderSettings`) | Walks to a random reachable point. |
| `ActiveFollow` (`AgentFollowSettings`) | Chases the target, giving up past a distance unless it's been hurt enough. |
| `ActiveDistanceFromTarget` (`AgentDistanceFromTargetSettings`) | Walks to a point found around the target, optionally on the side the creature is on. |
| `ActiveInteractApproach` (`AgentInteractApproachSettings`) | Follows the target until close. If the target is too high or low to reach, ignores it for a while and can start a "can't reach" action. |
| `ActiveEat` (`AgentEatSettings`) | Grabs the target item with the creature's `Interactor` and destroys it after a delay. Spriggulls eat dropped food this way. |
| `ActiveNest` (`AgentNestSettings`) | Late in the day, walks to the nearest free `Nest` and sleeps there. |
| `ActiveJumpAt` (`AgentJumpAtSettings`) | Launches the body at the target. |
| `ActiveThreaten` (`AgentThreatenSettings`) | Faces the target. Finishes if it comes close (then swaps to `ChangeTo`), cancels if it goes far. |
| `ActiveCircleTarget`, `ActiveCircleReposition`, `ActiveAgentMoveCloser`, `ActiveAgentRotateClose` | Circling and closing in on a target. |
| `ActiveFaceTarget`, `ActiveAttackDirectionReact` | Turning toward the target, and reacting to where its weapon is (from `ITarget.Attacks()`). |
| `ActiveCrawl`, `AgentRollUpInPlace`, `ActiveRegainControl` | Crawling, rolling up, and recovering after being knocked about. |
| `ActiveSwapActionSet`, `ActiveDelayEnterSet` | Switch the creature to another action set, now or after a delay. |
| `ActiveDisabled` | Does nothing. |
| `ActiveDeleted` | Destroys the creature's whole entity, through `AltaCoroutine.DelayCall`. A creature can despawn itself this way. |

Creature-specific ones are on [Common creatures](common-creatures.md) and [Other creatures](other-creatures.md).

## Action sets are states

A creature has no state machine. Its state is whichever `ActionComponentSet` its decider is choosing from. Actions change it: `ActiveThreaten` swaps to its `ChangeTo` set when the target comes close, `ActiveSwapActionSet` swaps straight away, a wyrm's emerge and dig actions call `UseEmergedActions` and `UseBurrowedActions`. Code can do the same with `agent.UseActionComponentSet(set)`, or by setting `ActionDecider.PossibilitySet`.

`ActionComponentSet.GetActionSet<T>()` tries to cache its result but casts it to `ActionSet<Agent>`, which fails for any real creature type. So each call builds a new `ActionSet`. `Agent<TThis>` keeps its own cache per set, and most creature classes keep a static map from set to `ActionSet`, so in practice creatures of one class share one `ActionSet` object per set. Editing it (`AddAction`, `RemoveAction`) changes all of them.

## AI hooks

Components implementing `IAiHook`, on the same GameObject as an `ActionComponent`, add effects to that action. They're initialized the first time the action is used, and subscribe to its `Used` event, so they run for every creature that uses it.

| Hook | What it does |
| --- | --- |
| `AiHook` | Base: runs code when the action starts, finishes or is cancelled. |
| `AnimatedTriggerAiHook`, `AnimatedBoolAiHook`, `AnimatedFloatAiHook`, `AnimatedFloatTransitionAiHook`, `AnimatedLayerAiHook` | Set animator parameters through the creature's `NetworkAnimator`, so clients see them. |
| `EventChannelAiHook` | Fires a channel event when the action starts and another when it ends. |
| `EventChannelTimedAiHook` | Fires channel events at set delays after the action starts. |
| `FixedStatChangeHook`, `ProgressStatChangeHook` | Change a stat on the creature or its target during the action. |
| `AttackDirectionReactAIHook` | Drives animation from the direction of the target's attacks. |

Steady found that `FixedStatChangeHook` never removes its entry for a creature destroyed mid-action, and `ProgressStatChangeHook` keeps updating the destroyed creature's stat every frame.

## Channel events

`HookEventChannel` is an enum of channels `ChannelA` to `ChannelT` (and `None`). Each creature prefab has an `Agent.ChannelEvents` array, one `ChannelEvent` per channel, each a `UnityEvent` plus an `IsNetworked` flag. `Agent.FireChannelEvent(channel, action)` invokes it. On the server, a networked channel is also sent to players in nearby chunks, and their copy runs it too. Only networked channels exist on clients. The sync message packs the channel as an integer from 0 to 15, so a networked channel Q to T probably doesn't reach clients as itself (from the code, untested). No shipped creature prefab has more than 16 channel events, so this only matters for your own prefabs.

Channel events are how actions reach the rest of the prefab: charging an attack hitbox, shooting a projectile, playing an effect. The wiring is in the prefab data. In the shipped turabada (asset values), A and B charge and reset the left arm, C and D the right arm, E triggers its explosion, F calls `HealthObject.Die()` (not networked), G and H run the heal sphere, and I resets both arms; its attacks fire these from `EventChannelTimedAiHook`s at set delays, for example the left jab charges at 0.75 s and resets at 1 s. [Combat, damage and death](combat-and-damage.md#what-arms-the-hitboxes-asset-values) has the other creatures. Patch `Agent.FireChannelEvent` and log the channel and `action.Action.Name` to find out. MobCombatDiagnostics in ATT-Optimizations does exactly that.

## Hooking it

`ActionComponent.HandleUsed` is the best single hook: public, non-generic, and called for every action any creature starts, with the running action. At that point the agent's `Target` is already the new target.

```csharp
using Alta.Intelligence;
using HarmonyLib;
using MelonLoader;

[HarmonyPatch(typeof(ActionComponent), nameof(ActionComponent.HandleUsed))]
static class LogWyrmActions
{
    static void Postfix(ActionComponent __instance, IActiveAction active)
    {
        if (active.GeneralTopic is Wyrm wyrm)
            MelonLogger.Msg($"{wyrm.Name} started {__instance.name}, target {wyrm.Target?.Name ?? "none"}");
    }
}
```

To change what one action does, patch its concrete `OnStart` or `Update`. These are protected, so name them with a string. This halves how fast turabadas wander:

```csharp
using Alta.Intelligence;
using HarmonyLib;

[HarmonyPatch(typeof(ActiveWander), "OnStart")]
static class SlowTurabadaWander
{
    static void Postfix(ActiveWander __instance)
    {
        if (__instance.Topic is Turabada)
            __instance.Topic.Walker.MaximumSpeed *= 0.5f;
    }
}
```

`ActiveWander.OnStart` sets the walker's speed from its settings first, so the postfix wins. `ActiveBlockCanceleableWander` inherits that `OnStart`, so it's covered too.

Gotchas:

- Don't patch `ActionDecider<TAgent>`, `BasicAction<...>` or `ActiveNavigation<...>` methods: they're generic (see the [overview](overview.md#where-to-hook)).
- The settings getters (`Speed`, `Duration`, `Reach`) are one-line properties the JIT may inline into their callers, so patches on them may never run. Change the result after `OnStart` instead, or set the private field on the `ActionComponent`.
- `BasicActiveAction` objects are pooled and reused. Don't keep references to them after `Finished` or `Cancelled`.

## See also

- [Targets and senses](targets-and-senses.md)
- [Movement and pathfinding](movement-and-pathfinding.md)
