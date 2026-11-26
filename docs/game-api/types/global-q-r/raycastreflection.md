---
title: "RaycastReflection"
description: "Debug script that draws a laser bouncing off surfaces with a LineRenderer, logging the name of every object hit each frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RaycastReflection

A **class** in `Root.Township`, no namespace.

Debug script that draws a laser bouncing off surfaces with a `LineRenderer`, logging the name of every object hit each frame.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RaycastReflection()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-nreflections" /><code>{"int nReflections"}</code> | How many bounces to trace, at least 1. |

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gotransform" /><code>{"private Transform goTransform"}</code> | Cached transform. |
| <Link id="m-hit" /><code>{"private RaycastHit hit"}</code> | Last raycast hit. |
| <Link id="m-indirection" /><code>{"private Vector3 inDirection"}</code> | Current reflected direction. |
| <Link id="m-linerenderer" /><code>{"private LineRenderer lineRenderer"}</code> | Line renderer that draws the path. |
| <Link id="m-npoints" /><code>{"private int nPoints"}</code> | Number of points set on the line. |
| <Link id="m-ray" /><code>{"private Ray ray"}</code> | Ray being traced. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Caches the transform and line renderer. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Raycasts forward, reflects up to `nReflections` times and sets the line points, with debug rays and logs. |

</details>
