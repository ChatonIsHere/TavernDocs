---
title: Targets and senses
description: What creatures can target, how they notice players, how hurting them makes them angry, and how to hide players.
sidebar_position: 5
---

# Targets and senses

All in `Alta.Intelligence` in `Root.Township`. Server only: targets register and senses exist only on the server.

A creature doesn't look around. It's handed a list of **possible targets**, and its actions' scoring rules read **senses** off each one to decide what to do with it. Whether a creature is "aggressive" to you is just whether one of its attack actions scores well against you.

## ITarget

Anything a creature can consider. `Target` implements it, so every creature is also a target for other creatures.

| Member | What it does |
| --- | --- |
| `string Name { get; }` | For logs. |
| `bool IsInitialized { get; }`, `bool IsAlive { get; }` | The decider skips targets that aren't both. |
| `Transform Transform`, `Vector3 Position`, `Vector3 GroundPosition` | Where it is. For a player, `Position` is the head and `GroundPosition` the feet. |
| `Interactable Interactable` | Set for targets that can be picked up, like food a spriggull eats. |
| `BasicSenseSet Senses` | The sense values it gives off. |
| `StatManager StatManager` | Its stats, if it has health. |
| `IEnumerable<AttackParameters> Attacks()` | Its weapons right now: damage and position of each charged impactor. |
| `float GetDistance(ITarget other, float yFlexibility = 0)`, `GetSquareDistance(...)` | Distance between ground positions. |
| `float GetVelocity()` | Always 0: nothing in the game overrides it. |

`ITargetPointer` (`ITarget Target { get; }`) is how other things point at a target. `Target`, `SeedSpray` and `Projectile` implement it, so a seed or projectile counts as its shooter when it hurts something.

`ITargetExtensions.Exists(this ITarget target)` is true if it isn't null or destroyed and `IsAlive`.

## PlayerCharacterTarget

`PlayerCharacterTarget : Target` is the player's target component.

| Member | What it does |
| --- | --- |
| `PlayerController Character { get; }` | The player it belongs to. |
| `override bool IsAlive` | Alive and not a spirit. A downed player is still alive. |
| `override IEnumerable<AttackParameters> Attacks()` | Every impactor on every tool the player holds. Creatures with attack-direction reactions read this. |

To get a player's target from code, do what `Agent` does with an attacker: `playerController.Entity.GetComponent<ITargetPointer>()?.Target`.

## Target collectors

