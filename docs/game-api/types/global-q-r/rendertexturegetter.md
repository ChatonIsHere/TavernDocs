---
title: "RenderTextureGetter"
description: "Client: borrows a temporary render texture on request and hands it to a material and/or camera; releases it on clear or destroy."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RenderTextureGetter

A **class** in `Root.Township`, no namespace.

Client: borrows a temporary render texture on request and hands it to a material and/or camera; releases it on clear or destroy.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RenderTextureGetter()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cameratorender" /><code>{"private Camera cameraToRender"}</code> | Optional camera whose target texture is set. |
| <Link id="m-descriptor" /><code>{"private "}<Link to="/game-api/types/global-s/serializedrendertexturedescriptor">{"SerializedRenderTextureDescriptor"}</Link>{" descriptor"}</code> | Settings for the texture to create. |
| <Link id="m-materialindex" /><code>{"private int materialIndex"}</code> | Shader property ID for `materialKeyword`. |
| <Link id="m-materialkeyword" /><code>{"private string materialKeyword"}</code> | Material texture property to set, `_MainTex` by default. |
| <Link id="m-materialtosettexture" /><code>{"private Material materialToSetTexture"}</code> | Optional material that gets the texture. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-rendertexture" /><code>{"RenderTexture RenderTexture { get; private set; }"}</code> | The texture currently held, or null. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onrendertextureupdated" /><code>{"event Action<RenderTexture> onRenderTextureUpdated"}</code> | Fired with the new texture (or null) when it changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Releases the texture and tells listeners it's gone. Skipped when headless. |
| <Link id="m-gettexture" /><code>{"void GetTexture()"}</code> | Gets a temporary texture from the descriptor if there isn't one. Skipped when headless. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Wires the material texture and camera target to update when the texture changes. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Releases the texture. |
| <Link id="m-settexture" /><code>{"private void SetTexture(RenderTexture renderTexture)"}</code> | Stores the texture and fires `onRenderTextureUpdated`. |

</details>
