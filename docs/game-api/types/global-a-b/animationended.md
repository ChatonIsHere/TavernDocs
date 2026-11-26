---
title: "AnimationEnded"
description: "Animator state behaviour that tells the animator's IAnimationEndCallbackReceiver component when the state exits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimationEnded

A **class** in `Root.Township`, no namespace.

Animator state behaviour that tells the animator's `IAnimationEndCallbackReceiver` component when the state exits. Used by `AnimatedEmblem`.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `StateMachineBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnimationEnded()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onstateexit" /><code>{"override void OnStateExit(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)"}</code> | Calls `OnAnimationEnded` on the `IAnimationEndCallbackReceiver` on the animator's object. |
