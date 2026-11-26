---
title: "FullnessStat"
description: "Threshold stat for food fullness."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FullnessStat

A **class** in `Root.Township`, `Alta.StatSystem`.

Threshold stat for food fullness. It ticks down by one at a rate that depends on the current hunger level.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`ThresholdStat`](/mod/game-api/types/alta-stats-effects/thresholdstat)
- **Documented in** [Hunger, eating and drinking](/mod/game-api/game-systems/hunger-and-eating#fullnessstat), [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FullnessStat()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hungerdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/hungerstat">{"HungerStat"}</Link>{" hungerDefinition"}</code> | The hunger stat whose level sets the tick rate. |
| <Link id="m-tickrateperhungerthreshold" /><code>{"private int[] tickRatePerHungerThreshold"}</code> | Stat updates per point of fullness lost, one entry per hunger level. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Sets up the threshold levels and a stat update that removes 1 fullness after a number of updates picked by hunger level. |
| <Link id="m-checkserialize" /><code>{"override bool CheckSerialize(float oldValue, float newValue)"}</code> | Only syncs when the whole number part of the value changes. |
