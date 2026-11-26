---
title: "SpawnHelper.SpawningCallback"
description: "Callback used by SpawnHelper.Spawn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnHelper.SpawningCallback

A **delegate** in `Root.Township`, no namespace.

Callback used by `SpawnHelper.Spawn`. One is called just after the entity is created (to position it), the other after server initialization and before it is put in a chunk.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`SpawnHelper`](/game-api/types/global-s/spawnhelper)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawningCallback(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity)"}</code> | Calls the callback with the new entity. |

## Used in

Members of other types that take, return or hold a `SpawningCallback`:

[`SpawnHelper.Spawn`](/game-api/types/global-s/spawnhelper#m-spawn).
