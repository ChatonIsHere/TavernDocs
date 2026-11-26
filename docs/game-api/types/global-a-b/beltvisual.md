---
title: "BeltVisual"
description: "Visual for a pulley Belt in a parent object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BeltVisual

A **class** in `Root.Township`, no namespace.

Visual for a pulley `Belt` in a parent object. The base version only draws the belt path with debug lines when the belt rotates; subclasses draw the real thing.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`RopeBelt`](/game-api/types/global-q-r/ropebelt)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BeltVisual()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximumsegmentlength" /><code>{"private float maximumSegmentLength"}</code> | Longest straight segment between points. |
| <Link id="m-segmentsperdegree" /><code>{"private float segmentsPerDegree"}</code> | How many points to use per degree of wrap around a pulley. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-belt" /><code><Link to="/game-api/types/global-a-b/belt">{"Belt"}</Link>{" "}<Link to="/game-api/types/global-a-b/belt">{"Belt"}</Link>{" { get; private set; }"}</code> | The `Belt` found in the parents. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawconnections" /><code>{"virtual void DrawConnections()"}</code> | Draws the belt's rope path with `Debug.DrawLine` (closing segment in blue). Virtual. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Finds the parent belt and redraws whenever it rotates. |
| <Link id="m-getbelt" /><code>{"protected void GetBelt()"}</code> | Finds the `Belt` in the parents. |
| <Link id="m-getpoints" /><code>{"protected IEnumerable<Vector3> GetPoints()"}</code> | Points along the belt wrapped around its connected turnables, from `PulleyBeltHelper.GetRope`. |
