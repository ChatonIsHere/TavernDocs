---
title: "PointerReference"
description: "Holds a chunk prefab pointer instance on a GameObject."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PointerReference

A **class** in `Root.Township`, `Alta.Chunks`.

Holds a chunk prefab pointer instance on a GameObject. Nothing else in this build references it.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PointerReference()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-pointer" /><code><Link to="/mod/game-api/types/alta-world/chunkprefabpointer-pointerinstance">{"ChunkPrefabPointer.PointerInstance"}</Link>{" pointer"}</code> | <span className="api-desc">The pointer instance.</span> |
