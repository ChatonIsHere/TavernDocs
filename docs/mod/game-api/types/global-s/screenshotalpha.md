---
title: "ScreenShotAlpha"
description: "Post-processing effect settings (\"Alta/Depth To Alpha\") that write depth into the alpha channel, probably for screenshots with a transparent background."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScreenShotAlpha

A **class** in `Root.Township`, the global namespace.

Post-processing effect settings ("Alta/Depth To Alpha") that write depth into the alpha channel, probably for screenshots with a transparent background. Rendered by `ScreenShotAlphaRenderer`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `PostProcessEffectSettings`
- **Derived types** [`ScreenShotAlphaRenderer`](/mod/game-api/types/global-s/screenshotalpharenderer)
- **Attributes** `PostProcess`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScreenShotAlpha()"}</code> | <span className="api-desc">Creates a `ScreenShotAlpha` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-ispreviewing" /><code>{"BoolParameter isPreviewing"}</code> | <span className="api-desc">Shows the alpha result on screen for previewing.</span> |
| <Link id="m-maxdistance" /><code>{"FloatParameter maxDistance"}</code> | <span className="api-desc">Far distance for the depth to alpha range. Default 10000.</span> |
| <Link id="m-mindistance" /><code>{"FloatParameter minDistance"}</code> | <span className="api-desc">Near distance for the depth to alpha range. Default 10000.</span> |
