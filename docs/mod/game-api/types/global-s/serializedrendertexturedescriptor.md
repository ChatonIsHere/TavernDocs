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
| <Link id="m-ctor" /><code>{"SerializedRenderTextureDescriptor()"}</code> | <span className="api-desc">Creates a `SerializedRenderTextureDescriptor` with default values.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-antialiasing" /><code>{"private int antiAliasing"}</code> | <span className="api-desc">Backing field for `AntiAliasing`.</span> |
| <Link id="m-depthbuffer" /><code>{"private int depthBuffer"}</code> | <span className="api-desc">Backing field for `DepthBuffer`.</span> |
| <Link id="m-format" /><code>{"private RenderTextureFormat format"}</code> | <span className="api-desc">Backing field for `Format`.</span> |
| <Link id="m-height" /><code>{"private int height"}</code> | <span className="api-desc">Backing field for `Height`.</span> |
| <Link id="m-readwrite" /><code>{"private RenderTextureReadWrite readWrite"}</code> | <span className="api-desc">Backing field for `ReadWrite`.</span> |
| <Link id="m-width" /><code>{"private int width"}</code> | <span className="api-desc">Backing field for `Width`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-antialiasing-2" /><code>{"int AntiAliasing { get; set; }"}</code> | <span className="api-desc">MSAA sample count (default 8).</span> |
| <Link id="m-depthbuffer-2" /><code>{"int DepthBuffer { get; set; }"}</code> | <span className="api-desc">Depth buffer bits (default 24).</span> |
| <Link id="m-format-2" /><code>{"RenderTextureFormat Format { get; set; }"}</code> | <span className="api-desc">Render texture format.</span> |
| <Link id="m-height-2" /><code>{"int Height { get; set; }"}</code> | <span className="api-desc">Height in pixels (default 1024).</span> |
| <Link id="m-readwrite-2" /><code>{"RenderTextureReadWrite ReadWrite { get; set; }"}</code> | <span className="api-desc">Colour space conversion (default linear).</span> |
| <Link id="m-width-2" /><code>{"int Width { get; set; }"}</code> | <span className="api-desc">Width in pixels (default 1024).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettemporary" /><code>{"RenderTexture GetTemporary()"}</code> | <span className="api-desc">Gets a temporary render texture with these settings from Unity's pool; release it with `RenderTexture.ReleaseTemporary`.</span> |

## Used in

Members of other types that take, return or hold a `SerializedRenderTextureDescriptor`:

<div className="api-used-in">

[`PageRenderer.descriptor`](/mod/game-api/types/alta-items/pagerenderer#m-descriptor), [`RenderTextureGetter.descriptor`](/mod/game-api/types/global-q-r/rendertexturegetter#m-descriptor).

</div>
