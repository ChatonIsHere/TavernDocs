---
title: Combat, damage and death
description: How creatures hit players, how players hit creatures, how damage is worked out, and what happens when a creature dies.
sidebar_position: 7
---

# Combat, damage and death

Creature combat uses the same impact system as player weapons (`Alta.Impact`, see [Impacts and hit detection](../items/impacts.md)), plus `HealthObject` for health ([Health and damage](../items/health-and-damage.md)). This page covers the parts that matter for creatures. Most of it is server side, with one big exception: **some creature melee hits on a player are detected only by that player's client.**

Everything here was checked against the server build (`src-tavern`): the AI, impact, health and population code there is the same as in the client download, so the server has no extra checks on creature hits. Values marked as asset values come from the shipped prefabs (build `main-1.7.2.1.42203`); [Creature data](creature-data.md) has the full tables.

## How creatures attack

An attack is an action like any other ([Actions and decisions](actions-and-decisions.md)): it picks a target, plays an animation, and fires channel events. The thing that actually hurts is an **impactor** on the creature's body: an `ImpactGenerator`, usually a `FixedImpactor`, which only counts while it's charged.

| Type | What it does | Side |
| --- | --- | --- |
| `FixedImpactor` (`Alta.Impact`) | A hitbox. `Charge()` arms it and `Reset()` disarms it. While not charged, contacts don't count. If it has a damage stat on its `StatManager`, it copies that stat's base into its `Multipliers` when it resolves a contact. When the server charges it, it also syncs `IsCharged` to clients; a local call only changes the local copy. | Wherever it's called |
| `TriggerImpactTool` (`Alta.Impact`) | An `ImpactTool` that hits through a trigger collider, switched on and off with `IsActive`. Its `OnTriggerEnter` has no side check, so it runs on every machine where the trigger is on. | All sides |
| `FixedImpactorGroup` | `Charge()` and `Reset()` for several at once. | No code or shipped prefab in this section calls it |
| `IJumpAttacker` | `SetJumping(bool)`. `ActiveJumpAt` calls it at the start and end of a jump. `Spriggull` charges its beak with it. | Server |
| `ProjectileShooter` (`Alta.Intelligence`) | `Shoot()`: at the end of the frame, aims at the agent's target (by its `AimMode`), adds inaccuracy, spawns its projectile prefab with `SpawnHelper.Spawn` and fires it. `InaccuracyMultiplier` and `VelocityMultiplier` are settable. | Server only (`Shoot` does nothing on a client) |
| `SeedSpray`, `SeedSprayManager` | A burst of seeds. The server picks a random seed number and sends it, and every machine simulates the same spray from it. The server cuts seeds off over time. If its owner died mid-shot, the spray is destroyed when the shot ends. | Started by the server |
| `Projectile` | A spawned projectile. Its collisions are handled by the server (`OnCollision` returns early on clients). | Server |

`ITarget.Attacks()` lists an attacker's charged impactors (damage and position). `Wyrm` returns its impactors; players return their held tools'. Creatures with attack-direction reactions read their target's list to react to swings.

### What arms the hitboxes (asset values)

No code calls `Charge`, `Reset`, `Shoot` or `Stun` for these creatures. The prefabs do:

| Creature | Hitbox | Armed by |
| --- | --- | --- |
| Spriggull | Beak (`FixedImpactor` on an `ImpactTool`, collision) | `IJumpAttacker.SetJumping` during `ActiveJumpAt` |
| Turabada | Arms (`FixedImpactor` plus `TriggerImpactTool`) | Channel events A and B (left arm charge and reset) and C and D (right arm), fired at set times by each attack's `EventChannelTimedAiHook`. The arm's `onChargedUpdate` turns the trigger on. |
| Babu | Tusks and head | Channel events A (charge) and B (reset) |
| Greater Gotera | Six arm hitboxes (`TriggerImpactTool`) | Channel events A to D; E and F start and stop its dart shooters; H and I spawn bramble walls and a charge explosion |
| Wyrm, Crystal Wyrm | Scythes (`FixedImpactor` on `ImpactTool`s, collision) | `AnimationTrigger` objects that the attack animations switch on and off (`switch_l_attack`, `switch_r_attack`). The spit is fired by `ProjectileShooter.Shoot` when the spit-charge animation object switches off. |
| Gotera | Vine whip (`TriggerImpactTool` on an `EruptAreaAttack` that erupts near the target, 12 m radius), seed spray, darts | `AnimationTrigger` and `NetworkedEvent` components call `SeedSprayManager.Shoot` and `ProjectileShooter.Shoot` |

