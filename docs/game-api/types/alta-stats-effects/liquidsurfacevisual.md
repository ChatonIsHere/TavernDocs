---
title: "LiquidSurfaceVisual"
description: "Base for the liquid surface inside a container."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidSurfaceVisual

An **abstract class** in `Root.Township`, `Alta.Liquid`.

Base for the liquid surface inside a container. It tracks how far the container is tipped (through `LiquidGravity`) and how full it is, and on clients draws the surface. It also stays active on the server, where the tip state is still updated.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`CookingLiquidVisual`](/game-api/types/alta-crafting/cookingliquidvisual), [`BottledLiquid`](/game-api/types/alta-stats-effects/bottledliquid)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected LiquidSurfaceVisual()"}</code> |

## Fields

<details>
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidcontainerlod0" /><code>{"private "}<Link to="/game-api/types/global-t-x/visibilitydetector">{"VisibilityDetector"}</Link>{" androidContainerLod0"}</code> | Visibility detector kept from an older field name; not used in code in this build. |
| <Link id="m-colorid" /><code>{"private static readonly int ColorId"}</code> | Shader ID of `_Color`. |
| <Link id="m-containerlod0" /><code>{"private "}<Link to="/game-api/types/global-t-x/visibilitydetector">{"VisibilityDetector"}</Link>{" containerLod0"}</code> | Visibility detector on the container's main LOD; the surface only updates while it is visible (always on the server). |
| <Link id="m-dynamicrenderer" /><code>{"private Renderer dynamicRenderer"}</code> | The renderer of the moving liquid surface. Backing field for `DynamicRenderer`. |
| <Link id="m-dynamicrendererpropertyblock" /><code>{"private MaterialPropertyBlock dynamicRendererPropertyBlock"}</code> | Property block set on the surface renderer from the current liquid. Backing field for `DynamicRendererPropertyBlock`. |
| <Link id="m-dynamicrenderertemplatematerial" /><code>{"private Material dynamicRendererTemplateMaterial"}</code> | The surface renderer's original material, used as the template for each liquid's material. |
| <Link id="m-fullnesschanged" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" fullnessChanged"}</code> | Event raised with the new fullness value; exposed as `FullnessChanged`. |
| <Link id="m-fullypouringlimit" /><code>{"private float fullyPouringLimit"}</code> | Tip value above which the container counts as fully pouring. |
| <Link id="m-liquidgravity" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidgravity">{"LiquidGravity"}</Link>{" liquidGravity"}</code> | Simulates the liquid sloshing and tipping as the container moves. Backing field for `LiquidGravity`. |
| <Link id="m-lodpropertyblock" /><code>{"private MaterialPropertyBlock lodPropertyBlock"}</code> | Property block set on the lower LOD renderers from the current liquid. |
| <Link id="m-otherlods" /><code>{"private Renderer[] otherLods"}</code> | Renderers for the lower LODs of the liquid; shown only while there is liquid. |
| <Link id="m-tip" /><code>{"private float tip"}</code> | Read-only inspector value showing the current tip. |
| <Link id="m-tippingthreshold" /><code>{"private float tippingThreshold"}</code> | Tip value at which the liquid starts to pour. Backing field for `TippingThreshold`. |
| <Link id="m-tippingvalue" /><code>{"private float tippingValue"}</code> | Read-only inspector value for tipping; not written in this build. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Late update module that runs `UpdateVisual` while the liquid is moving. |
| <Link id="m-visualloop" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" visualLoop"}</code> | Handle of the registered `UpdateVisual` loop. |
| <Link id="m-visualtiplimit" /><code>{"private float visualTipLimit"}</code> | Limit on how far the surface visually tips. Backing field for `VisualTipLimit`. |
| <Link id="m-volumeclamp" /><code>{"private float volumeClamp"}</code> | Fullness is multiplied by this before the volume curve, so the surface never looks fuller than this. |
| <Link id="m-volumecurve" /><code>{"private AnimationCurve volumeCurve"}</code> | Maps the container's fill amount to the visual fullness. |
| <Link id="m-wasmoving" /><code>{"private bool wasMoving"}</code> | Moving state from the last fixed update, used to start and stop the visual loop. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dynamicrenderer-2" /><code>{"Renderer DynamicRenderer { get; }"}</code> | The renderer that draws the moving liquid surface. |
| <Link id="m-dynamicrenderermaterial" /><code>{"Material DynamicRendererMaterial { get; internal set; }"}</code> | Instance material of the dynamic renderer, made in `SetLiquid`. |
| <Link id="m-dynamicrendererpropertyblock-2" /><code>{"MaterialPropertyBlock DynamicRendererPropertyBlock { get; }"}</code> | Property block used on the dynamic renderer. |
| <Link id="m-fullness" /><code>{"float Fullness { get; private set; }"}</code> | How full it looks, 0 to 1, after the volume curve. |
| <Link id="m-iscontainervisible" /><code>{"bool IsContainerVisible { get; private set; }"}</code> | True while the container's LOD 0 is visible. |
| <Link id="m-iscontainingliquid" /><code>{"bool IsContainingLiquid { get; private set; }"}</code> | True above 1% fullness. |
| <Link id="m-isfullypouring" /><code>{"bool IsFullyPouring { get; }"}</code> | True when tipped past the fully pouring limit. |
| <Link id="m-ismoving" /><code>{"bool IsMoving { get; private set; }"}</code> | True while the liquid surface is still moving. |
| <Link id="m-isusingupdateloop" /><code>{"virtual bool IsUsingUpdateLoop { get; }"}</code> | Whether `UpdateVisual` runs while moving. True by default. |
| <Link id="m-liquid" /><code><Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" Liquid { get; private set; }"}</code> | The liquid shown. |
| <Link id="m-liquidgravity-2" /><code><Link to="/game-api/types/alta-stats-effects/liquidgravity">{"LiquidGravity"}</Link>{" "}<Link to="/game-api/types/alta-stats-effects/liquidgravity">{"LiquidGravity"}</Link>{" { get; }"}</code> | Tracks the tip and movement of the liquid. |
| <Link id="m-otherrendererlods" /><code>{"List<Renderer> OtherRendererLODs { get; }"}</code> | Lower LOD renderers for the liquid, shown only when there is liquid. |
| <Link id="m-tippingthreshold-2" /><code>{"float TippingThreshold { get; set; }"}</code> | Tip value at which the container starts to pour. |
| <Link id="m-visualtiplimit-2" /><code>{"float VisualTipLimit { get; set; }"}</code> | Tip limit used for the surface visuals. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-dynamicrenderermaterialupdated" /><code>{"event Action DynamicRendererMaterialUpdated"}</code> | Raised after the materials change for a new liquid. |
| <Link id="m-fullnesschanged-2" /><code>{"event Action<float> FullnessChanged"}</code> | Raised with the new fullness. |
| <Link id="m-liquidchanged" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquiddataeventhandler">{"LiquidDataEventHandler"}</Link>{" LiquidChanged"}</code> | Raised when `SetLiquid` sets a new liquid. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setfullness" /><code>{"virtual void SetFullness(float fullness)"}</code> | Sets how full it is (through the volume curve) and shows or hides the liquid. |
| <Link id="m-setliquid" /><code>{"virtual void SetLiquid("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | Shows a new liquid: sets thickness and materials and raises `LiquidChanged`. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Sets up property blocks and the tip tracker, and listens for the container becoming visible. |
| <Link id="m-fixedupdate" /><code>{"protected virtual void FixedUpdate()"}</code> | Updates the tip tracker, and on clients starts or stops the visual update when movement starts or stops. |
| <Link id="m-handleinvisible" /><code>{"protected virtual void HandleInvisible()"}</code> | Called when the container goes out of view. Stays enabled on the server. |
| <Link id="m-handlevisible" /><code>{"protected virtual void HandleVisible()"}</code> | Called when the container comes into view; enables the visual if there is liquid. |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> | Hides the surface and stops the visual update. |
| <Link id="m-onenable" /><code>{"protected virtual void OnEnable()"}</code> | Resets the tip tracker, shows the surface and starts the visual update on clients. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Pushes inspector changes to the tip tracker while playing. |
| <Link id="m-setlodrendererpropertyblockfromliquid" /><code>{"protected abstract void SetLODRendererPropertyBlockFromLiquid(MaterialPropertyBlock propertyBlock, "}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | Fills a property block for the LOD renderers from a liquid. Subclasses implement it. |
| <Link id="m-setmaterialsacordingtoliquid" /><code>{"protected void SetMaterialsAcordingToLiquid("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | Applies the liquid's material and property blocks to the dynamic and LOD renderers. |
| <Link id="m-setpropertyblockfromliquid" /><code>{"protected abstract void SetPropertyBlockFromLiquid(MaterialPropertyBlock propertyBlock, "}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | Fills a property block from a liquid. Subclasses implement it. |
| <Link id="m-setupmaterialfromliquidvisualsettings" /><code>{"protected abstract Material SetupMaterialFromLiquidVisualSettings("}<Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" visualSettings, Material materialTemplate)"}</code> | Builds the shared material for a liquid visual from the template. Subclasses implement it. |
| <Link id="m-updatevisual" /><code>{"protected abstract void UpdateVisual()"}</code> | Redraws the surface while it moves. Subclasses implement it. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the container visibility events. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step: drops missing renderers from the other LODs list. |

</details>

## Used in

Members of other types that take, return or hold a `LiquidSurfaceVisual`:

[`ILiquidContainer.SurfaceVisual`](/game-api/types/alta-stats-effects/iliquidcontainer#m-surfacevisual), [`LiquidContainer.surfaceVisual`](/game-api/types/alta-stats-effects/liquidcontainer#m-surfacevisual), [`LiquidContainer.SurfaceVisual`](/game-api/types/alta-stats-effects/liquidcontainer#m-surfacevisual-2), [`PickupLiquidContainerEnabler.surfaceVisual`](/game-api/types/alta-stats-effects/pickupliquidcontainerenabler#m-surfacevisual), [`StaticLiquidContainer.Alta.Liquid.ILiquidContainer.SurfaceVisual`](/game-api/types/alta-stats-effects/staticliquidcontainer#m-alta-liquid-iliquidcontainer-surfacevisual).
