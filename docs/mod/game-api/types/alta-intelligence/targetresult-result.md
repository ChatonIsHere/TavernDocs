---
title: "TargetResult.Result"
description: "Debug record of how one AI action scored against a target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TargetResult.Result

A **class** in `Root.Township`, `Alta.Intelligence`.

Debug record of how one AI action scored against a target. `ActionDecider` passes null for it in this build, so it is probably unused.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Nested in** [`TargetResult`](/mod/game-api/types/alta-intelligence/targetresult)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Result()"}</code> | Creates a `TargetResult.Result` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code><Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" Action { get; set; }"}</code> | The action being scored. |
| <Link id="m-basemultiplier" /><code>{"float BaseMultiplier { get; set; }"}</code> | The action's starting multiplier. |
| <Link id="m-steps" /><code>{"List<float> Steps { get; }"}</code> | Probably the score after each operation. |
| <Link id="m-weight" /><code>{"float Weight { get; set; }"}</code> | Final score. |

## Used in

Members of other types that take, return or hold a `Result`:

[`ActionDecider<TAgent>.CalculatePreferred`](/mod/game-api/types/alta-intelligence/actiondecider-tagent#m-calculatepreferred), [`ActionDecider<TAgent>.CalculateRequired`](/mod/game-api/types/alta-intelligence/actiondecider-tagent#m-calculaterequired), [`DebugResults.targeted`](/mod/game-api/types/alta-intelligence/debugresults#m-targeted), [`DebugResults.targetless`](/mod/game-api/types/alta-intelligence/debugresults#m-targetless), [`TargetResult.Results`](/mod/game-api/types/alta-intelligence/targetresult#m-results).
