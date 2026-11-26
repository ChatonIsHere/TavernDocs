---
title: Common creatures
description: "Spriggull, turabada, wyrm and gotera: their classes, members, action sets and quirks."
sidebar_position: 9
---

# Common creatures

All in `Alta.Intelligence` in `Root.Township`, all `Agent<TThis>` subclasses. Their AI is server only, like every agent ([Agent](agent.md)). Each is found with `FindObjectsOfType<Spriggull>()` and so on, on the server.

What a creature does in game is mostly in its prefab: which `ActionComponent`s its sets hold, and what its channel events are wired to. The classes below only add what the generic framework can't do. The behaviour sections are **asset values** from the shipped prefabs (build `main-1.7.2.1.42203`); health, damage and drops are in [Creature data](creature-data.md).

Distances in the scoring rules are written as the prefab names them: "Distance 10 -> 5" scores 0 at 10 m and 1 at 5 m or closer.

## Spriggull

`public class Spriggull : Agent<Spriggull>, IJumpAttacker, IInteractAgent`

| Member | What it does | Notes |
| --- | --- | --- |
| `Transform Body { get; }` | The body. `Position` is the body's position. | |
| `Interactor Interactor { get; }` | Its "hand", in its jaw, for picking up and eating items. | From `IInteractAgent`. |
| `void BeginFlail(float strength)` | Starts the flailing action and sets `Walker.Power` to `1 - strength`. | Server only. `SpriggullFlail` calls it after a hard enough hit on the right collider (impulse 0.5 to 1 in the shipped prefab). |
| `void IJumpAttacker.SetJumping(bool isJumping)` | Charges the beak's `FixedImpactor` while jumping, and resets it after. | Explicit. `ActiveJumpAt` calls it. |
| `static ActionSet<Spriggull> PassiveActions` | The action set every spriggull starts with. | Protected. |
| `float IdleStart { get; }` | Never set by the class. | |

It decides every 0.5 s, slower than other creatures (0.1 s). Its sets live in the "Spriggull AI" prefab:

| Set | Action | When | What |
| --- | --- | --- | --- |
| Passive | Idle, Wander | Low weights (Wander 0.2) | Stands 2 to 3 s, or wanders at speed 1.5 |
| Passive | Stare (`AgentThreatenSettings`) | A target with Danger and Life that isn't a plant or another spriggull, 10 to 5 m away, with a 20% preference roll; not while asleep | Stares 5 to 7 s. If the target comes within 5 m it switches to the Aggressive set; past 15 m it gives up |
| Passive | Nest (`AgentNestSettings`) | Once the normalized time of day passes 0.5 (full weight from 0.6) | Walks (speed 2) to the nearest free nest within 50 m and sleeps |
| Passive | Find Food, then Eat Food | Something with the Food sense within 10 m | Walks to it, then `ActiveEat` with `isImmediate` destroys it at once. Dropped spriggull drumsticks and apple cores count as food |
| Passive | Evade Hazard | Something with Forest Hazard and Danger within 20 m (death ferns) | Moves away from it |
| Aggressive | Chase (`AgentFollowSettings`) | Target 5 to 15 m away | Runs at speed 3.5 to 3.5 m from it; gives up past 20 m |
| Aggressive | Jump Attack (`AgentJumpAtSettings`) | Target about 3 m away (0 to 6 m), facing it, on the ground | Leaps at 8 m/s with gravity at 0.2 for 2 to 2.5 s, beak charged |
| Aggressive | Reposition | Target within 5 m | Moves to a point around it at speed 3 |
| Aggressive | Become Passive | Weight 0.1, when nothing else scores | Back to Passive |
| (direct) | Flail (`AgentRegainControlSettings`) | `BeginFlail` | 3 to 5 s of flailing, then the **Aggressive** set, so knocking a spriggull about makes it attack |

Most of these also prefer targets with a high aggro stat. When it dies it turns off its collision and sets the animator's `IsFlailing`.

