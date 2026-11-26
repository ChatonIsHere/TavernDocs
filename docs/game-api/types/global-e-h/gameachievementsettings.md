---
title: "GameAchievementSettings"
description: "Global settings for achievements: the earned popup and the stats used for built-in achievements."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameAchievementSettings

A **class** in `Root.Township`, no namespace.

Global settings for achievements: the earned popup and the stats used for built-in achievements. Get it with `GlobalSettings<GameAchievementSettings>.Instance`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`GlobalSettings<GameAchievementSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`GameAchievementSettings`](/game-api/types/global-e-h/gameachievementsettings)
- **Attributes** `CreateAssetMenu`, `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameAchievementSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-achievementearneddefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" achievementEarnedDefinition"}</code> | Backing field for `AchievementEarnedDefinition`. |
| <Link id="m-cookfoodstat" /><code>{"private "}<Link to="/game-api/types/global-e-h/gameactionstat">{"GameActionStat"}</Link>{" cookFoodStat"}</code> | Backing field for `CookFoodStat`. |
| <Link id="m-distancetravelledstat" /><code>{"private "}<Link to="/game-api/types/global-e-h/gameactionstat">{"GameActionStat"}</Link>{" distanceTravelledStat"}</code> | Backing field for `DistanceTravelledStat`. |
| <Link id="m-lightcampfirestat" /><code>{"private "}<Link to="/game-api/types/global-e-h/gameactionstat">{"GameActionStat"}</Link>{" lightCampfireStat"}</code> | Backing field for `LightCampfireStat`. |
| <Link id="m-receivedpostboxstat" /><code>{"private "}<Link to="/game-api/types/global-e-h/gameactionstat">{"GameActionStat"}</Link>{" receivedPostboxStat"}</code> | Backing field for `ReceivedPostboxStat`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-achievementearneddefinition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" AchievementEarnedDefinition { get; }"}</code> | Pooled object shown when an achievement is earned. |
| <Link id="m-cookfoodstat-2" /><code><Link to="/game-api/types/global-e-h/gameactionstat">{"GameActionStat"}</Link>{" CookFoodStat { get; }"}</code> | Stat counted when food is cooked. |
| <Link id="m-distancetravelledstat-2" /><code><Link to="/game-api/types/global-e-h/gameactionstat">{"GameActionStat"}</Link>{" DistanceTravelledStat { get; }"}</code> | Stat for distance travelled. |
| <Link id="m-lightcampfirestat-2" /><code><Link to="/game-api/types/global-e-h/gameactionstat">{"GameActionStat"}</Link>{" LightCampfireStat { get; }"}</code> | Stat counted when a campfire is lit. |
| <Link id="m-receivedpostboxstat-2" /><code><Link to="/game-api/types/global-e-h/gameactionstat">{"GameActionStat"}</Link>{" ReceivedPostboxStat { get; }"}</code> | Stat counted when a postbox delivery is received. |
