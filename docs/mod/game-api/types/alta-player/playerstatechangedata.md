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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Documented in** [Console events](/mod/game-api/console-and-utilities/console-events)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerStateChangeData("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" state, bool isEnter)"}</code> | <span className="api-desc">Creates a `PlayerStateChangeData` from `player`, `state` and `isEnter`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isenter" /><code>{"bool isEnter"}</code> | <span className="api-desc">True when the player entered the state, false when they left it.</span> |
| <Link id="m-state" /><code><Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" state"}</code> | <span className="api-desc">The player state type.</span> |
| <Link id="m-user" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user"}</code> | <span className="api-desc">The player.</span> |

## Used in

Members of other types that take, return or hold a `PlayerStateChangeData`:

<div className="api-used-in">

[`ConsoleEvents.PlayerStateChanged`](/mod/game-api/types/alta-console/consoleevents#m-playerstatechanged).

</div>
