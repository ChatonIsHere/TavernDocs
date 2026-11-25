---
title: "FullnessStat"
description: "While fullness is above 0, a timer counts down by 1 / tickRatePerHungerThresholdlevel each tick, where level is hunger's current level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FullnessStat

A **class** in `Root.Township`, `Alta.StatSystem`.

While fullness is above 0, a timer counts down by `1 / tickRatePerHungerThreshold[level]` each tick, where `level` is hunger's current level.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`ThresholdStat`](/game-api/types/alta-stats-effects/thresholdstat)
- **Documented in** [Hunger, eating and drinking](/game-api/game-systems/hunger-and-eating#fullnessstat), [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FullnessStat()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hungerdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/hungerstat">{"HungerStat"}</Link>{" hungerDefinition"}</code> |  |
| <Link id="m-tickrateperhungerthreshold" /><code>{"private int[] tickRatePerHungerThreshold"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |
| <Link id="m-checkserialize" /><code>{"override bool CheckSerialize(float oldValue, float newValue)"}</code> |  |
