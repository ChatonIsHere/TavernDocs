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

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkPrefabEventHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `NetworkPrefabEventHandler`:

[`NetworkPrefab.PreDestroyed`](/game-api/types/alta-networking/networkprefab#m-predestroyed).
