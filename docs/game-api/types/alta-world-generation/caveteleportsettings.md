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

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | Length of the teleporter repair animation, exposed as `AnimationDuration`. |
| <Link id="m-arriveatcaveeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" arriveAtCaveEffect"}</code> | Pooled effect played where a player arrives in a cave layer. |
| <Link id="m-arriveatsurfaceeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" arriveAtSurfaceEffect"}</code> | Pooled effect played where a player arrives on the surface. |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> | Material for the repair animation, exposed as `BaseMaterial`. |
| <Link id="m-departfromcaveeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" departFromCaveEffect"}</code> | Pooled effect played where a player leaves from a cave layer. |
| <Link id="m-departfromsurfaceeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" departFromSurfaceEffect"}</code> | Pooled effect played where a player leaves from the surface. |
| <Link id="m-fadeincurve" /><code>{"private AnimationCurve fadeInCurve"}</code> | Fade-in curve for the repair animation. |
| <Link id="m-fadeoutcurve" /><code>{"private AnimationCurve fadeOutCurve"}</code> | Fade-out curve for the repair animation. |
| <Link id="m-fromsurface" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/teleportcoststructure">{"TeleportCostStructure"}</Link>{" fromSurface"}</code> | Cost structure for teleports that start on the surface (layer 0); adds one to the layer distance. |
| <Link id="m-fuelprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" fuelPrefab"}</code> | Prefab of the fuel item that `CaveTeleporter.AddAmount` spawns into a teleporter's fuel dock. |
| <Link id="m-localsoundcooldown" /><code>{"private float localSoundCooldown"}</code> | Seconds between teleport sounds for the local player (default 4). |
| <Link id="m-teleportdelay" /><code>{"private float teleportDelay"}</code> | Seconds between starting a teleport and moving the player (default 1); the screen fades over half of it. |
| <Link id="m-teleportsoundeffect" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" teleportSoundEffect"}</code> | Sound played on teleport. |
| <Link id="m-tosurface" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/teleportcoststructure">{"TeleportCostStructure"}</Link>{" toSurface"}</code> | Cost structure for teleports that end on the surface; adds one to the layer distance. |
| <Link id="m-withincaves" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/teleportcoststructure">{"TeleportCostStructure"}</Link>{" withinCaves"}</code> | Cost structure for teleports between two cave layers. |

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
