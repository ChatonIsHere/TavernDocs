---
title: "TargetResult"
description: "Debug record of how one target scored for an agent's actions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TargetResult

A **class** in `Root.Township`, `Alta.Intelligence`.

Debug record of how one target scored for an agent's actions.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Nested types** [`Result`](/mod/game-api/types/alta-intelligence/targetresult-result)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TargetResult()"}</code> | <span className="api-desc">Creates a `TargetResult` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-results" /><code>{"List<"}<Link to="/mod/game-api/types/alta-intelligence/targetresult-result">{"TargetResult.Result"}</Link>{"> Results { get; }"}</code> | <span className="api-desc">One result per action, with its weight and the steps that made it.</span> |
| <Link id="m-target" /><code><Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Target { get; set; }"}</code> | <span className="api-desc">The target that was scored.</span> |

## Used in

Members of other types that take, return or hold a `TargetResult`:

<div className="api-used-in">

[`DebugResults.results`](/mod/game-api/types/alta-intelligence/debugresults#m-results).

</div>
