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
| <Link id="m-ctor" /><code>{"Generator(int sizeX, int sizeY, int sizeZ, "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" air)"}</code> | <span className="api-desc">Creates a `Generator` from `sizeX`, `sizeY`, `sizeZ` and `air`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nodes" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"[,,] nodes"}</code> | <span className="api-desc">The 3D grid of nodes, each starting tagged as air.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-item" /><code><Link to="/mod/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{" this[int x, int y, int z] { get; }"}</code> | <span className="api-desc">The node at x, y, z.</span> |
| <Link id="m-sizex" /><code>{"int SizeX { get; private set; }"}</code> | <span className="api-desc">Grid size in x.</span> |
| <Link id="m-sizey" /><code>{"int SizeY { get; private set; }"}</code> | <span className="api-desc">Grid size in y.</span> |
| <Link id="m-sizez" /><code>{"int SizeZ { get; private set; }"}</code> | <span className="api-desc">Grid size in z.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-castto" /><code><Link to="/mod/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{" CastTo(int x, int y, int z, int xInterval, int yInterval, int zInterval, IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"> tags, int maxDistance = 2147483647)"}</code> | <span className="api-desc">Steps from a cell by an interval until a node with one of the tags. Only positive intervals work: 0 divides by zero and negatives stop at once.</span> |
| <Link id="m-casttonot" /><code><Link to="/mod/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{" CastToNot(int x, int y, int z, int xInterval, int yInterval, int zInterval, IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"> tags, int maxDistance = 2147483647)"}</code> | <span className="api-desc">Like `CastTo`, but starts in a tagged cell and stops at the first node without those tags. Same interval limits.</span> |
| <Link id="m-export" /><code><Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[,,] Export()"}</code> | <span className="api-desc">The tag of every node as a 3D array.</span> |

## Used in

Members of other types that take, return or hold a `Generator`:

<div className="api-used-in">

[`BuildingRooms.generator`](/mod/game-api/types/alta-world-generation/buildingrooms#m-generator), [`Constructor.Constructor`](/mod/game-api/types/alta-world-generation/constructor#m-ctor), [`Constructor.generator`](/mod/game-api/types/alta-world-generation/constructor#m-generator), [`GenerationBase.Generator`](/mod/game-api/types/alta-world-generation/generationbase-alta-pagac#m-generator), [`NodeCollection.AddExtents`](/mod/game-api/types/alta-world-generation/nodecollection#m-addextents), [`NodeCollection.RemoveExtents`](/mod/game-api/types/alta-world-generation/nodecollection#m-removeextents).

</div>
