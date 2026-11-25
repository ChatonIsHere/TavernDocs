---
title: "AchievementManager"
description: "class AchievementManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AchievementManager

A **class** in `Root.Township`, `Alta.Achievements`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`SingletonBehaviour<AchievementManager>`](/game-api/types/assembly-other/singletonbehaviour-t), [`IAchievementManager`](/game-api/types/alta-player/iachievementmanager), [`IStatManager`](/game-api/types/alta-player/istatmanager)
- **Derived types** [`AchievementManager`](/game-api/types/alta-player/achievementmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AchievementManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-achievementmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-player/achievementdefinition">{"AchievementDefinition"}</Link>{", "}<Link to="/game-api/types/alta-player/achievement">{"Achievement"}</Link>{"> achievementMap"}</code> |  |
| <Link id="m-achievements" /><code>{"private List<"}<Link to="/game-api/types/alta-player/achievement">{"Achievement"}</Link>{"> achievements"}</code> |  |
| <Link id="m-definitions" /><code>{"private "}<Link to="/game-api/types/alta-player/achievementdefinition">{"AchievementDefinition"}</Link>{"[] definitions"}</code> |  |
| <Link id="m-platformstats" /><code>{"private "}<Link to="/game-api/types/alta-player/platformstats">{"PlatformStats"}</Link>{" platformStats"}</code> |  |
| <Link id="m-statdefinitions" /><code>{"private "}<Link to="/game-api/types/alta-player/achievementstatdefinition">{"AchievementStatDefinition"}</Link>{"[] statDefinitions"}</code> |  |
| <Link id="m-statmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-player/achievementstatdefinition">{"AchievementStatDefinition"}</Link>{", "}<Link to="/game-api/types/alta-player/stat">{"Stat"}</Link>{"> statMap"}</code> |  |
| <Link id="m-stats" /><code>{"private List<"}<Link to="/game-api/types/alta-player/stat">{"Stat"}</Link>{"> stats"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getachievement" /><code><Link to="/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" GetAchievement(string identifier)"}</code> |  |
| <Link id="m-getachievement-2" /><code><Link to="/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" GetAchievement("}<Link to="/game-api/types/alta-player/achievementdefinition">{"AchievementDefinition"}</Link>{" definition)"}</code> |  |
| <Link id="m-getstat" /><code><Link to="/game-api/types/alta-player/stat">{"Stat"}</Link>{" GetStat(string identifier)"}</code> |  |
| <Link id="m-getstat-2" /><code><Link to="/game-api/types/alta-player/stat">{"Stat"}</Link>{" GetStat("}<Link to="/game-api/types/alta-player/achievementstatdefinition">{"AchievementStatDefinition"}</Link>{" definition)"}</code> |  |
| <Link id="m-updateall" /><code>{"void UpdateAll()"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-changed" /><code>{"private void Alta.Achievements.IStatManager.Changed("}<Link to="/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> |  |
| <Link id="m-complete" /><code>{"private void Alta.Achievements.IAchievementManager.Complete("}<Link to="/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" achievement)"}</code> |  |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |  |
| <Link id="m-requestupdate" /><code>{"private void Alta.Achievements.IAchievementManager.RequestUpdate("}<Link to="/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" achievement)"}</code> |  |
| <Link id="m-requestupdate-2" /><code>{"private void Alta.Achievements.IStatManager.RequestUpdate("}<Link to="/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> |  |
