---
title: "RendererScaleAnimator"
description: "Scale animator that also tells dock visuals whether the object is scaled up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RendererScaleAnimator

A **class** in `Root.Township`, the global namespace.

Scale animator that also tells dock visuals whether the object is scaled up.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`ScaleAnimator`](/mod/game-api/types/global-s/scaleanimator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RendererScaleAnimator(MonoBehaviour behaviour, bool isInitiallyOn, Vector3 startScale, AnimationCurve on, AnimationCurve off, bool isDisallowingZero, "}<Link to="/mod/game-api/types/alta-items/dockvisual">{"DockVisual"}</Link>{"[] dockVisuals)"}</code> | Creates a `RendererScaleAnimator` from `behaviour`, `isInitiallyOn`, `startScale`, `on`, `off`, `isDisallowingZero` and `dockVisuals`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dockvisuals" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/dockvisual">{"DockVisual"}</Link>{"[] dockVisuals"}</code> | Dock visuals told about the scale state. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setscale" /><code>{"protected override void SetScale(float scale)"}</code> | Sets the scale, then marks each dock visual scaled up when the scale is above 0.01. |
