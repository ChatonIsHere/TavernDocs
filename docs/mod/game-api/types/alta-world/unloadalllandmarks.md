---
title: "UnloadAllLandmarks"
description: "Chunk effect asset that unloads every world landmark while the local player is in the chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UnloadAllLandmarks

A **class** in `Root.Township`, `Alta.Chunks`.

Chunk effect asset that unloads every world landmark while the local player is in the chunk.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`ChunkEffect`](/mod/game-api/types/alta-world/chunkeffect)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UnloadAllLandmarks()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"override void Apply(bool isContained)"}</code> | When the chunk contains the player, calls `WorldLandmarkManager.ForceUnloadAll`. |
