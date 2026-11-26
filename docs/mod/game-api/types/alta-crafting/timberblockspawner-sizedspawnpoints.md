---
title: "TimberBlockSpawner.SizedSpawnPoints"
description: "Per block size settings on TimberBlockSpawner: where that size of block spawns and where the builder sits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberBlockSpawner.SizedSpawnPoints

A **struct** in `Root.Township`, `Alta.Carpentry`.

Per block size settings on `TimberBlockSpawner`: where that size of block spawns and where the builder sits.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`TimberBlockSpawner`](/mod/game-api/types/alta-crafting/timberblockspawner)

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-builderx" /><code>{"private float builderX"}</code> | <span className="api-desc">Backing field for `BuilderX`.</span> |
| <Link id="m-size" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" size"}</code> | <span className="api-desc">Backing field for `Size`.</span> |
| <Link id="m-spawnpoint" /><code>{"private Transform spawnPoint"}</code> | <span className="api-desc">Backing field for `SpawnPoint`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-builderx-2" /><code>{"float BuilderX { get; }"}</code> | <span className="api-desc">Builder X position used while the current block is this size.</span> |
| <Link id="m-size-2" /><code><Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" Size { get; }"}</code> | <span className="api-desc">The block size this entry is for.</span> |
| <Link id="m-spawnpoint-2" /><code>{"Transform SpawnPoint { get; }"}</code> | <span className="api-desc">Transform the block spawns at, returned by `GetSpawnPosition`.</span> |

## Used in

Members of other types that take, return or hold a `SizedSpawnPoints`:

<div className="api-used-in">

[`TimberBlockSpawner.spawnPositions`](/mod/game-api/types/alta-crafting/timberblockspawner#m-spawnpositions).

</div>
