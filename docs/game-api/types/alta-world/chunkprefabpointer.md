---
title: "ChunkPrefabPointer"
description: "Points at static chunk content loaded through Addressables."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkPrefabPointer

A **class** in `Root.Township`, `Alta.Chunks`.

Points at static chunk content loaded through Addressables. The static methods reference count which chunks use each piece and spawn or destroy it a little each frame, within a time budget.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`NormalPrefabPointer`](/game-api/types/alta-world/normalprefabpointer)
- **Nested types** [`PointerInstance`](/game-api/types/alta-world/chunkprefabpointer-pointerinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkPrefabPointer()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"private uint id"}</code> | Backing field for `Identifier`. |
| <Link id="m-inram" /><code>{"private static Dictionary<string, "}<Link to="/game-api/types/alta-world/chunkprefabpointer-pointerinstance">{"ChunkPrefabPointer.PointerInstance"}</Link>{"> inRam"}</code> | Addressable pointer instances currently loaded, keyed by asset reference. |
| <Link id="m-lastspawned" /><code>{"private static "}<Link to="/game-api/types/alta-world/chunkprefabpointer-pointerinstance">{"ChunkPrefabPointer.PointerInstance"}</Link>{" lastSpawned"}</code> | The pointer instance `LoadNext` last tried to spawn. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-pointerfolder" /><code>{"private static Transform pointerFolder"}</code> | Parent transform named "Static Objects" for spawned pointer prefabs. |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> | Backing field for `Prefab`. |
| <Link id="m-spawnedpointer" /><code>{"private static List<"}<Link to="/game-api/types/alta-world/chunkprefabpointer-pointerinstance">{"ChunkPrefabPointer.PointerInstance"}</Link>{"> spawnedPointer"}</code> | Pointers spawned in the current `LoadNext` pass, whose load tasks get completed at the end of it. |
| <Link id="m-stopwatch" /><code>{"private static Stopwatch stopwatch"}</code> | Times each `LoadAndUnload` pass against its millisecond allowance. |
| <Link id="m-waitingforload" /><code>{"private static Queue<"}<Link to="/game-api/types/alta-world/chunkprefabpointer-pointerinstance">{"ChunkPrefabPointer.PointerInstance"}</Link>{"> waitingForLoad"}</code> | Pointer instances that a chunk started using and that still need spawning. |
| <Link id="m-waitingforunload" /><code>{"private static Queue<"}<Link to="/game-api/types/alta-world/chunkprefabpointer-pointerinstance">{"ChunkPrefabPointer.PointerInstance"}</Link>{"> waitingForUnload"}</code> | Spawned pointer instances that no chunk uses any more and that wait to be destroyed. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentlyloaded" /><code>{"static int CurrentlyLoaded { get; }"}</code> | How many pointed-to prefabs are spawned right now. |
| <Link id="m-identifier" /><code>{"uint Identifier { get; }"}</code> | The pointer's ID. |
| <Link id="m-pointersresourcesfolder" /><code>{"static string PointersResourcesFolder { get; }"}</code> | `PointersRepository`, or `Android/PointersRepository` on Android. |
| <Link id="m-prefab-2" /><code>{"GameObject Prefab { get; }"}</code> | The prefab this pointer stands for. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpointer" /><code>{"static T CreatePointer<T>(DirectoryInfo pointersFolder, uint pointerIndex)"}</code> | Editor helper to create a pointer asset. Returns null in this build. |
| <Link id="m-getpointersresourcespath" /><code>{"static string GetPointersResourcesPath(uint index)"}</code> | The resources path for a pointer index, under `PointersResourcesFolder`. |
| <Link id="m-loadandunload" /><code>{"static void LoadAndUnload(float allowance)"}</code> | Spawns queued content then destroys unused content until the time allowance (ms) runs out. Called by `StreamerManager` every frame. |
| <Link id="m-unuse" /><code>{"static async void Unuse(string reference, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Drops a chunk's use of the content. When nothing uses it, it is queued to despawn and the asset is released. |
| <Link id="m-use" /><code>{"static async Task Use(string reference, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Loads the Addressable asset if needed and records the chunk as a user, queueing it to spawn on first use. |
| <Link id="m-useold" /><code>{"static async Task UseOld(AssetReference reference, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Older version of `Use` that takes an `AssetReference`. |
| <Link id="m-waitforload" /><code>{"static async Task WaitForLoad(string reference)"}</code> | Waits until used content has spawned. Logs an error if `Use` was not called first. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clearstaticpointerinstances" /><code>{"private static void ClearStaticPointerInstances()"}</code> | Clears the loaded-pointer caches and queues. Hooked to `ApplicationManager.GameReload` in the static constructor. |
| <Link id="m-ensurepointerfolderexists" /><code>{"private static void EnsurePointerFolderExists()"}</code> | Creates the "Static Objects" parent object if it doesn't exist yet. |
| <Link id="m-loadnext" /><code>{"private static void LoadNext(float allowance)"}</code> | Spawns queued pointer prefabs until the time allowance runs out, then completes their load tasks. Called by `LoadAndUnload`. |
| <Link id="m-unloadnext" /><code>{"private static void UnloadNext(float allowance)"}</code> | Destroys spawned pointer prefabs that no chunk uses any more, until the time allowance runs out. Called by `LoadAndUnload`. |

</details>

## Used in

Members of other types that take, return or hold a `ChunkPrefabPointer`:

[`PrefabLoadManager.LoadPointer`](/game-api/types/alta-world/prefabloadmanager#m-loadpointer-2), [`PrefabLoadManager.pointersByID`](/game-api/types/alta-world/prefabloadmanager#m-pointersbyid), [`PrefabLoadManager.UnloadPointer`](/game-api/types/alta-world/prefabloadmanager#m-unloadpointer-2).
