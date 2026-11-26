---
title: "ComponentGroup<T>.GroupModifiedHandler"
description: "Handler for a ComponentGroup's ItemAdded and ItemRemoved events, given the group and the item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ComponentGroup&lt;T&gt;.GroupModifiedHandler

A **delegate** in `Root.Township`, no namespace.

Handler for a `ComponentGroup`'s `ItemAdded` and `ItemRemoved` events, given the group and the item.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested in** [`ComponentGroup<T>`](/game-api/types/global-c-d/componentgroup-t)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GroupModifiedHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-c-d/componentgroup-t">{"ComponentGroup"}</Link>{"<T> group, T item, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-c-d/componentgroup-t">{"ComponentGroup"}</Link>{"<T> group, T item)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `GroupModifiedHandler`:

[`ComponentGroup<T>.ItemAdded`](/game-api/types/global-c-d/componentgroup-t#m-itemadded), [`ComponentGroup<T>.ItemRemoved`](/game-api/types/global-c-d/componentgroup-t#m-itemremoved).
