---
title: "PlayerStateChangeData"
description: "Payload of the ConsoleEvents.PlayerStateChanged console event, raised when a player enters or leaves a player state."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerStateChangeData

A **class** in `Root.Township`, `Alta.PlayerStates`.

Payload of the `ConsoleEvents.PlayerStateChanged` console event, raised when a player enters or leaves a player state.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Documented in** [Console events](/game-api/console-and-utilities/console-events)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerStateChangeData("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" state, bool isEnter)"}</code> | Creates a `PlayerStateChangeData` from `player`, `state` and `isEnter`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isenter" /><code>{"bool isEnter"}</code> | True when the player entered the state, false when they left it. |
| <Link id="m-state" /><code><Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" state"}</code> | The player state type. |
| <Link id="m-user" /><code><Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user"}</code> | The player. |

## Used in

Members of other types that take, return or hold a `PlayerStateChangeData`:

[`ConsoleEvents.PlayerStateChanged`](/game-api/types/alta-console/consoleevents#m-playerstatechanged).
