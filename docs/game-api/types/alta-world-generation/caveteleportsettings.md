---
title: "CaveTeleportSettings"
description: "Global settings for cave teleporters: fuel costs between layers, effects, sounds and delays."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveTeleportSettings

A **class** in `Root.Township`, `Alta.Caves`.

Global settings for cave teleporters: fuel costs between layers, effects, sounds and delays. Get it with `GlobalSettings<CaveTeleportSettings>.Instance`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GlobalSettings<CaveTeleportSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`CaveTeleportSettings`](/game-api/types/alta-world-generation/caveteleportsettings)
- **Attributes** `CreateAssetMenu`, `GlobalSettings`
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CaveTeleportSettings()"}</code> |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> |
| <Link id="m-arriveatcaveeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" arriveAtCaveEffect"}</code> |
| <Link id="m-arriveatsurfaceeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" arriveAtSurfaceEffect"}</code> |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> |
| <Link id="m-departfromcaveeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" departFromCaveEffect"}</code> |
| <Link id="m-departfromsurfaceeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" departFromSurfaceEffect"}</code> |
| <Link id="m-fadeincurve" /><code>{"private AnimationCurve fadeInCurve"}</code> |
| <Link id="m-fadeoutcurve" /><code>{"private AnimationCurve fadeOutCurve"}</code> |
| <Link id="m-fromsurface" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/teleportcoststructure">{"TeleportCostStructure"}</Link>{" fromSurface"}</code> |
| <Link id="m-fuelprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" fuelPrefab"}</code> |
| <Link id="m-localsoundcooldown" /><code>{"private float localSoundCooldown"}</code> |
| <Link id="m-teleportdelay" /><code>{"private float teleportDelay"}</code> |
| <Link id="m-teleportsoundeffect" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" teleportSoundEffect"}</code> |
| <Link id="m-tosurface" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/teleportcoststructure">{"TeleportCostStructure"}</Link>{" toSurface"}</code> |
| <Link id="m-withincaves" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/teleportcoststructure">{"TeleportCostStructure"}</Link>{" withinCaves"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration-2" /><code>{"float AnimationDuration { get; }"}</code> | Duration of the teleporter repair animation. |
| <Link id="m-basematerial-2" /><code>{"Material BaseMaterial { get; }"}</code> | Material for the repair animation. |
| <Link id="m-fadeincurve-2" /><code>{"AnimationCurve FadeInCurve { get; }"}</code> | Fade in curve for the repair animation. |
| <Link id="m-fadeoutcurve-2" /><code>{"AnimationCurve FadeOutCurve { get; }"}</code> | Fade out curve for the repair animation. |
| <Link id="m-fuelprefab-2" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" FuelPrefab { get; }"}</code> | The fuel item prefab. |
| <Link id="m-localsoundcooldown-2" /><code>{"float LocalSoundCooldown { get; set; }"}</code> | Seconds (default 4) before the local player can hear the teleport sound again. |
| <Link id="m-teleportdelay-2" /><code>{"float TeleportDelay { get; }"}</code> | Seconds (default 1) between the departure effect and the player being moved. The screen fades for half of it. |
| <Link id="m-teleportsoundeffect-2" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" TeleportSoundEffect { get; }"}</code> | Sound played when a player teleports. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculatecost" /><code>{"static void CalculateCost(int fromLayer, int targetLayer, out int fromCost, out int toCost)"}</code> | Fuel cost at each end for a trip between two layers (0 is the surface). Uses the from-surface, to-surface or within-caves cost table. |
| <Link id="m-playeffects" /><code>{"static void PlayEffects("}<Link to="/game-api/types/alta-world-generation/teleporteffectargument">{"TeleportEffectArgument"}</Link>{" effectArgument)"}</code> | Client: spawns the arrive or depart effect for a surface or cave teleport at the given position. |

## Used in

Members of other types that take, return or hold a `CaveTeleportSettings`:

[`CaveTeleporterReplacerAnimator.settings`](/game-api/types/global-c-d/caveteleporterreplaceranimator#m-settings).
