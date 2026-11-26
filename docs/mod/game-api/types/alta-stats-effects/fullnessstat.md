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
| <Link id="m-ctor" /><code>{"FullnessStat()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hungerdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/hungerstat">{"HungerStat"}</Link>{" hungerDefinition"}</code> | <span className="api-desc">The hunger stat whose level sets the tick rate.</span> |
| <Link id="m-tickrateperhungerthreshold" /><code>{"private int[] tickRatePerHungerThreshold"}</code> | <span className="api-desc">Stat updates per point of fullness lost, one entry per hunger level.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Sets up the threshold levels and a stat update that removes 1 fullness after a number of updates picked by hunger level.</span> |
| <Link id="m-checkserialize" /><code>{"override bool CheckSerialize(float oldValue, float newValue)"}</code> | <span className="api-desc">Only syncs when the whole number part of the value changes.</span> |
