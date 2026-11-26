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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`ChunkEffect`](/game-api/types/alta-world/chunkeffect)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MasterTerrainChunkEffectData()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | Whether the master terrain should be on inside the chunk. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"override void Apply(bool isContained)"}</code> | When the chunk contains the player, sets `MasterTerrain.Instance.IsActive` to `isActive`. |
