---
title: Health and damage
description: HealthObject and PlayerHealth, where damage comes from, the multipliers it passes through, and how to change or block it on the server.
sidebar_position: 12
---

# Health and damage

Damage is applied on the server only. Clients see health through the stat system and death through an entity message.

## HealthObject

`HealthObject` in `Root.Township` (no namespace). A `NetworkEntityBehaviour` on creatures, players, breakable things, ore and trees. `PlayerHealth` and `FakePlayerHealth` derive from it.

Get one with `GetComponent<HealthObject>()` on the entity, `detector.HealthTarget` from an [impact detector](impacts.md#impactdetector), or `playerController.Health`.

| Member | What it does | Notes |
| --- | --- | --- |
| `float Health { get; set; }` | Current health. Setting it sets the health stat's base. | Set it on the server. |
| `float MaxHealth { get; set; }` | Maximum. If health was full, setting this keeps it full. | |
| `StatManager StatManager { get; }` | The entity's stats. Health is the stat named `health`. | Stat system area. |
| `bool HasCrippleStat { get; }` / `Stat CrippleStat { get; }` | The cripple stat, if any (players have one). | |
| `DamageData LastHit { get; }` | The last thing that changed health. | On the server it's cleared right after each impact. |
| `bool IsCombatant { get; }` | Being hurt by a player puts that player in combat. | |
| `AttackTypeMultiplier[] Multipliers { get; }` | Per `ImpactType` damage multipliers. | |
| `EffectHandler EffectHandler { get; }` | Potion and status effects. | |
| `IEnumerable ImpactDetectors { get; }` | Its detectors. | |
| `Transform Core { get; }` | Its centre. | |
| `HealthObjectEvent Destroyed { get; }` | Raised when it's killed. | |
| `event Action<DamageData> Killed` | Health reached 0 (server), or the death message arrived (clients). | |
| `event HealthChangedHandler HealthChanged` | Health changed. `delegate void HealthChangedHandler(HealthObject, float changeAmount, DamageData)` | Fires wherever the stat changes; negative is damage. |
| `event ImpactHandler OnHit` | A valid impact hit it. | Fires on every machine that resolved the hit. |
| `void DetectImpact(ImpactHit)` | Applies type and armour multipliers, then `ReceiveDamage`. | Called by its detectors' `Hit`. |
| `virtual void ReceiveDamage(float healthDamage, float crippleDamage, DamageData impact = null)` | Takes damage. | Does nothing on a client. |
| `void OnKilled()` | Raises `Killed` and the death sync. | |
| `void Die()` | Sets health to 0. | Server. |

### How damage is worked out

For a weapon hit, the numbers multiply up like this:

1. `ImpactHit.HealthDamage`: the impactor's health modifier, times effectiveness, times the server's `DamageX` setting, times the hit's multipliers (tool damage, material, one-off multiplier).
2. `HealthObject.DetectImpact`: times the target's multiplier for that `ImpactType`, times the armour on the struck detector.
3. `ReceiveDamage`: divided by the target's damage protection stat, if it has one. Cripple damage the same, with the cripple protection stat.
4. For players, `PlayerHealth.ReceiveDamage` applies the PvP and player-damage settings first (below).

When health reaches 0 on the server, a `HealthObject` calls `OnKilled`: `Killed` fires, the console's `ObjectKilled` event is raised (only if a console client subscribed), the killer gets task credit, and clients get the `HealthObjectDied` message, which raises `Killed` on their side.

## PlayerHealth

`PlayerHealth : HealthObject`, no namespace. Get it with `playerCharacter.Health` (typed `PlayerHealth`) or `playerController.Health as PlayerHealth`.

| Member | What it does | Notes |
| --- | --- | --- |
| `PlayerController Player { get; }` | Whose health. | |
| `event Action<DamageState> HandleDamage` | Runs before each hit is applied. Call `SetAsHandled()` to cancel it. | Server only. |
| `event Action<DamageData> Downed` | Health reached 0. | Server. A player isn't killed at 0, they're downed. See [Death and items](death-and-items.md). |
| `static ToggleBool ArePlayersAvoidingDamage` | The `immortals` toggle: while on, every player's health can't drop below its maximum. | Server. |
| `void GrantInvincibilityToImpacts(float seconds)` | Ignores weapon hits for a while. | Server. An `async void`; it runs on the main thread. |
| `override void ReceiveDamage(...)` | See below. | |

`PlayerHealth.ReceiveDamage` (server), in order:

1. Fills the shared `DamageState` and raises `HandleDamage`. The game uses this to block damage while the player's controls are locked and in the spirit state.
2. Stops if a handler called `SetAsHandled()`, if the player isn't alive, if `PlayerController.IsIgnoringDamage` is on (for damage above 0), or if impacts are blocked by `GrantInvincibilityToImpacts`.
3. For a hit credited to a player (`ImpactHitWithTool.WasByPlayer`: a held weapon, or a projectile with a `PlayerOwner`): stops if PvP is off on the server, else multiplies by `PVPMultiplier` (0.1 by default) and the cripple damage by `PVPCrippleMultiplier` (0.3).
4. Multiplies by `PlayerDamageTakenMultiplier`.
5. Hands over to `HealthObject.ReceiveDamage`.

The settings come from `ServerHandler.Current.ServerConfig.Settings` (`Alta.Utilities.ServerSettings`): `DamageX`, `IsPVPEnabled`, `PVPMultiplier`, `PVPCrippleMultiplier`, `PlayerDamageTakenMultiplier`.

`DamageState` (`Alta.PlayerEffects.General.Health`) has `Damage`, `Cripple`, `DamageImpact` (the `DamageData`), `IsHandled` and `SetAsHandled()`. It's one object reused for every hit on that player, so don't keep it.

## DamageData and DamageSource

`Alta.Impact.DamageData` is what every kind of damage carries. Its only member is `DamageSource Source`. Weapon hits are `ImpactHit` (and `ImpactHitWithTool`), which derive from it.

| `DamageSource` | Comes from |
| --- | --- |
| `Impact` | Weapon and tool hits. |
| `FallDamage` | Falls. The falling client sends the drop height (`SmoothLocomotion`); the server turns it into damage. |
| `AreaOfEffect` | `AOEDamage` (explosions). |
| `Poison` | Poison effects (`EffectHandler`, `PoisonStat`). |
| `Hunger` | Starving (`HungerStat`). |
| `Fire` | Heat (`HeatManager`). |
| `Command` | Console commands. TavernLib's kill command uses it. |
| `Unknown` | Fallback in kill logs. |

## AOEDamage

`AOEDamage`, no namespace, a `MonoBehaviour`. Deals its damage once, in `Start`, to every `HealthObject` found in a sphere: `damage × DamageX`, source `AreaOfEffect`, no cripple damage, on the server. Its `damageType` field isn't used, so type multipliers and armour don't apply. Each collider in its layers must have an `ImpactDetector` in its parents with a health target, or it throws.

## Asset values

Asset values (build main-1.7.2.1.42203). The reference tables have the creatures and breakables in full.

### Players

The player prefab `VR Player Character New` puts its `PlayerHealth` and `StatManager` on `Static Controllers/Health`, with 9 `ImpactDetector`s (head, chest, `Cog` at the hips, both shoulders, elbows and wrists), all with `Player Body Impact` settings and hardness 0. Its stats include:

| Stat name | Start | Min | Max |
| --- | --- | --- | --- |
| `health` | 2 | 0 | 2 |
| `maxhealth` | 2 | 0 | 31 |
| `cripplehealth` | 1 | 0 | 1 |
| `damage` (the wielder's damage stat) | 1 | 0 | 15 |
| `damageprotection` (damage protection) | 1 | 0.1 | 10 |
| `damageprotection` (cripple damage protection) | 1 | 0.1 | 10 |
| `poison` | 0 | 0 | 31 |
| `hunger` | 2 | 0 | 2 |
| `fullness` | 3 | 0 | 6 |
| `speed` | 1 | 0 | 15 |

Two stats share the name `damageprotection`. The game finds them by definition asset (`PickupTypeSettings.DamageProtectionDefinition` and `CrippleDamageProtectionDefinition`), so that works, but looking one up by name gets you whichever comes first.

`PlayerHealth.multipliers` is one entry: `Spiritual` × 0.2. A player is a combatant.

Worked out from these: a perfect Short Sword slash (1 health, see [Impacts](impacts.md#some-weapons)) on a player is 1 × `PVPMultiplier` 0.1 = 0.1 with default settings, so 20 hits from full health to downed.

### Creatures and things

| Prefab | `health` | Type multipliers | Detectors |
| --- | --- | --- | --- |
| Wyrm | 3.5 | Caustic × 0 | Combat, Explosive; `Body Impact` settings |
| Spriggull | 0.5 | | Combat, Explosive |
| Iron Boulder | 4 | | Mining, Explosive; hardness 1; `Stone Impact` settings |
| Breakable Box | 0.3 | Blunt × 5 | Combat, Explosive; `Wood Impact` settings |

So a Wyrm takes 4 perfect Short Sword slashes, and a Breakable Box breaks to any blunt hit of 0.06 or more.

## Hooking it

No fall damage, on the server:

```csharp
[HarmonyPatch(typeof(PlayerHealth), nameof(PlayerHealth.ReceiveDamage))]
static class NoFallDamage
{
    static bool Prefix(DamageData impact) => impact == null || impact.Source != DamageSource.FallDamage;
}
```

The same thing without Harmony, per player, with `HandleDamage`:

```csharp
public static void BlockFire(PlayerCharacter character)
{
    character.Health.HandleDamage += state =>
    {
        if (state.DamageImpact?.Source == DamageSource.Fire) state.SetAsHandled();
    };
}
```

You need to subscribe for each player body as it spawns, and a new body comes with each respawn. A Harmony patch covers every player at once.

Log kills:

```csharp
[HarmonyPatch(typeof(HealthObject), nameof(HealthObject.OnKilled))]
static class LogKills
{
    static void Postfix(HealthObject __instance)
    {
        if (!NetworkSceneManager.IsServer) return;
        string killer = (__instance.LastHit as ImpactHitWithTool)?.HittingPlayer?.UserInfo.Username ?? "nobody";
        MelonLogger.Msg($"{__instance.Entity.OriginalName} killed by {killer} ({__instance.LastHit?.Source})");
    }
}
```

`OnKilled` also runs on clients when the death message arrives, hence the side check. Players don't go through it at 0 health; they're downed first (`PlayerHealth.Downed`).

Things to watch:

- `HealthObject.ReceiveDamage` is virtual. A patch on `HealthObject.ReceiveDamage` doesn't see a player's damage until `PlayerHealth` calls the base, after its own checks. Patch `PlayerHealth.ReceiveDamage` for players.
- `DetectImpact` clears `LastHit` on the server right after applying the damage, so read the hit in `HealthChanged` or in a patch, not later.
- `Health` creates a stand-in stat (0 to 1) if the entity has no `health` stat. A health observer should look the stat up itself, as ATT-Optimizations does.
- To kill a player from code, do what TavernLib does: if `ArePlayersAvoidingDamage` is on, switch it off for the call, then `ReceiveDamage(float.MaxValue, 0f, new DamageData(DamageSource.Command))`. Per-player god mode (`IsIgnoringDamage`) still blocks it.

## See also

- [Impacts and hit detection](impacts.md)
- [Death and items](death-and-items.md)
