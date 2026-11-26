---
title: "AlignWithPathSlope"
description: "Generation part that turns the object to face along its forest path, tilted with the path's slope."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AlignWithPathSlope

A **class** in `Root.Township`, no namespace.

Generation part that turns the object to face along its forest path, tilted with the path's slope.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`GeneratablePart`](/game-api/types/global-e-h/generatablepart)
- **Nested types** [`Hill`](/game-api/types/global-a-b/alignwithpathslope-hill)
- **Attributes** `AddComponentMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AlignWithPathSlope()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hill" /><code>{"private "}<Link to="/game-api/types/global-a-b/alignwithpathslope-hill">{"AlignWithPathSlope.Hill"}</Link>{" hill"}</code> | Which way to face: either, uphill or downhill. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatestatic" /><code>{"override void GenerateStatic("}<Link to="/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | Faces the object from one path node to the other, including the height change, uphill or downhill as set. |
