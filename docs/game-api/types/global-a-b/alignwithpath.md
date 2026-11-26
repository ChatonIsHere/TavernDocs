---
title: "AlignWithPath"
description: "Generation part that turns the object to face along its forest path, kept level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AlignWithPath

A **class** in `Root.Township`, no namespace.

Generation part that turns the object to face along its forest path, kept level.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`GeneratablePart`](/game-api/types/global-e-h/generatablepart)
- **Nested types** [`Hill`](/game-api/types/global-a-b/alignwithpath-hill)
- **Attributes** `AddComponentMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AlignWithPath()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hill" /><code>{"private "}<Link to="/game-api/types/global-a-b/alignwithpath-hill">{"AlignWithPath.Hill"}</Link>{" hill"}</code> | Which way to face: either, uphill or downhill. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatestatic" /><code>{"override void GenerateStatic("}<Link to="/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | Faces the object along the spawn edge's path (or the node's first path), flat on the ground, uphill or downhill as set. |
