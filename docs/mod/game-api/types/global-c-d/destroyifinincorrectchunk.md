---
title: "DestroyIfInIncorrectChunk"
description: "Server: destroys the entity if it ends up in a chunk that isn't a LocationChunk whose bounds contain it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DestroyIfInIncorrectChunk

A **class** in `Root.Township`, the global namespace.

Server: destroys the entity if it ends up in a chunk that isn't a `LocationChunk` whose bounds contain it.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DestroyIfInIncorrectChunk()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Checks the current chunk and again every time the entity is added to a chunk. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"private void Check("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Destroys the entity unless the chunk is a location chunk containing its position. |

</details>
