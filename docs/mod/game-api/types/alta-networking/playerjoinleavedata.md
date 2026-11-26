---
title: "PlayerJoinLeaveData"
description: "Payload of the PlayerJoined and PlayerLeft console events, built from a player when they join or leave."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerJoinLeaveData

A **class** in `Root.Township`, `Alta.Networking.Servers`.

Payload of the `PlayerJoined` and `PlayerLeft` console events, built from a player when they join or leave.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Documented in** [Console events](/mod/game-api/console-and-utilities/console-events)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerJoinLeaveData("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Creates a `PlayerJoinLeaveData` from `player`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-mode" /><code><Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" mode"}</code> | The player's `PlayerMode` at the time. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | The player's saved position. |
| <Link id="m-user" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user"}</code> | The player's account info. |

## Used in

Members of other types that take, return or hold a `PlayerJoinLeaveData`:

[`ConsoleEvents.PlayerJoined`](/mod/game-api/types/alta-console/consoleevents#m-playerjoined), [`ConsoleEvents.PlayerLeft`](/mod/game-api/types/alta-console/consoleevents#m-playerleft).
