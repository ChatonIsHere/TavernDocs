---
title: "StatEffectShellAnimator.ShellAnimationHandlerNode"
description: "Private: wraps a ShellAnimationHandler so it can sit in the animator's priority queue of waiting shell animations."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatEffectShellAnimator.ShellAnimationHandlerNode

A **private class** in `Root.Township`, `Alta.PlayerEffects`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private: wraps a `ShellAnimationHandler` so it can sit in the animator's priority queue of waiting shell animations.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`StatEffectShellAnimator`](/mod/game-api/types/alta-player/stateffectshellanimator)
- **Inherits or implements** [`FastPriorityQueueNode`](/mod/game-api/types/assembly-other/fastpriorityqueuenode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShellAnimationHandlerNode("}<Link to="/mod/game-api/types/alta-player/shellanimationhandler">{"ShellAnimationHandler"}</Link>{" handler)"}</code> | Creates a `StatEffectShellAnimator.ShellAnimationHandlerNode` from `handler`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code><Link to="/mod/game-api/types/alta-player/shellanimationhandler">{"ShellAnimationHandler"}</Link>{" Handler { get; }"}</code> | The queued handler. |

## Used in

Members of other types that take, return or hold a `ShellAnimationHandlerNode`:

[`StatEffectShellAnimator.animationQueue`](/mod/game-api/types/alta-player/stateffectshellanimator#m-animationqueue).
