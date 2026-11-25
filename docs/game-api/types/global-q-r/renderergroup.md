---
title: "RendererGroup"
description: "class RendererGroup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RendererGroup

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`ComponentGroup<Renderer>`](/game-api/types/global-c-d/componentgroup-t), [`IReferenceRenderer`](/game-api/types/global-i-l/ireferencerenderer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RendererGroup()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-albedoalpha" /><code>{"private float albedoAlpha"}</code> |  |
| <Link id="m-isinstanced" /><code>{"private bool isInstanced"}</code> |  |
| <Link id="m-layer" /><code>{"private int layer"}</code> |  |
| <Link id="m-receiveshadows" /><code>{"private bool receiveShadows"}</code> |  |
| <Link id="m-shadowcastingmode" /><code>{"private ShadowCastingMode shadowCastingMode"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-albedoalpha-2" /><code>{"float AlbedoAlpha { get; set; }"}</code> |  |
| <Link id="m-layer-2" /><code>{"int Layer { get; set; }"}</code> |  |
| <Link id="m-receiveshadows-2" /><code>{"bool ReceiveShadows { get; set; }"}</code> |  |
| <Link id="m-shadowcastingmode-2" /><code>{"ShadowCastingMode ShadowCastingMode { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setasmaterialinstances" /><code>{"void SetAsMaterialInstances()"}</code> |  |
| <Link id="m-updatematerialfloat" /><code>{"void UpdateMaterialFloat(string floatName, float value)"}</code> |  |
| <Link id="m-updatematerialfloat-2" /><code>{"void UpdateMaterialFloat(int floatID, float value)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-updaterenderers" /><code>{"private void IReferenceRenderer.UpdateRenderers(Renderer[] oldFirstRenderers, Renderer[] newFirstRenderers)"}</code> |  |

## Used in

Members of other types that take, return or hold a `RendererGroup`:

[`ActionItem.renderersToMaterialize`](/game-api/types/global-a-b/actionitem#m-rendererstomaterialize), [`ActionItem.RenderersToMaterialize`](/game-api/types/global-a-b/actionitem#m-rendererstomaterialize-2), [`LevelSelector.baseRendererGroup`](/game-api/types/alta-world-generation/levelselector#m-baserenderergroup), [`GhostHandController.ghostHandRenderers`](/game-api/types/alta-player/ghosthandcontroller#m-ghosthandrenderers), [`GhostHandController.GhostHandRenderers`](/game-api/types/alta-player/ghosthandcontroller#m-ghosthandrenderers-2), [`DeathEffect.renderers`](/game-api/types/alta-intelligence/deatheffect#m-renderers), [`HandCamera.renderersToMaterialize`](/game-api/types/alta-customization/handcamera#m-rendererstomaterialize), [`RemoteObiturator.rendererGroup`](/game-api/types/alta-customization/remoteobiturator#m-renderergroup), [`CaveTeleporterReplacer.renderers`](/game-api/types/global-c-d/caveteleporterreplacer#m-renderers), [`CaveTeleporterReplacerAnimator.AnimateReplace`](/game-api/types/global-c-d/caveteleporterreplaceranimator#m-animatereplace), [`CaveTeleporterReplacerAnimator.Animation`](/game-api/types/global-c-d/caveteleporterreplaceranimator#m-animation), [`CaveTeleporterReplacerAnimator.CaveTeleporterReplacerAnimator`](/game-api/types/global-c-d/caveteleporterreplaceranimator#m-ctor), [`CaveTeleporterReplacerAnimator.ObjectHandler.ObjectHandler`](/game-api/types/global-c-d/caveteleporterreplaceranimator-objecthandler#m-ctor), [`DynamicObjectCombiner.addResultsTo`](/game-api/types/global-c-d/dynamicobjectcombiner#m-addresultsto), [`FlyCamPlayer.rendererGroup`](/game-api/types/global-e-h/flycamplayer#m-renderergroup), [`PropertyBlockColorAccessor.rendererGroup`](/game-api/types/global-p/propertyblockcoloraccessor#m-renderergroup), [`RendererMaterializer.renderersToAdd`](/game-api/types/global-q-r/renderermaterializer#m-rendererstoadd).
