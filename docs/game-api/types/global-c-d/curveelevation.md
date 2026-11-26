---
title: "CurveElevation"
description: "Drives an \"Elevation\" animator state from a progress value, so an object rises or lowers with a curve."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CurveElevation

A **class** in `Root.Township`, no namespace.

Drives an "Elevation" animator state from a progress value, so an object rises or lowers with a curve.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CurveElevation()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | The animator holding the "Elevation" state. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatestep" /><code>{"void UpdateStep(float progress)"}</code> | Cross-fades the "Elevation" animation to the given progress. At 0.01 or below it resets and turns the animator off. |

## Used in

Members of other types that take, return or hold a `CurveElevation`:

[`Chest.docksAnimation`](/game-api/types/alta-items/chest#m-docksanimation).
