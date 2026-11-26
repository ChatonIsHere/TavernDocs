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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EntityDespawnedHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |

## Used in

Members of other types that take, return or hold a `EntityDespawnedHandler`:

[`INetworkEntity.DestroyedByScene`](/game-api/types/alta-networking/inetworkentity#m-destroyedbyscene), [`NetworkEntity.DestroyedByScene`](/game-api/types/alta-networking/networkentity#m-destroyedbyscene).
