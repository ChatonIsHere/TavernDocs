---
title: "DisplayMessageType"
description: "How a display message is queued: added to the queue, shown next, shown next replacing the current one, or shown only when the queue is empty."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DisplayMessageType

An **enum** in `Root.Township`, the global namespace.

How a display message is queued: added to the queue, shown next, shown next replacing the current one, or shown only when the queue is empty.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Values

| Member |
| --- |
| <Link id="m-forcenext" /><code>{"ForceNext = 1"}</code> |
| <Link id="m-forcenextkillcurrent" /><code>{"ForceNextKillCurrent = 2"}</code> |
| <Link id="m-onemptyqueueonly" /><code>{"OnEmptyQueueOnly = 3"}</code> |
| <Link id="m-queue" /><code>{"Queue = 0"}</code> |

## Used in

Members of other types that take, return or hold a `DisplayMessageType`:

<div className="api-used-in">

[`PlayerDebugMessager.displayType`](/mod/game-api/types/global-p/playerdebugmessager#m-displaytype), [`PlayerMessageDisplay.Display`](/mod/game-api/types/global-p/playermessagedisplay#m-display).

</div>
