---
title: "CookingLiquidVisual"
description: "Liquid surface visual for cooking containers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingLiquidVisual

A **class** in `Root.Township`, `Alta.Cooking`.

Liquid surface visual for cooking containers. Moves the surface with fullness, keeps it level, and runs boiling particles and waves from the temperature.

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
| <Link id="m-materialcreator" /><code>{"static "}<Link to="/game-api/types/alta-stats-effects/liquidsurfacematerialcreator">{"LiquidSurfaceMaterialCreator"}</Link>{" MaterialCreator { get; }"}</code> | Shared creator for the surface material and its shader property ids. |
| <Link id="m-surface-2" /><code>{"Transform Surface { get; }"}</code> | The surface plane transform. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setfullness" /><code>{"override void SetFullness(float newFullness)"}</code> | Moves the surface between the min and max plane heights. Releases boiling particles when empty and clears them when the level drops by 0.1 or more. |
| <Link id="m-setliquid" /><code>{"override void SetLiquid("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | Sets the liquid and sets the boiling particles up for it. |
| <Link id="m-updateboilingemissionfromtemperature" /><code>{"void UpdateBoilingEmissionFromTemperature(float temperature, bool isForced = false)"}</code> | Spawns, updates or releases boiling particles and sets wave speed and strength from the temperature. |
| <Link id="m-attemptreleaseboilingparticles" /><code>{"private void AttemptReleaseBoilingParticles()"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Finds the parent `ILiquidContainer`. |
| <Link id="m-checkcreateordeleteboilingparticles" /><code>{"private void CheckCreateOrDeleteBoilingParticles(float valueToCheck)"}</code> |  |
| <Link id="m-ondisable" /><code>{"protected override void OnDisable()"}</code> | Resets the surface rotation to the container's up. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: makes sure there is at least one boiling particle stage. |
| <Link id="m-setlodrendererpropertyblockfromliquid" /><code>{"protected override void SetLODRendererPropertyBlockFromLiquid(MaterialPropertyBlock propertyBlock, "}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | Sets the LOD renderer colour to the liquid's tinted colour. |
| <Link id="m-setpropertyblockfromliquid" /><code>{"protected override void SetPropertyBlockFromLiquid(MaterialPropertyBlock propertyBlock, "}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | Sets the surface colour to the liquid's tinted colour. |
| <Link id="m-setupmaterialfromliquidvisualsettings" /><code>{"protected override Material SetupMaterialFromLiquidVisualSettings("}<Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" visualSettings, Material materialTemplate)"}</code> | Builds the surface material from the liquid's visual settings. |
| <Link id="m-updatevisual" /><code>{"protected override void UpdateVisual()"}</code> | Keeps the surface facing `LiquidGravity.VisualUp`. |

## Used in

Members of other types that take, return or hold a `CookingLiquidVisual`:

[`CookingLiquid.potLiquid`](/game-api/types/alta-crafting/cookingliquid#m-potliquid), [`CookingLiquidVisualTippingPointController.liquidVisual`](/game-api/types/alta-crafting/cookingliquidvisualtippingpointcontroller#m-liquidvisual).
