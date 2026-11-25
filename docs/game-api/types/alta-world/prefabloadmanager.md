---
title: "PrefabLoadManager"
description: "static class PrefabLoadManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabLoadManager

A **static class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-asyncrequest" /><code>{"private static ResourceRequest asyncRequest"}</code> |  |
| <Link id="m-instantiatedfolder" /><code>{"private static Transform instantiatedFolder"}</code> |  |
| <Link id="m-loadedpointerprefabs" /><code>{"private static Dictionary<uint, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{">> loadedPointerPrefabs"}</code> |  |
| <Link id="m-pointersbyid" /><code>{"private static Dictionary<uint, "}<Link to="/game-api/types/alta-world/chunkprefabpointer">{"ChunkPrefabPointer"}</Link>{"> pointersByID"}</code> |  |
| <Link id="m-prefabreferencesinscene" /><code>{"private static Dictionary<uint, GameObject> prefabReferencesInScene"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instantiatedfolder-2" /><code>{"static Transform InstantiatedFolder { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadpointer" /><code>{"static GameObject LoadPointer("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, uint pointerID)"}</code> |  |
| <Link id="m-loadpointer-2" /><code>{"static GameObject LoadPointer("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/chunkprefabpointer">{"ChunkPrefabPointer"}</Link>{" pointer)"}</code> |  |
| <Link id="m-unloadpointer" /><code>{"static bool UnloadPointer("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, uint pointerID)"}</code> |  |
| <Link id="m-unloadpointer-2" /><code>{"static bool UnloadPointer("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/chunkprefabpointer">{"ChunkPrefabPointer"}</Link>{" pointer)"}</code> |  |
| <Link id="m-clearpointers" /><code>{"private static void ClearPointers()"}</code> |  |
