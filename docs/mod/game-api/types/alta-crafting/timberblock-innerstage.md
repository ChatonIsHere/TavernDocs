---
title: "TimberBlock.InnerStage"
description: "The middle chiselling stage of a TimberBlock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberBlock.InnerStage

A **class** in `Root.Township`, `Alta.Carpentry`.

The middle chiselling stage of a `TimberBlock`. Finishing it moves the block on to the core stage.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`TimberBlock`](/mod/game-api/types/alta-crafting/timberblock)
- **Inherits or implements** [`TimberBlock.Stage`](/mod/game-api/types/alta-crafting/timberblock-stage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InnerStage()"}</code> | <span className="api-desc">Creates a `TimberBlock.InnerStage` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-stagelevel" /><code>{"override "}<Link to="/mod/game-api/types/alta-crafting/timberblock-stagelevel">{"TimberBlock.StageLevel"}</Link>{" "}<Link to="/mod/game-api/types/alta-crafting/timberblock-stagelevel">{"StageLevel"}</Link>{" { get; }"}</code> | <span className="api-desc">Always `StageLevel.Inner`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finalizestage" /><code>{"protected override void FinalizeStage(bool isForced)"}</code> | <span className="api-desc">Plays the finish effect and makes the core stage current.</span> |

## Used in

Members of other types that take, return or hold a `InnerStage`:

<div className="api-used-in">

[`TimberBlock.innerStage`](/mod/game-api/types/alta-crafting/timberblock#m-innerstage).

</div>
