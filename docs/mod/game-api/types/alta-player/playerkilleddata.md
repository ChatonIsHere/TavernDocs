---
title: "PlayerKilledData"
description: "Payload of the ConsoleEvents.PlayerKilled console event, raised when a player enters the dead state."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerKilledData

A **class** in `Root.Township`, `Alta.PlayerStates`.

Payload of the `ConsoleEvents.PlayerKilled` console event, raised when a player enters the dead state. Holds the killing hit from `KilledData` plus who died.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`KilledData`](/mod/game-api/types/alta-player/killeddata)
- **Documented in** [Console events](/mod/game-api/console-and-utilities/console-events)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerKilledData("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" killedPlayer, "}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" killingHit)"}</code> | <span className="api-desc">Creates a `PlayerKilledData` from `killedPlayer` and `killingHit`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-killedplayer" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" killedPlayer"}</code> | <span className="api-desc">The player who died.</span> |

## Used in

Members of other types that take, return or hold a `PlayerKilledData`:

<div className="api-used-in">

[`ConsoleEvents.PlayerKilled`](/mod/game-api/types/alta-console/consoleevents#m-playerkilled).

</div>
