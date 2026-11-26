---
title: "PostBoxSenderManager.PerPlayerSendingCount"
description: "For one sender, how many more gifts they can post to each other player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PostBoxSenderManager.PerPlayerSendingCount

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

For one sender, how many more gifts they can post to each other player.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PostBoxSenderManager`](/mod/game-api/types/global-p/postboxsendermanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PerPlayerSendingCount()"}</code> | Creates a `PostBoxSenderManager.PerPlayerSendingCount` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-countperplayer" /><code>{"Dictionary<int, int> CountPerPlayer { get; }"}</code> | Gifts left for each recipient, keyed by user id. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs the whole recipient list. |
| <Link id="m-serializesingle" /><code>{"void SerializeSingle("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int toIdentifier)"}</code> | Syncs the count for one recipient. |

## Used in

Members of other types that take, return or hold a `PerPlayerSendingCount`:

[`PostBoxSenderManager.perPlayerCounter`](/mod/game-api/types/global-p/postboxsendermanager#m-perplayercounter).
