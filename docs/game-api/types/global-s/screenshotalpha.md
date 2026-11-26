---
title: "ScreenShotAlpha"
description: "Post-processing effect settings (\"Alta/Depth To Alpha\") that write depth into the alpha channel, probably for screenshots with a transparent background."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScreenShotAlpha

A **class** in `Root.Township`, no namespace.

Post-processing effect settings ("Alta/Depth To Alpha") that write depth into the alpha channel, probably for screenshots with a transparent background. Rendered by `ScreenShotAlphaRenderer`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `PostProcessEffectSettings`
- **Derived types** [`ScreenShotAlphaRenderer`](/game-api/types/global-s/screenshotalpharenderer)
- **Attributes** `PostProcess`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScreenShotAlpha()"}</code> | Creates a `ScreenShotAlpha` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-ispreviewing" /><code>{"BoolParameter isPreviewing"}</code> | Shows the alpha result on screen for previewing. |
| <Link id="m-maxdistance" /><code>{"FloatParameter maxDistance"}</code> | Far distance for the depth to alpha range. Default 10000. |
| <Link id="m-mindistance" /><code>{"FloatParameter minDistance"}</code> | Near distance for the depth to alpha range. Default 10000. |
