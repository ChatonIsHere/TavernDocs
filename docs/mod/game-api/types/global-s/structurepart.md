---
title: "StructurePart"
description: "A piece that MiningBaseGenerator can place in a generated mine: its size in tiles, the sides that are gates, solid or air, and limits on how low it can be..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StructurePart

A **class** in `Root.Township`, the global namespace.

A piece that `MiningBaseGenerator` can place in a generated mine: its size in tiles, the sides that are gates, solid or air, and limits on how low it can be placed.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`IIgnoreForStaticFlatten`](/mod/game-api/types/alta-utilities/iignoreforstaticflatten), [`IDontSplit`](/mod/game-api/types/global-i-l/idontsplit)
- **Nested types** [`Cube`](/mod/game-api/types/global-s/structurepart-cube)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StructurePart()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-x" /><code>{"int x"}</code> | <span className="api-desc">Public grid coordinate field; not used in this class.</span> |
| <Link id="m-y" /><code>{"int y"}</code> | <span className="api-desc">Public grid coordinate field; not used in this class.</span> |
| <Link id="m-z" /><code>{"int z"}</code> | <span className="api-desc">Public grid coordinate field; not used in this class.</span> |

<details className="api-private">
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-air" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] air"}</code> | <span className="api-desc">Per-cell air side flags. Backing field for `Air`.</span> |
| <Link id="m-connecttoair" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] connectToAir"}</code> | <span className="api-desc">Per-cell connect-to-air side flags. Backing field for `ConnectToAir`.</span> |
| <Link id="m-connecttosolid" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] connectToSolid"}</code> | <span className="api-desc">Per-cell connect-to-solid side flags. Backing field for `ConnectToSolid`.</span> |
| <Link id="m-depth" /><code>{"private int depth"}</code> | <span className="api-desc">Size of the part in tiles along z. Default 1.</span> |
| <Link id="m-gates" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] gates"}</code> | <span className="api-desc">Per-cell gate side flags. Backing field for `Gates`.</span> |
| <Link id="m-height" /><code>{"private int height"}</code> | <span className="api-desc">Size of the part in tiles along y. Default 1.</span> |
| <Link id="m-isrequiringgate" /><code>{"private bool isRequiringGate"}</code> | <span className="api-desc">When true, `MiningBaseGenerator` only places the part where a path reaches one of its gates.</span> |
| <Link id="m-maximumdrop" /><code>{"private int maximumDrop"}</code> | <span className="api-desc">Largest vertical drop `MiningBaseGenerator` tries when placing the part. No limit by default.</span> |
| <Link id="m-maximumy" /><code>{"private int maximumY"}</code> | <span className="api-desc">Highest tile y the part may be placed at. -1 means no limit.</span> |
| <Link id="m-minimumdrop" /><code>{"private int minimumDrop"}</code> | <span className="api-desc">Smallest vertical drop `MiningBaseGenerator` tries when placing the part.</span> |
| <Link id="m-minimumy" /><code>{"private int minimumY"}</code> | <span className="api-desc">Lowest tile y the part may be placed at. Default -1.</span> |
| <Link id="m-obsolete" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structurepart-cube">{"StructurePart.Cube"}</Link>{"[] obsolete"}</code> | <span className="api-desc">Old cube list (formerly `cubes`), converted to `StructureCube` children in `OnValidate` and then cleared.</span> |
| <Link id="m-solid" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] solid"}</code> | <span className="api-desc">Per-cell solid side flags. Backing field for `Solid`.</span> |
| <Link id="m-structurecubes" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structurecube">{"StructureCube"}</Link>{"[] structureCubes"}</code> | <span className="api-desc">Cached `StructureCube` children. Backing field for `StructureCubes`.</span> |
| <Link id="m-structurecubesparent" /><code>{"private Transform structureCubesParent"}</code> | <span className="api-desc">Transform whose children are the part's `StructureCube` components.</span> |
| <Link id="m-structuretype" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structuretype">{"StructureType"}</Link>{" structureType"}</code> | <span className="api-desc">The `StructureType` this part belongs to, which sets the tile size.</span> |
| <Link id="m-width" /><code>{"private int width"}</code> | <span className="api-desc">Size of the part in tiles along x. Default 1.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-air-2" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] Air { get; }"}</code> | <span className="api-desc">Per-tile flags of sides that are open air.</span> |
| <Link id="m-connecttoair-2" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] ConnectToAir { get; }"}</code> | <span className="api-desc">Per-tile flags of sides that must touch air.</span> |
| <Link id="m-connecttosolid-2" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] ConnectToSolid { get; }"}</code> | <span className="api-desc">Per-tile flags of sides that must touch solid ground.</span> |
| <Link id="m-depth-2" /><code>{"int Depth { get; }"}</code> | <span className="api-desc">Size in tiles along z.</span> |
| <Link id="m-gates-2" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] Gates { get; }"}</code> | <span className="api-desc">Per-tile flags of sides that are openings, built from the cubes.</span> |
| <Link id="m-height-2" /><code>{"int Height { get; }"}</code> | <span className="api-desc">Size in tiles along y.</span> |
| <Link id="m-isrequiringgate-2" /><code>{"bool IsRequiringGate { get; }"}</code> | <span className="api-desc">If true, the generator only places this part where a path connects to one of its gates.</span> |
| <Link id="m-maximumdrop-2" /><code>{"int MaximumDrop { get; }"}</code> | <span className="api-desc">Highest drop the generator will try. No limit when left at `int.MaxValue`.</span> |
| <Link id="m-maximumy-2" /><code>{"int MaximumY { get; }"}</code> | <span className="api-desc">Highest tile row the part may be placed at, or -1 for no limit.</span> |
| <Link id="m-minimumdrop-2" /><code>{"int MinimumDrop { get; }"}</code> | <span className="api-desc">Lowest drop (in tiles) below the connecting point the generator will try.</span> |
| <Link id="m-minimumy-2" /><code>{"int MinimumY { get; }"}</code> | <span className="api-desc">Lowest tile row the part may be placed at.</span> |
| <Link id="m-solid-2" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] Solid { get; }"}</code> | <span className="api-desc">Per-tile flags of sides that are solid.</span> |
| <Link id="m-structurecubes-2" /><code><Link to="/mod/game-api/types/global-s/structurecube">{"StructureCube"}</Link>{"[] StructureCubes { get; }"}</code> | <span className="api-desc">The `StructureCube` children that describe each tile's sides. Found once and cached.</span> |
| <Link id="m-structuretype-2" /><code><Link to="/mod/game-api/types/global-s/structuretype">{"StructureType"}</Link>{" "}<Link to="/mod/game-api/types/global-s/structuretype">{"StructureType"}</Link>{" { get; }"}</code> | <span className="api-desc">The structure type this part belongs to, which sets tile size.</span> |
| <Link id="m-width-2" /><code>{"int Width { get; }"}</code> | <span className="api-desc">Size in tiles along x.</span> |

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializesides" /><code>{"private void InitializeSides()"}</code> | <span className="api-desc">Builds the per-cell side arrays (gates, solid, air and connect masks) from the child `StructureCube` components.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the part's footprint as a blue box scaled by the structure type's tile size.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: makes the Structure Cubes parent if missing and turns old serialized `Cube` entries into `StructureCube` objects.</span> |

</details>

## Used in

Members of other types that take, return or hold a `StructurePart`:

<div className="api-used-in">

[`MiningBaseGenerator.PartOption.part`](/mod/game-api/types/global-m-o/miningbasegenerator-partoption#m-part), [`MiningBaseGenerator.PartOption.Part`](/mod/game-api/types/global-m-o/miningbasegenerator-partoption#m-part-2), [`MiningBaseGenerator.Possibility.part`](/mod/game-api/types/global-m-o/miningbasegenerator-possibility#m-part), [`StructureCube.part`](/mod/game-api/types/global-s/structurecube#m-part).

</div>
