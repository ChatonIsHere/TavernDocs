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
| <Link id="m-ctor" /><code>{"RandomTreeValue()"}</code> | <span className="api-desc">Creates a `RandomTreeValue` with default values.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isbinary" /><code>{"private bool isBinary"}</code> | <span className="api-desc">Pick only `minimum` or `maximum`, half the time each.</span> |
| <Link id="m-isnetworked" /><code>{"private bool isNetworked"}</code> | <span className="api-desc">Set the value through the `NetworkAnimator` so the server's value syncs to clients.</span> |
| <Link id="m-isnetworklerped" /><code>{"private bool isNetworkLerped"}</code> | <span className="api-desc">When networked, write to the lerped network float instead of the plain one.</span> |
| <Link id="m-maximum" /><code>{"private float maximum"}</code> | <span className="api-desc">Upper bound.</span> |
| <Link id="m-minimum" /><code>{"private float minimum"}</code> | <span className="api-desc">Lower bound.</span> |
| <Link id="m-valuename" /><code>{"private string valueName"}</code> | <span className="api-desc">Float parameter to set, `Blend` by default.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onstateenter" /><code>{"override void OnStateEnter(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)"}</code> | <span className="api-desc">Sets the float on the Animator, or when networked sets it on the `NetworkAnimator` from the server only.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getvalue" /><code>{"private float GetValue()"}</code> | <span className="api-desc">Random value between the bounds, or one of the two bounds if binary.</span> |

</details>
