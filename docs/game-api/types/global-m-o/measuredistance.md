---
title: "MeasureDistance"
description: "Editor helper that shows the world and local distance to a target transform in the inspector and draws a line to it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeasureDistance

A **class** in `Root.Township`, no namespace.

Editor helper that shows the world and local distance to a target transform in the inspector and draws a line to it.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MeasureDistance()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"private float distance"}</code> | World distance to the target. |
| <Link id="m-localdistance" /><code>{"private float localDistance"}</code> | Distance between the two local positions. |
| <Link id="m-localpositionmagnitude" /><code>{"private float localPositionMagnitude"}</code> | Length of this object's local position. |
| <Link id="m-target" /><code>{"private Transform target"}</code> | Transform measured to. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Updates the distances and draws a line to the target. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Updates the shown distances. |

</details>
