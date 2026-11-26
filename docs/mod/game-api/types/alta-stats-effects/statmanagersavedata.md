---
title: "StatManagerSaveData"
description: "Save data for a StatManager (save structure version 2): stat values, timed modifiers and indirect modifiers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatManagerSaveData

A **class** in `Root.Township`, `Alta.StatSystem`.

Save data for a `StatManager` (save structure version 2): stat values, timed modifiers and indirect modifiers.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NewSaveData<StatManager, StatManagerSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`StatManager`](/mod/game-api/types/alta-stats-effects/statmanager), [`StatManagerSaveData`](/mod/game-api/types/alta-stats-effects/statmanagersavedata)
- **Nested types** [`IndirectStatModifier`](/mod/game-api/types/alta-stats-effects/statmanagersavedata-indirectstatmodifier), [`TimedModifier`](/mod/game-api/types/alta-stats-effects/statmanagersavedata-timedmodifier)
- **Attributes** `SaveStructure`
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatManagerSaveData()"}</code> | <span className="api-desc">Creates a `StatManagerSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-indirectmodifiers" /><code><Link to="/mod/game-api/types/alta-stats-effects/statmanagersavedata-indirectstatmodifier">{"StatManagerSaveData.IndirectStatModifier"}</Link>{"[] indirectModifiers"}</code> | <span className="api-desc">Saved indirect modifiers, each with its stat, time and modifier list.</span> |
| <Link id="m-modifiers" /><code><Link to="/mod/game-api/types/alta-stats-effects/statmanagersavedata-timedmodifier">{"StatManagerSaveData.TimedModifier"}</Link>{"[] modifiers"}</code> | <span className="api-desc">Saved timed modifiers: stat, value, whether it multiplies, and time.</span> |
| <Link id="m-stats" /><code><Link to="/mod/game-api/types/alta-stats-effects/statmanagersavedatastat">{"StatManagerSaveDataStat"}</Link>{"[] stats"}</code> | <span className="api-desc">Saved stat values.</span> |
