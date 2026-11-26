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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NewSaveData<StatManager, StatManagerSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`StatManager`](/game-api/types/alta-stats-effects/statmanager), [`StatManagerSaveData`](/game-api/types/alta-stats-effects/statmanagersavedata)
- **Nested types** [`IndirectStatModifier`](/game-api/types/alta-stats-effects/statmanagersavedata-indirectstatmodifier), [`TimedModifier`](/game-api/types/alta-stats-effects/statmanagersavedata-timedmodifier)
- **Attributes** `SaveStructure`
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatManagerSaveData()"}</code> | Creates a `StatManagerSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-indirectmodifiers" /><code><Link to="/game-api/types/alta-stats-effects/statmanagersavedata-indirectstatmodifier">{"StatManagerSaveData.IndirectStatModifier"}</Link>{"[] indirectModifiers"}</code> | Saved indirect modifiers, each with its stat, time and modifier list. |
| <Link id="m-modifiers" /><code><Link to="/game-api/types/alta-stats-effects/statmanagersavedata-timedmodifier">{"StatManagerSaveData.TimedModifier"}</Link>{"[] modifiers"}</code> | Saved timed modifiers: stat, value, whether it multiplies, and time. |
| <Link id="m-stats" /><code><Link to="/game-api/types/alta-stats-effects/statmanagersavedatastat">{"StatManagerSaveDataStat"}</Link>{"[] stats"}</code> | Saved stat values. |
