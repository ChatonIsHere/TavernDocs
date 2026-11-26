---
title: "SpawnHelper.SpawningCallback"
description: "Callback used by SpawnHelper.Spawn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnHelper.SpawningCallback

A **delegate** in `Root.Township`, the global namespace.

Callback used by `SpawnHelper.Spawn`. One is called just after the entity is created (to position it), the other after server initialization and before it is put in a chunk.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SpawnHelper`](/mod/game-api/types/global-s/spawnhelper)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawningCallback(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity)"}</code> | <span className="api-desc">Calls the callback with the new entity.</span> |

## Used in

Members of other types that take, return or hold a `SpawningCallback`:

<div className="api-used-in">

[`SpawnHelper.Spawn`](/mod/game-api/types/global-s/spawnhelper#m-spawn).

</div>
