---
title: "RaycastReflection"
description: "Debug script that draws a laser bouncing off surfaces with a LineRenderer, logging the name of every object hit each frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RaycastReflection

A **class** in `Root.Township`, the global namespace.

Debug script that draws a laser bouncing off surfaces with a `LineRenderer`, logging the name of every object hit each frame.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RaycastReflection()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-nreflections" /><code>{"int nReflections"}</code> | <span className="api-desc">How many bounces to trace, at least 1.</span> |

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gotransform" /><code>{"private Transform goTransform"}</code> | <span className="api-desc">Cached transform.</span> |
| <Link id="m-hit" /><code>{"private RaycastHit hit"}</code> | <span className="api-desc">Last raycast hit.</span> |
| <Link id="m-indirection" /><code>{"private Vector3 inDirection"}</code> | <span className="api-desc">Current reflected direction.</span> |
| <Link id="m-linerenderer" /><code>{"private LineRenderer lineRenderer"}</code> | <span className="api-desc">Line renderer that draws the path.</span> |
| <Link id="m-npoints" /><code>{"private int nPoints"}</code> | <span className="api-desc">Number of points set on the line.</span> |
| <Link id="m-ray" /><code>{"private Ray ray"}</code> | <span className="api-desc">Ray being traced.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Caches the transform and line renderer.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Raycasts forward, reflects up to `nReflections` times and sets the line points, with debug rays and logs.</span> |

</details>
