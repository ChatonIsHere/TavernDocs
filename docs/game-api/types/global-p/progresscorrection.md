---
title: "ProgressCorrection"
description: "Remaps a progress value through a curve and passes it on in an event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressCorrection

A **class** in `Root.Township`, no namespace.

Remaps a progress value through a curve and passes it on in an event.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProgressCorrection()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-correctedprogressupdate" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" correctedProgressUpdate"}</code> | Event that gets the remapped value. |
| <Link id="m-correctioncurve" /><code>{"private AnimationCurve correctionCurve"}</code> | Curve that remaps progress (linear by default). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updateprogress" /><code>{"void UpdateProgress(float progress)"}</code> | Runs `correctedProgressUpdate` with the progress mapped through the curve. |
