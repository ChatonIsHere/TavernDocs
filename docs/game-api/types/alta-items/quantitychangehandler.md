---
title: "QuantityChangeHandler"
description: "Parameterless handler for PickupDock.QuantityChanged."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuantityChangeHandler

A **delegate** in `Root.Township`, `Alta.Inventory`.

Parameterless handler for `PickupDock.QuantityChanged`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"QuantityChangeHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke()"}</code> |

## Used in

Members of other types that take, return or hold a `QuantityChangeHandler`:

[`PickupDock.QuantityChanged`](/game-api/types/alta-items/pickupdock#m-quantitychanged).
