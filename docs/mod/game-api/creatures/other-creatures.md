---
title: Other creatures
description: Phantoms, firebugs, schmeechees and the smaller agents, briefly.
sidebar_position: 10
---

# Other creatures

All in `Alta.Intelligence` in `Root.Township`, all `Agent<TThis>` subclasses, AI on the server only. See [Common creatures](common-creatures.md) for the main ones.

## Phantom

`public class Phantom : Agent<Phantom>, IHasViewCone, IListenToMiningEcho`

A night creature that can be solid or immaterial. Prefabs: Phantom (2 health) and Phantom Head (0.5 health, takes double spiritual damage). Its passive set wanders and switches to aggro on sight ("Vision Aggro") or at once; aggro chases and circles in for its "Vision Attack", which channel C switches on (asset values). It notices targets within 10 m. Killing one drops a Phantom Guard 1% of the time.

| Member | What it does | Side |
| --- | --- | --- |
| `bool IsMaterialized { get; }` | Solid or not. Prefabs can start it immaterial. | Both (synced) |
| `void SetMarialized(bool isMaterialized)` | (Spelled like that.) Switches collider layer, and on the server starts the materialize or dematerialize action and sets its visibility stat to 1 or 0, then syncs it. | Both; actions on the server |
| `Stat SpeedStat { get; }` | Its "speed" stat. After a knockback it recovers, and drives `Walker.Power`. | Server |
| `void KnockBack(ImpactHitWithTool hitWithTool)` | Every tool hit calls it. Pushes it away from the attacker, further for harder hits, and stops it while it recovers its speed. Solid, it also starts its "hit" action. Immaterial, the push is halved and the attacker goes into its `Hurt` (0.5 by default), so it targets them. If it's cracked, the hit just ends the crack and zeroes its materialized stat. | Server only |
| `void Crack()` | If immaterial, "cracks" it for `crackedDuration` (30 s), with effects on clients. `MiningEcho` (a mining skill) calls it through `IListenToMiningEcho.Update` when an echo goes off close enough. | Server |
| `void ActiveVisionAttackEffect()`, `void DeactiveVisionAttackEffect()` | A pooled visual effect. Nothing on a headless server. | Client |

When day comes (`GameTimeManager.NightChanged`), or straight away if it spawns in daytime, it calls its own `Killed(null)`, turns off collision, plays a fade effect and tells clients. With `isFadingOnActionFail` (on by default) it does the same when it finds nothing to do (`NoActionFound`). Its health doesn't change, so no kill is credited.

### PlayerLikeSpectralGhost

`public class PlayerLikeSpectralGhost : Phantom`