:::note[First spriggull wins]
`InitializeStatic` runs once per class, for the first spriggull to spawn. It stores that spriggull's passive set and flail action in statics, and every later spriggull uses them. `Babu` and `FireBug` do the same. Only one prefab uses each of these classes, so it changes nothing in the shipped game, but a mod adding a spriggull variant with its own sets would find them ignored.
:::

`Alta.Creatures.Nest` is the other half of nesting: a component with a `NestType` (only `Spriggull` exists), an `IsFree` flag (the component's `enabled`), and `static Nest FindClosest(NestType type, Vector3 position, float maximumDistance)`.

## Turabada

`public class Turabada : Agent<Turabada>, IHasViewCone`

| Member | What it does | Notes |
| --- | --- | --- |
| `ViewCone ViewCone { get; }` | What it can see. `ViewConeSense` reads it. | |
| `ActionTarget<Turabada> Stunned { get; }` | Its stunned action. | |
| `void Stun(float strength)` | Cancels the current action and starts the stunned one. `strength` isn't used. | The prefab's `StatTrigger` calls it on the server when cripple health drops to 0.1. |
| `static Dictionary<ActionComponentSet, ActionSet<Turabada>> passiveActionSetMap` | The `ActionSet` built for each passive set. | Public static field. The `debug turabada-ai` command lists its keys. |
| `static Dictionary<ActionComponent, ActionTarget<Turabada>> stunnedActionMap` | The same for stunned actions. | Public static field. |

On death it turns off collision and sets the animator bool named by `killedAnimatorBoolean` ("Killed" by default) directly on the `Animator`, on each side. ATT-Optimizations' pathfinding diagnostics follow turabadas' `Navigator` requests on deep cave layers, which is where their path searches piled up.

The base turabada's sets ("Turabada Passive Set", "Turabada Aggro Set", "Turabada Stunned Recovery State"); each ore variant has its own copies with the same structure:

| Set | Action | When | What |
| --- | --- | --- | --- |
| Passive | Idle, Idle 2, Wander | Weights 0.01 to 0.06 | Stands 4 to 8 s or wanders at speed 1 |
| Passive | Threaten Aggro (`AgentThreatenSettings`) | A target with Danger, Flesh and Life **in its view cone**, 10 to 8 m away | Faces it 2 to 8 s; within 5 m it switches to the Aggro set, past 10 m it gives up |
| Passive | Instant Aggro | The same kind of target 8 to 5 m away, seen or not | Switches to the Aggro set at once |
| Aggro | Chase Target | Target 3 to 20 m away, not blocked by other creatures | Runs at speed 5 to 1.3 m from it; gives up past 30 m |
| Aggro | Left and Right Jab, Left and Right Hook | Target within 2.3 m | 2.1 s punches; the arm is charged for about 0.25 to 0.4 s of it |
| Aggro | Attack Combo 1 and 2 | Target within 2.3 m | 4.5 s and 5.5 s combos that charge both arms several times |
| Aggro | Circle Left, Circle Right | Target within 2.3 m | Sidesteps 60° around it |
| Aggro | Blocking Stance (`AgentAttackDirectionReactSettings`) | An armed target within 3 m | Reacts to where the weapon is, 1 to 3 s, and raises its damage protection stat |
| Aggro | Healing Sphere | Its **own** health below 2.5 (of 5), target within 8 m | 10 s in a sphere that heals it |
| Aggro | Attack Explosion Sphere | Its own health below 2.5 | 10 s in a sphere, then channel E sets off an `Explosive` at 9 s and channel F kills it at 9.3 s: a hurt turabada can blow itself up |
| Aggro | Become Passive | Weight 0.01 | Back to Passive |
| Stunned Recovery | (one action) | After `Stun` | 1 s, then the Passive set |

## Wyrm

`public class Wyrm : Agent<Wyrm>`

A wyrm lives underground. Its body and colliders are hidden until it emerges. It has no walker: it turns its body in place toward its target. Prefabs: Wyrm, Crystal Wyrm and their trial versions.

| Member | What it does | Notes |
| --- | --- | --- |
| `Transform Body { get; }` | The body it turns. `Position` is the head's position. | |
| `ActionSet<Wyrm> BurrowedPossibilitySet { get; set; }`, `EmergedPossibilitySet { get; set; }` | The set it uses underground, and the one above ground. | Shared by every wyrm with the same prefab sets. |
| `void UseBurrowedActions()`, `void UseEmergedActions()` | Switch between them. | |
| `void SetGameObjectsActive(bool isActive)` | Shows or hides the body and colliders. The server sends it to nearby clients, and to each player who connects later. | |
| `void RotateToTarget(float speedMultiplier = 1)` | Turns the body toward the target, flat. | Attack actions call it every tick. |
| `float FlurryChance { get; set; }` | Chance the next bite is a flurry. Grows with each bite, resets after a flurry. | |
| `float SameTargetMultiplier { get; }` | Serialized, 1.2 by default. | |
| `float IdleStart { get; }` | When it started idling. Digging back in gets likelier the longer it idles. | Set in `ChangeAction`. |
| `override IEnumerable<AttackParameters> Attacks()` | Its impactors' current attacks. | |
| `protected override bool ChangeAction()` | The usual decision, plus idle tracking. | Non-generic: a safe Harmony target. |

Its actions are in `Alta.Intelligence.Wyrms`. Each builds its own scoring rules in code, and the prefab adds a preference for targets with a high aggro stat. Values are from the "Wyrm AI" prefab (Burrowed Set and Emerged Set); the crystal wyrm's are the same where readable:

| Action (settings) | When it can happen | What it does |
| --- | --- | --- |
| Wait (`AgentIdleSettings`, burrowed) | Nothing better to do | Waits 3 to 7 s with `moveSpawnChance` 1: **every wait teleports the hidden wyrm to another free spawn point** of its population |
| `ActiveEmerge` (`WyrmEmergeSettings`) | A target with Danger above 0.5 and Life, not a Bug, within 15 m, on a 50% roll | Shows the body, switches to the emerged set, takes 5 s; after 4.5 s it gives off Danger, Life, Flesh and Bug 1 |
| `ActiveDig` (`WyrmDigSettings`) | No target. Likelier the longer it has idled (full after 50 s), with a 10% fail roll | Switches to the burrowed set, then after 3 s hides the body and colliders and clears its senses, so nothing can sense it |
| `ActiveMeleeAttack` (`WyrmMeleeSettings`) | A target with Danger, within reach, not a Bug. Prefers Life and Hurt | Plays a random attack trigger, or a flurry one |
| `ActiveSpit` (`WyrmSpitSettings`) | A target with Danger, best at `bestRange`, nothing at `maximumRange` or under half of `bestRange` | Plays a spit trigger and aims with the "Aim Angle" float. The animation fires a "Wyrm Spit" projectile at 15 m/s, within 5° |
| `ActiveSpin` (`WyrmSpinSettings`) | A target off to the side (up to 90°) within 20 m | Turns three times as fast toward it. Sets no duration, so it runs until cancelled |
| Idle (emerged) | Weight 0.1 | 5 to 7 s |
| `ActiveCatch` (`WyrmCatchSettings`) | A target with no Danger that has Flesh, within 2 m | Waits 2.5 s |
| `ActiveDodge` (`WyrmDodgeSettings`) | A dangerous target "moving" 1 to 5 within 2 m | Waits 2.5 s. Never happens against players: the Velocity sense is a fixed value, and players don't give it off |

The reach and ranges of the melee and spit settings couldn't be read from the asset dump; the code defaults are 2 m reach, and 2 m best and 20 m maximum spit range. The bites come from scythe hitboxes that the attack animations charge (see [Combat, damage and death](combat-and-damage.md#what-arms-the-hitboxes-asset-values)).

Since spriggulls give off Danger 0.5, wyrms don't emerge for them. Players (Danger 2) are the usual trigger.

### Removing an attack

The sets are shared `ActionSet` objects, so you can edit them once a wyrm has its AI. This stops wyrms spitting:

```csharp
using System.Linq;
using Alta.Intelligence;
using Alta.Intelligence.Wyrms;
using HarmonyLib;

[HarmonyPatch(typeof(Agent), nameof(Agent.InitializeAsServer))]
static class WyrmsDontSpit
{
    static void Postfix(Agent __instance)
    {
        if (!(__instance is Wyrm wyrm) || wyrm.EmergedPossibilitySet == null) return;
        foreach (var action in wyrm.EmergedPossibilitySet.TargetActions.ToList())
        {
            if (action.GeneralSettings is WyrmSpitSettings)
                wyrm.EmergedPossibilitySet.RemoveAction(action);
        }
    }
}
```

`ToList()` matters: `TargetActions` is a live `HashSet`, and removing while iterating it throws. Because the set is shared, the first wyrm's postfix removes it for all wyrms using that set; later ones find nothing to remove. Wyrm, Crystal Wyrm and the trial wyrms each have their own sets, so each kind is handled on its first spawn.

## Gotera and GreaterGotera

`public class Gotera : Agent<Gotera>, IHasViewCone` and `public class GreaterGotera : Agent<GreaterGotera>`

Both are thin: a body, a passive set, an optional stunned action, and a death bool, like the turabada. `Gotera` has a `ViewCone`; `GreaterGotera` doesn't.

| Member | What it does |
| --- | --- |
| `ActionTarget<Gotera> Stunned { get; }` | Its stunned action, if the prefab has one. |
| `void Stun(float strength)` | Starts it. The gotera variants' `StatTrigger`s call it when cripple health drops to 0.1; the plain Gotera has none. |
| `ViewCone ViewCone { get; }` | `Gotera` only. |

Ranged attacks live outside the creature classes. `SeedSprayManager` (on the gotera's spine) spawns a `SeedSpray` as a child entity on the server, and `SeedSprayManager.Shoot()` fires it while the creature's health is above 0. `ProjectileShooter.Shoot()` fires aimed darts. In the shipped prefabs, `AnimationTrigger` and `NetworkedEvent` components call both; the vine whip is a `TriggerImpactTool` on an `EruptAreaAttack` that erupts under the target (12 m radius).

A gotera has four sets ("Gotera Passive Set", "Standing", "Planted" and "Prowl"), and moves between them with swap actions:

| Set | Actions |
| --- | --- |
| Passive | Wander (speed 1.1); Stare at a target in its view cone 20 to 15 m away (within 8 m it switches to Standing); Instant Aggro on anything that has hurt it |
| Standing | Chase a target more than 15 m away, at speed 10, to 7 to 13 m from it (gives up past 30 m); plant itself when the target is 6 to 20 m away; prowl when it's 6 to 12 m away; become passive |
| Planted | Shoot (within 25 m), Artillery and Flurry (within 16 m); back to Prowl under 10 m or Standing at 16 to 25 m; become passive |
| Prowl | Wander and shoot (speed 1.5, within 20 m); Stomp when the target is 4 to 9 m away; plant again at 3 to 16 m; become passive |
| Stunned Recovery | 1 s, then Standing |

The Greater Gotera (150 health) is a boss with "Passive", "Aggro Phase 1" and "Aggro Phase 2" sets: close and sweeping arm attacks, a near charge, bramble walls ("Make Walls!") and dart volleys, then a second phase that chases.

## See also

- [Creature data](creature-data.md)
- [Other creatures](other-creatures.md)
- [Actions and decisions](actions-and-decisions.md)
- [Combat, damage and death](combat-and-damage.md)
