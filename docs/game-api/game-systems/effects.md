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

Subclasses in `Alta.Alchemy`:

| Type | What it does with `strength` |
| --- | --- |
| `StatEffect` | Abstract. Finds `StatToAffect` on the target's `StatManager` and calls `ModifyStat`. |
| `StatChangeEffect` | Adds `strength` to the stat's `Base`. This is how food fills hunger and fullness. |
| `StatSetEffect` | Sets the stat's `Base` to `strength`. |
| `StatMultiplierEffect` | Applies a timed `StatModifier` of its own `modifierValue`, lasting `strength` seconds. |
| `PoisonEffect` | Positive strength adds a poison stack, negative removes one. Needs `target.Health`. |
| `BurnEffect` | Positive strength starts adding to the `"burn"` stat every tick, negative stops it. |
| `TeleportEffect` | A `ChanceBasedEffectDefinition`: with chance `strength * chanceMultiplier`, teleports the target home or to a spawn area. |
| `RevealEffect` | Raises the handler's `OnReveal`. |
| `ChanceBasedEffectDefinition`, `BuildUpconcoctionEffect` | Bases that gate on a random roll, or add strengths applied within `buildupDuration`. |

`IndirectStatModifierDefinition` (in `Alta.StatSystem`) is also an `EffectDefinition`: it adds an indirect, curve-shaped modifier to a stat.

## The game's effect assets

:::note[Asset values]
Build `main-1.7.2.1.42203`. The reference tables list every effect and liquid.
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

`Nourish` and `Heal` point at their stats through cross-file references; which stat each changes is read from their names and icons. Liquids carry these too: the `Health Potion` liquid is one `Heal` at strength 1 (half of the 2 health), with `isConsumableThroughSkin` set.

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
- `LiquidData.Apply`, when a container's liquid splashes onto something on impact (`ImpactDetector`, the thrown potion case).
- `EffectVolumeTrigger`: applies its effects when something enters, and the same effects at negative strength when it leaves (which is how a poison stack comes off).
- `EffectArea`: applies a liquid's effects on enter and the negative on exit, on the server.

## Hooking it

- Effects are shared assets, so a patch on `StatChangeEffect.ModifyStat` or `EffectDefinition.CheckApply` affects every source. Check `target` (`target is PlayerEffectController`) to narrow it.
- The network sends effects by hash (in liquids, for example). An effect you create at runtime doesn't exist on vanilla clients, so a liquid that carries one can't be read by them. CookingLib patches `LiquidData`'s effect serialization for this reason. Changing the strength of existing effects is safe.
- `BurnEffect` and `BuildUpconcoctionEffect` keep per-target dictionaries on the shared asset, keyed by `StatManager` or `EffectHandler`. Entries are only removed by their own stop paths, so a body destroyed mid-burn may stay referenced.

## See also

- [Stats](stats.md)
- [Cooking](cooking.md), which combines effects into stews
- [Liquids](liquids.md)
