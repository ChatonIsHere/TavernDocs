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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`KilledData`](/game-api/types/alta-player/killeddata)
- **Documented in** [Console events](/game-api/console-and-utilities/console-events)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerKilledData("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" killedPlayer, "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" killingHit)"}</code> | Creates a `PlayerKilledData` from `killedPlayer` and `killingHit`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-killedplayer" /><code><Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" killedPlayer"}</code> | The player who died. |

## Used in

Members of other types that take, return or hold a `PlayerKilledData`:

[`ConsoleEvents.PlayerKilled`](/game-api/types/alta-console/consoleevents#m-playerkilled).
