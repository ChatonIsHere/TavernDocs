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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Achievement("}<Link to="/mod/game-api/types/alta-player/iachievementmanager">{"IAchievementManager"}</Link>{" manager, "}<Link to="/mod/game-api/types/alta-player/achievementdefinition">{"AchievementDefinition"}</Link>{" definition)"}</code> | <span className="api-desc">Creates an `Achievement` from `manager` and `definition`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger. Logs when an achievement unlocks.</span> |
| <Link id="m-manager" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/iachievementmanager">{"IAchievementManager"}</Link>{" manager"}</code> | <span className="api-desc">Achievement manager used by `Complete` and `RequestUpdate`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-player/achievementdefinition">{"AchievementDefinition"}</Link>{" Definition { get; private set; }"}</code> | <span className="api-desc">The achievement asset this belongs to.</span> |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | <span className="api-desc">Display description.</span> |
| <Link id="m-isachieved" /><code>{"bool IsAchieved { get; private set; }"}</code> | <span className="api-desc">Whether the player has unlocked it.</span> |
| <Link id="m-isdefined" /><code>{"bool IsDefined { get; private set; }"}</code> | <span className="api-desc">True once Steam has reported its state.</span> |
| <Link id="m-ishidden" /><code>{"bool IsHidden { get; set; }"}</code> | <span className="api-desc">Whether it's hidden until unlocked.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">Display name.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-complete" /><code>{"void Complete()"}</code> | <span className="api-desc">Asks the manager to unlock it.</span> |
| <Link id="m-requestupdate" /><code>{"void RequestUpdate()"}</code> | <span className="api-desc">Asks the manager to refresh its state.</span> |
| <Link id="m-serverprogressed" /><code>{"void ServerProgressed(uint value, uint outOf)"}</code> | <span className="api-desc">Progress report from Steam. Does nothing.</span> |
| <Link id="m-serverupdate" /><code>{"void ServerUpdate(bool isAchieved)"}</code> | <span className="api-desc">Called with the state from Steam. Logs when it changes after the first report.</span> |

## Used in

Members of other types that take, return or hold a `Achievement`:

<div className="api-used-in">

[`AchievementManager.achievementMap`](/mod/game-api/types/alta-player/achievementmanager#m-achievementmap), [`AchievementManager.achievements`](/mod/game-api/types/alta-player/achievementmanager#m-achievements), [`AchievementManager.Complete`](/mod/game-api/types/alta-player/achievementmanager#m-complete), [`AchievementManager.GetAchievement`](/mod/game-api/types/alta-player/achievementmanager#m-getachievement), [`AchievementManager.RequestUpdate`](/mod/game-api/types/alta-player/achievementmanager#m-requestupdate), [`IAchievementManager.Complete`](/mod/game-api/types/alta-player/iachievementmanager#m-complete), [`IAchievementManager.RequestUpdate`](/mod/game-api/types/alta-player/iachievementmanager#m-requestupdate), [`PlatformStats.RequestUpdate`](/mod/game-api/types/alta-player/platformstats#m-requestupdate), [`PlatformStats.UnlockAchievement`](/mod/game-api/types/alta-player/platformstats#m-unlockachievement), [`SteamStats.RequestUpdate`](/mod/game-api/types/alta-player/steamstats#m-requestupdate), [`SteamStats.UnlockAchievement`](/mod/game-api/types/alta-player/steamstats#m-unlockachievement).

</div>
