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
| <Link id="m-ctor" /><code>{"SetBoolean()"}</code> | Creates a `SetBoolean` with default values. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boolname" /><code>{"private string boolName"}</code> | Name of the bool parameter. |
| <Link id="m-isenabledonentry" /><code>{"private bool isEnabledOnEntry"}</code> | Value set on entry. |
| <Link id="m-isenabledonexit" /><code>{"private bool isEnabledOnExit"}</code> | Value set on exit. |
| <Link id="m-issettingentry" /><code>{"private bool isSettingEntry"}</code> | Whether to set the bool on entry. Default true. |
| <Link id="m-issettingexit" /><code>{"private bool isSettingExit"}</code> | Whether to set the bool on exit. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onstateenter" /><code>{"override void OnStateEnter(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)"}</code> | Sets the bool to `isEnabledOnEntry` if `isSettingEntry` is on. |
| <Link id="m-onstateexit" /><code>{"override void OnStateExit(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)"}</code> | Sets the bool to `isEnabledOnExit` if `isSettingExit` is on. |
| <Link id="m-onstatemachineenter" /><code>{"override void OnStateMachineEnter(Animator animator, int stateMachinePathHash)"}</code> | Same as `OnStateEnter`, for entering the sub state machine. |
| <Link id="m-onstatemachineexit" /><code>{"override void OnStateMachineExit(Animator animator, int stateMachinePathHash)"}</code> | Same as `OnStateExit`, for leaving the sub state machine. |
