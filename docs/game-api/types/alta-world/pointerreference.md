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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PointerReference()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-pointer" /><code><Link to="/game-api/types/alta-world/chunkprefabpointer-pointerinstance">{"ChunkPrefabPointer.PointerInstance"}</Link>{" pointer"}</code> | The pointer instance. |
