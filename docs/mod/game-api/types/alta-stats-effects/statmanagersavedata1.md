---
title: "StatManagerSaveData1"
description: "Old version 1 save data for a StatManager, where modifier times were floats in seconds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatManagerSaveData1

A **class** in `Root.Township`, `Alta.StatSystem`.

Old version 1 save data for a `StatManager`, where modifier times were floats in seconds. Migrates to `StatManagerSaveData`.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Nested types** [`IndirectStatModifier`](/mod/game-api/types/alta-stats-effects/statmanagersavedata1-indirectstatmodifier), [`TimedModifier`](/mod/game-api/types/alta-stats-effects/statmanagersavedata1-timedmodifier)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatManagerSaveData1()"}</code> | <span className="api-desc">Creates a `StatManagerSaveData1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-indirectmodifiers" /><code><Link to="/mod/game-api/types/alta-stats-effects/statmanagersavedata1-indirectstatmodifier">{"StatManagerSaveData1.IndirectStatModifier"}</Link>{"[] indirectModifiers"}</code> | <span className="api-desc">Saved indirect stat modifiers.</span> |
| <Link id="m-modifiers" /><code><Link to="/mod/game-api/types/alta-stats-effects/statmanagersavedata1-timedmodifier">{"StatManagerSaveData1.TimedModifier"}</Link>{"[] modifiers"}</code> | <span className="api-desc">Saved timed modifiers.</span> |
| <Link id="m-stats" /><code><Link to="/mod/game-api/types/alta-stats-effects/statmanagersavedatastat">{"StatManagerSaveDataStat"}</Link>{"[] stats"}</code> | <span className="api-desc">Saved stat values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Copies the data into a new `StatManagerSaveData`, turning the second counts into `TimeSpan`s.</span> |
