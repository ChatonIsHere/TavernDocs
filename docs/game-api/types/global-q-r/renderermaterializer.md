---
title: "RendererMaterializer"
description: "Plays a dissolve in or out on a set of renderers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RendererMaterializer

A **class** in `Root.Township`, no namespace.

Plays a dissolve in or out on a set of renderers. On the server it only calls the finish callback after the duration.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RendererMaterializer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dissolvetexture" /><code>{"private Texture dissolveTexture"}</code> | Noise texture used for the dissolve. |
| <Link id="m-rendererstoadd" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" renderersToAdd"}</code> | Renderer group added as targets on start. |
| <Link id="m-shader" /><code>{"private Shader shader"}</code> | Dissolve shader. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code><Link to="/game-api/types/global-q-r/renderermaterializerhandler">{"RendererMaterializerHandler"}</Link>{" Handler { get; private set; }"}</code> | The handler that runs the effect. Null on the server. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-demateralizerenderers" /><code>{"void DemateralizeRenderers(float duration, Action animationFinishedCallback = null)"}</code> | Dissolves the renderers out over the duration, then calls the callback. |
| <Link id="m-materializerenderers" /><code>{"void MaterializeRenderers(float duration, Action animationFinishedCallback = null)"}</code> | Dissolves the renderers in over the duration, then calls the callback. |
| <Link id="m-settargetobject" /><code>{"void SetTargetObject(Transform rendererParent)"}</code> | Client: targets every renderer under the given transform. |
| <Link id="m-settargets" /><code>{"void SetTargets(IEnumerable<Renderer> renderers)"}</code> | Client: targets the given renderers. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Client: makes the handler and adds the renderers from `renderersToAdd`. |

</details>

## Used in

Members of other types that take, return or hold a `RendererMaterializer`:

[`ActionItem.materializer`](/game-api/types/global-a-b/actionitem#m-materializer), [`ActionItem.Materializer`](/game-api/types/global-a-b/actionitem#m-materializer-2), [`HandCamera.materializer`](/game-api/types/alta-customization/handcamera#m-materializer), [`EquipmentRoomAnimator.dummyMaterializer`](/game-api/types/global-e-h/equipmentroomanimator#m-dummymaterializer).
