---
title: "PickupDockHoverHandler"
description: "Handler for PickupDock.HoverCountChanged, with the dock and its previous hover count."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDockHoverHandler

A **delegate** in `Root.Township`, `Alta.Inventory`.

Handler for `PickupDock.HoverCountChanged`, with the dock and its previous hover count.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PickupDockHoverHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int oldCount, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int oldCount)"}</code> |

## Used in

Members of other types that take, return or hold a `PickupDockHoverHandler`:

[`PickupDock.HoverCountChanged`](/game-api/types/alta-items/pickupdock#m-hovercountchanged).
