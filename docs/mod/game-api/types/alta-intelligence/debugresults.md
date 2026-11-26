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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DebugResults()"}</code> | <span className="api-desc">Creates a `DebugResults` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-results" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/targetresult">{"TargetResult"}</Link>{"> results"}</code> | <span className="api-desc">Scoring results per target.</span> |
| <Link id="m-targeted" /><code>{"List<"}<Link to="/mod/game-api/types/alta-intelligence/targetresult-result">{"TargetResult.Result"}</Link>{"> targeted"}</code> | <span className="api-desc">Results for target actions.</span> |
| <Link id="m-targetless" /><code>{"List<"}<Link to="/mod/game-api/types/alta-intelligence/targetresult-result">{"TargetResult.Result"}</Link>{"> targetless"}</code> | <span className="api-desc">Results for base actions with no target.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Empties all three collections.</span> |
