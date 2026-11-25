---
title: "NetworkPrefabChildEventHandler"
description: "delegate NetworkPrefabChildEventHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkPrefabChildEventHandler

A **delegate** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkPrefabChildEventHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, int childIndex, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, int childIndex)"}</code> |

## Used in

Members of other types that take, return or hold a `NetworkPrefabChildEventHandler`:

[`ISerializeChildren.GetSpawnedChildren`](/game-api/types/alta-networking/iserializechildren#m-getspawnedchildren), [`NetworkPrefab.childrenCallback`](/game-api/types/alta-networking/networkprefab#m-childrencallback), [`NetworkPrefab.GetSpawnedChildren`](/game-api/types/alta-networking/networkprefab#m-getspawnedchildren), [`EmptyChildrenSerializer.GetSpawnedChildren`](/game-api/types/global-e-h/emptychildrenserializer#m-getspawnedchildren).
