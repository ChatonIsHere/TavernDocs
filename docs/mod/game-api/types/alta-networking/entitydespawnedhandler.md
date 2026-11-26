---
title: "EntityDespawnedHandler"
description: "Handler for an entity being removed by the scene, with isUnload telling whether it was unloaded rather than destroyed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntityDespawnedHandler

A **delegate** in `Root.Township`, `Alta.Networking`.

Handler for an entity being removed by the scene, with `isUnload` telling whether it was unloaded rather than destroyed. Used by `NetworkEntity.DestroyedByScene`.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntityDespawnedHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `EntityDespawnedHandler`:

[`INetworkEntity.DestroyedByScene`](/mod/game-api/types/alta-networking/inetworkentity#m-destroyedbyscene), [`NetworkEntity.DestroyedByScene`](/mod/game-api/types/alta-networking/networkentity#m-destroyedbyscene).
