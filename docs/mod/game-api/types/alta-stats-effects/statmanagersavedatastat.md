---
title: "StatManagerSaveDataStat"
description: "One saved stat in a StatManager's save data: which stat and its base flat value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatManagerSaveDataStat

A **class** in `Root.Township`, `Alta.StatSystem`.

One saved stat in a `StatManager`'s save data: which stat and its base flat value. `StatManager` loads each into the matching live stat.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatManagerSaveDataStat()"}</code> | Creates a `StatManagerSaveDataStat` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-baseflat" /><code>{"float baseFlat"}</code> | Saved base flat value of the stat. |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition"}</code> | Stat this entry is for. A null definition is logged and skipped on load. |

## Used in

Members of other types that take, return or hold a `StatManagerSaveDataStat`:

[`Stat.Load`](/mod/game-api/types/alta-stats-effects/stat#m-load), [`Stat.Save`](/mod/game-api/types/alta-stats-effects/stat#m-save), [`StatManagerSaveData.stats`](/mod/game-api/types/alta-stats-effects/statmanagersavedata#m-stats), [`StatManagerSaveData1.stats`](/mod/game-api/types/alta-stats-effects/statmanagersavedata1#m-stats).
