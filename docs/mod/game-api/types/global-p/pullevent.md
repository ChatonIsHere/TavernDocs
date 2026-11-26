---
title: "PullEvent"
description: "Serializable event raised by a PullPickup when it is pulled, with separate client and server instances on the pickup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PullEvent

A **class** in `Root.Township`, the global namespace.

Serializable event raised by a `PullPickup` when it is pulled, with separate client and server instances on the pickup.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`AltaEvent<PullPickup, PullEventHandler>`](/mod/game-api/types/global-a-b/altaevent-t-unityeventt)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PullEvent()"}</code> | <span className="api-desc">Creates a `PullEvent` with default values.</span> |

## Used in

Members of other types that take, return or hold a `PullEvent`:

<div className="api-used-in">

[`PullPickup.pulledOnClient`](/mod/game-api/types/global-p/pullpickup#m-pulledonclient), [`PullPickup.pulledOnServer`](/mod/game-api/types/global-p/pullpickup#m-pulledonserver).

</div>
