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
| <Link id="m-ctor" /><code>{"WalkerAnimator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator"}</code> | The networked animator the parameters belong to. |
| <Link id="m-forwardspeed" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{" forwardSpeed"}</code> | Float parameter set from the walker's forward speed. |
| <Link id="m-forwardspeedname" /><code>{"private string forwardSpeedName"}</code> | Animator parameter name for forward speed. Empty skips it. |
| <Link id="m-grounded" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" grounded"}</code> | Bool parameter set from whether the walker is grounded. |
| <Link id="m-groundedname" /><code>{"private string groundedName"}</code> | Animator parameter name for grounded. Empty skips it. |
| <Link id="m-pivot" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" pivot"}</code> | Bool parameter set while the walker is pivoting. |
| <Link id="m-pivotname" /><code>{"private string pivotName"}</code> | Animator parameter name for pivot. Empty skips it. |
| <Link id="m-stopping" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" stopping"}</code> | Bool parameter set during the walker's final stretch to its goal. |
| <Link id="m-stoppingname" /><code>{"private string stoppingName"}</code> | Animator parameter name for stopping. Empty skips it. |
| <Link id="m-turnspeed" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{" turnSpeed"}</code> | Float parameter set from the walker's turn speed. |
| <Link id="m-turnspeedname" /><code>{"private string turnSpeedName"}</code> | Animator parameter name for turn speed. Empty skips it. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Subscribes `UpdateAnimation` to the `Walker`'s `Updated` event. |
| <Link id="m-getbool" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" GetBool(string name)"}</code> | Gets the animator bool with that name, or null if the name is empty. |
| <Link id="m-getfloat" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{" GetFloat(string name)"}</code> | Gets the animator float with that name, or null if the name is empty. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Looks up the animator parameters from the configured names. |
| <Link id="m-updateanimation" /><code>{"private void UpdateAnimation("}<Link to="/mod/game-api/types/alta-intelligence/walkerstate">{"WalkerState"}</Link>{" state)"}</code> | Writes the walker state's forward speed, turn speed, pivoting, final stretch and grounded values to the parameters that exist. |

</details>
