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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Derived types** [`SteamStats`](/game-api/types/alta-player/steamstats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PlatformStats()"}</code> | Creates a `PlatformStats` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"abstract void Initialize()"}</code> | Sets up the platform backend. |
| <Link id="m-lateupdate" /><code>{"abstract void LateUpdate()"}</code> | Called each frame by `AchievementManager`. |
| <Link id="m-requestupdate" /><code>{"abstract void RequestUpdate("}<Link to="/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" achievement)"}</code> | Reads an achievement's or stat's current value from the platform into the game's object. |
| <Link id="m-requestupdate-2" /><code>{"abstract void RequestUpdate("}<Link to="/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> | Reads an achievement's or stat's current value from the platform into the game's object. |
| <Link id="m-statchanged" /><code>{"abstract void StatChanged("}<Link to="/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> | Tells the backend a stat's value changed so it can be stored. |
| <Link id="m-unlockachievement" /><code>{"abstract void UnlockAchievement("}<Link to="/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" achievement)"}</code> | Unlocks an achievement on the platform. |

## Used in

Members of other types that take, return or hold a `PlatformStats`:

[`AchievementManager.platformStats`](/game-api/types/alta-player/achievementmanager#m-platformstats).
