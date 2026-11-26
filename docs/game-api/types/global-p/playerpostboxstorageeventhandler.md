---
title: "PlayerPostboxStorageEventHandler"
description: "Handler for a postbox's ItemAdded and ItemRemoved: gets the storage and its new item count."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerPostboxStorageEventHandler

A **delegate** in `Root.Township`, no namespace.

Handler for a postbox's `ItemAdded` and `ItemRemoved`: gets the storage and its new item count.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerPostboxStorageEventHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-p/playerpostboxstorage">{"PlayerPostboxStorage"}</Link>{" storage, int count, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-p/playerpostboxstorage">{"PlayerPostboxStorage"}</Link>{" storage, int count)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `PlayerPostboxStorageEventHandler`:

[`PlayerPostboxStorage.ItemAdded`](/game-api/types/global-p/playerpostboxstorage#m-itemadded), [`PlayerPostboxStorage.ItemRemoved`](/game-api/types/global-p/playerpostboxstorage#m-itemremoved).
