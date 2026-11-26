---
title: "SpawnIfEmpty"
description: "Server: makes the SpawnerBase on the same object spawn once if the entity loaded with no children, waiting for a chunk if needed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnIfEmpty

A **class** in `Root.Township`, no namespace.

Server: makes the `SpawnerBase` on the same object spawn once if the entity loaded with no children, waiting for a chunk if needed.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnIfEmpty()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | If the entity has no children, spawns now or after it joins a chunk. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addedtochunk" /><code>{"private void AddedToChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Runs the spawner once the entity has been added to a chunk. |

</details>
