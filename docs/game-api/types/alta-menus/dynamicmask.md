---
title: "DynamicMask"
description: "class DynamicMask in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DynamicMask

A **class** in `Root.Township`, `Alta.UI`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DynamicMask()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"static Logger logger"}</code> |  |
| <Link id="m-blitshader" /><code>{"private ComputeShader blitShader"}</code> |  |
| <Link id="m-colorbuffer" /><code>{"private Vector4[] colorBuffer"}</code> |  |
| <Link id="m-colormultiplier" /><code>{"private const float ColorMultiplier"}</code> |  |
| <Link id="m-computebuffer" /><code>{"private ComputeBuffer computeBuffer"}</code> |  |
| <Link id="m-renderrect" /><code>{"private Rect renderRect"}</code> |  |
| <Link id="m-resolutionx" /><code>{"private int resolutionX"}</code> |  |
| <Link id="m-resolutiony" /><code>{"private int resolutionY"}</code> |  |
| <Link id="m-texture" /><code>{"private RenderTexture texture"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-image" /><code>{"RawImage Image { get; private set; }"}</code> |  |
| <Link id="m-mask" /><code>{"Mask Mask { get; private set; }"}</code> |  |
| <Link id="m-resolutionx-2" /><code>{"int ResolutionX { get; }"}</code> |  |
| <Link id="m-resolutiony-2" /><code>{"int ResolutionY { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addtexture" /><code>{"bool AddTexture(Texture2D texture, Vector2 position, "}<Link to="/game-api/types/alta-menus/texturemode">{"TextureMode"}</Link>{" mode)"}</code> |  |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-fillrect" /><code>{"void FillRect(Rect rect, Vector4 color)"}</code> |  |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> |  |
| <Link id="m-isready" /><code>{"bool IsReady()"}</code> |  |
| <Link id="m-updatemask" /><code>{"void UpdateMask()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-cliprect" /><code>{"private bool ClipRect(ref Rect targetRect, Rect boundaryRect)"}</code> |  |
| <Link id="m-getlocaltexturerect" /><code>{"private Rect GetLocalTextureRect(Rect globalTextureRect, Texture2D texture, Vector2 offset)"}</code> |  |
| <Link id="m-gettexturerect" /><code>{"private Rect GetTextureRect(Texture2D texture, Vector2 position)"}</code> |  |
| <Link id="m-maskadd" /><code>{"private void MaskAdd(Texture2D texture, Rect globalTextureRect, Rect localTextureRect)"}</code> |  |
| <Link id="m-maskmultiply" /><code>{"private void MaskMultiply(Texture2D texture, Rect globalTextureRect, Rect localTextureRect)"}</code> |  |
| <Link id="m-maskreplace" /><code>{"private void MaskReplace(Texture2D texture, Rect globalTextureRect, Rect localTextureRect)"}</code> |  |
| <Link id="m-masksubtract" /><code>{"private void MaskSubtract(Texture2D texture, Rect globalTextureRect, Rect localTextureRect)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
