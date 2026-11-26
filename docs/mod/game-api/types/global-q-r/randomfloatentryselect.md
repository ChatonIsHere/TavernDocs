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
| <Link id="m-ctor" /><code>{"RandomFloatEntrySelect()"}</code> | <span className="api-desc">Creates a `RandomFloatEntrySelect` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-indexvariable" /><code>{"private string indexVariable"}</code> | <span className="api-desc">Animator float parameter to set, `Random` by default.</span> |
| <Link id="m-maximum" /><code>{"private float maximum"}</code> | <span className="api-desc">Upper bound.</span> |
| <Link id="m-minimum" /><code>{"private float minimum"}</code> | <span className="api-desc">Lower bound.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onstatemachineenter" /><code>{"override void OnStateMachineEnter(Animator animator, int stateMachinePathHash)"}</code> | <span className="api-desc">Sets the float parameter to a random value between `minimum` and `maximum`.</span> |
