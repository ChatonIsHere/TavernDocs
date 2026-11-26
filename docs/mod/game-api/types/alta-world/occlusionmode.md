---
title: "OcclusionMode"
description: "How an OcclusionChunkEffectData sets culling while the local player is in its chunk: normal occlusion culling, portal-based culling, or no culling at all."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OcclusionMode

An **enum** in `Root.Township`, `Alta.Chunks`.

How an `OcclusionChunkEffectData` sets culling while the local player is in its chunk: normal occlusion culling, portal-based culling, or no culling at all.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Values

| Member |
| --- |
| <Link id="m-none" /><code>{"None = 2"}</code> |
| <Link id="m-normal" /><code>{"Normal = 0"}</code> |
| <Link id="m-portals" /><code>{"Portals = 1"}</code> |

## Used in

Members of other types that take, return or hold a `OcclusionMode`:

[`OcclusionChunkEffectData.mode`](/mod/game-api/types/alta-world/occlusionchunkeffectdata#m-mode).
