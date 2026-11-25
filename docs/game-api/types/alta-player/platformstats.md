---
title: "PlatformStats"
description: "abstract class PlatformStats in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformStats

An **abstract class** in `Root.Township`, `Alta.Achievements`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Derived types** [`SteamStats`](/game-api/types/alta-player/steamstats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PlatformStats()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"abstract void Initialize()"}</code> |  |
| <Link id="m-lateupdate" /><code>{"abstract void LateUpdate()"}</code> |  |
| <Link id="m-requestupdate" /><code>{"abstract void RequestUpdate("}<Link to="/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" achievement)"}</code> |  |
| <Link id="m-requestupdate-2" /><code>{"abstract void RequestUpdate("}<Link to="/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> |  |
| <Link id="m-statchanged" /><code>{"abstract void StatChanged("}<Link to="/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> |  |
| <Link id="m-unlockachievement" /><code>{"abstract void UnlockAchievement("}<Link to="/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" achievement)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlatformStats`:

[`AchievementManager.platformStats`](/game-api/types/alta-player/achievementmanager#m-platformstats).
