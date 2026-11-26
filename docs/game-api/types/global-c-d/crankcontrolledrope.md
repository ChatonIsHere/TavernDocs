---
title: "CrankControlledRope"
description: "Visual only: stretches a rope LineRenderer and moves its end point as a Crank turns."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CrankControlledRope

A **class** in `Root.Township`, no namespace.

Visual only: stretches a rope `LineRenderer` and moves its end point as a `Crank` turns. Sits on the crank prefab.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CrankControlledRope()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-crank" /><code>{"private "}<Link to="/game-api/types/global-c-d/crank">{"Crank"}</Link>{" crank"}</code> | The `Crank` whose value drives the rope length. |
| <Link id="m-direction" /><code>{"private Vector3 direction"}</code> | Local direction the rope extends in. |
| <Link id="m-lineend" /><code>{"private Transform lineEnd"}</code> | Transform at the rope's end, moved to the new length each update. |
| <Link id="m-linelength" /><code>{"private AnimationCurve lineLength"}</code> | Curve from crank value (0 to 1) to rope length; defaults to 0 to 0.3. |
| <Link id="m-roperenderer" /><code>{"private LineRenderer ropeRenderer"}</code> | The `LineRenderer` that draws the rope. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Subscribes `UpdateLineRenderer` to the crank's `ValueChanged` event. |
| <Link id="m-updatelinerenderer" /><code>{"private void UpdateLineRenderer("}<Link to="/game-api/types/global-c-d/crank">{"Crank"}</Link>{" crank, float crankValue)"}</code> | Moves `lineEnd` and the rope's first point along `direction` by `lineLength` evaluated at the crank value. |

</details>