Stuns come from `StatTrigger` components: when a turabada's cripple health drops to 0.1 or less, its `StatTrigger` calls `Turabada.Stun` on the server. Babus (0.05), Greater Gotera and the gotera variants (0.1, but 10% of cripple health for the redwood; the plain Gotera has no stun trigger) and the Dais animals (5% of their cripple health) work the same way.

Animation-driven hitboxes are charged by whichever machine plays the animation, which includes every client that can see the creature, because `NetworkAnimator` syncs the animator.

## A creature's melee hit on a player

How it reaches the server depends on the hitbox.

**Collision hitboxes** (spriggull beak, wyrm scythes):

1. The charged impactor touches the player's body. On the **server**, `ImpactDetector.OnCollisionEnter` ignores it: the detector is part of a player controller and the tool isn't held by a player, which `IsForcedClientSideImpact` treats as the victim's job. (The exception is the host's own local player on a listen server.)
2. On the **victim's client** the contact is resolved like any hit, and `ImpactDetector.OnToolHit` sends `SyncImpact` to the server with the tool's entity id, the impactor and channel indexes, the effectiveness (0 to 1), the point and the normal.
3. The server's `ImpactDetector.SyncImpact` drops it if the detector belongs to a different player than the sender. The "last holder" check (`ShouldRefuseSyncedHit`) only applies to tools with a pickup, so a creature's tool passes. Then `ImpactTool.GenerateImpactOnDetector(...).Hit()` runs the hit, which reaches the player's `HealthObject`.

So a client that never reports takes no damage from these. Rover's lite bots, which don't run the game's physics, never do.

**Trigger hitboxes** (turabada and babu attacks, Greater Gotera, gotera and fern vine whips): `TriggerImpactTool.OnTriggerEnter` isn't gated by side, and the channel events that switch it on run on the server too. So the server probably detects these hits itself and applies them through `OnToolHit` straight away. The victim's client sees the same hit and reports it as above; the server's per-tool cooldown in `OnToolHit` (`PickupTypeSettings.HitCooldown`, 0.25 s in the shipped settings) is all that keeps the report from counting again, so a report that arrives later than that may land as a second hit. This is from reading the code; it depends on the server's copy of the player's colliders being where the client's are, and hasn't been tested.

Area damage, poison, falls and projectiles are the server's own and do land.

## A player's hit on a creature

The other way round, the attacker's client works it out and sends `SyncImpact` to the creature's detector. The server checks the sender was the last to hold the tool and the cooldown per tool and detector (`PickupTypeSettings.HitCooldown`), and takes the effectiveness as sent. Rover's `docs/fighting.md` goes through it step by step.

## How much damage

The numbers multiply up the same way as for any weapon hit: the impactor's health modifier (times its `Multipliers`, which is where a `FixedImpactor`'s damage stat goes), times effectiveness, times the server's `DamageX`, times the tool's damage, then the victim's multiplier for that `ImpactType` and armour, divided by its damage protection stat. [Health and damage](../items/health-and-damage.md#how-damage-is-worked-out) has the full chain, and [ImpactHit](../items/impacts.md#impacthit-and-impacthitwithtool) the members.

What matters for creatures:

- `HealthObject.ReceiveDamage(float healthDamage, float crippleDamage, DamageData impact = null)` does nothing on a client. On the server, if the creature is a combatant and a player's held tool landed the hit, it puts that player in combat.
- For hits on players, `PlayerHealth.ReceiveDamage` runs first: `HandleDamage`, the invincibility checks, PvP multipliers (player hits only) and the server's `PlayerDamageTakenMultiplier`. See [PlayerHealth](../items/health-and-damage.md#playerhealth).

Both `ReceiveDamage` methods are public and virtual, and good Harmony targets for changing damage.

## Changing damage

Halve what creatures do to players, and what players do to creatures. Both patches run on the server only, because `ReceiveDamage` returns straight away on clients.

```csharp
using Alta.Impact;
using Alta.Intelligence;
using Alta.Networking;
using HarmonyLib;

static class CreatureLookup
{
    public static Agent FindAgent(NetworkEntity entity) =>
        entity == null ? null : entity.PrefabRoot.GetComponentInChildren<Agent>(true);
}

[HarmonyPatch(typeof(PlayerHealth), nameof(PlayerHealth.ReceiveDamage))]
static class SofterCreatures
{
    public static float Multiplier = 0.5f;

    static void Prefix(ref float healthDamage, DamageData impact)
    {
        if (impact is ImpactHit hit && CreatureLookup.FindAgent(hit.Wielder) != null)
            healthDamage *= Multiplier;
    }
}

[HarmonyPatch(typeof(HealthObject), nameof(HealthObject.ReceiveDamage))]
static class TougherCreatures
{
    public static float Multiplier = 0.5f;

    static void Prefix(HealthObject __instance, ref float healthDamage)
    {
        if (__instance is PlayerHealth) return;
        var agent = CreatureLookup.FindAgent(__instance.Entity);
        if (agent != null && agent.HealthObject == __instance)
            healthDamage *= Multiplier;
    }
}
```

