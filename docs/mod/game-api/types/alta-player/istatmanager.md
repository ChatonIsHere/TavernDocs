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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Derived types** [`AchievementManager`](/mod/game-api/types/alta-player/achievementmanager)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"void Changed("}<Link to="/mod/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Tells the platform stats that the stat's value changed.</span> |
| <Link id="m-requestupdate" /><code>{"void RequestUpdate("}<Link to="/mod/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Asks the platform for the stat's current value.</span> |

## Used in

Members of other types that take, return or hold a `IStatManager`:

<div className="api-used-in">

[`Stat.manager`](/mod/game-api/types/alta-player/stat#m-manager), [`Stat.Stat`](/mod/game-api/types/alta-player/stat#m-ctor).

</div>
