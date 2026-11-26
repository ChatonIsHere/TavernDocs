---
title: "IStatManager"
description: "What a Stat calls back into to sync with the platform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IStatManager

An **interface** in `Root.Township`, `Alta.Achievements`.

What a `Stat` calls back into to sync with the platform. Implemented by `AchievementManager`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Derived types** [`AchievementManager`](/game-api/types/alta-player/achievementmanager)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"void Changed("}<Link to="/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> | Tells the platform stats that the stat's value changed. |
| <Link id="m-requestupdate" /><code>{"void RequestUpdate("}<Link to="/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> | Asks the platform for the stat's current value. |

## Used in

Members of other types that take, return or hold a `IStatManager`:

[`Stat.manager`](/game-api/types/alta-player/stat#m-manager), [`Stat.Stat`](/game-api/types/alta-player/stat#m-ctor).
