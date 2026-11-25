---
title: "Achievement"
description: "One Steam achievement tracked by AchievementManager: its definition, text and whether the player has it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Achievement

A **class** in `Root.Township`, `Alta.Achievements`.

One Steam achievement tracked by `AchievementManager`: its definition, text and whether the player has it.

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Achievement("}<Link to="/game-api/types/alta-player/iachievementmanager">{"IAchievementManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-player/achievementdefinition">{"AchievementDefinition"}</Link>{" definition)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-manager" /><code>{"private "}<Link to="/game-api/types/alta-player/iachievementmanager">{"IAchievementManager"}</Link>{" manager"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-player/achievementdefinition">{"AchievementDefinition"}</Link>{" Definition { get; private set; }"}</code> | The achievement asset this belongs to. |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | Display description. |
| <Link id="m-isachieved" /><code>{"bool IsAchieved { get; private set; }"}</code> | Whether the player has unlocked it. |
| <Link id="m-isdefined" /><code>{"bool IsDefined { get; private set; }"}</code> | True once Steam has reported its state. |
| <Link id="m-ishidden" /><code>{"bool IsHidden { get; set; }"}</code> | Whether it's hidden until unlocked. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | Display name. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-complete" /><code>{"void Complete()"}</code> | Asks the manager to unlock it. |
| <Link id="m-requestupdate" /><code>{"void RequestUpdate()"}</code> | Asks the manager to refresh its state. |
| <Link id="m-serverprogressed" /><code>{"void ServerProgressed(uint value, uint outOf)"}</code> | Progress report from Steam. Does nothing. |
| <Link id="m-serverupdate" /><code>{"void ServerUpdate(bool isAchieved)"}</code> | Called with the state from Steam. Logs when it changes after the first report. |

## Used in

Members of other types that take, return or hold a `Achievement`:

[`AchievementManager.achievementMap`](/game-api/types/alta-player/achievementmanager#m-achievementmap), [`AchievementManager.achievements`](/game-api/types/alta-player/achievementmanager#m-achievements), [`AchievementManager.Complete`](/game-api/types/alta-player/achievementmanager#m-complete), [`AchievementManager.GetAchievement`](/game-api/types/alta-player/achievementmanager#m-getachievement), [`AchievementManager.RequestUpdate`](/game-api/types/alta-player/achievementmanager#m-requestupdate), [`IAchievementManager.Complete`](/game-api/types/alta-player/iachievementmanager#m-complete), [`IAchievementManager.RequestUpdate`](/game-api/types/alta-player/iachievementmanager#m-requestupdate), [`PlatformStats.RequestUpdate`](/game-api/types/alta-player/platformstats#m-requestupdate), [`PlatformStats.UnlockAchievement`](/game-api/types/alta-player/platformstats#m-unlockachievement), [`SteamStats.RequestUpdate`](/game-api/types/alta-player/steamstats#m-requestupdate), [`SteamStats.UnlockAchievement`](/game-api/types/alta-player/steamstats#m-unlockachievement).