A phantom dressed as a player (prefab "Spectral Ghost", 2 health; it uses the phantom's passive set and destroys itself on death). On the server it picks random cosmetics for each category (from purchasables marked free for developers) and sends them to each client as it connects (asynchronously, in `SyncBody`).

## FireBug

`public class FireBug : Agent<FireBug>, IReceiveImpulseFromCollision`

A catchable bug that lights up when shaken.

- It works with a `PickupAgent` (below). Caught, it starts tracking shake on clients and lights up with the shake's strength (update module "Firebug shake"). Released, the server switches it to its "regain control" set.
- `EnableDragTracking(bool)`, `DecreaseDrag()`, `IncreaseDrag()` change how its body drags. The first is synced to clients.
- Its pickup's save mode is set to `SaveMode.Ignore`, so firebugs aren't saved.
- When it dies, the server calls `Fire.SimulateSparks` at its position, so a dying firebug can light nearby fuel, and sets the animator's `IsAlive` to false.
- Like the spriggull, it stores its three action sets in statics from the first firebug to spawn.
- Its "Firebug AI" prefab holds the sets: a passive set that idles, cleans, crawls, checks for ground and burrows; emerge; regain control (roll up); a "Picked" action that does nothing while held; and a delete action that despawns it. It has 0.5 health.

## Schmeechee

`public class Schmeechee : Agent<Schmeechee>`

A mushroom critter that runs about, plants itself in the ground and can be picked up. It's a rigidbody that steers itself with forces, not a walker. Prefabs: Schmeechee Red, Orange, Glowing and Poisonous, each with its own `MushroomCritter` settings, 2 health (0.5 for the orange, 0.3 for the poisonous), and the senses Flesh, Life and Food, so they pass the Food rule of the spriggull's and babu's Find Food actions. It notices things within 3 m.

| Member | What it does |
| --- | --- |
| `MushroomCritter Settings { get; }` | Its tuning (speeds, forces, timings). |
| `Pickup Pickup { get; }` | Its pickup. Picked up, it drops its action set and cancels its action; put down, it gets it back. |
| `bool IsGrounded`, `bool IsUpsideDown` | Raycast checks, updated in its `FixedUpdate` on the server. When not acting it pushes itself upright. |
| `AnimatedBool GroundedBool`, `SleepingBool`, `AnimatedTrigger PopTrigger`, `AnimatedFloat RunSpeed` | Synced animator values. |
| `void Steer(Vector3 target, float multiplier)`, `void RandomSteer(float strength = 1)`, `void Turn()`, `void StayUpright()` | Movement by forces. |
| `void SendEmbedToClient()` | Tells clients to play the sink-into-ground animation (`ClientEmbed`). |
| `Schmeechee.Operation` | A scoring rule for "grounded" or "upside down". |

Its actions: `ActiveSchmeecheePlay` (run around until tired or stuck), `ActiveSchmeecheeFlee` (run away from the target), `ActiveSchmeecheePlant` (sink in and sleep, then pop out), `ActiveSchmeecheeFlip` (flip itself over when upside down).

## Babu, Dragonfly, DeathFern

Thin classes with a body and a passive set:

| Class | Extras |
| --- | --- |
| `Babu : Agent<Babu>, IHasViewCone, IInteractAgent` | `ViewCone`, `Interactor`, `static IAction<Babu> Stunned`, `Stun(float)`. Stores its passive set in a static from the first one spawned, like the spriggull. |
| `Dragonfly : Agent<Dragonfly>, IHasViewCone` | `ViewCone`, `Stunned`, `Stun(float)`. |
| `DeathFern : Agent<DeathFern>` | Nothing extra. Turns off collision on death. |

What the shipped prefabs do with them (asset values):

- **Babu** (one prefab, 45 health): its passive set ("Babu Passive AI") idles, wanders, digs (channel C spawns a Schmeechee Glowing from the ground), finds and eats food, sleeps in a nest, evades hazards, and turns aggressive at once or after being hurt ("Threaten If Hurt"). Aggro ("Babu Aggro AI") chases and keeps its distance; its tusks and head are charged by channels A and B. Its hurt fades at 0.001 a second, so it stays angry with you for a long time, and its collector reaches 75 m.
- **Dragonfly** drives the Dragonfly (0.1 health, drops a Dragonfly Corpse) and the Dais herd animals (Dais Base and six variants: 5 health, 15 for the antlered ones, 2 for the children). Their sets only idle, wander and flee; Dais animals are stunned by a `StatTrigger` at 5% cripple health.
- **DeathFern** drives the Death Fern, Mother Fern and Vine Attack Fern (each releases a poison cloud on death; the vine attack fern whips with vines and the mother fern fires a seed spray from a channel event), and also hazards and spawners with no creature body: Targeted Geyser, Gotera Ash Bomb and Turabada Spawner Reactive. Their sets just alternate "Idle" and "Act".

## PickupAgent

`public class PickupAgent : MonoBehaviour`, for creatures you can hold.

It watches its `Pickup`. When the pickup is first held or docked, the server either starts `pickedUpActionComponent` (if set) or switches the agent off (`IsEnabled = false`), and `Caught` is raised. When it's let go, `Released` is raised with the interactor, and the server switches the agent off and on again, which makes it decide afresh.

Since it uses `Agent.IsEnabled`, a mod that freezes creatures with `IsEnabled` will have them unfrozen when a player catches and drops one.

## See also

- [Common creatures](common-creatures.md)
- [Agent](agent.md)
