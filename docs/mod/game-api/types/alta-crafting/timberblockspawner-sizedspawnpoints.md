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

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-builderx" /><code>{"private float builderX"}</code> | Backing field for `BuilderX`. |
| <Link id="m-size" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" size"}</code> | Backing field for `Size`. |
| <Link id="m-spawnpoint" /><code>{"private Transform spawnPoint"}</code> | Backing field for `SpawnPoint`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-builderx-2" /><code>{"float BuilderX { get; }"}</code> | Builder X position used while the current block is this size. |
| <Link id="m-size-2" /><code><Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" Size { get; }"}</code> | The block size this entry is for. |
| <Link id="m-spawnpoint-2" /><code>{"Transform SpawnPoint { get; }"}</code> | Transform the block spawns at, returned by `GetSpawnPosition`. |

## Used in

Members of other types that take, return or hold a `SizedSpawnPoints`:

[`TimberBlockSpawner.spawnPositions`](/mod/game-api/types/alta-crafting/timberblockspawner#m-spawnpositions).
