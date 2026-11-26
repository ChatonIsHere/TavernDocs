---
title: "GameActionStat"
description: "A general-purpose game action asset on the General channel that accepts any argument."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameActionStat

A **class** in `Root.Township`, no namespace.

A general-purpose game action asset on the General channel that accepts any argument. Used for plain stat-counting actions.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`GameAction`](/game-api/types/global-e-h/gameaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameActionStat()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | Always `GameActionChannel.General`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"override bool IsValid("}<Link to="/game-api/types/global-e-h/gametaskactionargument">{"GameTaskActionArgument"}</Link>{" argument)"}</code> | Always true. |

## Used in

Members of other types that take, return or hold a `GameActionStat`:

[`GameAchievementSettings.cookFoodStat`](/game-api/types/global-e-h/gameachievementsettings#m-cookfoodstat), [`GameAchievementSettings.CookFoodStat`](/game-api/types/global-e-h/gameachievementsettings#m-cookfoodstat-2), [`GameAchievementSettings.distanceTravelledStat`](/game-api/types/global-e-h/gameachievementsettings#m-distancetravelledstat), [`GameAchievementSettings.DistanceTravelledStat`](/game-api/types/global-e-h/gameachievementsettings#m-distancetravelledstat-2), [`GameAchievementSettings.lightCampfireStat`](/game-api/types/global-e-h/gameachievementsettings#m-lightcampfirestat), [`GameAchievementSettings.LightCampfireStat`](/game-api/types/global-e-h/gameachievementsettings#m-lightcampfirestat-2), [`GameAchievementSettings.receivedPostboxStat`](/game-api/types/global-e-h/gameachievementsettings#m-receivedpostboxstat), [`GameAchievementSettings.ReceivedPostboxStat`](/game-api/types/global-e-h/gameachievementsettings#m-receivedpostboxstat-2).
