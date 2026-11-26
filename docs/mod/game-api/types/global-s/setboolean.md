---
title: "SetBoolean"
description: "Animator state behaviour that sets a bool parameter when its state or state machine is entered or exited."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetBoolean

A **class** in `Root.Township`, the global namespace.

Animator state behaviour that sets a bool parameter when its state or state machine is entered or exited.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `StateMachineBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SetBoolean()"}</code> | <span className="api-desc">Creates a `SetBoolean` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boolname" /><code>{"private string boolName"}</code> | <span className="api-desc">Name of the bool parameter.</span> |
| <Link id="m-isenabledonentry" /><code>{"private bool isEnabledOnEntry"}</code> | <span className="api-desc">Value set on entry.</span> |
| <Link id="m-isenabledonexit" /><code>{"private bool isEnabledOnExit"}</code> | <span className="api-desc">Value set on exit.</span> |
| <Link id="m-issettingentry" /><code>{"private bool isSettingEntry"}</code> | <span className="api-desc">Whether to set the bool on entry. Default true.</span> |
| <Link id="m-issettingexit" /><code>{"private bool isSettingExit"}</code> | <span className="api-desc">Whether to set the bool on exit.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onstateenter" /><code>{"override void OnStateEnter(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)"}</code> | <span className="api-desc">Sets the bool to `isEnabledOnEntry` if `isSettingEntry` is on.</span> |
| <Link id="m-onstateexit" /><code>{"override void OnStateExit(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)"}</code> | <span className="api-desc">Sets the bool to `isEnabledOnExit` if `isSettingExit` is on.</span> |
| <Link id="m-onstatemachineenter" /><code>{"override void OnStateMachineEnter(Animator animator, int stateMachinePathHash)"}</code> | <span className="api-desc">Same as `OnStateEnter`, for entering the sub state machine.</span> |
| <Link id="m-onstatemachineexit" /><code>{"override void OnStateMachineExit(Animator animator, int stateMachinePathHash)"}</code> | <span className="api-desc">Same as `OnStateExit`, for leaving the sub state machine.</span> |
