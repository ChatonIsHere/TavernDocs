---
title: "ClientLandmarkManager.MarkerEvent"
description: "Handler for a map marker change."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientLandmarkManager.MarkerEvent

A **delegate** in `Root.Township`, `Alta.Map`.

Handler for a map marker change.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Nested in** [`ClientLandmarkManager`](/mod/game-api/types/alta-world/clientlandmarkmanager)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MarkerEvent(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" marker, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" marker)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `MarkerEvent`:

<div className="api-used-in">

[`ClientLandmarkManager.Changed`](/mod/game-api/types/alta-world/clientlandmarkmanager#m-changed).

</div>
