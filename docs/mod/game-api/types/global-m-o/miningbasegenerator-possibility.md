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
| <Link id="m-offset" /><code><Link to="/mod/game-api/types/global-m-o/miningbasegenerator-point">{"MiningBaseGenerator.Point"}</Link>{" offset"}</code> | <span className="api-desc">Grid cell the part's origin goes in.</span> |
| <Link id="m-part" /><code><Link to="/mod/game-api/types/global-s/structurepart">{"StructurePart"}</Link>{" part"}</code> | <span className="api-desc">The structure part to place.</span> |
| <Link id="m-pathcount" /><code>{"int pathCount"}</code> | <span className="api-desc">How many paths the placement opens, filled in by `CheckPossible`.</span> |
| <Link id="m-rotation" /><code>{"int rotation"}</code> | <span className="api-desc">Quarter turns, 0 to 3.</span> |
| <Link id="m-weighting" /><code>{"float weighting"}</code> | <span className="api-desc">Chance weight for picking this candidate, including any attribute bonus.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Lists the part name, offset, rotation, path count and weighting.</span> |

## Used in

Members of other types that take, return or hold a `Possibility`:

<div className="api-used-in">

[`MiningBaseGenerator.CheckPossible`](/mod/game-api/types/global-m-o/miningbasegenerator#m-checkpossible), [`MiningBaseGenerator.ChoosePossibility`](/mod/game-api/types/global-m-o/miningbasegenerator#m-choosepossibility), [`MiningBaseGenerator.GeneratePossibilities`](/mod/game-api/types/global-m-o/miningbasegenerator#m-generatepossibilities), [`MiningBaseGenerator.GetRandom`](/mod/game-api/types/global-m-o/miningbasegenerator#m-getrandom-2), [`MiningBaseGenerator.Mark`](/mod/game-api/types/global-m-o/miningbasegenerator#m-mark), [`MiningBaseGenerator.results`](/mod/game-api/types/global-m-o/miningbasegenerator#m-results).

</div>
