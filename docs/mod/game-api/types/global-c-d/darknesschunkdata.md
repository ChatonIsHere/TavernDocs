---
title: "DarknessChunkData"
description: "Chunk effect asset that turns darkness on while the player is in its chunks (for example caves), through DarknessTrigger."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DarknessChunkData

A **class** in `Root.Township`, the global namespace.

Chunk effect asset that turns darkness on while the player is in its chunks (for example caves), through `DarknessTrigger`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`ChunkEffect`](/mod/game-api/types/alta-world/chunkeffect)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DarknessChunkData()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"override void Apply(bool isContained)"}</code> | Sets `DarknessTrigger` dark when the chunk contains the player and light when not. |
