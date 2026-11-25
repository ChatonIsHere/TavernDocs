---
title: "LiquidSurfaceVisual"
description: "abstract class LiquidSurfaceVisual in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidSurfaceVisual

An **abstract class** in `Root.Township`, `Alta.Liquid`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`CookingLiquidVisual`](/game-api/types/alta-crafting/cookingliquidvisual), [`BottledLiquid`](/game-api/types/alta-stats-effects/bottledliquid)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected LiquidSurfaceVisual()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-androidcontainerlod0" /><code>{"private "}<Link to="/game-api/types/global-t-x/visibilitydetector">{"VisibilityDetector"}</Link>{" androidContainerLod0"}</code> |  |
| <Link id="m-colorid" /><code>{"private static readonly int ColorId"}</code> |  |
| <Link id="m-containerlod0" /><code>{"private "}<Link to="/game-api/types/global-t-x/visibilitydetector">{"VisibilityDetector"}</Link>{" containerLod0"}</code> |  |
| <Link id="m-dynamicrenderer" /><code>{"private Renderer dynamicRenderer"}</code> |  |
| <Link id="m-dynamicrendererpropertyblock" /><code>{"private MaterialPropertyBlock dynamicRendererPropertyBlock"}</code> |  |
| <Link id="m-dynamicrenderertemplatematerial" /><code>{"private Material dynamicRendererTemplateMaterial"}</code> |  |
| <Link id="m-fullnesschanged" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" fullnessChanged"}</code> |  |
| <Link id="m-fullypouringlimit" /><code>{"private float fullyPouringLimit"}</code> |  |
| <Link id="m-liquidgravity" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidgravity">{"LiquidGravity"}</Link>{" liquidGravity"}</code> |  |
| <Link id="m-lodpropertyblock" /><code>{"private MaterialPropertyBlock lodPropertyBlock"}</code> |  |
| <Link id="m-otherlods" /><code>{"private Renderer[] otherLods"}</code> |  |
| <Link id="m-tip" /><code>{"private float tip"}</code> |  |
| <Link id="m-tippingthreshold" /><code>{"private float tippingThreshold"}</code> |  |
| <Link id="m-tippingvalue" /><code>{"private float tippingValue"}</code> |  |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |  |
| <Link id="m-visualloop" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" visualLoop"}</code> |  |
| <Link id="m-visualtiplimit" /><code>{"private float visualTipLimit"}</code> |  |
| <Link id="m-volumeclamp" /><code>{"private float volumeClamp"}</code> |  |
| <Link id="m-volumecurve" /><code>{"private AnimationCurve volumeCurve"}</code> |  |
| <Link id="m-wasmoving" /><code>{"private bool wasMoving"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dynamicrenderer-2" /><code>{"Renderer DynamicRenderer { get; }"}</code> |  |
| <Link id="m-dynamicrenderermaterial" /><code>{"Material DynamicRendererMaterial { get; internal set; }"}</code> |  |
| <Link id="m-dynamicrendererpropertyblock-2" /><code>{"MaterialPropertyBlock DynamicRendererPropertyBlock { get; }"}</code> |  |
| <Link id="m-fullness" /><code>{"float Fullness { get; private set; }"}</code> |  |
| <Link id="m-iscontainervisible" /><code>{"bool IsContainerVisible { get; private set; }"}</code> |  |
| <Link id="m-iscontainingliquid" /><code>{"bool IsContainingLiquid { get; private set; }"}</code> |  |
| <Link id="m-isfullypouring" /><code>{"bool IsFullyPouring { get; }"}</code> |  |
| <Link id="m-ismoving" /><code>{"bool IsMoving { get; private set; }"}</code> |  |
| <Link id="m-isusingupdateloop" /><code>{"virtual bool IsUsingUpdateLoop { get; }"}</code> |  |
| <Link id="m-liquid" /><code><Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" Liquid { get; private set; }"}</code> |  |
| <Link id="m-liquidgravity-2" /><code><Link to="/game-api/types/alta-stats-effects/liquidgravity">{"LiquidGravity"}</Link>{" "}<Link to="/game-api/types/alta-stats-effects/liquidgravity">{"LiquidGravity"}</Link>{" { get; }"}</code> |  |
| <Link id="m-otherrendererlods" /><code>{"List<Renderer> OtherRendererLODs { get; }"}</code> |  |
| <Link id="m-tippingthreshold-2" /><code>{"float TippingThreshold { get; set; }"}</code> |  |
| <Link id="m-visualtiplimit-2" /><code>{"float VisualTipLimit { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-dynamicrenderermaterialupdated" /><code>{"event Action DynamicRendererMaterialUpdated"}</code> |  |
| <Link id="m-fullnesschanged-2" /><code>{"event Action<float> FullnessChanged"}</code> |  |
| <Link id="m-liquidchanged" /><code>{"event "}<Link to="/game-api/types/alta-stats-effects/liquiddataeventhandler">{"LiquidDataEventHandler"}</Link>{" LiquidChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setfullness" /><code>{"virtual void SetFullness(float fullness)"}</code> |  |
| <Link id="m-setliquid" /><code>{"virtual void SetLiquid("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-fixedupdate" /><code>{"protected virtual void FixedUpdate()"}</code> |  |
| <Link id="m-handleinvisible" /><code>{"protected virtual void HandleInvisible()"}</code> |  |
| <Link id="m-handlevisible" /><code>{"protected virtual void HandleVisible()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"protected virtual void OnEnable()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
| <Link id="m-setlodrendererpropertyblockfromliquid" /><code>{"protected abstract void SetLODRendererPropertyBlockFromLiquid(MaterialPropertyBlock propertyBlock, "}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> |  |
| <Link id="m-setmaterialsacordingtoliquid" /><code>{"protected void SetMaterialsAcordingToLiquid("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> |  |
| <Link id="m-setpropertyblockfromliquid" /><code>{"protected abstract void SetPropertyBlockFromLiquid(MaterialPropertyBlock propertyBlock, "}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> |  |
| <Link id="m-setupmaterialfromliquidvisualsettings" /><code>{"protected abstract Material SetupMaterialFromLiquidVisualSettings("}<Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" visualSettings, Material materialTemplate)"}</code> |  |
| <Link id="m-updatevisual" /><code>{"protected abstract void UpdateVisual()"}</code> |  |

## Used in

Members of other types that take, return or hold a `LiquidSurfaceVisual`:

[`ILiquidContainer.SurfaceVisual`](/game-api/types/alta-stats-effects/iliquidcontainer#m-surfacevisual), [`LiquidContainer.surfaceVisual`](/game-api/types/alta-stats-effects/liquidcontainer#m-surfacevisual), [`LiquidContainer.SurfaceVisual`](/game-api/types/alta-stats-effects/liquidcontainer#m-surfacevisual-2), [`PickupLiquidContainerEnabler.surfaceVisual`](/game-api/types/alta-stats-effects/pickupliquidcontainerenabler#m-surfacevisual), [`StaticLiquidContainer.Alta.Liquid.ILiquidContainer.SurfaceVisual`](/game-api/types/alta-stats-effects/staticliquidcontainer#m-alta-liquid-iliquidcontainer-surfacevisual).
