---
title: "RenderTextureGetter"
description: "Client: borrows a temporary render texture on request and hands it to a material and/or camera; releases it on clear or destroy."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RenderTextureGetter

A **class** in `Root.Township`, the global namespace.

Client: borrows a temporary render texture on request and hands it to a material and/or camera; releases it on clear or destroy.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RenderTextureGetter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cameratorender" /><code>{"private Camera cameraToRender"}</code> | <span className="api-desc">Optional camera whose target texture is set.</span> |
| <Link id="m-descriptor" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serializedrendertexturedescriptor">{"SerializedRenderTextureDescriptor"}</Link>{" descriptor"}</code> | <span className="api-desc">Settings for the texture to create.</span> |
| <Link id="m-materialindex" /><code>{"private int materialIndex"}</code> | <span className="api-desc">Shader property ID for `materialKeyword`.</span> |
| <Link id="m-materialkeyword" /><code>{"private string materialKeyword"}</code> | <span className="api-desc">Material texture property to set, `_MainTex` by default.</span> |
| <Link id="m-materialtosettexture" /><code>{"private Material materialToSetTexture"}</code> | <span className="api-desc">Optional material that gets the texture.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-rendertexture" /><code>{"RenderTexture RenderTexture { get; private set; }"}</code> | <span className="api-desc">The texture currently held, or null.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onrendertextureupdated" /><code>{"event Action<RenderTexture> onRenderTextureUpdated"}</code> | <span className="api-desc">Fired with the new texture (or null) when it changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Releases the texture and tells listeners it's gone. Skipped when headless.</span> |
| <Link id="m-gettexture" /><code>{"void GetTexture()"}</code> | <span className="api-desc">Gets a temporary texture from the descriptor if there isn't one. Skipped when headless.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Wires the material texture and camera target to update when the texture changes.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Releases the texture.</span> |
| <Link id="m-settexture" /><code>{"private void SetTexture(RenderTexture renderTexture)"}</code> | <span className="api-desc">Stores the texture and fires `onRenderTextureUpdated`.</span> |

</details>
