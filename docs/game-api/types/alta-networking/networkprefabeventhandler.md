---
title: "NetworkPrefabEventHandler"
description: "Callback with a NetworkPrefab, used by NetworkPrefab.PreDestroyed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkPrefabEventHandler

A **delegate** in `Root.Township`, `Alta.Networking`.

Callback with a `NetworkPrefab`, used by `NetworkPrefab.PreDestroyed`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkPrefabEventHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> |

## Used in

Members of other types that take, return or hold a `NetworkPrefabEventHandler`:

[`NetworkPrefab.PreDestroyed`](/game-api/types/alta-networking/networkprefab#m-predestroyed).
