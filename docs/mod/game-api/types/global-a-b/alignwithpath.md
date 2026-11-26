---
title: "AlignWithPath"
description: "Generation part that turns the object to face along its forest path, kept level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AlignWithPath

A **class** in `Root.Township`, the global namespace.

Generation part that turns the object to face along its forest path, kept level.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`GeneratablePart`](/mod/game-api/types/global-e-h/generatablepart)
- **Nested types** [`Hill`](/mod/game-api/types/global-a-b/alignwithpath-hill)
- **Attributes** `AddComponentMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AlignWithPath()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hill" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/alignwithpath-hill">{"AlignWithPath.Hill"}</Link>{" hill"}</code> | <span className="api-desc">Which way to face: either, uphill or downhill.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatestatic" /><code>{"override void GenerateStatic("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | <span className="api-desc">Faces the object along the spawn edge's path (or the node's first path), flat on the ground, uphill or downhill as set.</span> |
