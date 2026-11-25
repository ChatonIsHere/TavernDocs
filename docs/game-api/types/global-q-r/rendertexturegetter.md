---
title: "RenderTextureGetter"
description: "class RenderTextureGetter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RenderTextureGetter

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RenderTextureGetter()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-cameratorender" /><code>{"private Camera cameraToRender"}</code> |
| <Link id="m-descriptor" /><code>{"private "}<Link to="/game-api/types/global-s/serializedrendertexturedescriptor">{"SerializedRenderTextureDescriptor"}</Link>{" descriptor"}</code> |
| <Link id="m-materialindex" /><code>{"private int materialIndex"}</code> |
| <Link id="m-materialkeyword" /><code>{"private string materialKeyword"}</code> |
| <Link id="m-materialtosettexture" /><code>{"private Material materialToSetTexture"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-rendertexture" /><code>{"RenderTexture RenderTexture { get; private set; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-onrendertextureupdated" /><code>{"event Action<RenderTexture> onRenderTextureUpdated"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |
| <Link id="m-gettexture" /><code>{"void GetTexture()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-settexture" /><code>{"private void SetTexture(RenderTexture renderTexture)"}</code> |

</details>
