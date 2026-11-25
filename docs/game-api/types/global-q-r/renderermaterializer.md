---
title: "RendererMaterializer"
description: "class RendererMaterializer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RendererMaterializer

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RendererMaterializer()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-dissolvetexture" /><code>{"private Texture dissolveTexture"}</code> |
| <Link id="m-rendererstoadd" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" renderersToAdd"}</code> |
| <Link id="m-shader" /><code>{"private Shader shader"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-handler" /><code><Link to="/game-api/types/global-q-r/renderermaterializerhandler">{"RendererMaterializerHandler"}</Link>{" Handler { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-demateralizerenderers" /><code>{"void DemateralizeRenderers(float duration, Action animationFinishedCallback = null)"}</code> |
| <Link id="m-materializerenderers" /><code>{"void MaterializeRenderers(float duration, Action animationFinishedCallback = null)"}</code> |
| <Link id="m-settargetobject" /><code>{"void SetTargetObject(Transform rendererParent)"}</code> |
| <Link id="m-settargets" /><code>{"void SetTargets(IEnumerable<Renderer> renderers)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `RendererMaterializer`:

[`ActionItem.materializer`](/game-api/types/global-a-b/actionitem#m-materializer), [`ActionItem.Materializer`](/game-api/types/global-a-b/actionitem#m-materializer-2), [`HandCamera.materializer`](/game-api/types/alta-customization/handcamera#m-materializer), [`EquipmentRoomAnimator.dummyMaterializer`](/game-api/types/global-e-h/equipmentroomanimator#m-dummymaterializer).
