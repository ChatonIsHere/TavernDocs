---
title: "OcclusionChunkEffectData"
description: "Chunk effect asset that sets how occlusion culling works while the local player is in the chunk: normal, portal based or off."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OcclusionChunkEffectData

A **class** in `Root.Township`, `Alta.Chunks`.

Chunk effect asset that sets how occlusion culling works while the local player is in the chunk: normal, portal based or off.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`ChunkEffect`](/mod/game-api/types/alta-world/chunkeffect)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OcclusionChunkEffectData()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-mode" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/occlusionmode">{"OcclusionMode"}</Link>{" mode"}</code> | The occlusion mode for the chunk. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"override void Apply(bool isContained)"}</code> | When the chunk contains the player, switches portal culling on or off by mode. `None` also turns off the player camera's occlusion culling. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disableforplayer" /><code>{"private void DisableForPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Turns off occlusion culling on the player's camera once the local player appears. |

</details>
