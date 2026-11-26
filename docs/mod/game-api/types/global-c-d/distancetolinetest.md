---
title: "DistanceToLineTest"
description: "Editor test component that draws a segment and the closest point on it to this object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DistanceToLineTest

A **class** in `Root.Township`, the global namespace.

Editor test component that draws a segment and the closest point on it to this object.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DistanceToLineTest()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"private float distance"}</code> | <span className="api-desc">Last measured distance, shown in the inspector.</span> |
| <Link id="m-end" /><code>{"private Transform end"}</code> | <span className="api-desc">Segment end.</span> |
| <Link id="m-start" /><code>{"private Transform start"}</code> | <span className="api-desc">Segment start.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the segment and a line to its closest point, and stores the distance.</span> |

</details>
