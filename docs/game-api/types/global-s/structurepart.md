---
title: "StructurePart"
description: "A piece that MiningBaseGenerator can place in a generated mine: its size in tiles, the sides that are gates, solid or air, and limits on how low it can be..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StructurePart

A **class** in `Root.Township`, no namespace.

A piece that `MiningBaseGenerator` can place in a generated mine: its size in tiles, the sides that are gates, solid or air, and limits on how low it can be placed.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`IIgnoreForStaticFlatten`](/game-api/types/alta-utilities/iignoreforstaticflatten), [`IDontSplit`](/game-api/types/global-i-l/idontsplit)
- **Nested types** [`Cube`](/game-api/types/global-s/structurepart-cube)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StructurePart()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-x" /><code>{"int x"}</code> | Public grid coordinate field; not used in this class. |
| <Link id="m-y" /><code>{"int y"}</code> | Public grid coordinate field; not used in this class. |
| <Link id="m-z" /><code>{"int z"}</code> | Public grid coordinate field; not used in this class. |

<details>
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-air" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] air"}</code> | Per-cell air side flags. Backing field for `Air`. |
| <Link id="m-connecttoair" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] connectToAir"}</code> | Per-cell connect-to-air side flags. Backing field for `ConnectToAir`. |
| <Link id="m-connecttosolid" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] connectToSolid"}</code> | Per-cell connect-to-solid side flags. Backing field for `ConnectToSolid`. |
| <Link id="m-depth" /><code>{"private int depth"}</code> | Size of the part in tiles along z. Default 1. |
| <Link id="m-gates" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] gates"}</code> | Per-cell gate side flags. Backing field for `Gates`. |
| <Link id="m-height" /><code>{"private int height"}</code> | Size of the part in tiles along y. Default 1. |
| <Link id="m-isrequiringgate" /><code>{"private bool isRequiringGate"}</code> | When true, `MiningBaseGenerator` only places the part where a path reaches one of its gates. |
| <Link id="m-maximumdrop" /><code>{"private int maximumDrop"}</code> | Largest vertical drop `MiningBaseGenerator` tries when placing the part. No limit by default. |
| <Link id="m-maximumy" /><code>{"private int maximumY"}</code> | Highest tile y the part may be placed at. -1 means no limit. |
| <Link id="m-minimumdrop" /><code>{"private int minimumDrop"}</code> | Smallest vertical drop `MiningBaseGenerator` tries when placing the part. |
| <Link id="m-minimumy" /><code>{"private int minimumY"}</code> | Lowest tile y the part may be placed at. Default -1. |
| <Link id="m-obsolete" /><code>{"private "}<Link to="/game-api/types/global-s/structurepart-cube">{"StructurePart.Cube"}</Link>{"[] obsolete"}</code> | Old cube list (formerly `cubes`), converted to `StructureCube` children in `OnValidate` and then cleared. |
| <Link id="m-solid" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] solid"}</code> | Per-cell solid side flags. Backing field for `Solid`. |
| <Link id="m-structurecubes" /><code>{"private "}<Link to="/game-api/types/global-s/structurecube">{"StructureCube"}</Link>{"[] structureCubes"}</code> | Cached `StructureCube` children. Backing field for `StructureCubes`. |
| <Link id="m-structurecubesparent" /><code>{"private Transform structureCubesParent"}</code> | Transform whose children are the part's `StructureCube` components. |
| <Link id="m-structuretype" /><code>{"private "}<Link to="/game-api/types/global-s/structuretype">{"StructureType"}</Link>{" structureType"}</code> | The `StructureType` this part belongs to, which sets the tile size. |
| <Link id="m-width" /><code>{"private int width"}</code> | Size of the part in tiles along x. Default 1. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-air-2" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] Air { get; }"}</code> | Per-tile flags of sides that are open air. |
| <Link id="m-connecttoair-2" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] ConnectToAir { get; }"}</code> | Per-tile flags of sides that must touch air. |
| <Link id="m-connecttosolid-2" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] ConnectToSolid { get; }"}</code> | Per-tile flags of sides that must touch solid ground. |
| <Link id="m-depth-2" /><code>{"int Depth { get; }"}</code> | Size in tiles along z. |
| <Link id="m-gates-2" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] Gates { get; }"}</code> | Per-tile flags of sides that are openings, built from the cubes. |
| <Link id="m-height-2" /><code>{"int Height { get; }"}</code> | Size in tiles along y. |
| <Link id="m-isrequiringgate-2" /><code>{"bool IsRequiringGate { get; }"}</code> | If true, the generator only places this part where a path connects to one of its gates. |
| <Link id="m-maximumdrop-2" /><code>{"int MaximumDrop { get; }"}</code> | Highest drop the generator will try. No limit when left at `int.MaxValue`. |
| <Link id="m-maximumy-2" /><code>{"int MaximumY { get; }"}</code> | Highest tile row the part may be placed at, or -1 for no limit. |
| <Link id="m-minimumdrop-2" /><code>{"int MinimumDrop { get; }"}</code> | Lowest drop (in tiles) below the connecting point the generator will try. |
| <Link id="m-minimumy-2" /><code>{"int MinimumY { get; }"}</code> | Lowest tile row the part may be placed at. |
| <Link id="m-solid-2" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] Solid { get; }"}</code> | Per-tile flags of sides that are solid. |
| <Link id="m-structurecubes-2" /><code><Link to="/game-api/types/global-s/structurecube">{"StructureCube"}</Link>{"[] StructureCubes { get; }"}</code> | The `StructureCube` children that describe each tile's sides. Found once and cached. |
| <Link id="m-structuretype-2" /><code><Link to="/game-api/types/global-s/structuretype">{"StructureType"}</Link>{" "}<Link to="/game-api/types/global-s/structuretype">{"StructureType"}</Link>{" { get; }"}</code> | The structure type this part belongs to, which sets tile size. |
| <Link id="m-width-2" /><code>{"int Width { get; }"}</code> | Size in tiles along x. |

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializesides" /><code>{"private void InitializeSides()"}</code> | Builds the per-cell side arrays (gates, solid, air and connect masks) from the child `StructureCube` components. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the part's footprint as a blue box scaled by the structure type's tile size. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: makes the Structure Cubes parent if missing and turns old serialized `Cube` entries into `StructureCube` objects. |

</details>

## Used in

Members of other types that take, return or hold a `StructurePart`:

[`MiningBaseGenerator.PartOption.part`](/game-api/types/global-m-o/miningbasegenerator-partoption#m-part), [`MiningBaseGenerator.PartOption.Part`](/game-api/types/global-m-o/miningbasegenerator-partoption#m-part-2), [`MiningBaseGenerator.Possibility.part`](/game-api/types/global-m-o/miningbasegenerator-possibility#m-part), [`StructureCube.part`](/game-api/types/global-s/structurecube#m-part).
