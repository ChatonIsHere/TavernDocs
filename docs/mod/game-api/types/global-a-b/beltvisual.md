---
title: "BeltVisual"
description: "Visual for a pulley Belt in a parent object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BeltVisual

A **class** in `Root.Township`, the global namespace.

Visual for a pulley `Belt` in a parent object. The base version only draws the belt path with debug lines when the belt rotates; subclasses draw the real thing.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`RopeBelt`](/mod/game-api/types/global-q-r/ropebelt)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BeltVisual()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximumsegmentlength" /><code>{"private float maximumSegmentLength"}</code> | <span className="api-desc">Longest straight segment between points.</span> |
| <Link id="m-segmentsperdegree" /><code>{"private float segmentsPerDegree"}</code> | <span className="api-desc">How many points to use per degree of wrap around a pulley.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-belt" /><code><Link to="/mod/game-api/types/global-a-b/belt">{"Belt"}</Link>{" "}<Link to="/mod/game-api/types/global-a-b/belt">{"Belt"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The `Belt` found in the parents.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawconnections" /><code>{"virtual void DrawConnections()"}</code> | <span className="api-desc">Draws the belt's rope path with `Debug.DrawLine` (closing segment in blue). Virtual.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Finds the parent belt and redraws whenever it rotates.</span> |
| <Link id="m-getbelt" /><code>{"protected void GetBelt()"}</code> | <span className="api-desc">Finds the `Belt` in the parents.</span> |
| <Link id="m-getpoints" /><code>{"protected IEnumerable<Vector3> GetPoints()"}</code> | <span className="api-desc">Points along the belt wrapped around its connected turnables, from `PulleyBeltHelper.GetRope`.</span> |
