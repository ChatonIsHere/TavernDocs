---
title: "TimberBlock.OuterStage"
description: "The first chiselling stage of a TimberBlock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberBlock.OuterStage

A **class** in `Root.Township`, `Alta.Carpentry`.

The first chiselling stage of a `TimberBlock`. The pieces chiselled off here decide what the block becomes.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`TimberBlock`](/mod/game-api/types/alta-crafting/timberblock)
- **Inherits or implements** [`TimberBlock.Stage`](/mod/game-api/types/alta-crafting/timberblock-stage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OuterStage()"}</code> | <span className="api-desc">Creates a `TimberBlock.OuterStage` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-stagelevel" /><code>{"override "}<Link to="/mod/game-api/types/alta-crafting/timberblock-stagelevel">{"TimberBlock.StageLevel"}</Link>{" "}<Link to="/mod/game-api/types/alta-crafting/timberblock-stagelevel">{"StageLevel"}</Link>{" { get; }"}</code> | <span className="api-desc">Always `StageLevel.Outer`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkdone" /><code>{"protected override void CheckDone("}<Link to="/mod/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" piece)"}</code> | <span className="api-desc">Records the finished piece's index in the block's chiselled pieces, then checks whether every piece is done.</span> |
| <Link id="m-finalizestage" /><code>{"protected override void FinalizeStage(bool isForced)"}</code> | <span className="api-desc">Unless forced, works out the result from the chiselled pieces (server only). Then clears the list and makes the inner stage current.</span> |

## Used in

Members of other types that take, return or hold a `OuterStage`:

<div className="api-used-in">

[`TimberBlock.outerStage`](/mod/game-api/types/alta-crafting/timberblock#m-outerstage).

</div>
