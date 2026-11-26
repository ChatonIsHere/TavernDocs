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
| <Link id="m-ctor" /><code>{"RandomEntrySelect()"}</code> | <span className="api-desc">Creates a `RandomEntrySelect` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-indexvariable" /><code>{"private string indexVariable"}</code> | <span className="api-desc">Animator integer parameter to set, `Random` by default.</span> |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> | <span className="api-desc">Exclusive upper bound.</span> |
| <Link id="m-minimum" /><code>{"private int minimum"}</code> | <span className="api-desc">Inclusive lower bound.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onstatemachineenter" /><code>{"override void OnStateMachineEnter(Animator animator, int stateMachinePathHash)"}</code> | <span className="api-desc">Sets the integer parameter to a random value from `minimum` up to but not including `maximum`.</span> |
