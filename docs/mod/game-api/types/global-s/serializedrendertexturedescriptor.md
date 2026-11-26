---
title: "SerializedRenderTextureDescriptor"
description: "Inspector-editable render texture settings that can hand out a temporary render texture."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializedRenderTextureDescriptor

A **class** in `Root.Township`, the global namespace.

Inspector-editable render texture settings that can hand out a temporary render texture.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializedRenderTextureDescriptor()"}</code> | Creates a `SerializedRenderTextureDescriptor` with default values. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-antialiasing" /><code>{"private int antiAliasing"}</code> | Backing field for `AntiAliasing`. |
| <Link id="m-depthbuffer" /><code>{"private int depthBuffer"}</code> | Backing field for `DepthBuffer`. |
| <Link id="m-format" /><code>{"private RenderTextureFormat format"}</code> | Backing field for `Format`. |
| <Link id="m-height" /><code>{"private int height"}</code> | Backing field for `Height`. |
| <Link id="m-readwrite" /><code>{"private RenderTextureReadWrite readWrite"}</code> | Backing field for `ReadWrite`. |
| <Link id="m-width" /><code>{"private int width"}</code> | Backing field for `Width`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-antialiasing-2" /><code>{"int AntiAliasing { get; set; }"}</code> | MSAA sample count (default 8). |
| <Link id="m-depthbuffer-2" /><code>{"int DepthBuffer { get; set; }"}</code> | Depth buffer bits (default 24). |
| <Link id="m-format-2" /><code>{"RenderTextureFormat Format { get; set; }"}</code> | Render texture format. |
| <Link id="m-height-2" /><code>{"int Height { get; set; }"}</code> | Height in pixels (default 1024). |
| <Link id="m-readwrite-2" /><code>{"RenderTextureReadWrite ReadWrite { get; set; }"}</code> | Colour space conversion (default linear). |
| <Link id="m-width-2" /><code>{"int Width { get; set; }"}</code> | Width in pixels (default 1024). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettemporary" /><code>{"RenderTexture GetTemporary()"}</code> | Gets a temporary render texture with these settings from Unity's pool; release it with `RenderTexture.ReleaseTemporary`. |

## Used in

Members of other types that take, return or hold a `SerializedRenderTextureDescriptor`:

[`PageRenderer.descriptor`](/mod/game-api/types/alta-items/pagerenderer#m-descriptor), [`RenderTextureGetter.descriptor`](/mod/game-api/types/global-q-r/rendertexturegetter#m-descriptor).
