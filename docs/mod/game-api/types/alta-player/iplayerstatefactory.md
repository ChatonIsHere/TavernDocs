---
title: "IPlayerStateFactory"
description: "Makes player state objects for a PlayerStateManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPlayerStateFactory

An **interface** in `Root.Township`, `Alta.PlayerStates`.

Makes player state objects for a `PlayerStateManager`. `PlayerStateFactory` is the implementation.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Derived types** [`PlayerStateFactory`](/mod/game-api/types/alta-player/playerstatefactory)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createnewplayerstate" /><code><Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" CreateNewPlayerState("}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" stateType, "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseStateForDecorators)"}</code> | Creates the state for the given state type, wrapping the given base state when the new state is a decorator. |

## Used in

Members of other types that take, return or hold a `IPlayerStateFactory`:

[`PlayerStateManager.Inject`](/mod/game-api/types/alta-player/playerstatemanager#m-inject), [`PlayerStateManager.playerStateFactory`](/mod/game-api/types/alta-player/playerstatemanager#m-playerstatefactory).
