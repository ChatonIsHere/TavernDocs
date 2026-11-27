---
title: Effects
description: Alta.Alchemy effect definitions, how food, drinks, potions and areas apply them, and the EffectHandler that receives them.
sidebar_position: 4
---

# Effects

`Alta.Alchemy` in `Root.Township`. Applied on the server.

An effect is a `ScriptableObject` that does one thing to whatever receives it: change a stat, poison, teleport, burn. Food, liquids, stews, garnishes and some areas carry lists of `EffectDefinitionApplication`s, each an effect plus a strength. The receiver is an `EffectHandler` on the body.

## EffectDefinition

`Alta.Alchemy.EffectDefinition : HashedGeneralValue<EffectDefinition>`, abstract. Assets live under `Cooking/Effects`.

| Member | What it does |
| --- | --- |
| `virtual void CheckApply(EffectHandler target, float strength)` | Entry point. By default calls `Apply`. Subclasses use it to gate (chance, build-up, needs health). |
| `protected abstract void Apply(EffectHandler target, float strength)` | Does the effect. |
| `Glyph effectGlyph` | The icon shown for it. |

What `strength` means depends on the subclass: a size for `StatChangeEffect` and `StatSetEffect`, a duration in seconds for `StatMultiplierEffect`, a probability for `ChanceBasedEffectDefinition` and `TeleportEffect`, and a poison stack for `PoisonEffect`.

Subclasses in `Alta.Alchemy`:

| Type | What it does with `strength` |
| --- | --- |
| `StatEffect` | Abstract. Finds `StatToAffect` on the target's `StatManager` and calls `ModifyStat`. |
| `StatChangeEffect` | Adds `strength` to the stat's `Base`. This is how food fills hunger and fullness. |
| `StatSetEffect` | Sets the stat's `Base` to `strength`. |
| `StatMultiplierEffect` | Applies a timed `StatModifier` of its own `modifierValue`, lasting `strength` seconds. |
| `PoisonEffect` | Positive strength adds a poison stack, negative removes one. Needs `target.Health`. |
| `BurnEffect` | Positive strength starts adding to the `"burn"` stat every tick, negative stops it. The game has no `BurnEffect` asset and the player body has no `"burn"` stat, so it does nothing in vanilla. |
| `TeleportEffect` | A `ChanceBasedEffectDefinition`: with chance `strength * chanceMultiplier`, teleports the target to its baked-in `landingTarget` (a `SpawnAreaIdentifier`). `Home` uses the player's spawn point (not for spirits), a missing area falls back to `RespawnPoint`, and the rest resolve through `SpawnArea.InstanceMap`. |
| `RevealEffect` | Raises the handler's `OnReveal`. |
| `InateEffect` | Does nothing. |
| `ChanceBasedEffectDefinition`, `BuildUpconcoctionEffect` | Bases that gate on a random roll, or add up strengths and fire once they pass `minStrengthToApply` (0.8 on `BuildupTeleportToOverworld`), clearing after `buildupDuration` (1 second). |

`IndirectStatModifierDefinition` (in `Alta.StatSystem`) is also an `EffectDefinition`: it adds an indirect, curve-shaped modifier to a stat.

## The game's effect assets

:::note[Asset values]
Build `main-1.7.2.1.42203`, checked against a live server's registry (13 effects). The stat effects are also in [Stats](../reference/stats.md#stat-effects).
:::

| Asset | Type | What it does |
| --- | --- | --- |
| `Nourish` | `StatChangeEffect` | Adds to hunger (0 to 2). |
| `Feed` | `StatChangeEffect` | Adds to fullness (0 to 6). |
| `Heal` | `StatChangeEffect` | Adds to health (0 to 2). |
| `Damage Indirect effect`, `Damage Protection Indirect effect`, `Speed Indirect Effect`, `Luminosiy indirect effect` | `IndirectStatModifierDefinition` | A modifier of `baseValue * strength` (base 1, or 2 for luminosity) on damage, damage protection, speed or luminosity, for 900 stat ticks (15 minutes). |
| `Poison over Time` | `PoisonEffect` | A poison stack. The player's handler deals poison damage every 1.5 seconds (`poisonFrequency`). |
| `Teleport Home`, `Teleport Original Respawn` | `TeleportEffect` | The teleport potion. |
| `Reveal Effect` | `RevealEffect` | |
| `BuildupTeleportToOverworld` | `BuildupTeleportEffect` | Builds up, then teleports. |
| `Inate` | `InateEffect` | Nothing. |

Liquids carry these too: the `Health Potion` liquid is one `Heal` at strength 1 (half of the 2 health), with `isConsumableThroughSkin` set.

