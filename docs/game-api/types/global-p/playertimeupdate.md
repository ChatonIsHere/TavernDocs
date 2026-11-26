---
title: "PlayerTimeUpdate"
description: "Handler for LeaderboardManager.onPlayerTimeUpdated, given the leaderboard, the player, their time and whether it's their best."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerTimeUpdate

A **delegate** in `Root.Township`, no namespace.

Handler for `LeaderboardManager.onPlayerTimeUpdated`, given the leaderboard, the player, their time and whether it's their best.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerTimeUpdate(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" definition, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int time, bool isBestTime, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" definition, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int time, bool isBestTime)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `PlayerTimeUpdate`:

[`LeaderboardManager.onPlayerTimeUpdated`](/game-api/types/global-i-l/leaderboardmanager#m-onplayertimeupdated).
