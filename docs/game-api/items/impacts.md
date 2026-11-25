---
title: Impacts and hit detection
description: How a swing becomes a hit (ImpactTool, ImpactDetector, ImpactHit), which machine works it out, what the server checks, and where to hook.
sidebar_position: 11
---

# Impacts and hit detection

The impact system is in `Alta.Impact` in `Root.Township`. It covers weapons hitting creatures, pickaxes on rock, axes on trees, hammers on metal and blocks with shields. All of it runs on Unity's main thread.

## The parts

| Type | Where it is | What it does |
| --- | --- | --- |
| `ImpactTool` | On the rigidbody of a weapon or tool (and on creature attacks). | Turns a collision into a hit. Holds the base `Damage`. |
| `ImpactGenerator` (abstract), `Impactor`, `FixedImpactor` | Children of the tool: a blade edge, a hammer face, a point. | Each has a type (`Pierce`, `Slash`, `Blunt`, `Caustic`, `Poison`, `Explosive`, `Spiritual`), channels, a hardness and damage modifiers. Works out how good the swing was. |
| `ImpactDetector` | On anything that can be hit: creature body parts, rocks, trees, players. | Receives hits, applies the cooldown, sends hits to the server, raises `Hit`. |
| `ImpactChannel` | A `ScriptableObject`. | A hit only counts if the impactor and the detector share a channel (so a pickaxe mines and a sword doesn't). |
| `ImpactHit`, `ImpactHitWithTool` | Plain classes, subclasses of `DamageData`. | One hit: damage, effectiveness, point, who did it. |
| `DelayedImpactResolver` | Static. | Collects a frame's contacts per tool and resolves the best one in `LateUpdate`. |
| `ImpactDetectorCentral` | On entities with several detectors. | Sends their hits in one message, with a detector index. |
| `HealthObject` | Next to the detectors. | Turns hits into damage. See [Health and damage](health-and-damage.md). |

## What counts as a hit

When a tool's collider touches a detector (`ImpactDetector.OnCollisionEnter`):

1. The tool must have a wielder, and unless it ignores the velocity check, it must be moving at more than about 0.32 m/s (squared speed 0.1).
2. The side check (next section) decides whether this machine works it out.
3. The contact is queued in `DelayedImpactResolver` (or handled at once if the tool says `NeedsToBeProcessedInstantly`). Once a frame, for each tool, every contact is scored with `ImpactTool.GenerateHit` and the most effective one wins.
4. `GenerateHit` refuses hits in the 0.1 s after the tool was grabbed, contacts on colliders that aren't one of its impactors, and impactors with no channel in common with the detector. If the detector is harder than the impactor, the damage is multiplied by 0 and you get the "ineffective" effect instead.
5. **Effectiveness** (0 to 1) comes from how far the impactor moved over its recent positions (the tool keeps the last 20, `PickupTypeSettings.ImpactorArraySize`) and how well the movement lines up with the edge, times a one-hand or two-hand multiplier on the tool and any immunity group multipliers. The player's own walking doesn't count: the tool's position recorder takes the body's movement out.
6. The hit goes to `ImpactDetector.OnToolHit`, which ignores the same tool on the same detector again within `PickupTypeSettings.HitCooldown` (0.25 s in the shipped asset).
7. The detector raises `Hit`, and its `HealthObject` takes damage (on the server).

After a tool is let go, it can't hit the player who last held it for `timeToSelfHit` (1.5 s by default), so you don't hurt yourself throwing.

## Who works it out

This is the part that matters for server mods.

| Hit | Worked out by | Then |
| --- | --- | --- |
| A player's held tool on a creature, tree, rock or anything that isn't a player | The wielder's client | It sends `SyncImpact` to the server. The server skips the collision itself. |
| A tool not held by a player (a creature's attack) on a player | The victim's client | It sends `SyncImpact`. |
| A player's held tool on another player | Server | No message from clients. |
| Anything else (an unheld tool hitting a creature, for example) | Server | |

Clients don't stop there: every client runs the hits it sees through the same code, for sounds and effects, but only the cases above send anything, and only the server applies damage.

`SyncImpact` (entity message type `SyncImpact`) carries the tool's entity id, the impactor index (0 to 63), the channel index (0 to 7), the effectiveness, the normal, and the point relative to the detector (within 10 m, in 1 cm steps).

When the server gets one, `ImpactDetector.SyncImpact` checks only that:

- a hit on a player was sent by that player,
- the tool's pickup was last held by the sender (tools with no pickup aren't checked).

It doesn't check distance, line of sight, speed, hardness or channel, and it takes the effectiveness as sent. Then `ImpactTool.GenerateImpactOnDetector` rebuilds the hit and it goes through `OnToolHit` (so the cooldown applies) to the health object.

:::note
From the code, a hit rebuilt from `SyncImpact` uses the tool's `Damage` and the sent effectiveness, but not the wielder's damage stat, which `GenerateHit` applies on the client. The client's own numbers (in its damage popup) can be higher than what the server deals.
:::

## ImpactTool

`Alta.Impact.ImpactTool`, a `MonoBehaviour`. Get it with `GetComponent<ImpactTool>()` on the item, or `entity.CommonImpactTool`.

| Member | What it does | Notes |
| --- | --- | --- |
| `float Damage { get; }` | Base damage. | |
| `float MaxDamage { get; }` | `Damage` times the best impactor's health modifier. | |
| `Pickup Pickup { get; }` / `bool HasPickup { get; }` | The item it belongs to. | |
| `NetworkEntity Wielder { get; }` | The last holder's entity, or the tool's own root if it has no pickup (a creature). | |
| `PlayerController PlayerWielder { get; }` | The last player holder. | |
| `Player PlayerOwner { get; set; }` | A player credited for hits when nobody holds it (projectiles). | |
| `virtual Vector3 Velocity { get; }` | The rigidbody's velocity. | |
| `HashSet<ImpactChannel> Channels { get; }` | Channels of all its impactors. | |
| `float OneOffMultiplier { get; set; }` | A damage multiplier for the next hit only. Reset after a hit. | |
| `bool GenerateHit(out ImpactHitWithTool, ImpactDetector, ContactPointStructure, Vector3 relativeVelocity, ImpactChannel[], bool isDamaging = true, bool isOverridingEffects = true, BlockLevel = BlockEverything)` | Scores a contact. | Also wears the tool down. |
| `ImpactHitWithTool GenerateImpactOnDetector(ImpactDetector, int impactorIndex, float effectiveness, int channelIndex, Vector3 point, Vector3 normal)` | Rebuilds a reported hit. | Server, from `SyncImpact`. |
| `float GetImpactDamageOn(ImpactDetector, int impactorIndex, float effectiveness, int channelIndex)` | What a hit would deal. | |
| `bool GetCurrentPlayerWielder(out PlayerController)` | The player holding it now. | |
| `bool IsWieldedByLocalPlayer()` | | |
| `event OnGeneratedHit OnHit` | A hit was made with this tool. | `delegate void OnGeneratedHit(ImpactHitWithTool, ImpactTool)` |
| `static event OnGeneratedHit OnHitAny` | A hit was made with any tool. | |
| `event OnGeneratedHit OnBlocked` | This tool, on a held item, blocked another tool's swing. | Raised on the blocker's `ImpactTool` with the striker's hit; the tool argument is the blocker. |
| `event OnCollidedHit OnCollided` | Any collision, hit or not. | `delegate void OnCollidedHit(Collision, bool isHitting, ImpactTool)` |
| `event CollisionFilter CollisionFilter` | Lets this tool swallow a block collision. | |
| `event Action<ImpactHitWithTool> OnHittingImpactDetector` | The hit reached a detector. | |

Blocking: when a held tool hits another item (not a detector), the struck item's `Pickup.BlockLevel` decides. Shields and weapons that block take durability damage equal to the hit's damage, and if the blocking item has an `ImpactTool`, that tool's `OnBlocked` fires (not the striker's).

