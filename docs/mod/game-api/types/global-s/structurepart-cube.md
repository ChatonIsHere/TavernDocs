---
title: "StructurePart.Cube"
description: "Old per-tile side data for a StructurePart."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StructurePart.Cube

A **class** in `Root.Township`, the global namespace.

Old per-tile side data for a `StructurePart`. Now only read in the editor to convert into `StructureCube` children.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`StructurePart`](/mod/game-api/types/global-s/structurepart)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Cube()"}</code> | <span className="api-desc">Creates a `StructurePart.Cube` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-air" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" air"}</code> | <span className="api-desc">Sides of this cell that are open air for neighbours.</span> |
| <Link id="m-connecttoair" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" connectToAir"}</code> | <span className="api-desc">Sides that must face an air side of a neighbouring part for the part to be placed.</span> |
| <Link id="m-connecttosolid" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" connectToSolid"}</code> | <span className="api-desc">Sides that must face a solid side of a neighbouring part for the part to be placed.</span> |
| <Link id="m-gates" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" gates"}</code> | <span className="api-desc">Sides with an opening that a path can pass through; the mine generator links gates between parts.</span> |
| <Link id="m-minimumgatesforculling" /><code>{"int minimumGatesForCulling"}</code> | <span className="api-desc">If above 0, the part is dropped when fewer than this many of the cell's gates line up with incoming gates.</span> |
| <Link id="m-solid" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" solid"}</code> | <span className="api-desc">Sides of this cell that are solid for neighbours.</span> |
| <Link id="m-x" /><code>{"int x"}</code> | <span className="api-desc">Cell X position in the part's grid.</span> |
| <Link id="m-y" /><code>{"int y"}</code> | <span className="api-desc">Cell Y position in the part's grid.</span> |
| <Link id="m-z" /><code>{"int z"}</code> | <span className="api-desc">Cell Z position in the part's grid.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-air-2" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" Air { get; }"}</code> | <span className="api-desc">Sides that are open air.</span> |
| <Link id="m-connecttoair-2" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" ConnectToAir { get; }"}</code> | <span className="api-desc">Sides that must touch air.</span> |
| <Link id="m-connecttosolid-2" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" ConnectToSolid { get; }"}</code> | <span className="api-desc">Sides that must touch solid ground.</span> |
| <Link id="m-gates-2" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" Gates { get; }"}</code> | <span className="api-desc">Sides of this tile that are openings.</span> |
| <Link id="m-minimumgatesforculling-2" /><code>{"int MinimumGatesForCulling { get; }"}</code> | <span className="api-desc">Probably how many gates must be used before this tile can be culled.</span> |
| <Link id="m-solid-2" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" Solid { get; }"}</code> | <span className="api-desc">Sides that are solid.</span> |
| <Link id="m-x-2" /><code>{"int X { get; }"}</code> | <span className="api-desc">Tile x in the part.</span> |
| <Link id="m-y-2" /><code>{"int Y { get; }"}</code> | <span className="api-desc">Tile y in the part.</span> |
| <Link id="m-z-2" /><code>{"int Z { get; }"}</code> | <span className="api-desc">Tile z in the part.</span> |

## Used in

Members of other types that take, return or hold a `Cube`:

<div className="api-used-in">

[`StructureCube.LoadFrom`](/mod/game-api/types/global-s/structurecube#m-loadfrom), [`StructurePart.obsolete`](/mod/game-api/types/global-s/structurepart#m-obsolete).

</div>
