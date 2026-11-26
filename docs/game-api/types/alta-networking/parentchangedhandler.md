---
title: "ParentChangedHandler"
description: "Callback for when a network entity's parent changes, with the entity, its old parent and its new parent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ParentChangedHandler

A **delegate** in `Root.Township`, `Alta.Networking`.

Callback for when a network entity's parent changes, with the entity, its old parent and its new parent.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ParentChangedHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" topic, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" oldParent, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newParent, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" topic, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" oldParent, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newParent)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `ParentChangedHandler`:

[`NetworkEntity.ParentChanged`](/game-api/types/alta-networking/networkentity#m-parentchanged).
