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
| <Link id="m-ctor" /><code>{"DynamicMask()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"static Logger logger"}</code> | Logger for this class. |

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blitshader" /><code>{"private ComputeShader blitShader"}</code> | Compute shader that copies the buffer into the texture. |
| <Link id="m-colorbuffer" /><code>{"private Vector4[] colorBuffer"}</code> | CPU side pixel buffer that drawing calls change. |
| <Link id="m-colormultiplier" /><code>{"private const float ColorMultiplier"}</code> | 1/255, to turn byte colours into 0 to 1. |
| <Link id="m-computebuffer" /><code>{"private ComputeBuffer computeBuffer"}</code> | GPU buffer the pixels are uploaded through. |
| <Link id="m-renderrect" /><code>{"private Rect renderRect"}</code> | The mask bounds, from 0,0 to the resolution. |
| <Link id="m-resolutionx" /><code>{"private int resolutionX"}</code> | Backing field for `ResolutionX` (default 2048). |
| <Link id="m-resolutiony" /><code>{"private int resolutionY"}</code> | Backing field for `ResolutionY` (default 2048). |
| <Link id="m-texture" /><code>{"private RenderTexture texture"}</code> | The render texture shown by the `RawImage`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-image" /><code>{"RawImage Image { get; private set; }"}</code> | The `RawImage` that shows the mask texture. |
| <Link id="m-mask" /><code>{"Mask Mask { get; private set; }"}</code> | The UI `Mask` on this object. |
| <Link id="m-resolutionx-2" /><code>{"int ResolutionX { get; }"}</code> | Mask width in pixels. |
| <Link id="m-resolutiony-2" /><code>{"int ResolutionY { get; }"}</code> | Mask height in pixels. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addtexture" /><code>{"bool AddTexture(Texture2D texture, Vector2 position, "}<Link to="/mod/game-api/types/alta-menus/texturemode">{"TextureMode"}</Link>{" mode)"}</code> | Stamps a texture centred on a pixel position, clipped to the mask, using the given blend mode. Fails for non-RGBA32 textures. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Sets the whole buffer to transparent black. |
| <Link id="m-fillrect" /><code>{"void FillRect(Rect rect, Vector4 color)"}</code> | Fills a rectangle of the buffer with one colour. |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Creates the render texture, colour buffer and compute buffer at the set resolution. Logs and stops without a blit shader. |
| <Link id="m-isready" /><code>{"bool IsReady()"}</code> | True once everything needed for drawing exists. |
| <Link id="m-updatemask" /><code>{"void UpdateMask()"}</code> | Uploads the buffer and runs the blit shader's `CSMain` kernel to write it into the texture. Call after drawing. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Calls `Initialize`. |
| <Link id="m-cliprect" /><code>{"private bool ClipRect(ref Rect targetRect, Rect boundaryRect)"}</code> | Clips a rectangle to the mask bounds. Returns false if they do not overlap. |
| <Link id="m-getlocaltexturerect" /><code>{"private Rect GetLocalTextureRect(Rect globalTextureRect, Texture2D texture, Vector2 offset)"}</code> | Turns a clipped mask rectangle back into the texture's own pixel area. |
| <Link id="m-gettexturerect" /><code>{"private Rect GetTextureRect(Texture2D texture, Vector2 position)"}</code> | The area a texture covers on the mask when centred on a position. |
| <Link id="m-maskadd" /><code>{"private void MaskAdd(Texture2D texture, Rect globalTextureRect, Rect localTextureRect)"}</code> | Adds a texture's colours into the buffer, skipping fully transparent pixels. |
| <Link id="m-maskmultiply" /><code>{"private void MaskMultiply(Texture2D texture, Rect globalTextureRect, Rect localTextureRect)"}</code> | Multiplies the buffer by a texture's colours, skipping fully transparent pixels. |
| <Link id="m-maskreplace" /><code>{"private void MaskReplace(Texture2D texture, Rect globalTextureRect, Rect localTextureRect)"}</code> | Overwrites the buffer with a texture's colours, skipping fully transparent pixels. |
| <Link id="m-masksubtract" /><code>{"private void MaskSubtract(Texture2D texture, Rect globalTextureRect, Rect localTextureRect)"}</code> | Subtracts a texture's colours from the buffer, skipping fully transparent pixels. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Releases the compute buffer and render texture. |

</details>
