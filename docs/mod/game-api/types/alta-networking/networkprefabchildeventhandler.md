---
title: "NetworkPrefabChildEventHandler"
description: "Callback for when a saved child of a prefab has spawned, given the child prefab, its parent entity and the child index."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkPrefabChildEventHandler

A **delegate** in `Root.Township`, `Alta.Networking`.

Callback for when a saved child of a prefab has spawned, given the child prefab, its parent entity and the child index. Used with `ISerializeChildren.GetSpawnedChildren`.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkPrefabChildEventHandler(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, int childIndex, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, int childIndex)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `NetworkPrefabChildEventHandler`:

<div className="api-used-in">

[`ISerializeChildren.GetSpawnedChildren`](/mod/game-api/types/alta-networking/iserializechildren#m-getspawnedchildren), [`NetworkPrefab.childrenCallback`](/mod/game-api/types/alta-networking/networkprefab#m-childrencallback), [`NetworkPrefab.GetSpawnedChildren`](/mod/game-api/types/alta-networking/networkprefab#m-getspawnedchildren), [`EmptyChildrenSerializer.GetSpawnedChildren`](/mod/game-api/types/global-e-h/emptychildrenserializer#m-getspawnedchildren).

</div>
