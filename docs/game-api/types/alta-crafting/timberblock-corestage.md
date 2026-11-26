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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Nested in** [`TimberBlock`](/game-api/types/alta-crafting/timberblock)
- **Inherits or implements** [`TimberBlock.Stage`](/game-api/types/alta-crafting/timberblock-stage)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CoreStage()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-stagelevel" /><code>{"override "}<Link to="/game-api/types/alta-crafting/timberblock-stagelevel">{"TimberBlock.StageLevel"}</Link>{" "}<Link to="/game-api/types/alta-crafting/timberblock-stagelevel">{"StageLevel"}</Link>{" { get; }"}</code> | Always `StageLevel.Core`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-rotateto" /><code>{"override void RotateTo(bool isInversedUp)"}</code> | Does nothing, so core pieces don't flip when the block is rotated. |
| <Link id="m-finalizestage" /><code>{"protected override void FinalizeStage(bool isForced)"}</code> | Plays the finish effect, releases the result to the player who last hit a piece, then destroys the block entity. |

## Used in

Members of other types that take, return or hold a `CoreStage`:

[`TimberBlock.coreStage`](/game-api/types/alta-crafting/timberblock#m-corestage).
