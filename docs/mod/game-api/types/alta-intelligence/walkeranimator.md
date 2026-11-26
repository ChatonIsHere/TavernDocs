---
title: "WalkerAnimator"
description: "Copies a Walker's state (speed, turn, pivot, stopping, grounded) into NetworkAnimator parameters each update."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WalkerAnimator

A **class** in `Root.Township`, `Alta.Pathfinding`.

Copies a `Walker`'s state (speed, turn, pivot, stopping, grounded) into `NetworkAnimator` parameters each update. A component next to the `Walker`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Movement and pathfinding](/mod/game-api/creatures/movement-and-pathfinding)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WalkerAnimator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator"}</code> | <span className="api-desc">The networked animator the parameters belong to.</span> |
| <Link id="m-forwardspeed" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{" forwardSpeed"}</code> | <span className="api-desc">Float parameter set from the walker's forward speed.</span> |
| <Link id="m-forwardspeedname" /><code>{"private string forwardSpeedName"}</code> | <span className="api-desc">Animator parameter name for forward speed. Empty skips it.</span> |
| <Link id="m-grounded" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" grounded"}</code> | <span className="api-desc">Bool parameter set from whether the walker is grounded.</span> |
| <Link id="m-groundedname" /><code>{"private string groundedName"}</code> | <span className="api-desc">Animator parameter name for grounded. Empty skips it.</span> |
| <Link id="m-pivot" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" pivot"}</code> | <span className="api-desc">Bool parameter set while the walker is pivoting.</span> |
| <Link id="m-pivotname" /><code>{"private string pivotName"}</code> | <span className="api-desc">Animator parameter name for pivot. Empty skips it.</span> |
| <Link id="m-stopping" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" stopping"}</code> | <span className="api-desc">Bool parameter set during the walker's final stretch to its goal.</span> |
| <Link id="m-stoppingname" /><code>{"private string stoppingName"}</code> | <span className="api-desc">Animator parameter name for stopping. Empty skips it.</span> |
| <Link id="m-turnspeed" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{" turnSpeed"}</code> | <span className="api-desc">Float parameter set from the walker's turn speed.</span> |
| <Link id="m-turnspeedname" /><code>{"private string turnSpeedName"}</code> | <span className="api-desc">Animator parameter name for turn speed. Empty skips it.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Subscribes `UpdateAnimation` to the `Walker`'s `Updated` event.</span> |
| <Link id="m-getbool" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" GetBool(string name)"}</code> | <span className="api-desc">Gets the animator bool with that name, or null if the name is empty.</span> |
| <Link id="m-getfloat" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{" GetFloat(string name)"}</code> | <span className="api-desc">Gets the animator float with that name, or null if the name is empty.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Looks up the animator parameters from the configured names.</span> |
| <Link id="m-updateanimation" /><code>{"private void UpdateAnimation("}<Link to="/mod/game-api/types/alta-intelligence/walkerstate">{"WalkerState"}</Link>{" state)"}</code> | <span className="api-desc">Writes the walker state's forward speed, turn speed, pivoting, final stretch and grounded values to the parameters that exist.</span> |

</details>
