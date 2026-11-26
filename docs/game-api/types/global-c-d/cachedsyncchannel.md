---
title: "CachedSyncChannel"
description: "Remembers the NetworkEntity.SyncChannel that was active when it was made, so async code can send on that same channel later."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CachedSyncChannel

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Remembers the `NetworkEntity.SyncChannel` that was active when it was made, so async code can send on that same channel later. Used by `Postbox`, `MapManager`, `Controller` and `DiggingImpactor` across awaits.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `IDisposable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CachedSyncChannel()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cache" /><code>{"private "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" cache"}</code> | The sync channel captured in the constructor. |
| <Link id="m-returnto" /><code>{"private "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" returnTo"}</code> | The sync channel that was active when `Activate` was called. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"IDisposable Activate()"}</code> | Sets `NetworkEntity.SyncChannel` back to the cached channel and returns this, so a `using` block restores the old one after. |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Puts back the sync channel that was active before `Activate`. |
