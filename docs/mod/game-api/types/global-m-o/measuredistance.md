---
title: "MeasureDistance"
description: "Editor helper that shows the world and local distance to a target transform in the inspector and draws a line to it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeasureDistance

A **class** in `Root.Township`, the global namespace.

Editor helper that shows the world and local distance to a target transform in the inspector and draws a line to it.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MeasureDistance()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"private float distance"}</code> | <span className="api-desc">World distance to the target.</span> |
| <Link id="m-localdistance" /><code>{"private float localDistance"}</code> | <span className="api-desc">Distance between the two local positions.</span> |
| <Link id="m-localpositionmagnitude" /><code>{"private float localPositionMagnitude"}</code> | <span className="api-desc">Length of this object's local position.</span> |
| <Link id="m-target" /><code>{"private Transform target"}</code> | <span className="api-desc">Transform measured to.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Updates the distances and draws a line to the target.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Updates the shown distances.</span> |

</details>