Notes:

- A creature's tool has no pickup (true of every attack tool in the shipped creature prefabs), so `ImpactTool.Wielder` (and so `ImpactHit.Wielder`) is the tool's own prefab root, the creature. A player's weapon gives the player's entity instead, which has no `Agent`.
- `PlayerHealth.ReceiveDamage` calls the base, so `TougherCreatures` also runs for players. That's why it returns early for them.
- Seed spray hits can also arrive as a plain `ImpactHit` (`SeedSpray.SyncBasicImpact`), not an `ImpactHitWithTool`, which is why the example tests for `ImpactHit`.
- `GetComponentInChildren` on every hit is fine for a few hits a second. If you patch something busier, cache the creature roots from a postfix on `Agent.InitializeAsServer`.

## Stuns and knockback

| Member | What it does |
| --- | --- |
| `Turabada.Stun(float strength)`, `Babu.Stun`, `Gotera.Stun`, `GreaterGotera.Stun`, `Dragonfly.Stun` | Start the creature's stunned action. Called by the prefab's `StatTrigger` when cripple health gets low (see above), on the server. Patch `StatTrigger.OnStatChanged` (private) or the `Stun` methods to change stuns. |
| `Spriggull.BeginFlail(float strength)` | Starts the flailing action and drops the walker's `Power` to `1 - strength`. `SpriggullFlail` calls it when something hits its collider hard enough. |
| `Phantom.KnockBack(ImpactHitWithTool hitWithTool)` | Pushes a phantom back from the attacker, or ends its "cracked" state. Server only. |

## Death

On the server, when a creature's health stat reaches 0:

1. `HealthObject.OnKilled` raises `Killed` with the last hit, raises the console event `ObjectKilled` (`ConsoleEvents.ObjectKilled`, which console subscribers receive), counts a kill for the player whose tool landed it (`GameTaskManager.ActionExecuted`, for tasks), and sends the death to nearby clients, where `OnKilled` runs too.
2. Then the health object's `Destroyed` event runs, on both sides. `Target` is subscribed to it, so `Agent.Killed` runs: not alive, deregistered from `AgentUpdater`, current action cancelled, collision off, death animation on.
3. Prefab wiring takes it from there. `Alta.Creatures.DeathEffect.PlayAnimation()` swaps the creature's materials for an ash material and fades it over `DeathAnimationSettings.DefaultDuration`, then the server destroys the entity. The prefabs call it from the `Destroyed` event (asset value: the shared "Death Settings" take 3 s). On a headless server it just waits out the duration. Not every creature uses it: the dragonfly and the spectral ghost destroy themselves straight away, and phantoms fade out with `SpectralMaterialTransition.FadeOut`.
4. When the entity is destroyed (not unloaded), its population counts one less. See [Spawning and despawning](spawning-and-despawning.md).

To kill a creature from code, call `agent.HealthObject.Die()` on the server. It sets the health stat's base to 0, and the rest follows.

`Phantom` also "dies" without losing health: it calls its own `Killed(null)` when day comes, and fades out.

## Loot

There's no creature loot table in the code. Drops are wired in each prefab: its `HealthObject.Destroyed` event calls `Spawner.Spawn()` or `MultiSpawner.Spawn()` on spawner components, which roll `Distribution` assets or spawn fixed prefabs, server only. [Creature data](creature-data.md#drops) lists what each creature drops. To change drops, patch `MultiSpawner.Spawn()` and `Spawner.Spawn()` (check that the spawner is on a creature), or edit the `Distribution` assets. To add your own drops, postfix `Agent.Killed`, check `NetworkSceneManager.IsServer`, and spawn items at `agent.Position` (see [Spawning](../world/spawning.md)). `SpawnOnDestroyed` is only a visual effect: it spawns a pooled object when the GameObject is destroyed, and never on a headless server.

## See also

- [Targets and senses](targets-and-senses.md#hurt) for how being hurt makes a creature target you
- [Common creatures](common-creatures.md)
