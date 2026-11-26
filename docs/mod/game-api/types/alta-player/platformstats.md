---
title: "PlatformStats"
description: "Base for a platform's achievements and stats backend."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformStats

An **abstract class** in `Root.Township`, `Alta.Achievements`.

Base for a platform's achievements and stats backend. `AchievementManager` creates a `SteamStats` and forwards calls to it.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Derived types** [`SteamStats`](/mod/game-api/types/alta-player/steamstats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PlatformStats()"}</code> | <span className="api-desc">Creates a `PlatformStats` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"abstract void Initialize()"}</code> | <span className="api-desc">Sets up the platform backend.</span> |
| <Link id="m-lateupdate" /><code>{"abstract void LateUpdate()"}</code> | <span className="api-desc">Called each frame by `AchievementManager`.</span> |
| <Link id="m-requestupdate" /><code>{"abstract void RequestUpdate("}<Link to="/mod/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" achievement)"}</code> | <span className="api-desc">Reads an achievement's or stat's current value from the platform into the game's object.</span> |
| <Link id="m-requestupdate-2" /><code>{"abstract void RequestUpdate("}<Link to="/mod/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Reads an achievement's or stat's current value from the platform into the game's object.</span> |
| <Link id="m-statchanged" /><code>{"abstract void StatChanged("}<Link to="/mod/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Tells the backend a stat's value changed so it can be stored.</span> |
| <Link id="m-unlockachievement" /><code>{"abstract void UnlockAchievement("}<Link to="/mod/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" achievement)"}</code> | <span className="api-desc">Unlocks an achievement on the platform.</span> |

## Used in

Members of other types that take, return or hold a `PlatformStats`:

<div className="api-used-in">

[`AchievementManager.platformStats`](/mod/game-api/types/alta-player/achievementmanager#m-platformstats).

</div>
