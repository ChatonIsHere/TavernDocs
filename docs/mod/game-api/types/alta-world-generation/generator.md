---
title: "Generator"
description: "A 3D grid of tagged nodes for procedural construction, all set to the air tag at first."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Generator

A **class** in `Root.Township`, `Alta.PAGaC`.

A 3D grid of tagged nodes for procedural construction, all set to the air tag at first.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Attributes** `DefaultMember`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Generator(int sizeX, int sizeY, int sizeZ, "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" air)"}</code> | Creates a `Generator` from `sizeX`, `sizeY`, `sizeZ` and `air`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nodes" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"[,,] nodes"}</code> | The 3D grid of nodes, each starting tagged as air. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-item" /><code><Link to="/mod/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{" this[int x, int y, int z] { get; }"}</code> | The node at x, y, z. |
| <Link id="m-sizex" /><code>{"int SizeX { get; private set; }"}</code> | Grid size in x. |
| <Link id="m-sizey" /><code>{"int SizeY { get; private set; }"}</code> | Grid size in y. |
| <Link id="m-sizez" /><code>{"int SizeZ { get; private set; }"}</code> | Grid size in z. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-castto" /><code><Link to="/mod/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{" CastTo(int x, int y, int z, int xInterval, int yInterval, int zInterval, IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"> tags, int maxDistance = 2147483647)"}</code> | Steps from a cell by an interval until a node with one of the tags. Only positive intervals work: 0 divides by zero and negatives stop at once. |
| <Link id="m-casttonot" /><code><Link to="/mod/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{" CastToNot(int x, int y, int z, int xInterval, int yInterval, int zInterval, IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"> tags, int maxDistance = 2147483647)"}</code> | Like `CastTo`, but starts in a tagged cell and stops at the first node without those tags. Same interval limits. |
| <Link id="m-export" /><code><Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[,,] Export()"}</code> | The tag of every node as a 3D array. |

## Used in

Members of other types that take, return or hold a `Generator`:

[`BuildingRooms.generator`](/mod/game-api/types/alta-world-generation/buildingrooms#m-generator), [`Constructor.Constructor`](/mod/game-api/types/alta-world-generation/constructor#m-ctor), [`Constructor.generator`](/mod/game-api/types/alta-world-generation/constructor#m-generator), [`GenerationBase.Generator`](/mod/game-api/types/alta-world-generation/generationbase-alta-pagac#m-generator), [`NodeCollection.AddExtents`](/mod/game-api/types/alta-world-generation/nodecollection#m-addextents), [`NodeCollection.RemoveExtents`](/mod/game-api/types/alta-world-generation/nodecollection#m-removeextents).
