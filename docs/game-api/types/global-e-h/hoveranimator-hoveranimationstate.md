---
title: "HoverAnimator.HoverAnimationState"
description: "Private per-object state for HoverAnimator: one per hovering child transform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HoverAnimator.HoverAnimationState

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private per-object state for `HoverAnimator`: one per hovering child transform.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Nested in** [`HoverAnimator`](/game-api/types/global-e-h/hoveranimator)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HoverAnimationState()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animationoffset" /><code>{"Vector3 AnimationOffset { get; set; }"}</code> | Random time offset per axis, so objects don't bob in step. |
| <Link id="m-dragtrigger" /><code><Link to="/game-api/types/global-c-d/dragtrigger">{"DragTrigger"}</Link>{" "}<Link to="/game-api/types/global-c-d/dragtrigger">{"DragTrigger"}</Link>{" { get; set; }"}</code> | Optional `DragTrigger` on the object; its drag pull is added to the hover position. |
| <Link id="m-startlocalposition" /><code>{"Vector3 StartLocalPosition { get; set; }"}</code> | Local position the hover animation moves around. |
| <Link id="m-transform" /><code>{"Transform Transform { get; set; }"}</code> | The object being animated. |

## Used in

Members of other types that take, return or hold a `HoverAnimationState`:

[`HoverAnimator.animationStates`](/game-api/types/global-e-h/hoveranimator#m-animationstates), [`HoverAnimator.EvaluateAnimation`](/game-api/types/global-e-h/hoveranimator#m-evaluateanimation).
