---
title: "TimberBlock.StageLevel"
description: "The three carving stages of a timber block in order: outer, inner and core."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberBlock.StageLevel

An **enum** in `Root.Township`, `Alta.Carpentry`.

The three carving stages of a timber block in order: outer, inner and core. Finishing one stage starts the next.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`TimberBlock`](/mod/game-api/types/alta-crafting/timberblock)

## Values

| Member |
| --- |
| <Link id="m-core" /><code>{"Core = 2"}</code> |
| <Link id="m-inner" /><code>{"Inner = 1"}</code> |
| <Link id="m-outer" /><code>{"Outer = 0"}</code> |

## Used in

Members of other types that take, return or hold a `StageLevel`:

<div className="api-used-in">

[`TimberBlock.CurrentStageLevel`](/mod/game-api/types/alta-crafting/timberblock#m-currentstagelevel), [`TimberBlock.stageMap`](/mod/game-api/types/alta-crafting/timberblock#m-stagemap), [`TimberBlock.CoreStage.StageLevel`](/mod/game-api/types/alta-crafting/timberblock-corestage#m-stagelevel), [`TimberBlock.InnerStage.StageLevel`](/mod/game-api/types/alta-crafting/timberblock-innerstage#m-stagelevel), [`TimberBlock.OuterStage.StageLevel`](/mod/game-api/types/alta-crafting/timberblock-outerstage#m-stagelevel), [`TimberBlock.Stage.StageLevel`](/mod/game-api/types/alta-crafting/timberblock-stage#m-stagelevel).

</div>
