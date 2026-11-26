---
title: "CorrectedRotationSlerp"
description: "Sets local rotation between two Euler angles from a progress value, through a correction curve."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CorrectedRotationSlerp

A **class** in `Root.Township`, the global namespace.

Sets local rotation between two Euler angles from a progress value, through a correction curve.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CorrectedRotationSlerp()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-position0" /><code>{"private Vector3 position0"}</code> | Euler angles at progress 0. |
| <Link id="m-position1" /><code>{"private Vector3 position1"}</code> | Euler angles at progress 1. |
| <Link id="m-valuecorrection" /><code>{"private AnimationCurve valueCorrection"}</code> | Curve applied to progress first. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setrotation" /><code>{"void SetRotation(float progress)"}</code> | Evaluates the curve, lerps between the two Euler angles and applies it. |
