---
title: "StructurePart.Cube"
description: "Old per-tile side data for a StructurePart."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StructurePart.Cube

A **class** in `Root.Township`, no namespace.

Old per-tile side data for a `StructurePart`. Now only read in the editor to convert into `StructureCube` children.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`StructurePart`](/game-api/types/global-s/structurepart)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Cube()"}</code> | Creates a `StructurePart.Cube` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-air" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" air"}</code> | Sides of this cell that are open air for neighbours. |
| <Link id="m-connecttoair" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" connectToAir"}</code> | Sides that must face an air side of a neighbouring part for the part to be placed. |
| <Link id="m-connecttosolid" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" connectToSolid"}</code> | Sides that must face a solid side of a neighbouring part for the part to be placed. |
| <Link id="m-gates" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" gates"}</code> | Sides with an opening that a path can pass through; the mine generator links gates between parts. |
| <Link id="m-minimumgatesforculling" /><code>{"int minimumGatesForCulling"}</code> | If above 0, the part is dropped when fewer than this many of the cell's gates line up with incoming gates. |
| <Link id="m-solid" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" solid"}</code> | Sides of this cell that are solid for neighbours. |
| <Link id="m-x" /><code>{"int x"}</code> | Cell X position in the part's grid. |
| <Link id="m-y" /><code>{"int y"}</code> | Cell Y position in the part's grid. |
| <Link id="m-z" /><code>{"int z"}</code> | Cell Z position in the part's grid. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-air-2" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" Air { get; }"}</code> | Sides that are open air. |
| <Link id="m-connecttoair-2" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" ConnectToAir { get; }"}</code> | Sides that must touch air. |
| <Link id="m-connecttosolid-2" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" ConnectToSolid { get; }"}</code> | Sides that must touch solid ground. |
| <Link id="m-gates-2" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" Gates { get; }"}</code> | Sides of this tile that are openings. |
| <Link id="m-minimumgatesforculling-2" /><code>{"int MinimumGatesForCulling { get; }"}</code> | Probably how many gates must be used before this tile can be culled. |
| <Link id="m-solid-2" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" Solid { get; }"}</code> | Sides that are solid. |
| <Link id="m-x-2" /><code>{"int X { get; }"}</code> | Tile x in the part. |
| <Link id="m-y-2" /><code>{"int Y { get; }"}</code> | Tile y in the part. |
| <Link id="m-z-2" /><code>{"int Z { get; }"}</code> | Tile z in the part. |

## Used in

Members of other types that take, return or hold a `Cube`:

[`StructureCube.LoadFrom`](/game-api/types/global-s/structurecube#m-loadfrom), [`StructurePart.obsolete`](/game-api/types/global-s/structurepart#m-obsolete).
