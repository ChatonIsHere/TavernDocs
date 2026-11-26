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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`GlobalSettings<CaveTeleportSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`CaveTeleportSettings`](/mod/game-api/types/alta-world-generation/caveteleportsettings)
- **Attributes** `CreateAssetMenu`, `GlobalSettings`
- **Documented in** [Caves](/mod/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveTeleportSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | <span className="api-desc">Length of the teleporter repair animation, exposed as `AnimationDuration`.</span> |
| <Link id="m-arriveatcaveeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" arriveAtCaveEffect"}</code> | <span className="api-desc">Pooled effect played where a player arrives in a cave layer.</span> |
| <Link id="m-arriveatsurfaceeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" arriveAtSurfaceEffect"}</code> | <span className="api-desc">Pooled effect played where a player arrives on the surface.</span> |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> | <span className="api-desc">Material for the repair animation, exposed as `BaseMaterial`.</span> |
| <Link id="m-departfromcaveeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" departFromCaveEffect"}</code> | <span className="api-desc">Pooled effect played where a player leaves from a cave layer.</span> |
| <Link id="m-departfromsurfaceeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" departFromSurfaceEffect"}</code> | <span className="api-desc">Pooled effect played where a player leaves from the surface.</span> |
| <Link id="m-fadeincurve" /><code>{"private AnimationCurve fadeInCurve"}</code> | <span className="api-desc">Fade-in curve for the repair animation.</span> |
| <Link id="m-fadeoutcurve" /><code>{"private AnimationCurve fadeOutCurve"}</code> | <span className="api-desc">Fade-out curve for the repair animation.</span> |
| <Link id="m-fromsurface" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/teleportcoststructure">{"TeleportCostStructure"}</Link>{" fromSurface"}</code> | <span className="api-desc">Cost structure for teleports that start on the surface (layer 0); adds one to the layer distance.</span> |
| <Link id="m-fuelprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" fuelPrefab"}</code> | <span className="api-desc">Prefab of the fuel item that `CaveTeleporter.AddAmount` spawns into a teleporter's fuel dock.</span> |
| <Link id="m-localsoundcooldown" /><code>{"private float localSoundCooldown"}</code> | <span className="api-desc">Seconds between teleport sounds for the local player (default 4).</span> |
| <Link id="m-teleportdelay" /><code>{"private float teleportDelay"}</code> | <span className="api-desc">Seconds between starting a teleport and moving the player (default 1); the screen fades over half of it.</span> |
| <Link id="m-teleportsoundeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" teleportSoundEffect"}</code> | <span className="api-desc">Sound played on teleport.</span> |
| <Link id="m-tosurface" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/teleportcoststructure">{"TeleportCostStructure"}</Link>{" toSurface"}</code> | <span className="api-desc">Cost structure for teleports that end on the surface; adds one to the layer distance.</span> |
| <Link id="m-withincaves" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/teleportcoststructure">{"TeleportCostStructure"}</Link>{" withinCaves"}</code> | <span className="api-desc">Cost structure for teleports between two cave layers.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration-2" /><code>{"float AnimationDuration { get; }"}</code> | <span className="api-desc">Duration of the teleporter repair animation.</span> |
| <Link id="m-basematerial-2" /><code>{"Material BaseMaterial { get; }"}</code> | <span className="api-desc">Material for the repair animation.</span> |
| <Link id="m-fadeincurve-2" /><code>{"AnimationCurve FadeInCurve { get; }"}</code> | <span className="api-desc">Fade in curve for the repair animation.</span> |
| <Link id="m-fadeoutcurve-2" /><code>{"AnimationCurve FadeOutCurve { get; }"}</code> | <span className="api-desc">Fade out curve for the repair animation.</span> |
| <Link id="m-fuelprefab-2" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" FuelPrefab { get; }"}</code> | <span className="api-desc">The fuel item prefab.</span> |
| <Link id="m-localsoundcooldown-2" /><code>{"float LocalSoundCooldown { get; set; }"}</code> | <span className="api-desc">Seconds (default 4) before the local player can hear the teleport sound again.</span> |
| <Link id="m-teleportdelay-2" /><code>{"float TeleportDelay { get; }"}</code> | <span className="api-desc">Seconds (default 1) between the departure effect and the player being moved. The screen fades for half of it.</span> |
| <Link id="m-teleportsoundeffect-2" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" TeleportSoundEffect { get; }"}</code> | <span className="api-desc">Sound played when a player teleports.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculatecost" /><code>{"static void CalculateCost(int fromLayer, int targetLayer, out int fromCost, out int toCost)"}</code> | <span className="api-desc">Fuel cost at each end for a trip between two layers (0 is the surface). Uses the from-surface, to-surface or within-caves cost table.</span> |
| <Link id="m-playeffects" /><code>{"static void PlayEffects("}<Link to="/mod/game-api/types/alta-world-generation/teleporteffectargument">{"TeleportEffectArgument"}</Link>{" effectArgument)"}</code> | <span className="api-desc">Client: spawns the arrive or depart effect for a surface or cave teleport at the given position.</span> |

## Used in

Members of other types that take, return or hold a `CaveTeleportSettings`:

<div className="api-used-in">

[`CaveTeleporterReplacerAnimator.settings`](/mod/game-api/types/global-c-d/caveteleporterreplaceranimator#m-settings).

</div>
