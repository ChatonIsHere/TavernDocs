---
title: "MasterTerrainChunkEffectData"
description: "Chunk effect asset that turns the master terrain on or off while the local player is in the chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MasterTerrainChunkEffectData

A **class** in `Root.Township`, `Alta.Chunks`.

Chunk effect asset that turns the master terrain on or off while the local player is in the chunk.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`ChunkEffect`](/mod/game-api/types/alta-world/chunkeffect)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MasterTerrainChunkEffectData()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">Whether the master terrain should be on inside the chunk.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"override void Apply(bool isContained)"}</code> | <span className="api-desc">When the chunk contains the player, sets `MasterTerrain.Instance.IsActive` to `isActive`.</span> |
