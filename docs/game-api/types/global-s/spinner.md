---
title: "Spinner"
description: "Client visual that spins an object each frame and loops its Z scale along a curve."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Spinner

A **class** in `Root.Township`, no namespace.

Client visual that spins an object each frame and loops its Z scale along a curve. Turns itself off on headless servers.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Spinner()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private float progress"}</code> | Position in the scale loop, 0 to 1. |
| <Link id="m-rotation" /><code>{"private float rotation"}</code> | Degrees turned per frame, not per second. |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> | Local axis to spin around. |
| <Link id="m-scalecurve" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" scaleCurve"}</code> | Curve and duration for the looping Z scale. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Disables itself on headless builds and restarts the scale loop. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Rotates by `rotation` degrees and sets Z scale from the curve. |

</details>