## ImpactDetector

`Alta.Impact.ImpactDetector`, a `MonoBehaviour` and `INetworkEntityBehaviour`.

| Member | What it does | Notes |
| --- | --- | --- |
| `HealthObject HealthTarget { get; set; }` / `bool HasHealth { get; }` | The health it feeds. Set by the `HealthObject` in `Awake`. | |
| `ImpactChannel[] Channels { get; }` | What can hit it. | |
| `uint HardnessLevel { get; set; }` | Tools softer than this do nothing. | Set from the material. |
| `ArmorDefinition CurrentArmor { get; }` | Armour worn on this body part, if any. | |
| `ImpactDetectorSettings Settings { get; set; }` | Effects, XP and durability rules. | |
| `event ImpactHandler Hit` | A hit landed. `delegate void ImpactHandler(ImpactHit)` | Fires on every machine that resolved it, server included. Check the side before acting. |
| `event ImpactHandler ParticleHit` | A particle impactor (fire breath, sprays) hit it. | |
| `void OnToolHit(ImpactHitWithTool)` | Applies the cooldown, sends to the server if this machine worked it out, raises `Hit`. | |
| `void OnImpactHit(ImpactHit)` | Raises `Hit` directly. | |
| `void SyncImpact(IPlayer, Stream, ImpactSyncArguments)` | The network handler. | Public, but the arguments are read inside, so a prefix sees them unread. |

