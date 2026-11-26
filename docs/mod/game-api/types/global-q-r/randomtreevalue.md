---
title: "RandomTreeValue"
description: "Animator state behaviour that sets a float parameter (usually a blend tree value) to a random value when the state is entered, optionally through the..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomTreeValue

A **class** in `Root.Township`, the global namespace.

Animator state behaviour that sets a float parameter (usually a blend tree value) to a random value when the state is entered, optionally through the `NetworkAnimator`.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `StateMachineBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomTreeValue()"}</code> | Creates a `RandomTreeValue` with default values. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isbinary" /><code>{"private bool isBinary"}</code> | Pick only `minimum` or `maximum`, half the time each. |
| <Link id="m-isnetworked" /><code>{"private bool isNetworked"}</code> | Set the value through the `NetworkAnimator` so the server's value syncs to clients. |
| <Link id="m-isnetworklerped" /><code>{"private bool isNetworkLerped"}</code> | When networked, write to the lerped network float instead of the plain one. |
| <Link id="m-maximum" /><code>{"private float maximum"}</code> | Upper bound. |
| <Link id="m-minimum" /><code>{"private float minimum"}</code> | Lower bound. |
| <Link id="m-valuename" /><code>{"private string valueName"}</code> | Float parameter to set, `Blend` by default. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onstateenter" /><code>{"override void OnStateEnter(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)"}</code> | Sets the float on the Animator, or when networked sets it on the `NetworkAnimator` from the server only. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getvalue" /><code>{"private float GetValue()"}</code> | Random value between the bounds, or one of the two bounds if binary. |

</details>
