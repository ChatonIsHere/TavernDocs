---
title: "CaveTeleportSettings"
description: "class CaveTeleportSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveTeleportSettings

A **class** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GlobalSettings<CaveTeleportSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`CaveTeleportSettings`](/game-api/types/alta-world-generation/caveteleportsettings)
- **Attributes** `CreateAssetMenu`, `GlobalSettings`
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveTeleportSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> |  |
| <Link id="m-arriveatcaveeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" arriveAtCaveEffect"}</code> |  |
| <Link id="m-arriveatsurfaceeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" arriveAtSurfaceEffect"}</code> |  |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> |  |
| <Link id="m-departfromcaveeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" departFromCaveEffect"}</code> |  |
| <Link id="m-departfromsurfaceeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" departFromSurfaceEffect"}</code> |  |
| <Link id="m-fadeincurve" /><code>{"private AnimationCurve fadeInCurve"}</code> |  |
| <Link id="m-fadeoutcurve" /><code>{"private AnimationCurve fadeOutCurve"}</code> |  |
| <Link id="m-fromsurface" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/teleportcoststructure">{"TeleportCostStructure"}</Link>{" fromSurface"}</code> |  |
| <Link id="m-fuelprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" fuelPrefab"}</code> |  |
| <Link id="m-localsoundcooldown" /><code>{"private float localSoundCooldown"}</code> |  |
| <Link id="m-teleportdelay" /><code>{"private float teleportDelay"}</code> |  |
| <Link id="m-teleportsoundeffect" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" teleportSoundEffect"}</code> |  |
| <Link id="m-tosurface" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/teleportcoststructure">{"TeleportCostStructure"}</Link>{" toSurface"}</code> |  |
| <Link id="m-withincaves" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/teleportcoststructure">{"TeleportCostStructure"}</Link>{" withinCaves"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration-2" /><code>{"float AnimationDuration { get; }"}</code> |  |
| <Link id="m-basematerial-2" /><code>{"Material BaseMaterial { get; }"}</code> |  |
| <Link id="m-fadeincurve-2" /><code>{"AnimationCurve FadeInCurve { get; }"}</code> |  |
| <Link id="m-fadeoutcurve-2" /><code>{"AnimationCurve FadeOutCurve { get; }"}</code> |  |
| <Link id="m-fuelprefab-2" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" FuelPrefab { get; }"}</code> |  |
| <Link id="m-localsoundcooldown-2" /><code>{"float LocalSoundCooldown { get; set; }"}</code> |  |
| <Link id="m-teleportdelay-2" /><code>{"float TeleportDelay { get; }"}</code> |  |
| <Link id="m-teleportsoundeffect-2" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" TeleportSoundEffect { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculatecost" /><code>{"static void CalculateCost(int fromLayer, int targetLayer, out int fromCost, out int toCost)"}</code> |  |
| <Link id="m-playeffects" /><code>{"static void PlayEffects("}<Link to="/game-api/types/alta-world-generation/teleporteffectargument">{"TeleportEffectArgument"}</Link>{" effectArgument)"}</code> |  |

## Used in

Members of other types that take, return or hold a `CaveTeleportSettings`:

[`CaveTeleporterReplacerAnimator.settings`](/game-api/types/global-c-d/caveteleporterreplaceranimator#m-settings).
