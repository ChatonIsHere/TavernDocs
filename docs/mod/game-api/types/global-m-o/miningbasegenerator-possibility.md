---
title: "MiningBaseGenerator.Possibility"
description: "One candidate placement of a structure part in the mining base grid: part, offset, rotation and weight."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MiningBaseGenerator.Possibility

A **struct** in `Root.Township`, the global namespace.

One candidate placement of a structure part in the mining base grid: part, offset, rotation and weight.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`MiningBaseGenerator`](/mod/game-api/types/global-m-o/miningbasegenerator)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-offset" /><code><Link to="/mod/game-api/types/global-m-o/miningbasegenerator-point">{"MiningBaseGenerator.Point"}</Link>{" offset"}</code> | Grid cell the part's origin goes in. |
| <Link id="m-part" /><code><Link to="/mod/game-api/types/global-s/structurepart">{"StructurePart"}</Link>{" part"}</code> | The structure part to place. |
| <Link id="m-pathcount" /><code>{"int pathCount"}</code> | How many paths the placement opens, filled in by `CheckPossible`. |
| <Link id="m-rotation" /><code>{"int rotation"}</code> | Quarter turns, 0 to 3. |
| <Link id="m-weighting" /><code>{"float weighting"}</code> | Chance weight for picking this candidate, including any attribute bonus. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Lists the part name, offset, rotation, path count and weighting. |

## Used in

Members of other types that take, return or hold a `Possibility`:

[`MiningBaseGenerator.CheckPossible`](/mod/game-api/types/global-m-o/miningbasegenerator#m-checkpossible), [`MiningBaseGenerator.ChoosePossibility`](/mod/game-api/types/global-m-o/miningbasegenerator#m-choosepossibility), [`MiningBaseGenerator.GeneratePossibilities`](/mod/game-api/types/global-m-o/miningbasegenerator#m-generatepossibilities), [`MiningBaseGenerator.GetRandom`](/mod/game-api/types/global-m-o/miningbasegenerator#m-getrandom-2), [`MiningBaseGenerator.Mark`](/mod/game-api/types/global-m-o/miningbasegenerator#m-mark), [`MiningBaseGenerator.results`](/mod/game-api/types/global-m-o/miningbasegenerator#m-results).
