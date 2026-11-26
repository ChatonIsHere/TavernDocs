---
title: "StructureCube"
description: "One grid cell of a StructurePart used by the mining base generator."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StructureCube

A **class** in `Root.Township`, the global namespace.

One grid cell of a `StructurePart` used by the mining base generator. Its side flags say where it connects and what must be next to it.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`IIgnoreForStaticFlatten`](/mod/game-api/types/alta-utilities/iignoreforstaticflatten), [`IDontSplit`](/mod/game-api/types/global-i-l/idontsplit)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StructureCube()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-air" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" air"}</code> | <span className="api-desc">Sides of this cell that are open air for neighbours.</span> |
| <Link id="m-connecttoair" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" connectToAir"}</code> | <span className="api-desc">Sides that must face an air side of a neighbouring part for the part to be placed.</span> |
| <Link id="m-connecttosolid" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" connectToSolid"}</code> | <span className="api-desc">Sides that must face a solid side of a neighbouring part for the part to be placed.</span> |
| <Link id="m-gates" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" gates"}</code> | <span className="api-desc">Sides with an opening that a path can pass through; the mine generator links gates between parts.</span> |
| <Link id="m-minimumgatesforculling" /><code>{"private int minimumGatesForCulling"}</code> | <span className="api-desc">If above 0, the mine generator drops the part when fewer than this many of the cell's gates line up with incoming gates.</span> |
| <Link id="m-part" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structurepart">{"StructurePart"}</Link>{" part"}</code> | <span className="api-desc">Parent structure part, found on first gizmo draw.</span> |
| <Link id="m-solid" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" solid"}</code> | <span className="api-desc">Sides of this cell that are solid for neighbours.</span> |
| <Link id="m-x" /><code>{"private int x"}</code> | <span className="api-desc">Cell X position in the part's grid.</span> |
| <Link id="m-y" /><code>{"private int y"}</code> | <span className="api-desc">Cell Y position in the part's grid.</span> |
| <Link id="m-z" /><code>{"private int z"}</code> | <span className="api-desc">Cell Z position in the part's grid.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-air-2" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" Air { get; }"}</code> | <span className="api-desc">Sides that are open air.</span> |
| <Link id="m-connecttoair-2" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" ConnectToAir { get; }"}</code> | <span className="api-desc">Sides that need air next to them.</span> |
| <Link id="m-connecttosolid-2" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" ConnectToSolid { get; }"}</code> | <span className="api-desc">Sides that need something solid next to them.</span> |
| <Link id="m-gates-2" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" Gates { get; }"}</code> | <span className="api-desc">Sides that are openings other parts can connect to.</span> |
| <Link id="m-minimumgatesforculling-2" /><code>{"int MinimumGatesForCulling { get; }"}</code> | <span className="api-desc">If above 0, a placed part is dropped when fewer than this many of the cube's gates connect.</span> |
| <Link id="m-solid-2" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" Solid { get; }"}</code> | <span className="api-desc">Sides that are solid.</span> |
| <Link id="m-x-2" /><code>{"int X { get; }"}</code> | <span className="api-desc">Cell X position in the part's grid.</span> |
| <Link id="m-y-2" /><code>{"int Y { get; }"}</code> | <span className="api-desc">Cell Y position in the part's grid.</span> |
| <Link id="m-z-2" /><code>{"int Z { get; }"}</code> | <span className="api-desc">Cell Z position in the part's grid.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadfrom" /><code>{"void LoadFrom("}<Link to="/mod/game-api/types/global-s/structurepart-cube">{"StructurePart.Cube"}</Link>{" cube)"}</code> | <span className="api-desc">Copies position and side flags from a `StructurePart.Cube`.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-drawsides" /><code>{"private void DrawSides(Color color, Vector3 size, Vector3 position, "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" sides)"}</code> | <span className="api-desc">Editor: draws a thin coloured box on each side set in the given flags.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the cell and its gate, solid, air and connection sides inside the parent structure part.</span> |

</details>

## Used in

Members of other types that take, return or hold a `StructureCube`:

<div className="api-used-in">

[`StructurePart.structureCubes`](/mod/game-api/types/global-s/structurepart#m-structurecubes), [`StructurePart.StructureCubes`](/mod/game-api/types/global-s/structurepart#m-structurecubes-2).

</div>
