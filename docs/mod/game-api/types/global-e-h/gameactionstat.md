---
title: "GameActionStat"
description: "A general-purpose game action asset on the General channel that accepts any argument."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameActionStat

A **class** in `Root.Township`, the global namespace.

A general-purpose game action asset on the General channel that accepts any argument. Used for plain stat-counting actions.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`GameAction`](/mod/game-api/types/global-e-h/gameaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameActionStat()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/mod/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | Always `GameActionChannel.General`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"override bool IsValid("}<Link to="/mod/game-api/types/global-e-h/gametaskactionargument">{"GameTaskActionArgument"}</Link>{" argument)"}</code> | Always true. |

## Used in

Members of other types that take, return or hold a `GameActionStat`:

[`GameAchievementSettings.cookFoodStat`](/mod/game-api/types/global-e-h/gameachievementsettings#m-cookfoodstat), [`GameAchievementSettings.CookFoodStat`](/mod/game-api/types/global-e-h/gameachievementsettings#m-cookfoodstat-2), [`GameAchievementSettings.distanceTravelledStat`](/mod/game-api/types/global-e-h/gameachievementsettings#m-distancetravelledstat), [`GameAchievementSettings.DistanceTravelledStat`](/mod/game-api/types/global-e-h/gameachievementsettings#m-distancetravelledstat-2), [`GameAchievementSettings.lightCampfireStat`](/mod/game-api/types/global-e-h/gameachievementsettings#m-lightcampfirestat), [`GameAchievementSettings.LightCampfireStat`](/mod/game-api/types/global-e-h/gameachievementsettings#m-lightcampfirestat-2), [`GameAchievementSettings.receivedPostboxStat`](/mod/game-api/types/global-e-h/gameachievementsettings#m-receivedpostboxstat), [`GameAchievementSettings.ReceivedPostboxStat`](/mod/game-api/types/global-e-h/gameachievementsettings#m-receivedpostboxstat-2).
