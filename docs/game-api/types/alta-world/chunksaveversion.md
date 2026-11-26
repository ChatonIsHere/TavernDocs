---
title: "ChunkSaveVersion"
description: "Chunk save format versions, one per game release, with Latest the current one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkSaveVersion

An **enum** in `Root.Township`, `Alta.Chunks`.

Chunk save format versions, one per game release, with `Latest` the current one. Lets loading code handle saves from older releases.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Values

| Member |
| --- |
| <Link id="m-dec2022release" /><code>{"Dec2022Release = 239722738"}</code> |
| <Link id="m-finalclimbingorbfixrelease" /><code>{"FinalClimbingOrbFixRelease = 239722737"}</code> |
| <Link id="m-latest" /><code>{"Latest = 239722743"}</code> |
| <Link id="m-questrelease" /><code>{"QuestRelease = 239722735"}</code> |
| <Link id="m-release0151" /><code>{"Release0151 = 239722739"}</code> |
| <Link id="m-release1530" /><code>{"Release1530 = 239722740"}</code> |
| <Link id="m-release1600" /><code>{"Release1600 = 239722741"}</code> |
| <Link id="m-release1700" /><code>{"Release1700 = 239722742"}</code> |
| <Link id="m-release1720" /><code>{"Release1720 = 239722743"}</code> |
| <Link id="m-towerrelease" /><code>{"TowerRelease = 239722736"}</code> |

## Used in

Members of other types that take, return or hold a `ChunkSaveVersion`:

[`Chunk.minimumSaveVersion`](/game-api/types/alta-world/chunk#m-minimumsaveversion), [`Chunk.MinimumSaveVersion`](/game-api/types/alta-world/chunk#m-minimumsaveversion-2), [`ChunkSaveFormat.CurrentSaveVersion`](/game-api/types/alta-utilities/chunksaveformat#m-currentsaveversion), [`ChunkSaveFormat.SaveVersion`](/game-api/types/alta-utilities/chunksaveformat#m-saveversion).
