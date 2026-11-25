---
title: "StatValue"
description: "class StatValue in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatValue

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/game-api/types/alta-intelligence/targetoperation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatValue("}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition, float from, float to, bool isTargetStat, bool isRatio)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private float from"}</code> |  |
| <Link id="m-isratio" /><code>{"private bool isRatio"}</code> |  |
| <Link id="m-istargetstat" /><code>{"private bool isTargetStat"}</code> |  |
| <Link id="m-statdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition"}</code> |  |
| <Link id="m-to" /><code>{"private float to"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> |  |
