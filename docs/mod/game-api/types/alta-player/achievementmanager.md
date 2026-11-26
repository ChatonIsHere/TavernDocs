---
title: "AchievementManager"
description: "Singleton that loads every achievement and stat definition from Resources and passes unlocks and stat changes to Steam."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AchievementManager

A **class** in `Root.Township`, `Alta.Achievements`.

Singleton that loads every achievement and stat definition from Resources and passes unlocks and stat changes to Steam. Client side; get it through `Instance`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`SingletonBehaviour<AchievementManager>`](/mod/game-api/types/assembly-other/singletonbehaviour-t), [`IAchievementManager`](/mod/game-api/types/alta-player/iachievementmanager), [`IStatManager`](/mod/game-api/types/alta-player/istatmanager)
- **Derived types** [`AchievementManager`](/mod/game-api/types/alta-player/achievementmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AchievementManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-achievementmap" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-player/achievementdefinition">{"AchievementDefinition"}</Link>{", "}<Link to="/mod/game-api/types/alta-player/achievement">{"Achievement"}</Link>{"> achievementMap"}</code> | Achievement objects keyed by their definition asset. |
| <Link id="m-achievements" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-player/achievement">{"Achievement"}</Link>{"> achievements"}</code> | List of every loaded achievement. |
| <Link id="m-definitions" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/achievementdefinition">{"AchievementDefinition"}</Link>{"[] definitions"}</code> | Achievement definition assets loaded from Resources. |
| <Link id="m-platformstats" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/platformstats">{"PlatformStats"}</Link>{" platformStats"}</code> | The platform backend; always a `SteamStats` in this build. |
| <Link id="m-statdefinitions" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/achievementstatdefinition">{"AchievementStatDefinition"}</Link>{"[] statDefinitions"}</code> | Stat definition assets loaded from Resources. |
| <Link id="m-statmap" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-player/achievementstatdefinition">{"AchievementStatDefinition"}</Link>{", "}<Link to="/mod/game-api/types/alta-player/stat">{"Stat"}</Link>{"> statMap"}</code> | Stat objects keyed by their definition asset. |
| <Link id="m-stats" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-player/stat">{"Stat"}</Link>{"> stats"}</code> | List of every loaded stat. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getachievement" /><code><Link to="/mod/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" GetAchievement(string identifier)"}</code> | Finds an achievement by identifier (the definition asset's name) or by definition. The string overload throws if none matches. |
| <Link id="m-getachievement-2" /><code><Link to="/mod/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" GetAchievement("}<Link to="/mod/game-api/types/alta-player/achievementdefinition">{"AchievementDefinition"}</Link>{" definition)"}</code> | Finds an achievement by identifier (the definition asset's name) or by definition. The string overload throws if none matches. |
| <Link id="m-getstat" /><code><Link to="/mod/game-api/types/alta-player/stat">{"Stat"}</Link>{" GetStat(string identifier)"}</code> | Finds a stat by identifier (the definition asset's name) or by definition. The string overload throws if none matches. |
| <Link id="m-getstat-2" /><code><Link to="/mod/game-api/types/alta-player/stat">{"Stat"}</Link>{" GetStat("}<Link to="/mod/game-api/types/alta-player/achievementstatdefinition">{"AchievementStatDefinition"}</Link>{" definition)"}</code> | Finds a stat by identifier (the definition asset's name) or by definition. The string overload throws if none matches. |
| <Link id="m-updateall" /><code>{"void UpdateAll()"}</code> | Asks the platform to refresh every achievement and stat. Called once Steam reports stats received. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Loads definitions from the `Achievements` and `Stats` Resources folders, builds the maps, starts `SteamStats` and runs `SetupAchievements.Setup`. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"private void Alta.Achievements.IStatManager.Changed("}<Link to="/mod/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> | Explicit `IStatManager` method: called when a stat's value is set, and forwards it to the platform stats. |
| <Link id="m-complete" /><code>{"private void Alta.Achievements.IAchievementManager.Complete("}<Link to="/mod/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" achievement)"}</code> | Explicit `IAchievementManager` method: unlocks the achievement on the platform (Steam). |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Runs the platform stats' per-frame work (requesting and storing Steam stats). |
| <Link id="m-requestupdate" /><code>{"private void Alta.Achievements.IAchievementManager.RequestUpdate("}<Link to="/mod/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" achievement)"}</code> | Explicit interface methods: ask the platform for the current state of one achievement or stat. |
| <Link id="m-requestupdate-2" /><code>{"private void Alta.Achievements.IStatManager.RequestUpdate("}<Link to="/mod/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> | Explicit interface methods: ask the platform for the current state of one achievement or stat. |

</details>
