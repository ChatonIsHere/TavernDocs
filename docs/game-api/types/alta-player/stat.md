---
title: "Stat"
description: "class Stat in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Stat

A **class** in `Root.Township`, `Alta.Achievements`.

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Stat("}<Link to="/game-api/types/alta-player/istatmanager">{"IStatManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-player/achievementstatdefinition">{"AchievementStatDefinition"}</Link>{" definition)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-floatvalue" /><code>{"private float floatValue"}</code> |  |
| <Link id="m-intvalue" /><code>{"private int intValue"}</code> |  |
| <Link id="m-manager" /><code>{"private "}<Link to="/game-api/types/alta-player/istatmanager">{"IStatManager"}</Link>{" manager"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-player/achievementstatdefinition">{"AchievementStatDefinition"}</Link>{" Definition { get; private set; }"}</code> |  |
| <Link id="m-floatvalue-2" /><code>{"float FloatValue { get; set; }"}</code> |  |
| <Link id="m-intvalue-2" /><code>{"int IntValue { get; set; }"}</code> |  |
| <Link id="m-isdefined" /><code>{"bool IsDefined { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-requestupdate" /><code>{"void RequestUpdate()"}</code> |  |
| <Link id="m-serverupdate" /><code>{"void ServerUpdate(int value)"}</code> |  |
| <Link id="m-serverupdate-2" /><code>{"void ServerUpdate(float value)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Stat`:

[`AchievementManager.Changed`](/game-api/types/alta-player/achievementmanager#m-changed), [`AchievementManager.GetStat`](/game-api/types/alta-player/achievementmanager#m-getstat), [`AchievementManager.RequestUpdate`](/game-api/types/alta-player/achievementmanager#m-requestupdate-2), [`AchievementManager.statMap`](/game-api/types/alta-player/achievementmanager#m-statmap), [`AchievementManager.stats`](/game-api/types/alta-player/achievementmanager#m-stats), [`IStatManager.Changed`](/game-api/types/alta-player/istatmanager#m-changed), [`IStatManager.RequestUpdate`](/game-api/types/alta-player/istatmanager#m-requestupdate), [`PlatformStats.RequestUpdate`](/game-api/types/alta-player/platformstats#m-requestupdate-2), [`PlatformStats.StatChanged`](/game-api/types/alta-player/platformstats#m-statchanged), [`SteamStats.RequestUpdate`](/game-api/types/alta-player/steamstats#m-requestupdate-2), [`SteamStats.StatChanged`](/game-api/types/alta-player/steamstats#m-statchanged).
