---
title: "RendererGroup"
description: "A group of renderers changed together: layer, shadows, alpha and material floats."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RendererGroup

A **class** in `Root.Township`, the global namespace.

A group of renderers changed together: layer, shadows, alpha and material floats. Enabling or disabling the component shows or hides them all (not on a headless server).

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`ComponentGroup<Renderer>`](/mod/game-api/types/global-c-d/componentgroup-t), [`IReferenceRenderer`](/mod/game-api/types/global-i-l/ireferencerenderer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RendererGroup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-albedoalpha" /><code>{"private float albedoAlpha"}</code> | <span className="api-desc">Backing field for `AlbedoAlpha`, the alpha last applied to the materials.</span> |
| <Link id="m-isinstanced" /><code>{"private bool isInstanced"}</code> | <span className="api-desc">True once the renderers have their own material instances.</span> |
| <Link id="m-layer" /><code>{"private int layer"}</code> | <span className="api-desc">Backing field for `Layer`, the layer last applied to the renderers' objects.</span> |
| <Link id="m-receiveshadows" /><code>{"private bool receiveShadows"}</code> | <span className="api-desc">Backing field for `ReceiveShadows`.</span> |
| <Link id="m-shadowcastingmode" /><code>{"private ShadowCastingMode shadowCastingMode"}</code> | <span className="api-desc">Backing field for `ShadowCastingMode`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-albedoalpha-2" /><code>{"float AlbedoAlpha { get; set; }"}</code> | <span className="api-desc">Sets the alpha of every renderer's shared material colour, hiding renderers below 0.01. Ignored while the component is disabled.</span> |
| <Link id="m-layer-2" /><code>{"int Layer { get; set; }"}</code> | <span className="api-desc">Sets the layer on every renderer's GameObject.</span> |
| <Link id="m-receiveshadows-2" /><code>{"bool ReceiveShadows { get; set; }"}</code> | <span className="api-desc">Sets shadow receiving on every renderer.</span> |
| <Link id="m-shadowcastingmode-2" /><code>{"ShadowCastingMode ShadowCastingMode { get; set; }"}</code> | <span className="api-desc">Sets the shadow casting mode on every renderer.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setasmaterialinstances" /><code>{"void SetAsMaterialInstances()"}</code> | <span className="api-desc">Gives each renderer its own material copy, so later changes do not affect other objects. The copies are cleaned up on destroy.</span> |
| <Link id="m-updatematerialfloat" /><code>{"void UpdateMaterialFloat(string floatName, float value)"}</code> | <span className="api-desc">Sets a float on the shared material of every enabled renderer, by name or property id.</span> |
| <Link id="m-updatematerialfloat-2" /><code>{"void UpdateMaterialFloat(int floatID, float value)"}</code> | <span className="api-desc">Sets a float on the shared material of every enabled renderer, by name or property id.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">If the component starts disabled, hides the renderers as `OnDisable` would.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cleans up the per-renderer material instances if `SetAsMaterialInstances` made them.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Hides every renderer in the group. Does nothing on a headless server.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Shows every renderer in the group. Does nothing on a headless server.</span> |
| <Link id="m-updaterenderers" /><code>{"private void IReferenceRenderer.UpdateRenderers(Renderer[] oldFirstRenderers, Renderer[] newFirstRenderers)"}</code> | <span className="api-desc">Swaps the old first-LOD renderers in the group for the new ones.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RendererGroup`:

<div className="api-used-in">

[`ActionItem.renderersToMaterialize`](/mod/game-api/types/global-a-b/actionitem#m-rendererstomaterialize), [`ActionItem.RenderersToMaterialize`](/mod/game-api/types/global-a-b/actionitem#m-rendererstomaterialize-2), [`LevelSelector.baseRendererGroup`](/mod/game-api/types/alta-world-generation/levelselector#m-baserenderergroup), [`GhostHandController.ghostHandRenderers`](/mod/game-api/types/alta-player/ghosthandcontroller#m-ghosthandrenderers), [`GhostHandController.GhostHandRenderers`](/mod/game-api/types/alta-player/ghosthandcontroller#m-ghosthandrenderers-2), [`DeathEffect.renderers`](/mod/game-api/types/alta-intelligence/deatheffect#m-renderers), [`HandCamera.renderersToMaterialize`](/mod/game-api/types/alta-customization/handcamera#m-rendererstomaterialize), [`RemoteObiturator.rendererGroup`](/mod/game-api/types/alta-customization/remoteobiturator#m-renderergroup), [`CaveTeleporterReplacer.renderers`](/mod/game-api/types/global-c-d/caveteleporterreplacer#m-renderers), [`CaveTeleporterReplacerAnimator.AnimateReplace`](/mod/game-api/types/global-c-d/caveteleporterreplaceranimator#m-animatereplace), [`CaveTeleporterReplacerAnimator.Animation`](/mod/game-api/types/global-c-d/caveteleporterreplaceranimator#m-animation), [`CaveTeleporterReplacerAnimator.CaveTeleporterReplacerAnimator`](/mod/game-api/types/global-c-d/caveteleporterreplaceranimator#m-ctor), [`CaveTeleporterReplacerAnimator.ObjectHandler.ObjectHandler`](/mod/game-api/types/global-c-d/caveteleporterreplaceranimator-objecthandler#m-ctor), [`DynamicObjectCombiner.addResultsTo`](/mod/game-api/types/global-c-d/dynamicobjectcombiner#m-addresultsto), [`FlyCamPlayer.rendererGroup`](/mod/game-api/types/global-e-h/flycamplayer#m-renderergroup), [`PropertyBlockColorAccessor.rendererGroup`](/mod/game-api/types/global-p/propertyblockcoloraccessor#m-renderergroup), [`RendererMaterializer.renderersToAdd`](/mod/game-api/types/global-q-r/renderermaterializer#m-rendererstoadd).

</div>
