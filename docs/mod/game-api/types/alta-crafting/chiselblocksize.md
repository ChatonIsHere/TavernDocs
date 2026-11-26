---
title: "ChiselBlockSize"
description: "Size of a timber block, or the size a chisel cuts: Empty, Small, Medium or Large."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChiselBlockSize

An **enum** in `Root.Township`, `Alta.Carpentry`.

Size of a timber block, or the size a chisel cuts: Empty, Small, Medium or Large.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)

## Values

| Member |
| --- |
| <Link id="m-empty" /><code>{"Empty = 0"}</code> |
| <Link id="m-large" /><code>{"Large = 3"}</code> |
| <Link id="m-medium" /><code>{"Medium = 2"}</code> |
| <Link id="m-small" /><code>{"Small = 1"}</code> |

## Used in

Members of other types that take, return or hold a `ChiselBlockSize`:

[`ChiselDefinition.GetBest`](/mod/game-api/types/alta-crafting/chiseldefinition#m-getbest), [`ChiselDefinition.size`](/mod/game-api/types/alta-crafting/chiseldefinition#m-size), [`ChiselDefinition.Size`](/mod/game-api/types/alta-crafting/chiseldefinition#m-size-2), [`ChisellingDeck.maxSize`](/mod/game-api/types/alta-crafting/chisellingdeck#m-maxsize), [`ChisellingDeck.Resize`](/mod/game-api/types/alta-crafting/chisellingdeck#m-resize), [`ChisellingDeck.BuilderLevel.size`](/mod/game-api/types/alta-crafting/chisellingdeck-builderlevel#m-size), [`ChisellingDeck.BuilderLevel.Size`](/mod/game-api/types/alta-crafting/chisellingdeck-builderlevel#m-size-2), [`TimberBlock.size`](/mod/game-api/types/alta-crafting/timberblock#m-size), [`TimberBlock.Size`](/mod/game-api/types/alta-crafting/timberblock#m-size-2), [`TimberBlockSpawner.GetSpawnPosition`](/mod/game-api/types/alta-crafting/timberblockspawner#m-getspawnposition), [`TimberBlockSpawner.MaxSize`](/mod/game-api/types/alta-crafting/timberblockspawner#m-maxsize), [`TimberBlockSpawner.ChiselingSizePoint.maxSize`](/mod/game-api/types/alta-crafting/timberblockspawner-chiselingsizepoint#m-maxsize), [`TimberBlockSpawner.ChiselingSizePoint.MaxSize`](/mod/game-api/types/alta-crafting/timberblockspawner-chiselingsizepoint#m-maxsize-2), [`TimberBlockSpawner.SizedSpawnPoints.size`](/mod/game-api/types/alta-crafting/timberblockspawner-sizedspawnpoints#m-size), [`TimberBlockSpawner.SizedSpawnPoints.Size`](/mod/game-api/types/alta-crafting/timberblockspawner-sizedspawnpoints#m-size-2).
