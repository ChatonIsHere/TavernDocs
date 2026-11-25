---
title: "PlayerTimeUpdate"
description: "delegate PlayerTimeUpdate in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerTimeUpdate

A **delegate** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerTimeUpdate(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" definition, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int time, bool isBestTime, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" definition, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int time, bool isBestTime)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerTimeUpdate`:

[`LeaderboardManager.onPlayerTimeUpdated`](/game-api/types/global-i-l/leaderboardmanager#m-onplayertimeupdated).
