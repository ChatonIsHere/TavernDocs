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
| <Link id="m-ctor" /><code>{"AchievementManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-achievementmap" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-player/achievementdefinition">{"AchievementDefinition"}</Link>{", "}<Link to="/mod/game-api/types/alta-player/achievement">{"Achievement"}</Link>{"> achievementMap"}</code> | <span className="api-desc">Achievement objects keyed by their definition asset.</span> |
| <Link id="m-achievements" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-player/achievement">{"Achievement"}</Link>{"> achievements"}</code> | <span className="api-desc">List of every loaded achievement.</span> |
| <Link id="m-definitions" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/achievementdefinition">{"AchievementDefinition"}</Link>{"[] definitions"}</code> | <span className="api-desc">Achievement definition assets loaded from Resources.</span> |
| <Link id="m-platformstats" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/platformstats">{"PlatformStats"}</Link>{" platformStats"}</code> | <span className="api-desc">The platform backend; always a `SteamStats` in this build.</span> |
| <Link id="m-statdefinitions" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/achievementstatdefinition">{"AchievementStatDefinition"}</Link>{"[] statDefinitions"}</code> | <span className="api-desc">Stat definition assets loaded from Resources.</span> |
| <Link id="m-statmap" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-player/achievementstatdefinition">{"AchievementStatDefinition"}</Link>{", "}<Link to="/mod/game-api/types/alta-player/stat">{"Stat"}</Link>{"> statMap"}</code> | <span className="api-desc">Stat objects keyed by their definition asset.</span> |
| <Link id="m-stats" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-player/stat">{"Stat"}</Link>{"> stats"}</code> | <span className="api-desc">List of every loaded stat.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getachievement" /><code><Link to="/mod/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" GetAchievement(string identifier)"}</code> | <span className="api-desc">Finds an achievement by identifier (the definition asset's name) or by definition. The string overload throws if none matches.</span> |
| <Link id="m-getachievement-2" /><code><Link to="/mod/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" GetAchievement("}<Link to="/mod/game-api/types/alta-player/achievementdefinition">{"AchievementDefinition"}</Link>{" definition)"}</code> | <span className="api-desc">Finds an achievement by identifier (the definition asset's name) or by definition. The string overload throws if none matches.</span> |
| <Link id="m-getstat" /><code><Link to="/mod/game-api/types/alta-player/stat">{"Stat"}</Link>{" GetStat(string identifier)"}</code> | <span className="api-desc">Finds a stat by identifier (the definition asset's name) or by definition. The string overload throws if none matches.</span> |
| <Link id="m-getstat-2" /><code><Link to="/mod/game-api/types/alta-player/stat">{"Stat"}</Link>{" GetStat("}<Link to="/mod/game-api/types/alta-player/achievementstatdefinition">{"AchievementStatDefinition"}</Link>{" definition)"}</code> | <span className="api-desc">Finds a stat by identifier (the definition asset's name) or by definition. The string overload throws if none matches.</span> |
| <Link id="m-updateall" /><code>{"void UpdateAll()"}</code> | <span className="api-desc">Asks the platform to refresh every achievement and stat. Called once Steam reports stats received.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Loads definitions from the `Achievements` and `Stats` Resources folders, builds the maps, starts `SteamStats` and runs `SetupAchievements.Setup`.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"private void Alta.Achievements.IStatManager.Changed("}<Link to="/mod/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Explicit `IStatManager` method: called when a stat's value is set, and forwards it to the platform stats.</span> |
| <Link id="m-complete" /><code>{"private void Alta.Achievements.IAchievementManager.Complete("}<Link to="/mod/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" achievement)"}</code> | <span className="api-desc">Explicit `IAchievementManager` method: unlocks the achievement on the platform (Steam).</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Runs the platform stats' per-frame work (requesting and storing Steam stats).</span> |
| <Link id="m-requestupdate" /><code>{"private void Alta.Achievements.IAchievementManager.RequestUpdate("}<Link to="/mod/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" achievement)"}</code> | <span className="api-desc">Explicit interface methods: ask the platform for the current state of one achievement or stat.</span> |
| <Link id="m-requestupdate-2" /><code>{"private void Alta.Achievements.IStatManager.RequestUpdate("}<Link to="/mod/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Explicit interface methods: ask the platform for the current state of one achievement or stat.</span> |

</details>
