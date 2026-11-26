---
title: "TimberBlock.CoreStage"
description: "The last chiselling stage of a TimberBlock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberBlock.CoreStage

A **class** in `Root.Township`, `Alta.Carpentry`.

The last chiselling stage of a `TimberBlock`. Finishing it releases the crafted result and destroys the block.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`TimberBlock`](/mod/game-api/types/alta-crafting/timberblock)
- **Inherits or implements** [`TimberBlock.Stage`](/mod/game-api/types/alta-crafting/timberblock-stage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CoreStage()"}</code> | <span className="api-desc">Creates a `TimberBlock.CoreStage` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-stagelevel" /><code>{"override "}<Link to="/mod/game-api/types/alta-crafting/timberblock-stagelevel">{"TimberBlock.StageLevel"}</Link>{" "}<Link to="/mod/game-api/types/alta-crafting/timberblock-stagelevel">{"StageLevel"}</Link>{" { get; }"}</code> | <span className="api-desc">Always `StageLevel.Core`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-rotateto" /><code>{"override void RotateTo(bool isInversedUp)"}</code> | <span className="api-desc">Does nothing, so core pieces don't flip when the block is rotated.</span> |
| <Link id="m-finalizestage" /><code>{"protected override void FinalizeStage(bool isForced)"}</code> | <span className="api-desc">Plays the finish effect, releases the result to the player who last hit a piece, then destroys the block entity.</span> |

## Used in

Members of other types that take, return or hold a `CoreStage`:

<div className="api-used-in">

[`TimberBlock.coreStage`](/mod/game-api/types/alta-crafting/timberblock#m-corestage).

</div>
