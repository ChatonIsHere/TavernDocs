---
title: "IAchievementManager"
description: "What an Achievement calls back into to unlock or refresh itself."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAchievementManager

An **interface** in `Root.Township`, `Alta.Achievements`.

What an `Achievement` calls back into to unlock or refresh itself. Implemented by `AchievementManager`, which passes the calls to the platform stats.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Derived types** [`AchievementManager`](/game-api/types/alta-player/achievementmanager)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-complete" /><code>{"void Complete("}<Link to="/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" achievement)"}</code> | Unlocks the achievement on the platform. |
| <Link id="m-requestupdate" /><code>{"void RequestUpdate("}<Link to="/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" achievement)"}</code> | Asks the platform for the achievement's current state. |

## Used in

Members of other types that take, return or hold a `IAchievementManager`:

[`Achievement.Achievement`](/game-api/types/alta-player/achievement#m-ctor), [`Achievement.manager`](/game-api/types/alta-player/achievement#m-manager).
