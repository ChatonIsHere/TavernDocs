---
title: "ProgressCorrection"
description: "Remaps a progress value through a curve and passes it on in an event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressCorrection

A **class** in `Root.Township`, the global namespace.

Remaps a progress value through a curve and passes it on in an event.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProgressCorrection()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-correctedprogressupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" correctedProgressUpdate"}</code> | <span className="api-desc">Event that gets the remapped value.</span> |
| <Link id="m-correctioncurve" /><code>{"private AnimationCurve correctionCurve"}</code> | <span className="api-desc">Curve that remaps progress (linear by default).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updateprogress" /><code>{"void UpdateProgress(float progress)"}</code> | <span className="api-desc">Runs `correctedProgressUpdate` with the progress mapped through the curve.</span> |
