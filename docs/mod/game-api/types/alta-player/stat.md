---
title: "Stat"
description: "One platform achievement stat (such as a Steam stat), as an int or a float."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Stat

A **class** in `Root.Township`, `Alta.Achievements`.

One platform achievement stat (such as a Steam stat), as an int or a float. Setting a value passes it on to `AchievementManager`, which sends it to the platform.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Stat("}<Link to="/mod/game-api/types/alta-player/istatmanager">{"IStatManager"}</Link>{" manager, "}<Link to="/mod/game-api/types/alta-player/achievementstatdefinition">{"AchievementStatDefinition"}</Link>{" definition)"}</code> | <span className="api-desc">Creates a `Stat` from `manager` and `definition`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-floatvalue" /><code>{"private float floatValue"}</code> | <span className="api-desc">Backing field for `FloatValue`. Setting the property tells the manager the stat changed.</span> |
| <Link id="m-intvalue" /><code>{"private int intValue"}</code> | <span className="api-desc">Backing field for `IntValue`. Setting the property tells the manager the stat changed.</span> |
| <Link id="m-manager" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/istatmanager">{"IStatManager"}</Link>{" manager"}</code> | <span className="api-desc">Stat manager told about every value change.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-player/achievementstatdefinition">{"AchievementStatDefinition"}</Link>{" Definition { get; private set; }"}</code> | <span className="api-desc">The stat's definition asset.</span> |
| <Link id="m-floatvalue-2" /><code>{"float FloatValue { get; set; }"}</code> | <span className="api-desc">The float value. Setting it tells the manager the stat changed.</span> |
| <Link id="m-intvalue-2" /><code>{"int IntValue { get; set; }"}</code> | <span className="api-desc">The int value. Setting it tells the manager the stat changed.</span> |
| <Link id="m-isdefined" /><code>{"bool IsDefined { get; private set; }"}</code> | <span className="api-desc">True once a value has come back from the platform through `ServerUpdate`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-requestupdate" /><code>{"void RequestUpdate()"}</code> | <span className="api-desc">Asks the platform for the stat's current value.</span> |
| <Link id="m-serverupdate" /><code>{"void ServerUpdate(int value)"}</code> | <span className="api-desc">Sets the value received from the platform and marks the stat as defined.</span> |
| <Link id="m-serverupdate-2" /><code>{"void ServerUpdate(float value)"}</code> | <span className="api-desc">Sets the value received from the platform and marks the stat as defined.</span> |

## Used in

Members of other types that take, return or hold a `Stat`:

<div className="api-used-in">

[`AchievementManager.Changed`](/mod/game-api/types/alta-player/achievementmanager#m-changed), [`AchievementManager.GetStat`](/mod/game-api/types/alta-player/achievementmanager#m-getstat), [`AchievementManager.RequestUpdate`](/mod/game-api/types/alta-player/achievementmanager#m-requestupdate-2), [`AchievementManager.statMap`](/mod/game-api/types/alta-player/achievementmanager#m-statmap), [`AchievementManager.stats`](/mod/game-api/types/alta-player/achievementmanager#m-stats), [`IStatManager.Changed`](/mod/game-api/types/alta-player/istatmanager#m-changed), [`IStatManager.RequestUpdate`](/mod/game-api/types/alta-player/istatmanager#m-requestupdate), [`PlatformStats.RequestUpdate`](/mod/game-api/types/alta-player/platformstats#m-requestupdate-2), [`PlatformStats.StatChanged`](/mod/game-api/types/alta-player/platformstats#m-statchanged), [`SteamStats.RequestUpdate`](/mod/game-api/types/alta-player/steamstats#m-requestupdate-2), [`SteamStats.StatChanged`](/mod/game-api/types/alta-player/steamstats#m-statchanged).

</div>
