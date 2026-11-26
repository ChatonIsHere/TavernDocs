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
| <Link id="m-ctor" /><code>{"CellularAutomata()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-captureradius" /><code>{"private int captureRadius"}</code> | Backing field for `CaptureRadius`. |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> | Backing field for `Threshold`. |
| <Link id="m-valueiffalse" /><code>{"private float valueIfFalse"}</code> | Backing field for `ValueIfFalse`. |
| <Link id="m-valueiftrue" /><code>{"private float valueIfTrue"}</code> | Backing field for `ValueIfTrue`. |
| <Link id="m-yindex" /><code>{"private int yIndex"}</code> | Backing field for `YIndex`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-captureradius-2" /><code>{"int CaptureRadius { get; }"}</code> | How many cells out from each cell are summed (default 1). Cells this close to the edge are left as they were. |
| <Link id="m-threshold-2" /><code>{"float Threshold { get; }"}</code> | Sum of the neighbourhood needed to count as true (default 0.5). |
| <Link id="m-valueiffalse-2" /><code>{"float ValueIfFalse { get; }"}</code> | Value written when the sum stays below `Threshold`. |
| <Link id="m-valueiftrue-2" /><code>{"float ValueIfTrue { get; }"}</code> | Value written when the sum reaches `Threshold`. |
| <Link id="m-yindex-2" /><code>{"int YIndex { get; }"}</code> | Which Y slice of the layer is processed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | Creates the `CellularAutomataInstance` that does the work. |

## Used in

Members of other types that take, return or hold a `CellularAutomata`:

[`CellularAutomataInstance.CellularAutomataInstance`](/mod/game-api/types/alta-world-generation/cellularautomatainstance#m-ctor).
