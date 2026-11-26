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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Nested in** [`TimberBlock`](/game-api/types/alta-crafting/timberblock)
- **Inherits or implements** [`TimberBlock.Stage`](/game-api/types/alta-crafting/timberblock-stage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InnerStage()"}</code> | Creates a `TimberBlock.InnerStage` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-stagelevel" /><code>{"override "}<Link to="/game-api/types/alta-crafting/timberblock-stagelevel">{"TimberBlock.StageLevel"}</Link>{" "}<Link to="/game-api/types/alta-crafting/timberblock-stagelevel">{"StageLevel"}</Link>{" { get; }"}</code> | Always `StageLevel.Inner`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finalizestage" /><code>{"protected override void FinalizeStage(bool isForced)"}</code> | Plays the finish effect and makes the core stage current. |

## Used in

Members of other types that take, return or hold a `InnerStage`:

[`TimberBlock.innerStage`](/game-api/types/alta-crafting/timberblock#m-innerstage).
