---
title: "RandomFloatEntrySelect"
description: "Animator state machine behaviour that sets a float parameter to a random value on entering the state machine."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomFloatEntrySelect

A **class** in `Root.Township`, the global namespace.

Animator state machine behaviour that sets a float parameter to a random value on entering the state machine.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `StateMachineBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomFloatEntrySelect()"}</code> | Creates a `RandomFloatEntrySelect` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-indexvariable" /><code>{"private string indexVariable"}</code> | Animator float parameter to set, `Random` by default. |
| <Link id="m-maximum" /><code>{"private float maximum"}</code> | Upper bound. |
| <Link id="m-minimum" /><code>{"private float minimum"}</code> | Lower bound. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onstatemachineenter" /><code>{"override void OnStateMachineEnter(Animator animator, int stateMachinePathHash)"}</code> | Sets the float parameter to a random value between `minimum` and `maximum`. |
