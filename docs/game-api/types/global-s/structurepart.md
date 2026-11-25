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

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StructurePart()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-x" /><code>{"int x"}</code> | Public grid coordinate field; not used in this class. |
| <Link id="m-y" /><code>{"int y"}</code> | Public grid coordinate field; not used in this class. |
| <Link id="m-z" /><code>{"int z"}</code> | Public grid coordinate field; not used in this class. |

<details>
<summary>17 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-air" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] air"}</code> |
| <Link id="m-connecttoair" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] connectToAir"}</code> |
| <Link id="m-connecttosolid" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] connectToSolid"}</code> |
| <Link id="m-depth" /><code>{"private int depth"}</code> |
| <Link id="m-gates" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] gates"}</code> |
| <Link id="m-height" /><code>{"private int height"}</code> |
| <Link id="m-isrequiringgate" /><code>{"private bool isRequiringGate"}</code> |
| <Link id="m-maximumdrop" /><code>{"private int maximumDrop"}</code> |
| <Link id="m-maximumy" /><code>{"private int maximumY"}</code> |
| <Link id="m-minimumdrop" /><code>{"private int minimumDrop"}</code> |
| <Link id="m-minimumy" /><code>{"private int minimumY"}</code> |
| <Link id="m-obsolete" /><code>{"private "}<Link to="/game-api/types/global-s/structurepart-cube">{"StructurePart.Cube"}</Link>{"[] obsolete"}</code> |
| <Link id="m-solid" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] solid"}</code> |
| <Link id="m-structurecubes" /><code>{"private "}<Link to="/game-api/types/global-s/structurecube">{"StructureCube"}</Link>{"[] structureCubes"}</code> |
| <Link id="m-structurecubesparent" /><code>{"private Transform structureCubesParent"}</code> |
| <Link id="m-structuretype" /><code>{"private "}<Link to="/game-api/types/global-s/structuretype">{"StructureType"}</Link>{" structureType"}</code> |
| <Link id="m-width" /><code>{"private int width"}</code> |

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

| Member |
| --- |
| <Link id="m-initializesides" /><code>{"private void InitializeSides()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `StructurePart`:

[`MiningBaseGenerator.PartOption.part`](/game-api/types/global-m-o/miningbasegenerator-partoption#m-part), [`MiningBaseGenerator.PartOption.Part`](/game-api/types/global-m-o/miningbasegenerator-partoption#m-part-2), [`MiningBaseGenerator.Possibility.part`](/game-api/types/global-m-o/miningbasegenerator-possibility#m-part), [`StructureCube.part`](/game-api/types/global-s/structurecube#m-part).
