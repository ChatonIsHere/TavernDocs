---
title: "ControlledStat"
description: "Cancels itself out against another stat, so one soaks up the other."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControlledStat

An **abstract class** in `Root.Township`, `Alta.StatSystem`.

Cancels itself out against another stat, so one soaks up the other.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatDefinition`](/game-api/types/alta-stats-effects/statdefinition)
- **Derived types** [`BurnStat`](/game-api/types/alta-stats-effects/burnstat)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ControlledStat()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-controlleddefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" controlledDefinition"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |
