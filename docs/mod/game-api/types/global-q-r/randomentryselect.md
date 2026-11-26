---
title: "RandomEntrySelect"
description: "Animator state machine behaviour that sets an integer parameter to a random value on entering the state machine, to pick a random entry animation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomEntrySelect

A **class** in `Root.Township`, the global namespace.

Animator state machine behaviour that sets an integer parameter to a random value on entering the state machine, to pick a random entry animation.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `StateMachineBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomEntrySelect()"}</code> | Creates a `RandomEntrySelect` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-indexvariable" /><code>{"private string indexVariable"}</code> | Animator integer parameter to set, `Random` by default. |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> | Exclusive upper bound. |
| <Link id="m-minimum" /><code>{"private int minimum"}</code> | Inclusive lower bound. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onstatemachineenter" /><code>{"override void OnStateMachineEnter(Animator animator, int stateMachinePathHash)"}</code> | Sets the integer parameter to a random value from `minimum` up to but not including `maximum`. |