The four indirect modifiers are saved with the player's `StatManager`, and their timers carry over a logout (`IndirectStatModifier`, `TimedStatModifier`), so a running buff keeps going after a reconnect.

## EffectDefinitionApplication

`[Serializable]` class. An effect with a strength and an optional duration.

| Member | What it does | Notes |
| --- | --- | --- |
| `EffectDefinitionApplication(EffectDefinition effectToModify, float strengthMultiplier, int durationInSeconds = 0)` | Makes one. | |
| `EffectDefinition EffectToModify { get; }` | The effect. | |
| `float StrengthMultiplier { get; set; }` | The strength. | Sent over the network in -100 to 100, to 0.001. |
| `virtual void CheckApply(EffectHandler target, float strength)` | Duration 0: applies once at `strength * StrengthMultiplier`. Otherwise splits it into one-second steps over the duration. | |
| `EffectDefinitionApplication Copy()` | A copy. | |

Durations queue per effect on the handler: a second drink of the same timed effect starts after the first finishes.

## EffectHandler

`Alta.Alchemy.EffectHandler : MonoBehaviour`. On anything effects can reach. Players have the subclass `PlayerEffectController`, which sits next to the body's `PlayerCharacter` and adds the teleport effect and `PlayerRepositioned`.

| Member | What it does | Notes |
| --- | --- | --- |
| `StatManager StatManager { get; }` | Where stat effects go. | |
| `HealthObject Health { get; }` | For poison. | |
| `int PoisonStacks { get; }` | Current poison stacks. | |
| `virtual void PoisonOverTime(float strength)` | Adds or removes a stack. While stacked, a coroutine deals damage every `poisonFrequency` seconds. | |
| `virtual void Teleport(Vector3 position, float strength, TeleportType teleportType)` | Moves the target, at most once every 2 seconds. Only the server moves it. | |
| `virtual void Reveal()` | Raises `OnReveal`. | |

Prefabs can make a handler immune to poison, teleport or reveal.

## Who applies effects

- Eating and drinking, through `ConsumptionManager.HandleConsumptionEffects`. See [Hunger, eating and drinking](hunger-and-eating.md).
- `LiquidData.Apply`, when a container's liquid splashes onto something on impact (`ImpactDetector`, the thrown potion case). Only liquids with `isConsumableThroughSkin` set apply this way, and it bypasses the mouth.
- `EffectVolumeTrigger`: applies its effects when something enters, and the same effects at negative strength when it leaves (which is how a poison stack comes off).
- `EffectArea`: applies a liquid's effects on enter and the negative on exit, on the server.

## Client visuals

The buff and debuff glow a player wears is drawn only on clients. `PlayerEffectManager`, on the player's body, destroys itself on a headless server, so none of this runs there. It holds a `StatEffectsDefinition` asset: a list of `StatEffectHolder`s, one per watched stat, each pairing a buff and a debuff `StatDrivenEffect` (a pooled particle effect, a value-to-size curve and a shell setting).

For each, a `PlayerEffectManager.StatEffectApplication` (two per stat, buff and debuff) listens to the stat's `Changed` event. Its `ValueChanged` works out the *buff part* of the value and turns the glow on, off or resizes it. So the glow is decided by which stat moved and its buff channel (see [Stats](stats.md)), not by what caused the change: anything that raises a given stat glows the same way, and a change written to the stat's `Base` instead of through its buff channel produces no glow at all.

There are two layers. The floating particles come from the `StatDrivenEffect`. The shell is a second skin: `StatEffectShellAnimator` (a `ShellAnimator`) clones the player's clothing renderers with a shell material and animates its `_Progress`, tuned by a `StatEffectShellSetting`. Only one shell shows at a time; `StatEffectShellAnimator` is a priority queue, so overlapping effects wait their turn. The shared shell material comes from `PlayerSpecialEffectsController`.

A server mod changes effects and stats, which clients then render; it can't change how the glow looks for a vanilla client, because none of this runs on the server.

## Hooking it

- Effects are shared assets, so a patch on `StatChangeEffect.ModifyStat` or `EffectDefinition.CheckApply` affects every source. Check `target` (`target is PlayerEffectController`) to narrow it.
- The network sends effects by hash (in liquids, for example). An effect you create at runtime doesn't exist on vanilla clients, so a liquid that carries one can't be read by them. CookingLib patches `LiquidData`'s effect serialization for this reason. Changing the strength of existing effects is safe.
- `BurnEffect` and `BuildUpconcoctionEffect` keep per-target dictionaries on the shared asset, keyed by `StatManager` or `EffectHandler`. Entries are only removed by their own stop paths, so a body destroyed mid-burn may stay referenced.

## See also

- [Stats](stats.md)
- [Cooking](cooking.md), which combines effects into stews
- [Liquids](liquids.md)
