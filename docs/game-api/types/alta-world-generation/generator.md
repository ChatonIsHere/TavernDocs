---
title: "Generator"
description: "class Generator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Generator

A **class** in `Root.Township`, `Alta.PAGaC`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Attributes** `DefaultMember`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Generator(int sizeX, int sizeY, int sizeZ, "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" air)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-nodes" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"[,,] nodes"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-item" /><code><Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{" this[int x, int y, int z] { get; }"}</code> |  |
| <Link id="m-sizex" /><code>{"int SizeX { get; private set; }"}</code> |  |
| <Link id="m-sizey" /><code>{"int SizeY { get; private set; }"}</code> |  |
| <Link id="m-sizez" /><code>{"int SizeZ { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-castto" /><code><Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{" CastTo(int x, int y, int z, int xInterval, int yInterval, int zInterval, IEnumerable<"}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"> tags, int maxDistance = 2147483647)"}</code> |  |
| <Link id="m-casttonot" /><code><Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{" CastToNot(int x, int y, int z, int xInterval, int yInterval, int zInterval, IEnumerable<"}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"> tags, int maxDistance = 2147483647)"}</code> |  |
| <Link id="m-export" /><code><Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[,,] Export()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Generator`:

[`BuildingRooms.generator`](/game-api/types/alta-world-generation/buildingrooms#m-generator), [`Constructor.Constructor`](/game-api/types/alta-world-generation/constructor#m-ctor), [`Constructor.generator`](/game-api/types/alta-world-generation/constructor#m-generator), [`GenerationBase.Generator`](/game-api/types/alta-world-generation/generationbase-alta-pagac#m-generator), [`NodeCollection.AddExtents`](/game-api/types/alta-world-generation/nodecollection#m-addextents), [`NodeCollection.RemoveExtents`](/game-api/types/alta-world-generation/nodecollection#m-removeextents).
