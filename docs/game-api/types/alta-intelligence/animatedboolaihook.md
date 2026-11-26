---
title: "AnimatedBoolAiHook"
description: "AI hook that sets an animator bool on the creature when the action starts and another value when it ends, either networked or local only."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedBoolAiHook

A **class** in `Root.Township`, `Alta.Intelligence`.

AI hook that sets an animator bool on the creature when the action starts and another value when it ends, either networked or local only.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`AiHook`](/game-api/types/alta-intelligence/aihook)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnimatedBoolAiHook()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-booleans" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{", "}<Link to="/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{"> booleans"}</code> | The networked bool per creature, kept until the action ends. |
| <Link id="m-boolname" /><code>{"private string boolName"}</code> | Animator parameter name. |
| <Link id="m-isendtrue" /><code>{"private bool isEndTrue"}</code> | Value set when the action ends. Default false. |
| <Link id="m-isnetworked" /><code>{"private bool isNetworked"}</code> | Whether to set the bool through `NetworkAnimator` so clients see it, or only on the local animator. Default true. |
| <Link id="m-isstarttrue" /><code>{"private bool isStartTrue"}</code> | Value set when the action starts. Default true. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishedorcancelled" /><code>{"protected override void FinishedOrCancelled("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | Sets the bool to `isEndTrue` if the creature still exists. |
| <Link id="m-used" /><code>{"protected override void Used("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | Sets the bool to `isStartTrue`, through the network animator if networked. |
