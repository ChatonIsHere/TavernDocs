---
title: "DebugResults"
description: "Holder for action scoring results, probably meant for AI debugging."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebugResults

A **class** in `Root.Township`, `Alta.Intelligence`.

Holder for action scoring results, probably meant for AI debugging. Nothing else in the code uses it.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DebugResults()"}</code> | Creates a `DebugResults` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-results" /><code>{"Dictionary<"}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/targetresult">{"TargetResult"}</Link>{"> results"}</code> | Scoring results per target. |
| <Link id="m-targeted" /><code>{"List<"}<Link to="/game-api/types/alta-intelligence/targetresult-result">{"TargetResult.Result"}</Link>{"> targeted"}</code> | Results for target actions. |
| <Link id="m-targetless" /><code>{"List<"}<Link to="/game-api/types/alta-intelligence/targetresult-result">{"TargetResult.Result"}</Link>{"> targetless"}</code> | Results for base actions with no target. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Empties all three collections. |
