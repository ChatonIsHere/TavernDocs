---
title: Heat
description: HeatPoint temperatures and conduction, heat areas, heat sources, fires and fuel.
sidebar_position: 8
---

# Heat

`Alta.Heat` in `Root.Township`, plus the top-level `Fuel`. Server simulates, clients get synced temperatures.

Anything that can get hot has one or more `HeatPoint`s: a temperature and a volume. Heat moves between neighbouring points, from heat areas into points inside them, and back towards the ambient temperature. Cooking, forging, melting and lighting things all read `HeatPoint.Temperature`. See [Cooking](cooking.md) and [Smelting and forging](smelting-and-forging.md).

## HeatPoint

`Alta.Heat.HeatPoint : MonoBehaviour`. Implements `IHeatReceiver` (and so `IHeatSource`). Usually several per item, held by a `HeatPointCollection` on the entity, which saves and syncs them. `CookingPoint`, `ForgedPoint`, `MetalHeatPoint`, `MeltingHeatPoint` and `MovementHeatPoint` are subclasses.

| Member | What it does | Notes |
| --- | --- | --- |
| `float Temperature { get; set; }` | Degrees. Setting runs `TemperatureModifier` handlers first, then marks the point for sync. | On a client, the server's next sync overwrites it. |
| `float Volume { get; set; }` | How much heat it holds. | |
| `float InternalEnergy { get; set; }` | `Temperature * Volume`. Conduction moves energy. | |
| `bool IsAmbientTemperature { get; }` | True when it's back at ambient. Ambient points are synced as a single flag. | |
| `void Conduct(float temperature, bool isIgnoringAmbient, float weight = 1f)` | Moves this point towards `temperature`. | Server only. Does nothing without an `Entity`. |
| `void ConductTo(IHeatReceiver receiver, bool isSource, bool isIgnoringAmbient = false, float weight = 1f)` | Swaps energy with another point, limited so it can't overshoot. | |
| `void ForceTemperature(float temperature)` | Sets the temperature directly. | |
| `static float GlobalConductivityMultiplier { get; set; }` | Scales every conduction in the process. | Default 1. |
| `bool IsConductionAllowed { get; set; }`, `bool IsIgnoringAmbient { get; set; }` | Freeze a point, or stop it cooling to ambient this frame. | A burning source sets both on its own point. |
| `event Action<HeatPoint> Changed` | Raised when the temperature changes. | |
| `event TemperatureModifier TemperatureModifier` | `void (ref float newTemperature)`, called on every set. | A clean way to cap or scale one point. |

A point runs in `FixedUpdate` while it or a neighbour isn't at ambient, and turns itself off when everything settles. Many hot items mean many `FixedUpdate`s, so don't add work there. When a point is disabled it snaps to ambient. Saved temperatures above 10,000 or NaN load as ambient.

Armour changes a body's heat points' conductivity (`ArmorDefinition.ConductivityMultiplier`).

## HeatArea