## ImpactHit and ImpactHitWithTool

`ImpactHit : DamageData`, with `Source` always `DamageSource.Impact`.

| Member | What it does |
| --- | --- |
| `float HealthDamage { get; }` | `BaseHealthDamage × Effectiveness × DamageMultiplier × Multipliers × HealthMultiplier`, or 0 if not valid. Worked out each time you read it. `BaseHealthDamage` is the impactor's `HealthDamageModifier`: its `ImpactorValues` number times the impactor's own `Multipliers` (the material's damage multiplier). |
| `float CrippleDamage { get; }` | Same with the cripple values. |
| `static float DamageMultiplier { get; }` | The server's `DamageX` setting on a server, 1 on a client. |
| `float Effectiveness { get; set; }` / `bool IsValid { get; }` | 0 to 1; valid when above 0. |
| `float Multipliers`, `HealthMultiplier`, `CripplingMultiplier { get; set; }` | Change these to change the damage. |
| `ImpactType ImpactType { get; }` | Pierce, Slash and so on. |
| `ImpactDetector ImpactDetector { get; set; }` | What was hit. |
| `Collider Struck { get; set; }`, `Vector3 Point`, `Normal`, `Direction` | Where. |
| `NetworkEntity Wielder { get; }`, `PlayerController PlayerWielder { get; }` | Who. |

`ImpactHitWithTool` adds `Tool`, `Impactor`, `FirstChannel`, `Start`, `End`, `Distance`, `HittingPlayer` (the player to credit, or null), `WasByPlayer`, `DurabilityLostMultiplier` and `Hit()`, which sends it to its detector.

## Asset values

Asset values (build main-1.7.2.1.42203). [Items and materials](../reference/items-and-materials.md) lists every item with its material and durability; impactor values aren't in the reference tables, so the ones below were read from the prefabs.

### ImpactorValues

Each impactor points at an `ImpactorValues` asset:

| Field | What it does |
| --- | --- |
| `type` | The `ImpactType` (0 `Pierce`, 1 `Slash`, 2 `Blunt`, 3 `Caustic`, 4 `Poison`, 5 `Explosive`, 6 `Spiritual`). |
| `healthDamageModifier`, `crippleDamageModifier` | Damage per unit of tool damage, before effectiveness. |
| `edgeLength` | Length of the edge along the impactor's up axis; -1 for a point. |
| `minimumFollow`, `maximumFollow` | Effectiveness runs from 0 to 1 as the farthest recorded position is between these distances (metres) from the contact. |
| `directionPower` | The swing's alignment with the impactor's forward axis is raised to this power, so higher means stricter. |
| `channels` | What it can hit. |

Hardness comes from `ImpactorSettings.hardnessLevel`, overridden by the item's material.

### Some weapons

| Prefab | `ImpactTool.damage` | One hand / two hands | Main impactor | Health / cripple modifier | Follow min to max | `directionPower` |
| --- | --- | --- | --- | --- | --- | --- |
| Short Sword | 1 | 1 / 1.4 | Slash, edge 0.7 m | 1 / 0.5 | 0.6 to 2.1 m | 0.8 |
| Short Sword (stab) | | | Pierce, point | 0.75 / 0.375 | 0.4 to 1 m | 2.5 |
| Katana | 1 | 0.8 / 1.1 | Slash, edge 0.95 m | 1.3 / 0.65 | 0.4 to 2.1 m | 2 |
| Rusty Greataxe | 1 | 0.3 / 1 | Slash | 0.75 / 0.5 | 0.7 to 2.2 m | 0.45 |
| Pick Axe | 10 | 1 / 1 | Pierce, Mining channel | 1 / 1 | 0.35 to 0.7 m | 1 |
| Arrow (`Damage` impactor) | 1 | 1 / 1 | Pierce, ignores the speed check | 0.1 / 0.1 | 0.3 to 0.6 m | 2 |
| Arrow (`Damage (Archery)` impactor) | | | Pierce | 0.6 / 0.6 | 2.5 to 9.5 m | 2 |
| Wyrm (each scythe) | 0.5 | | Pierce, `FixedImpactor` | 1 / 1 | none (fixed) | 0 |
| Spriggull | 1 | | Blunt | 0.5 / 0.2 | 0.35 to 1.35 m | 1 |

An arrow has two impactors. Going by its name and its long follow distances, `Damage (Archery)` is probably the one that counts for bow shots; that wasn't traced in the code.

Every tool here has `timeToSelfHit` 1.5 s and `requiredBlockLevel` `BlockPhysicalOnly`. Swords and the greataxe block at `BlockPhysicalOnly`; bags, the pick and arrows can't block (`CantBlock`). A `FixedImpactor` reports effectiveness 1 while charged, so a Wyrm's scythe hit is 0.5 × 1 before the target's multipliers (a `FixedImpactor` with a damage stat uses that stat as its multiplier, so a stronger creature hits harder).

So a perfect two-handed Short Sword slash deals 1 × 1 × 1 (effectiveness 1.4 is clamped to 1) health on a server with `DamageX` 1.

### Channels and armour

The 10 `ImpactChannel` assets: `Combat Impact Channel`, `Mining Impact`, `Wood Cutting`, `Explosive`, `Chiselling`, `Digging Impact Channel`, `Forging`, `Nailing Impact Channel`, `Flint Impact Flint`, `Flint Impact Other`. Player bodies, creatures and breakable boxes listen on Combat and Explosive; boulders on Mining and Explosive.

`ArmorDefinition` multipliers by type:

| Armour | Pierce | Slash | Blunt | Caustic | Explosive |
| --- | --- | --- | --- | --- | --- |
| MetalArmor | 0.5 | 0.4 | 0.9 | 0.6 | 0.4 |
| LeatherArmor | 0.7 | 0.7 | 0.85 | | |
| MushroomArmor | 0.7 | 0.7 | 0.85 | 0.5 | |
| GoteraArmor | 0.9 | 0.8 | 0.6 | 0.5 | |
| WyrmArmor | 1 | 0.8 | 0.6 | 0.1 | |
| ObjectArmor | 1 | 0.8 | 0.7 | 0.7 | |

Types not listed are taken at full damage.

## Hooking it

See every hit this machine resolves:

```csharp
using Alta.Impact;
using MelonLoader;

public class HitLogger : MelonMod
{
    public override void OnInitializeMelon()
    {
        ImpactTool.OnHitAny += OnHit;
    }

    static void OnHit(ImpactHitWithTool hit, ImpactTool tool)
    {
        if (!NetworkSceneManager.IsServer) return;
        string who = hit.HittingPlayer?.UserInfo.Username ?? tool.Wielder?.OriginalName ?? "?";
        HealthObject target = hit.ImpactDetector?.HealthTarget;
        MelonLogger.Msg($"{who} hit {target?.Entity.OriginalName ?? "something"} for {hit.HealthDamage:0.0} ({hit.ImpactType}, {hit.Effectiveness:0.00})");
    }
}
```

On a server, `OnHitAny` fires for PvP hits it resolved and for hits clients reported. On a client it fires for every hit that client resolves, including the ones it only shows for effects; check `tool.IsWieldedByLocalPlayer()` for the local player's own.

Refuse reported hits from too far away, on the server:

```csharp
using Alta.Impact;
using HarmonyLib;

[HarmonyPatch(typeof(ImpactTool), nameof(ImpactTool.GenerateImpactOnDetector))]
static class RejectFarHits
{
    const float MaxDistance = 5f;

    static void Prefix(ImpactTool __instance, ImpactDetector detector, ref float effectiveness)
    {
        if (!NetworkSceneManager.IsServer || detector == null) return;
        if ((__instance.transform.position - detector.transform.position).sqrMagnitude > MaxDistance * MaxDistance)
            effectiveness = 0f;
    }
}
```

The detector's transform can be some way from where a big creature was struck, so pick the limit with care.

Change the damage of reported hits:

```csharp
using Alta.Impact;
using HarmonyLib;

[HarmonyPatch(typeof(ImpactTool), nameof(ImpactTool.GenerateImpactOnDetector))]
static class ReportedHitDamage
{
    static void Postfix(ImpactHitWithTool __result)
    {
        if (NetworkSceneManager.IsServer && __result.HittingPlayer?.UserInfo.Username == "Placeholder")
            __result.Multipliers *= 2f;
    }
}
```

Things to watch:

- **Don't skip `GenerateImpactOnDetector`.** `SyncImpact` calls `.Hit()` on what it returns, so a prefix returning false makes it throw. Set `effectiveness` to 0 instead.
- **Order inside `GenerateImpactOnDetector`.** It raises `OnHit` and `OnHitAny` and wears the tool down before it returns, so those see the hit before your postfix changes it. `HealthDamage` is read again when the damage lands, so the postfix still counts.
- **PvP hits don't come through `SyncImpact`.** The server resolves them through `DelayedImpactResolver` and `GenerateHit`. To change PvP damage, use `PlayerHealth.ReceiveDamage` or the server's PvP multipliers (see [Health and damage](health-and-damage.md)).
- **`DelayedImpactResolver.Update` must not throw.** It's private and registered once. If it throws outside its own try block (a queued hit whose tool has no entity), the update loop drops it and hits stop doing damage until a restart. The Steady mod patches it with a prefix that drops bad entries and a finalizer that keeps it alive.
- `GenerateHit` runs for every contact of every moving tool. Keep patches on it cheap.
- `ImpactDetector.OnCollisionEnter` is a Unity message, called by physics.

## Other types

| Type | What it is |
| --- | --- |
| `ImpactorSettings`, `ImpactorValues` | Impactor data: hardness, filters, effects, type, damage modifiers. |
| `ImpactDetectorSettings` | Detector data: hit effects, whether it gives XP, whether it wears tools. |
| `ImpactImmunityGroup` | A multiplier when an impactor and a detector share a group. |
| `ArmorDefinition`, `EquipmentReference` | Armour: per-type multipliers on a body part's detector. |
| `ColliderModifierSettings`, `NonDamagingCollider`, `DamageMultiplierCollider`, `DirectionalMultiplierCollider` | Per-collider tweaks on a detector (a weak spot, a part that can't be damaged). |
| `ParticleImpactor` | Particle damage (`ParticleHit`). |
| `TriggerImpactDetector`, `TriggerImpactTool`, `CutableObject` | Trigger-based hits, like cutting. |
| `SparkImpactDetector`, `CraftableImpactDetector` | Smithing and crafting hits. |
| `ContactProjectile`, `NetworkContactProjectile` | Projectiles. |
| `PickupBreakOnImpact` | Breaks an item on a hard hit. |
| `MiningSettings` | Global haptics and strike sound settings. |
| `ImpactSystemHitManager` | Debug: sends the server's hits to subscribed clients. |

## See also

- [Health and damage](health-and-damage.md)
- [Durability](durability.md)
- [Embedding](embedding.md)
