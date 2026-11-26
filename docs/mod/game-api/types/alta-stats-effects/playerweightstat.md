---
title: "PlayerWeightStat"
description: "Stat definition that mirrors the player's carried weight from PlayerWeight into a stat."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerWeightStat

A **class** in `Root.Township`, `Alta.StatSystem`.

Stat definition that mirrors the player's carried weight from `PlayerWeight` into a stat.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatDefinition`](/mod/game-api/types/alta-stats-effects/statdefinition)
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerWeightStat()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Sets the stat's base to the new weight whenever `PlayerWeight.WeightChanged` fires on the entity's prefab root. |