`Alta.Heat.HeatArea : NetworkEntityBehaviour`. A trigger volume around a heat source (above a fire, inside a smelter or a pot's base). While active, it conducts its source's temperature into the heat points inside, scaled by `GetTemperatureMultiplier` (a `Func<HeatPoint, float>` you can replace). When areas overlap, only the highest `priority` area heats a point.

`RegisterHeatPointExternal(HeatPoint)` and `DeregisterHeatPointExternal` add points that aren't inside the collider (the cooking pot registers its liquid and stew). `PointFilter` can reject points. `CylinderHeatArea`, `LinearHeatArea` and `RadiusHeatArea` are `HeatAreaModifier` components that replace `GetTemperatureMultiplier` with a falloff by position. If you set it yourself, a modifier on the same object overwrites it in its `Awake`.

## Heat sources and fire

### HeatSourceBase

`Alta.Heat.HeatSourceBase : NetworkEntityBehaviour`. Something that burns: it lights when its attached heat point passes `ignitionTemperature` (100 by default in code) and goes out when it drops below `putOutTemperature` (80). While lit, it heats its point along `fireProgressToTemperature` (a curve over burn progress), every fixed update, on the server. A plain source burns for `litDuration` and then goes out.

| Member | What it does |
| --- | --- |
| `bool IsLit { get; }` | Whether it's burning. |
| `float Progress { get; }` | Burn progress. |
| `void ForceExtinguish(bool isInstant)` | Puts it out. |
| `void Asphixiate()`, `void ReleaseAsphyxiate()` | Smothers it (for sources marked asphyxiable). |
| `event Action Extinguished`, `event Action<bool> ToggleEvent` | Lit and out events. |

### Fire

`Alta.Heat.Fire : HeatSourceBase`. Fires that use fuel (campfires, and the smelter's `innerFire`).

| Member | What it does |
| --- | --- |
| `void TryLight()` | Lights it if it can. |
| `void CheckExtinguish(Interactor, Pickup, PickupDock)` | Rechecks fuel and goes out if there's none. Used as a dock event handler. |
| `void ForceProgress(float progress)` | Sets burn progress. |
| `static void SimulateSparks(Vector3 position, float radius, float chance)` | Tries to light flammable things near a point. |

A fuel-based fire burns a little `baseFuel` first, then fuel from its `fuelDock` (one item at a time, each for `Fuel.DockedBurnDuration`), then from its `fuelArea` (everything inside burns together, kept sorted by `EfficiencyCap`). Its heat (progress) follows the total `EfficiencyValue` of the fuel, capped at `maximumEfficiency`. When it runs out, it goes out. When the world loads after more than `minTimeDifferenceToSimulate` seconds away, `SimulateTime` uses up the fuel that would have burned in the gap.

### Fuel

`Fuel : ItemComponent`, top level. On an `Item`, so it's per item type, not per object.

| Member | What it means |
| --- | --- |
| `float EfficiencyValue`, `float EfficiencyCap` | How much heat it gives, and the most it gives in a hot fire. |
| `float BurnDuration`, `float BurnPriorityMultiplier` | How long it lasts in a fuel area, and how fast it's used next to other fuel. |
| `float DockedBurnDuration` | How long one item lasts in a fuel dock (75 for almost every fuel in the assets). |
| `Item BurningItem`, `float Volume`, `float ParentDuration` | What it turns into while burning, and related values. |

Representative values from the `Fuel` assets (build `main-1.7.2.1.42203`; every item is in the reference tables):

| Fuel | `EfficiencyValue` | `EfficiencyCap` | `BurnDuration` | `BurnPriorityMultiplier` | `DockedBurnDuration` |
| --- | --- | --- | --- | --- | --- |
| Coal | 1 | 3 | 800 | 0.8 | 75 |
| Sticks (each wood) | 1 | 7 | 10 (a second variant 1) | 1.2 | 75 |
| Woodcut wedges, fresh | 0.2 | 10 | 10 | 1 | 75 |
| Woodcut wedges, burnt | 0.2 | 10 | 200 | 1 | 75 |
| Woodcut wedges, charred | 0.2 | 10 | 350 | 1 | 75 |
| MRK Fuel Core | 1 | 10 | 8000 | 1 | 750 |

`Tinder` is a fuel-based `Fire` with `litDuration` 600, `ignitionTemperature` 60, `putOutTemperature` 50 and a short `baseFuel` burn (0.3 for 4 seconds). Lanterns light at 60 and go out at 50 too.

The smelter doesn't use `Fuel`: every fuel item there lasts the same time. See [Smelting and forging](smelting-and-forging.md).

## HeatManager

`Alta.Heat.HeatManager : MonoBehaviour`. Burns a body: it watches a `HeatPointCollection`'s points and, on the server, damages its `HealthObject` when they pass `burnDamageThreshold`, and lights it above `ignitionThreshold`.

## Hooking it

- **Scale all heat**: `HeatPoint.GlobalConductivityMultiplier = 2f;` on the server. It's a static, so it affects every point in that process.
- **One point**: subscribe to its `TemperatureModifier` to clamp or scale values as they're set.
- **Fuel values** are on shared `Fuel` item components. Change them through `AccessTools` once at start, on the server, and every fire burns that item differently.
- Don't patch `HeatPoint.FixedUpdate`, `ConductTo` or the `Temperature` setter: they run per point, per physics step.

## Other types in this area

| Type | What it is |
| --- | --- |
| `FireLighter`, `FireExtinguisher`, `FireExtinguishingFluid` | Light `IFlammable` things on touch (with a `chance`), or put fires out. |
| `HeatPointTemperatureController` | Clamps a point between `minTemperature` and `maxTemperature` through its `TemperatureModifier`, on the server. |
| `TemperatureToMaterial` | Glow and colour from temperature. Client visuals. |
| `HandShakeOffDetector` | A shake score for a hand, read by `MovementHeatPoint` (heat from moving). |
| `EnergyBasedHeatSource` | A `HeatSourceBase` whose `ConductToHeatPoint` adds nothing. Looks unfinished. |
| `FireSettings` | Effects and timings for fire. |

## See also

- [Cooking](cooking.md)
- [Smelting and forging](smelting-and-forging.md)
