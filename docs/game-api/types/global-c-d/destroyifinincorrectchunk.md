---
title: "DestroyIfInIncorrectChunk"
description: "Server: destroys the entity if it ends up in a chunk that isn't a LocationChunk whose bounds contain it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DestroyIfInIncorrectChunk

A **class** in `Root.Township`, no namespace.

Server: destroys the entity if it ends up in a chunk that isn't a `LocationChunk` whose bounds contain it.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DestroyIfInIncorrectChunk()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Checks the current chunk and again every time the entity is added to a chunk. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"private void Check("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Destroys the entity unless the chunk is a location chunk containing its position. |

</details>
