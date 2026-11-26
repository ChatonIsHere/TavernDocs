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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`LiquidSurfaceVisual`](/mod/game-api/types/alta-stats-effects/liquidsurfacevisual)
- **Nested types** [`BoilingParticlesStageSetting`](/mod/game-api/types/alta-crafting/cookingliquidvisual-boilingparticlesstagesetting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingLiquidVisual()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boilingparticles" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/boilingparticles">{"BoilingParticles"}</Link>{" boilingParticles"}</code> | <span className="api-desc">Pooled boiling particles in use, or null.</span> |
| <Link id="m-boilingparticlesemissionmultiplier" /><code>{"private AnimationCurve boilingParticlesEmissionMultiplier"}</code> | <span className="api-desc">Curve from liquid temperature to boiling particle emission.</span> |
| <Link id="m-boilingparticlesparent" /><code>{"private Transform boilingParticlesParent"}</code> | <span className="api-desc">Transform the boiling particles are spawned under.</span> |
| <Link id="m-boilingparticlesstages" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookingliquidvisual-boilingparticlesstagesetting">{"CookingLiquidVisual.BoilingParticlesStageSetting"}</Link>{"[] boilingParticlesStages"}</code> | <span className="api-desc">Per-stage lifetime and height offset settings passed to the boiling particles.</span> |
| <Link id="m-container" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> | <span className="api-desc">The liquid container in the parent, found in `Awake`.</span> |
| <Link id="m-isusingboilingparticles" /><code>{"private bool isUsingBoilingParticles"}</code> | <span className="api-desc">Whether this visual shows boiling particles at all.</span> |
| <Link id="m-maximumplaney" /><code>{"private float maximumPlaneY"}</code> | <span className="api-desc">Local Y of the surface when full.</span> |
| <Link id="m-minimumplaney" /><code>{"private float minimumPlaneY"}</code> | <span className="api-desc">Local Y of the surface when empty.</span> |
| <Link id="m-surface" /><code>{"private Transform surface"}</code> | <span className="api-desc">Backing field for `Surface`; moved up and down with fullness and turned to face visual up.</span> |
| <Link id="m-topofliquidnotrotating" /><code>{"private Transform topOfLiquidNotRotating"}</code> | <span className="api-desc">Optional transform kept at the surface height but not rotated.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-materialcreator" /><code>{"static "}<Link to="/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator">{"LiquidSurfaceMaterialCreator"}</Link>{" MaterialCreator { get; }"}</code> | <span className="api-desc">Shared creator for the surface material and its shader property ids.</span> |
| <Link id="m-surface-2" /><code>{"Transform Surface { get; }"}</code> | <span className="api-desc">The surface plane transform.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setfullness" /><code>{"override void SetFullness(float newFullness)"}</code> | <span className="api-desc">Moves the surface between the min and max plane heights. Releases boiling particles when empty and clears them when the level drops by 0.1 or more.</span> |
| <Link id="m-setliquid" /><code>{"override void SetLiquid("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | <span className="api-desc">Sets the liquid and sets the boiling particles up for it.</span> |
| <Link id="m-updateboilingemissionfromtemperature" /><code>{"void UpdateBoilingEmissionFromTemperature(float temperature, bool isForced = false)"}</code> | <span className="api-desc">Spawns, updates or releases boiling particles and sets wave speed and strength from the temperature.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Finds the parent `ILiquidContainer`.</span> |
| <Link id="m-ondisable" /><code>{"protected override void OnDisable()"}</code> | <span className="api-desc">Resets the surface rotation to the container's up.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: makes sure there is at least one boiling particle stage.</span> |
| <Link id="m-setlodrendererpropertyblockfromliquid" /><code>{"protected override void SetLODRendererPropertyBlockFromLiquid(MaterialPropertyBlock propertyBlock, "}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | <span className="api-desc">Sets the LOD renderer colour to the liquid's tinted colour.</span> |
| <Link id="m-setpropertyblockfromliquid" /><code>{"protected override void SetPropertyBlockFromLiquid(MaterialPropertyBlock propertyBlock, "}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | <span className="api-desc">Sets the surface colour to the liquid's tinted colour.</span> |
| <Link id="m-setupmaterialfromliquidvisualsettings" /><code>{"protected override Material SetupMaterialFromLiquidVisualSettings("}<Link to="/mod/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" visualSettings, Material materialTemplate)"}</code> | <span className="api-desc">Builds the surface material from the liquid's visual settings.</span> |
| <Link id="m-updatevisual" /><code>{"protected override void UpdateVisual()"}</code> | <span className="api-desc">Keeps the surface facing `LiquidGravity.VisualUp`.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attemptreleaseboilingparticles" /><code>{"private void AttemptReleaseBoilingParticles()"}</code> | <span className="api-desc">Returns the boiling particles to the pool, if any are out.</span> |
| <Link id="m-checkcreateordeleteboilingparticles" /><code>{"private void CheckCreateOrDeleteBoilingParticles(float valueToCheck)"}</code> | <span className="api-desc">Gets boiling particles from the pool when emission is above zero and there's liquid, otherwise releases them.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CookingLiquidVisual`:

<div className="api-used-in">

[`CookingLiquid.potLiquid`](/mod/game-api/types/alta-crafting/cookingliquid#m-potliquid), [`CookingLiquidVisualTippingPointController.liquidVisual`](/mod/game-api/types/alta-crafting/cookingliquidvisualtippingpointcontroller#m-liquidvisual).

</div>
