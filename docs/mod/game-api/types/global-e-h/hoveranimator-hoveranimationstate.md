---
title: "HoverAnimator.HoverAnimationState"
description: "Private per-object state for HoverAnimator: one per hovering child transform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HoverAnimator.HoverAnimationState

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private per-object state for `HoverAnimator`: one per hovering child transform.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`HoverAnimator`](/mod/game-api/types/global-e-h/hoveranimator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HoverAnimationState()"}</code> | <span className="api-desc">Creates a `HoverAnimator.HoverAnimationState` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animationoffset" /><code>{"Vector3 AnimationOffset { get; set; }"}</code> | <span className="api-desc">Random time offset per axis, so objects don't bob in step.</span> |
| <Link id="m-dragtrigger" /><code><Link to="/mod/game-api/types/global-c-d/dragtrigger">{"DragTrigger"}</Link>{" "}<Link to="/mod/game-api/types/global-c-d/dragtrigger">{"DragTrigger"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Optional `DragTrigger` on the object; its drag pull is added to the hover position.</span> |
| <Link id="m-startlocalposition" /><code>{"Vector3 StartLocalPosition { get; set; }"}</code> | <span className="api-desc">Local position the hover animation moves around.</span> |
| <Link id="m-transform" /><code>{"Transform Transform { get; set; }"}</code> | <span className="api-desc">The object being animated.</span> |

## Used in

Members of other types that take, return or hold a `HoverAnimationState`:

<div className="api-used-in">

[`HoverAnimator.animationStates`](/mod/game-api/types/global-e-h/hoveranimator#m-animationstates), [`HoverAnimator.EvaluateAnimation`](/mod/game-api/types/global-e-h/hoveranimator#m-evaluateanimation).

</div>
