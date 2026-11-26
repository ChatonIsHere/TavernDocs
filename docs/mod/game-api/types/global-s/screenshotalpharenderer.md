---
title: "ScreenShotAlphaRenderer"
description: "Renderer for the ScreenShotAlpha post effect, using the Hidden/DepthToAlpha shader."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScreenShotAlphaRenderer

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Renderer for the `ScreenShotAlpha` post effect, using the `Hidden/DepthToAlpha` shader.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `PostProcessEffectRenderer<ScreenShotAlpha>`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScreenShotAlphaRenderer()"}</code> | <span className="api-desc">Creates a `ScreenShotAlphaRenderer` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-render" /><code>{"override void Render(PostProcessRenderContext context)"}</code> | <span className="api-desc">Clamps the distances to the camera's far plane, sets the shader values and blits the image through the shader.</span> |
