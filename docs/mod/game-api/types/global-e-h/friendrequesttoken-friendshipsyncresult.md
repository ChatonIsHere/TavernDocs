---
title: "FriendRequestToken.FriendshipSyncResult"
description: "Outcome of a friend request token touch (new friend, already friends, or denied)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendRequestToken.FriendshipSyncResult

An **private enum** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Outcome of a friend request token touch (new friend, already friends, or denied). Sent to clients to pick which effect to play.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`FriendRequestToken`](/mod/game-api/types/global-e-h/friendrequesttoken)

## Values

| Member |
| --- |
| <Link id="m-denied" /><code>{"Denied = 2"}</code> |
| <Link id="m-existingfriend" /><code>{"ExistingFriend = 1"}</code> |
| <Link id="m-newfriend" /><code>{"NewFriend = 0"}</code> |

## Used in

Members of other types that take, return or hold a `FriendshipSyncResult`:

<div className="api-used-in">

[`FriendRequestToken.RunEffects`](/mod/game-api/types/global-e-h/friendrequesttoken#m-runeffects).

</div>
