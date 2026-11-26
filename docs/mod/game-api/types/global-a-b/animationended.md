---
title: "AnimationEnded"
description: "Animator state behaviour that tells the animator's IAnimationEndCallbackReceiver component when the state exits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimationEnded

A **class** in `Root.Township`, the global namespace.

Animator state behaviour that tells the animator's `IAnimationEndCallbackReceiver` component when the state exits. Used by `AnimatedEmblem`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `StateMachineBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimationEnded()"}</code> | Creates an `AnimationEnded` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onstateexit" /><code>{"override void OnStateExit(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)"}</code> | Calls `OnAnimationEnded` on the `IAnimationEndCallbackReceiver` on the animator's object. |
