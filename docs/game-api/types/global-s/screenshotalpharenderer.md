---
title: "ScreenShotAlphaRenderer"
description: "Renderer for the ScreenShotAlpha post effect, using the Hidden/DepthToAlpha shader."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScreenShotAlphaRenderer

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Renderer for the `ScreenShotAlpha` post effect, using the `Hidden/DepthToAlpha` shader.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `PostProcessEffectRenderer<ScreenShotAlpha>`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ScreenShotAlphaRenderer()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-render" /><code>{"override void Render(PostProcessRenderContext context)"}</code> | Clamps the distances to the camera's far plane, sets the shader values and blits the image through the shader. |
