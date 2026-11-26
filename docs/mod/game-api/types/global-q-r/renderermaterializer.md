---
title: "RendererMaterializer"
description: "Plays a dissolve in or out on a set of renderers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RendererMaterializer

A **class** in `Root.Township`, the global namespace.

Plays a dissolve in or out on a set of renderers. On the server it only calls the finish callback after the duration.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RendererMaterializer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dissolvetexture" /><code>{"private Texture dissolveTexture"}</code> | <span className="api-desc">Noise texture used for the dissolve.</span> |
| <Link id="m-rendererstoadd" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" renderersToAdd"}</code> | <span className="api-desc">Renderer group added as targets on start.</span> |
| <Link id="m-shader" /><code>{"private Shader shader"}</code> | <span className="api-desc">Dissolve shader.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code><Link to="/mod/game-api/types/global-q-r/renderermaterializerhandler">{"RendererMaterializerHandler"}</Link>{" Handler { get; private set; }"}</code> | <span className="api-desc">The handler that runs the effect. Null on the server.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-demateralizerenderers" /><code>{"void DemateralizeRenderers(float duration, Action animationFinishedCallback = null)"}</code> | <span className="api-desc">Dissolves the renderers out over the duration, then calls the callback.</span> |
| <Link id="m-materializerenderers" /><code>{"void MaterializeRenderers(float duration, Action animationFinishedCallback = null)"}</code> | <span className="api-desc">Dissolves the renderers in over the duration, then calls the callback.</span> |
| <Link id="m-settargetobject" /><code>{"void SetTargetObject(Transform rendererParent)"}</code> | <span className="api-desc">Client: targets every renderer under the given transform.</span> |
| <Link id="m-settargets" /><code>{"void SetTargets(IEnumerable<Renderer> renderers)"}</code> | <span className="api-desc">Client: targets the given renderers.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Client: makes the handler and adds the renderers from `renderersToAdd`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RendererMaterializer`:

<div className="api-used-in">

[`ActionItem.materializer`](/mod/game-api/types/global-a-b/actionitem#m-materializer), [`ActionItem.Materializer`](/mod/game-api/types/global-a-b/actionitem#m-materializer-2), [`HandCamera.materializer`](/mod/game-api/types/alta-customization/handcamera#m-materializer), [`EquipmentRoomAnimator.dummyMaterializer`](/mod/game-api/types/global-e-h/equipmentroomanimator#m-dummymaterializer).

</div>
