---
title: "GameAchievementSettings"
description: "Global settings for achievements: the earned popup and the stats used for built-in achievements."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameAchievementSettings

A **class** in `Root.Township`, the global namespace.

Global settings for achievements: the earned popup and the stats used for built-in achievements. Get it with `GlobalSettings<GameAchievementSettings>.Instance`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`GlobalSettings<GameAchievementSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`GameAchievementSettings`](/mod/game-api/types/global-e-h/gameachievementsettings)
- **Attributes** `CreateAssetMenu`, `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameAchievementSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-achievementearneddefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" achievementEarnedDefinition"}</code> | <span className="api-desc">Backing field for `AchievementEarnedDefinition`.</span> |
| <Link id="m-cookfoodstat" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gameactionstat">{"GameActionStat"}</Link>{" cookFoodStat"}</code> | <span className="api-desc">Backing field for `CookFoodStat`.</span> |
| <Link id="m-distancetravelledstat" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gameactionstat">{"GameActionStat"}</Link>{" distanceTravelledStat"}</code> | <span className="api-desc">Backing field for `DistanceTravelledStat`.</span> |
| <Link id="m-lightcampfirestat" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gameactionstat">{"GameActionStat"}</Link>{" lightCampfireStat"}</code> | <span className="api-desc">Backing field for `LightCampfireStat`.</span> |
| <Link id="m-receivedpostboxstat" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gameactionstat">{"GameActionStat"}</Link>{" receivedPostboxStat"}</code> | <span className="api-desc">Backing field for `ReceivedPostboxStat`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-achievementearneddefinition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" AchievementEarnedDefinition { get; }"}</code> | <span className="api-desc">Pooled object shown when an achievement is earned.</span> |
| <Link id="m-cookfoodstat-2" /><code><Link to="/mod/game-api/types/global-e-h/gameactionstat">{"GameActionStat"}</Link>{" CookFoodStat { get; }"}</code> | <span className="api-desc">Stat counted when food is cooked.</span> |
| <Link id="m-distancetravelledstat-2" /><code><Link to="/mod/game-api/types/global-e-h/gameactionstat">{"GameActionStat"}</Link>{" DistanceTravelledStat { get; }"}</code> | <span className="api-desc">Stat for distance travelled.</span> |
| <Link id="m-lightcampfirestat-2" /><code><Link to="/mod/game-api/types/global-e-h/gameactionstat">{"GameActionStat"}</Link>{" LightCampfireStat { get; }"}</code> | <span className="api-desc">Stat counted when a campfire is lit.</span> |
| <Link id="m-receivedpostboxstat-2" /><code><Link to="/mod/game-api/types/global-e-h/gameactionstat">{"GameActionStat"}</Link>{" ReceivedPostboxStat { get; }"}</code> | <span className="api-desc">Stat counted when a postbox delivery is received.</span> |
