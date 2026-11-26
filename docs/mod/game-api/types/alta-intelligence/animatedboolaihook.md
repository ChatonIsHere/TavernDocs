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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`AiHook`](/mod/game-api/types/alta-intelligence/aihook)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedBoolAiHook()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-booleans" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{", "}<Link to="/mod/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{"> booleans"}</code> | <span className="api-desc">The networked bool per creature, kept until the action ends.</span> |
| <Link id="m-boolname" /><code>{"private string boolName"}</code> | <span className="api-desc">Animator parameter name.</span> |
| <Link id="m-isendtrue" /><code>{"private bool isEndTrue"}</code> | <span className="api-desc">Value set when the action ends. Default false.</span> |
| <Link id="m-isnetworked" /><code>{"private bool isNetworked"}</code> | <span className="api-desc">Whether to set the bool through `NetworkAnimator` so clients see it, or only on the local animator. Default true.</span> |
| <Link id="m-isstarttrue" /><code>{"private bool isStartTrue"}</code> | <span className="api-desc">Value set when the action starts. Default true.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishedorcancelled" /><code>{"protected override void FinishedOrCancelled("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | <span className="api-desc">Sets the bool to `isEndTrue` if the creature still exists.</span> |
| <Link id="m-used" /><code>{"protected override void Used("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | <span className="api-desc">Sets the bool to `isStartTrue`, through the network animator if networked.</span> |
