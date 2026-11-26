---
title: "Formula<T>"
description: "Scoring rule that runs a function you supply on the agent (cast to T) and the target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Formula&lt;T&gt;

A **class** in `Root.Township`, `Alta.Intelligence`.

Scoring rule that runs a function you supply on the agent (cast to `T`) and the target. Made by `CreateTargetOperation.Formula`; built-in creature actions use it for custom checks.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/mod/game-api/types/alta-intelligence/targetoperation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Formula(string name, Func<T, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{", float> evaluate)"}</code> | <span className="api-desc">Creates a `Formula` from `name` and `evaluate`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"private Func<T, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{", float> evaluate"}</code> | <span className="api-desc">The function that does the scoring.</span> |
| <Link id="m-name" /><code>{"private string name"}</code> | <span className="api-desc">Name shown by `ToString`, for debugging.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate-2" /><code>{"override float Evaluate("}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | <span className="api-desc">Casts the agent to `T` and returns the function's result. Throws if the agent isn't a `T`.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Returns "Formula (name)".</span> |
