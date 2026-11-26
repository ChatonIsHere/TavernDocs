---
title: "CellularAutomata"
description: "Cave generator part that runs one cellular automata step on a Y slice: each cell becomes one value if its neighbours sum to the threshold, another if not."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CellularAutomata

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Cave generator part that runs one cellular automata step on a Y slice: each cell becomes one value if its neighbours sum to the threshold, another if not.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/mod/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`CellularAutomataInstance`](/mod/game-api/types/alta-world-generation/cellularautomatainstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CellularAutomata()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-captureradius" /><code>{"private int captureRadius"}</code> | <span className="api-desc">Backing field for `CaptureRadius`.</span> |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> | <span className="api-desc">Backing field for `Threshold`.</span> |
| <Link id="m-valueiffalse" /><code>{"private float valueIfFalse"}</code> | <span className="api-desc">Backing field for `ValueIfFalse`.</span> |
| <Link id="m-valueiftrue" /><code>{"private float valueIfTrue"}</code> | <span className="api-desc">Backing field for `ValueIfTrue`.</span> |
| <Link id="m-yindex" /><code>{"private int yIndex"}</code> | <span className="api-desc">Backing field for `YIndex`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-captureradius-2" /><code>{"int CaptureRadius { get; }"}</code> | <span className="api-desc">How many cells out from each cell are summed (default 1). Cells this close to the edge are left as they were.</span> |
| <Link id="m-threshold-2" /><code>{"float Threshold { get; }"}</code> | <span className="api-desc">Sum of the neighbourhood needed to count as true (default 0.5).</span> |
| <Link id="m-valueiffalse-2" /><code>{"float ValueIfFalse { get; }"}</code> | <span className="api-desc">Value written when the sum stays below `Threshold`.</span> |
| <Link id="m-valueiftrue-2" /><code>{"float ValueIfTrue { get; }"}</code> | <span className="api-desc">Value written when the sum reaches `Threshold`.</span> |
| <Link id="m-yindex-2" /><code>{"int YIndex { get; }"}</code> | <span className="api-desc">Which Y slice of the layer is processed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | <span className="api-desc">Creates the `CellularAutomataInstance` that does the work.</span> |

## Used in

Members of other types that take, return or hold a `CellularAutomata`:

<div className="api-used-in">

[`CellularAutomataInstance.CellularAutomataInstance`](/mod/game-api/types/alta-world-generation/cellularautomatainstance#m-ctor).

</div>