`TargetCollector` is a component on a creature, pointing at its `Agent`, with a `RadiusSquared` (400 by default, so 20 m; each prefab can set its own: 3 m for schmeechees and ferns, 25 m for goteras, 75 m for the babu, see [Creature data](creature-data.md#senses-ranges-speeds)). `TargetCollectorManager` is a static list of every `Target` registered on the server: creatures, players and anything else with a `Target` component.

Each time a creature decides, `Agent<TThis>.ChangeAction` calls `TargetCollectorManager.ForceUpdateCollector` for each of its collectors. That walks the **whole** list, and for each target:

- within the radius and, for a player, not downed: `agent.AddTarget(target)`
- otherwise: `agent.RemoveTarget(target)`

So creatures only notice things when they decide, and each decision costs a pass over every target on the server. Dead and destroyed targets are dropped from the list as it's walked.

| Member | What it does | Notes |
| --- | --- | --- |
| `static void RegisterTarget(ITarget target)` | Adds a target. | `Target.Initialize` calls it on the server. |
| `static void DeregisterTarget(ITarget target)` | Removes a target. | Called from `Target.OnDestroy` on the server. |
| `static void ForceUpdateCollector(TargetCollector collector)` | Adds and removes the collector's agent's targets by distance. | |
| `private static bool CanAddTarget(float distance, float range, ITarget target)` | The radius and downed check. | Private. Reach it with `AccessTools`. Small, so it may be inlined. |

## Hurt

When a creature's health drops on the server, `Agent.HealthChanged` (private) looks at the hit. If it's an `ImpactHit` with a `Wielder`, it takes the wielder's `ITargetPointer` target and adds the damage, as a fraction of max health, to `agent.Hurt[attacker]`. A new attacker is added to the decider's possible targets straight away, whatever the distance (if the prefab's `isHurtAddingTarget` is on, which is the default).

Every physics tick, each `Hurt` value fades by `hurtReducePerSecond` (0.1 by default; in the shipped prefabs 0.02 for wyrms, 0.01 for turabadas and goteras, 0.001 for the babu). When it reaches 0, or the attacker is gone, it's removed, and so is the attacker as a possible target unless a collector also added it.

`RemoveTarget` refuses to drop a target that's still in `Hurt`. So a player who hurt a creature stays its target while the hurt lasts, even if they run out of range or are downed. Many attack rules prefer targets with more hurt (the "Hurt" sense), and chase actions don't give up on a target that's hurt them enough.

Most shipped attack and aggro actions also prefer targets with a high "Aggroing Stat" (a `StatOperation` from 0 to 10). On players that's the "aggro" stat, 1 by default, so anything that raises a player's aggro stat makes creatures pick them first.

## Senses

A sense is a `ScriptableObject` (`Sense : GeneralValue`) with one method, `float Get(IAgent requester, ITarget target)`. `Sense.InitializeAll` loads every one from the `Senses` resources folder; `AgentUpdater.Awake` calls it.

| Sense type | Reads |
| --- | --- |
| `BasicSense` | A fixed value the target gives off, from its `BasicSenseSet`. Up to 32 of these. |
| `DistanceSense`, `DistanceSquaredSense` | Distance from the creature, with some height leeway. |
| `ViewConeSense` | How far inside the creature's `ViewCone` the target is. Only for creatures with `IHasViewCone` (turabada, gotera, babu, dragonfly, phantom). |
| `Facing2DSense`, `Facing3DSense` | How much the creature faces the target. The shipped "Facing3D" asset is a `BasicSense` instead, so only "Facing2D" is measured. |
| `VelocitySense` | `target.GetVelocity()`, which is always 0. No shipped sense uses it: "Velocity" is a `BasicSense`. |
| `HurtSense` | `agent.Hurt` for that target. |

`SenseOld` is an older enum (`Noise`, `Movement`, `Danger`, `Life`, `Flesh`, `Bug`, `Bird`, `Plant`, `Hurt`, `Armed`, `Asleep`, `Food`, `Swine`, `Distance`, `DistanceSquared`, `ViewCone`, `Velocity`, `Facing2D`, `Facing3D`). Each sense asset can say which old value it stands for, and `Sense.GetSense(SenseOld)` finds it. The built-in scoring rules in code use these names. For example, a wyrm's bite requires the target to have `Danger`, be within reach and not be a `Bug`, and prefers `Life` and `Hurt`.

The `BasicSense` values each target gives off come from its prefab (`Target.initialSenses`). A player gives off Flesh 1, Life 1 and Danger 2 (asset values); a flycam player gives off 0 for all three, so creatures ignore it. Other creatures' values are in [Creature data](creature-data.md#senses-ranges-speeds). Actions change a creature's own senses: a sleeping spriggull sets `Asleep`, and a wyrm that digs in clears its senses and applies its "dug" ones.

:::note
The shipped "Velocity" sense is a `BasicSense`, a fixed value the target gives off, and no player or creature prefab sets it. So any rule that needs velocity, like the wyrm's dodge (which wants 1 to 5), never passes against players.
:::

### BasicSenseSet

| Member | What it does |
| --- | --- |
| `float[] Intensities { get; }` | The 32 values, indexed by `BasicSense.Index`. |
| `void Apply(SenseSetup[] setup, string errorName)` | Sets the listed senses. |
| `void Modify(SenseOld sense, float value)` | Sets a value by the old enum's number. This only lines up if the sense assets were indexed in enum order. |
| `void ZeroAll()` | Clears them. |

## Hiding players from creatures

`Agent.AddTarget` is the public way in for collector targets. Refuse it and creatures never consider that player:

```csharp
using System.Collections.Generic;
using Alta.Intelligence;
using HarmonyLib;

[HarmonyPatch(typeof(Agent), nameof(Agent.AddTarget))]
static class HiddenFromCreatures
{
    public static readonly HashSet<PlayerController> Hidden = new HashSet<PlayerController>();

    static bool Prefix(ITarget target, ref bool __result)
    {
        if (target is PlayerCharacterTarget player && Hidden.Contains(player.Character))
        {
            __result = false;
            return false;
        }
        return true;
    }
}
```

Two gaps to close if you need it watertight:

- Creatures that were already targeting the player keep them until they leave the collector's range. Call `agent.RemoveTarget(target)` on every agent when you hide someone.
- Hurt doesn't go through `AddTarget`: `HealthChanged` adds the attacker to the decider directly. A hidden player who hits a creature becomes its target. Either stop the hit, or remove them from the decider after it (`agent.GeneralActionDecider.RemoveTarget(target)`), knowing it stays in `Hurt`.

## See also

- [Actions and decisions](actions-and-decisions.md)
- [Combat, damage and death](combat-and-damage.md)
