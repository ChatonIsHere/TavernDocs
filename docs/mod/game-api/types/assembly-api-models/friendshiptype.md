---
title: "FriendshipType"
description: "State of a friendship between two accounts in the Alta API: none, waiting for reply, requested or accepted."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendshipType

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

State of a friendship between two accounts in the Alta API: none, waiting for reply, requested or accepted.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-accepted" /><code>{"Accepted = 2"}</code> |
| <Link id="m-none" /><code>{"None = -1"}</code> |
| <Link id="m-requested" /><code>{"Requested = 1"}</code> |
| <Link id="m-waitingforreply" /><code>{"WaitingForReply = 0"}</code> |

## Used in

Members of other types that take, return or hold a `FriendshipType`:

<div className="api-used-in">

[`FriendshipInfo.Type`](/mod/game-api/types/assembly-api-models/friendshipinfo#m-type), [`FriendshipManager.GetFriendshipType`](/mod/game-api/types/global-e-h/friendshipmanager#m-getfriendshiptype), [`FriendshipManager.LocalStatusUpdate`](/mod/game-api/types/global-e-h/friendshipmanager#m-localstatusupdate), [`RecentPlayerActionPage.FriendButtonMap.type`](/mod/game-api/types/global-q-r/recentplayeractionpage-friendbuttonmap#m-type), [`RecentPlayers.GetFriendshipType`](/mod/game-api/types/global-q-r/recentplayers#m-getfriendshiptype).

</div>
