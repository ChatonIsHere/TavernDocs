---
title: "FriendRequestToken.FriendshipSyncResult"
description: "Outcome of a friend request token touch (new friend, already friends, or denied)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendRequestToken.FriendshipSyncResult

An **private enum** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Outcome of a friend request token touch (new friend, already friends, or denied). Sent to clients to pick which effect to play.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Nested in** [`FriendRequestToken`](/game-api/types/global-e-h/friendrequesttoken)

## Values

| Member |
| --- |
| <Link id="m-denied" /><code>{"Denied = 2"}</code> |
| <Link id="m-existingfriend" /><code>{"ExistingFriend = 1"}</code> |
| <Link id="m-newfriend" /><code>{"NewFriend = 0"}</code> |

## Used in

Members of other types that take, return or hold a `FriendshipSyncResult`:

[`FriendRequestToken.RunEffects`](/game-api/types/global-e-h/friendrequesttoken#m-runeffects).
