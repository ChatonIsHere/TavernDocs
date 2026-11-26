---
title: "DynamicMask"
description: "Paints a UI mask texture from code: stamps RGBA32 textures into a CPU colour buffer, then uploads it with a compute shader."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DynamicMask

A **class** in `Root.Township`, `Alta.UI`.

Paints a UI mask texture from code: stamps RGBA32 textures into a CPU colour buffer, then uploads it with a compute shader. Needs a `Mask` and `RawImage` on the same object.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DynamicMask()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blitshader" /><code>{"private ComputeShader blitShader"}</code> | <span className="api-desc">Compute shader that copies the buffer into the texture.</span> |
| <Link id="m-colorbuffer" /><code>{"private Vector4[] colorBuffer"}</code> | <span className="api-desc">CPU side pixel buffer that drawing calls change.</span> |
| <Link id="m-colormultiplier" /><code>{"private const float ColorMultiplier"}</code> | <span className="api-desc">1/255, to turn byte colours into 0 to 1.</span> |
| <Link id="m-computebuffer" /><code>{"private ComputeBuffer computeBuffer"}</code> | <span className="api-desc">GPU buffer the pixels are uploaded through.</span> |
| <Link id="m-renderrect" /><code>{"private Rect renderRect"}</code> | <span className="api-desc">The mask bounds, from 0,0 to the resolution.</span> |
| <Link id="m-resolutionx" /><code>{"private int resolutionX"}</code> | <span className="api-desc">Backing field for `ResolutionX` (default 2048).</span> |
| <Link id="m-resolutiony" /><code>{"private int resolutionY"}</code> | <span className="api-desc">Backing field for `ResolutionY` (default 2048).</span> |
| <Link id="m-texture" /><code>{"private RenderTexture texture"}</code> | <span className="api-desc">The render texture shown by the `RawImage`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-image" /><code>{"RawImage Image { get; private set; }"}</code> | <span className="api-desc">The `RawImage` that shows the mask texture.</span> |
| <Link id="m-mask" /><code>{"Mask Mask { get; private set; }"}</code> | <span className="api-desc">The UI `Mask` on this object.</span> |
| <Link id="m-resolutionx-2" /><code>{"int ResolutionX { get; }"}</code> | <span className="api-desc">Mask width in pixels.</span> |
| <Link id="m-resolutiony-2" /><code>{"int ResolutionY { get; }"}</code> | <span className="api-desc">Mask height in pixels.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addtexture" /><code>{"bool AddTexture(Texture2D texture, Vector2 position, "}<Link to="/mod/game-api/types/alta-menus/texturemode">{"TextureMode"}</Link>{" mode)"}</code> | <span className="api-desc">Stamps a texture centred on a pixel position, clipped to the mask, using the given blend mode. Fails for non-RGBA32 textures.</span> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Sets the whole buffer to transparent black.</span> |
| <Link id="m-fillrect" /><code>{"void FillRect(Rect rect, Vector4 color)"}</code> | <span className="api-desc">Fills a rectangle of the buffer with one colour.</span> |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Creates the render texture, colour buffer and compute buffer at the set resolution. Logs and stops without a blit shader.</span> |
| <Link id="m-isready" /><code>{"bool IsReady()"}</code> | <span className="api-desc">True once everything needed for drawing exists.</span> |
| <Link id="m-updatemask" /><code>{"void UpdateMask()"}</code> | <span className="api-desc">Uploads the buffer and runs the blit shader's `CSMain` kernel to write it into the texture. Call after drawing.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Calls `Initialize`.</span> |
| <Link id="m-cliprect" /><code>{"private bool ClipRect(ref Rect targetRect, Rect boundaryRect)"}</code> | <span className="api-desc">Clips a rectangle to the mask bounds. Returns false if they do not overlap.</span> |
| <Link id="m-getlocaltexturerect" /><code>{"private Rect GetLocalTextureRect(Rect globalTextureRect, Texture2D texture, Vector2 offset)"}</code> | <span className="api-desc">Turns a clipped mask rectangle back into the texture's own pixel area.</span> |
| <Link id="m-gettexturerect" /><code>{"private Rect GetTextureRect(Texture2D texture, Vector2 position)"}</code> | <span className="api-desc">The area a texture covers on the mask when centred on a position.</span> |
| <Link id="m-maskadd" /><code>{"private void MaskAdd(Texture2D texture, Rect globalTextureRect, Rect localTextureRect)"}</code> | <span className="api-desc">Adds a texture's colours into the buffer, skipping fully transparent pixels.</span> |
| <Link id="m-maskmultiply" /><code>{"private void MaskMultiply(Texture2D texture, Rect globalTextureRect, Rect localTextureRect)"}</code> | <span className="api-desc">Multiplies the buffer by a texture's colours, skipping fully transparent pixels.</span> |
| <Link id="m-maskreplace" /><code>{"private void MaskReplace(Texture2D texture, Rect globalTextureRect, Rect localTextureRect)"}</code> | <span className="api-desc">Overwrites the buffer with a texture's colours, skipping fully transparent pixels.</span> |
| <Link id="m-masksubtract" /><code>{"private void MaskSubtract(Texture2D texture, Rect globalTextureRect, Rect localTextureRect)"}</code> | <span className="api-desc">Subtracts a texture's colours from the buffer, skipping fully transparent pixels.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Releases the compute buffer and render texture.</span> |

</details>
