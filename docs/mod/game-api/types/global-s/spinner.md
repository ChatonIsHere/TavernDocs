---
title: "Spinner"
description: "Client visual that spins an object each frame and loops its Z scale along a curve."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Spinner

A **class** in `Root.Township`, the global namespace.

Client visual that spins an object each frame and loops its Z scale along a curve. Turns itself off on headless servers.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Spinner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private float progress"}</code> | <span className="api-desc">Position in the scale loop, 0 to 1.</span> |
| <Link id="m-rotation" /><code>{"private float rotation"}</code> | <span className="api-desc">Degrees turned per frame, not per second.</span> |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> | <span className="api-desc">Local axis to spin around.</span> |
| <Link id="m-scalecurve" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" scaleCurve"}</code> | <span className="api-desc">Curve and duration for the looping Z scale.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Disables itself on headless builds and restarts the scale loop.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Rotates by `rotation` degrees and sets Z scale from the curve.</span> |

</details>
