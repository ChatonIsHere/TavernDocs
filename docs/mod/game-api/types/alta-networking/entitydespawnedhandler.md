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
| <Link id="m-ctor" /><code>{"EntityDespawnedHandler(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `EntityDespawnedHandler`:

<div className="api-used-in">

[`INetworkEntity.DestroyedByScene`](/mod/game-api/types/alta-networking/inetworkentity#m-destroyedbyscene), [`NetworkEntity.DestroyedByScene`](/mod/game-api/types/alta-networking/networkentity#m-destroyedbyscene).

</div>
