---
title: "StructureCube"
description: "One grid cell of a StructurePart used by the mining base generator."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StructureCube

A **class** in `Root.Township`, no namespace.

One grid cell of a `StructurePart` used by the mining base generator. Its side flags say where it connects and what must be next to it.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`IIgnoreForStaticFlatten`](/game-api/types/alta-utilities/iignoreforstaticflatten), [`IDontSplit`](/game-api/types/global-i-l/idontsplit)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StructureCube()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-air" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" air"}</code> | Sides of this cell that are open air for neighbours. |
| <Link id="m-connecttoair" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" connectToAir"}</code> | Sides that must face an air side of a neighbouring part for the part to be placed. |
| <Link id="m-connecttosolid" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" connectToSolid"}</code> | Sides that must face a solid side of a neighbouring part for the part to be placed. |
| <Link id="m-gates" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" gates"}</code> | Sides with an opening that a path can pass through; the mine generator links gates between parts. |
| <Link id="m-minimumgatesforculling" /><code>{"private int minimumGatesForCulling"}</code> | If above 0, the mine generator drops the part when fewer than this many of the cell's gates line up with incoming gates. |
| <Link id="m-part" /><code>{"private "}<Link to="/game-api/types/global-s/structurepart">{"StructurePart"}</Link>{" part"}</code> | Parent structure part, found on first gizmo draw. |
| <Link id="m-solid" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" solid"}</code> | Sides of this cell that are solid for neighbours. |
| <Link id="m-x" /><code>{"private int x"}</code> | Cell X position in the part's grid. |
| <Link id="m-y" /><code>{"private int y"}</code> | Cell Y position in the part's grid. |
| <Link id="m-z" /><code>{"private int z"}</code> | Cell Z position in the part's grid. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-air-2" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" Air { get; }"}</code> | Sides that are open air. |
| <Link id="m-connecttoair-2" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" ConnectToAir { get; }"}</code> | Sides that need air next to them. |
| <Link id="m-connecttosolid-2" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" ConnectToSolid { get; }"}</code> | Sides that need something solid next to them. |
| <Link id="m-gates-2" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" Gates { get; }"}</code> | Sides that are openings other parts can connect to. |
| <Link id="m-minimumgatesforculling-2" /><code>{"int MinimumGatesForCulling { get; }"}</code> | If above 0, a placed part is dropped when fewer than this many of the cube's gates connect. |
| <Link id="m-solid-2" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" Solid { get; }"}</code> | Sides that are solid. |
| <Link id="m-x-2" /><code>{"int X { get; }"}</code> | Cell X position in the part's grid. |
| <Link id="m-y-2" /><code>{"int Y { get; }"}</code> | Cell Y position in the part's grid. |
| <Link id="m-z-2" /><code>{"int Z { get; }"}</code> | Cell Z position in the part's grid. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadfrom" /><code>{"void LoadFrom("}<Link to="/game-api/types/global-s/structurepart-cube">{"StructurePart.Cube"}</Link>{" cube)"}</code> | Copies position and side flags from a `StructurePart.Cube`. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-drawsides" /><code>{"private void DrawSides(Color color, Vector3 size, Vector3 position, "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" sides)"}</code> | Editor: draws a thin coloured box on each side set in the given flags. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the cell and its gate, solid, air and connection sides inside the parent structure part. |

</details>

## Used in

Members of other types that take, return or hold a `StructureCube`:

[`StructurePart.structureCubes`](/game-api/types/global-s/structurepart#m-structurecubes), [`StructurePart.StructureCubes`](/game-api/types/global-s/structurepart#m-structurecubes-2).
