---
title: "DistanceToLineTest"
description: "Editor test component that draws a segment and the closest point on it to this object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DistanceToLineTest

A **class** in `Root.Township`, no namespace.

Editor test component that draws a segment and the closest point on it to this object.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DistanceToLineTest()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"private float distance"}</code> | Last measured distance, shown in the inspector. |
| <Link id="m-end" /><code>{"private Transform end"}</code> | Segment end. |
| <Link id="m-start" /><code>{"private Transform start"}</code> | Segment start. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the segment and a line to its closest point, and stores the distance. |

</details>
