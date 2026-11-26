---
title: "PrefabLoadManager"
description: "Reference counts prefabs loaded through chunk prefab pointers: the prefab is instantiated when the first chunk needs it and destroyed when the last one lets go."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabLoadManager

A **static class** in `Root.Township`, `Alta.Chunks`.

Reference counts prefabs loaded through chunk prefab pointers: the prefab is instantiated when the first chunk needs it and destroyed when the last one lets go.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-asyncrequest" /><code>{"private static ResourceRequest asyncRequest"}</code> | Unused resource request field. |
| <Link id="m-instantiatedfolder" /><code>{"private static Transform instantiatedFolder"}</code> | Backing field for `InstantiatedFolder`. |
| <Link id="m-loadedpointerprefabs" /><code>{"private static Dictionary<uint, HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{">> loadedPointerPrefabs"}</code> | The chunks using each pointer, by pointer id. |
| <Link id="m-pointersbyid" /><code>{"private static Dictionary<uint, "}<Link to="/mod/game-api/types/alta-world/chunkprefabpointer">{"ChunkPrefabPointer"}</Link>{"> pointersByID"}</code> | Pointers by id, for the id overloads. Nothing in this class fills it, so those overloads log an error. |
| <Link id="m-prefabreferencesinscene" /><code>{"private static Dictionary<uint, GameObject> prefabReferencesInScene"}</code> | The live instance for each pointer id, or null. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instantiatedfolder-2" /><code>{"static Transform InstantiatedFolder { get; }"}</code> | The `Static Objects Folder` GameObject loaded pointer prefabs are put under. Made on first use. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadpointer" /><code>{"static GameObject LoadPointer("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, uint pointerID)"}</code> | Marks the chunk as using the pointer and returns the shared instance, creating it if needed. |
| <Link id="m-loadpointer-2" /><code>{"static GameObject LoadPointer("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world/chunkprefabpointer">{"ChunkPrefabPointer"}</Link>{" pointer)"}</code> | Marks the chunk as using the pointer and returns the shared instance, creating it if needed. |
| <Link id="m-unloadpointer" /><code>{"static bool UnloadPointer("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, uint pointerID)"}</code> | Removes the chunk's use of the pointer and destroys the instance when no chunk uses it. True if destroyed. |
| <Link id="m-unloadpointer-2" /><code>{"static bool UnloadPointer("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world/chunkprefabpointer">{"ChunkPrefabPointer"}</Link>{" pointer)"}</code> | Removes the chunk's use of the pointer and destroys the instance when no chunk uses it. True if destroyed. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clearpointers" /><code>{"private static void ClearPointers()"}</code> | Forgets all loaded pointers and their instances on game reload. |

</details>
