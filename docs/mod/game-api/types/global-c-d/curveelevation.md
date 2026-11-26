---
title: "CurveElevation"
description: "Drives an \"Elevation\" animator state from a progress value, so an object rises or lowers with a curve."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CurveElevation

A **class** in `Root.Township`, the global namespace.

Drives an "Elevation" animator state from a progress value, so an object rises or lowers with a curve.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CurveElevation()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | <span className="api-desc">The animator holding the "Elevation" state.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatestep" /><code>{"void UpdateStep(float progress)"}</code> | <span className="api-desc">Cross-fades the "Elevation" animation to the given progress. At 0.01 or below it resets and turns the animator off.</span> |

## Used in

Members of other types that take, return or hold a `CurveElevation`:

<div className="api-used-in">

[`Chest.docksAnimation`](/mod/game-api/types/alta-items/chest#m-docksanimation).

</div>
