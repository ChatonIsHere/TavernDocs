---
title: "ClientLandmarkManager.MarkerEvent"
description: "delegate ClientLandmarkManager.MarkerEvent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientLandmarkManager.MarkerEvent

A **delegate** in `Root.Township`, `Alta.Map`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Nested in** [`ClientLandmarkManager`](/game-api/types/alta-world/clientlandmarkmanager)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MarkerEvent(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" marker, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" marker)"}</code> |

## Used in

Members of other types that take, return or hold a `MarkerEvent`:

[`ClientLandmarkManager.Changed`](/game-api/types/alta-world/clientlandmarkmanager#m-changed).
