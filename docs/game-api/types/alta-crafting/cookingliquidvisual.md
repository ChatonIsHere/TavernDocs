---
title: "CookingLiquidVisual"
description: "class CookingLiquidVisual in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingLiquidVisual

A **class** in `Root.Township`, `Alta.Cooking`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`LiquidSurfaceVisual`](/game-api/types/alta-stats-effects/liquidsurfacevisual)
- **Nested types** [`BoilingParticlesStageSetting`](/game-api/types/alta-crafting/cookingliquidvisual-boilingparticlesstagesetting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingLiquidVisual()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-boilingparticles" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/boilingparticles">{"BoilingParticles"}</Link>{" boilingParticles"}</code> |  |
| <Link id="m-boilingparticlesemissionmultiplier" /><code>{"private AnimationCurve boilingParticlesEmissionMultiplier"}</code> |  |
| <Link id="m-boilingparticlesparent" /><code>{"private Transform boilingParticlesParent"}</code> |  |
| <Link id="m-boilingparticlesstages" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingliquidvisual-boilingparticlesstagesetting">{"CookingLiquidVisual.BoilingParticlesStageSetting"}</Link>{"[] boilingParticlesStages"}</code> |  |
| <Link id="m-container" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> |  |
| <Link id="m-isusingboilingparticles" /><code>{"private bool isUsingBoilingParticles"}</code> |  |
| <Link id="m-maximumplaney" /><code>{"private float maximumPlaneY"}</code> |  |
| <Link id="m-minimumplaney" /><code>{"private float minimumPlaneY"}</code> |  |
| <Link id="m-surface" /><code>{"private Transform surface"}</code> |  |
| <Link id="m-topofliquidnotrotating" /><code>{"private Transform topOfLiquidNotRotating"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-materialcreator" /><code>{"static "}<Link to="/game-api/types/alta-stats-effects/liquidsurfacematerialcreator">{"LiquidSurfaceMaterialCreator"}</Link>{" MaterialCreator { get; }"}</code> |  |
| <Link id="m-surface-2" /><code>{"Transform Surface { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setfullness" /><code>{"override void SetFullness(float newFullness)"}</code> |  |
| <Link id="m-setliquid" /><code>{"override void SetLiquid("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> |  |
| <Link id="m-updateboilingemissionfromtemperature" /><code>{"void UpdateBoilingEmissionFromTemperature(float temperature, bool isForced = false)"}</code> |  |
| <Link id="m-attemptreleaseboilingparticles" /><code>{"private void AttemptReleaseBoilingParticles()"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-checkcreateordeleteboilingparticles" /><code>{"private void CheckCreateOrDeleteBoilingParticles(float valueToCheck)"}</code> |  |
| <Link id="m-ondisable" /><code>{"protected override void OnDisable()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |
| <Link id="m-setlodrendererpropertyblockfromliquid" /><code>{"protected override void SetLODRendererPropertyBlockFromLiquid(MaterialPropertyBlock propertyBlock, "}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> |  |
| <Link id="m-setpropertyblockfromliquid" /><code>{"protected override void SetPropertyBlockFromLiquid(MaterialPropertyBlock propertyBlock, "}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> |  |
| <Link id="m-setupmaterialfromliquidvisualsettings" /><code>{"protected override Material SetupMaterialFromLiquidVisualSettings("}<Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" visualSettings, Material materialTemplate)"}</code> |  |
| <Link id="m-updatevisual" /><code>{"protected override void UpdateVisual()"}</code> |  |

## Used in

Members of other types that take, return or hold a `CookingLiquidVisual`:

[`CookingLiquid.potLiquid`](/game-api/types/alta-crafting/cookingliquid#m-potliquid), [`CookingLiquidVisualTippingPointController.liquidVisual`](/game-api/types/alta-crafting/cookingliquidvisualtippingpointcontroller#m-liquidvisual).
