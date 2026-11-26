---
title: "CrankControlledRope"
description: "Visual only: stretches a rope LineRenderer and moves its end point as a Crank turns."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CrankControlledRope

A **class** in `Root.Township`, the global namespace.

Visual only: stretches a rope `LineRenderer` and moves its end point as a `Crank` turns. Sits on the crank prefab.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CrankControlledRope()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-crank" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/crank">{"Crank"}</Link>{" crank"}</code> | <span className="api-desc">The `Crank` whose value drives the rope length.</span> |
| <Link id="m-direction" /><code>{"private Vector3 direction"}</code> | <span className="api-desc">Local direction the rope extends in.</span> |
| <Link id="m-lineend" /><code>{"private Transform lineEnd"}</code> | <span className="api-desc">Transform at the rope's end, moved to the new length each update.</span> |
| <Link id="m-linelength" /><code>{"private AnimationCurve lineLength"}</code> | <span className="api-desc">Curve from crank value (0 to 1) to rope length; defaults to 0 to 0.3.</span> |
| <Link id="m-roperenderer" /><code>{"private LineRenderer ropeRenderer"}</code> | <span className="api-desc">The `LineRenderer` that draws the rope.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Subscribes `UpdateLineRenderer` to the crank's `ValueChanged` event.</span> |
| <Link id="m-updatelinerenderer" /><code>{"private void UpdateLineRenderer("}<Link to="/mod/game-api/types/global-c-d/crank">{"Crank"}</Link>{" crank, float crankValue)"}</code> | <span className="api-desc">Moves `lineEnd` and the rope's first point along `direction` by `lineLength` evaluated at the crank value.</span> |

</details>
