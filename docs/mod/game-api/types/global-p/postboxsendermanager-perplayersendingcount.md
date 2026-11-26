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
| <Link id="m-ctor" /><code>{"PerPlayerSendingCount()"}</code> | <span className="api-desc">Creates a `PostBoxSenderManager.PerPlayerSendingCount` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-countperplayer" /><code>{"Dictionary<int, int> CountPerPlayer { get; }"}</code> | <span className="api-desc">Gifts left for each recipient, keyed by user id.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs the whole recipient list.</span> |
| <Link id="m-serializesingle" /><code>{"void SerializeSingle("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int toIdentifier)"}</code> | <span className="api-desc">Syncs the count for one recipient.</span> |

## Used in

Members of other types that take, return or hold a `PerPlayerSendingCount`:

<div className="api-used-in">

[`PostBoxSenderManager.perPlayerCounter`](/mod/game-api/types/global-p/postboxsendermanager#m-perplayercounter).

</div>
