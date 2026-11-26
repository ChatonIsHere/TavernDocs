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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`NormalPrefabPointer`](/mod/game-api/types/alta-world/normalprefabpointer)
- **Nested types** [`PointerInstance`](/mod/game-api/types/alta-world/chunkprefabpointer-pointerinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkPrefabPointer()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"private uint id"}</code> | <span className="api-desc">Backing field for `Identifier`.</span> |
| <Link id="m-inram" /><code>{"private static Dictionary<string, "}<Link to="/mod/game-api/types/alta-world/chunkprefabpointer-pointerinstance">{"ChunkPrefabPointer.PointerInstance"}</Link>{"> inRam"}</code> | <span className="api-desc">Addressable pointer instances currently loaded, keyed by asset reference.</span> |
| <Link id="m-lastspawned" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world/chunkprefabpointer-pointerinstance">{"ChunkPrefabPointer.PointerInstance"}</Link>{" lastSpawned"}</code> | <span className="api-desc">The pointer instance `LoadNext` last tried to spawn.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-pointerfolder" /><code>{"private static Transform pointerFolder"}</code> | <span className="api-desc">Parent transform named "Static Objects" for spawned pointer prefabs.</span> |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> | <span className="api-desc">Backing field for `Prefab`.</span> |
| <Link id="m-spawnedpointer" /><code>{"private static List<"}<Link to="/mod/game-api/types/alta-world/chunkprefabpointer-pointerinstance">{"ChunkPrefabPointer.PointerInstance"}</Link>{"> spawnedPointer"}</code> | <span className="api-desc">Pointers spawned in the current `LoadNext` pass, whose load tasks get completed at the end of it.</span> |
| <Link id="m-stopwatch" /><code>{"private static Stopwatch stopwatch"}</code> | <span className="api-desc">Times each `LoadAndUnload` pass against its millisecond allowance.</span> |
| <Link id="m-waitingforload" /><code>{"private static Queue<"}<Link to="/mod/game-api/types/alta-world/chunkprefabpointer-pointerinstance">{"ChunkPrefabPointer.PointerInstance"}</Link>{"> waitingForLoad"}</code> | <span className="api-desc">Pointer instances that a chunk started using and that still need spawning.</span> |
| <Link id="m-waitingforunload" /><code>{"private static Queue<"}<Link to="/mod/game-api/types/alta-world/chunkprefabpointer-pointerinstance">{"ChunkPrefabPointer.PointerInstance"}</Link>{"> waitingForUnload"}</code> | <span className="api-desc">Spawned pointer instances that no chunk uses any more and that wait to be destroyed.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentlyloaded" /><code>{"static int CurrentlyLoaded { get; }"}</code> | <span className="api-desc">How many pointed-to prefabs are spawned right now.</span> |
| <Link id="m-identifier" /><code>{"uint Identifier { get; }"}</code> | <span className="api-desc">The pointer's ID.</span> |
| <Link id="m-pointersresourcesfolder" /><code>{"static string PointersResourcesFolder { get; }"}</code> | <span className="api-desc">`PointersRepository`, or `Android/PointersRepository` on Android.</span> |
| <Link id="m-prefab-2" /><code>{"GameObject Prefab { get; }"}</code> | <span className="api-desc">The prefab this pointer stands for.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpointer" /><code>{"static T CreatePointer<T>(DirectoryInfo pointersFolder, uint pointerIndex)"}</code> | <span className="api-desc">Editor helper to create a pointer asset. Returns null in this build.</span> |
| <Link id="m-getpointersresourcespath" /><code>{"static string GetPointersResourcesPath(uint index)"}</code> | <span className="api-desc">The resources path for a pointer index, under `PointersResourcesFolder`.</span> |
| <Link id="m-loadandunload" /><code>{"static void LoadAndUnload(float allowance)"}</code> | <span className="api-desc">Spawns queued content then destroys unused content until the time allowance (ms) runs out. Called by `StreamerManager` every frame.</span> |
| <Link id="m-unuse" /><code>{"static async void Unuse(string reference, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Drops a chunk's use of the content. When nothing uses it, it is queued to despawn and the asset is released.</span> |
| <Link id="m-use" /><code>{"static async Task Use(string reference, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Loads the Addressable asset if needed and records the chunk as a user, queueing it to spawn on first use.</span> |
| <Link id="m-useold" /><code>{"static async Task UseOld(AssetReference reference, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Older version of `Use` that takes an `AssetReference`.</span> |
| <Link id="m-waitforload" /><code>{"static async Task WaitForLoad(string reference)"}</code> | <span className="api-desc">Waits until used content has spawned. Logs an error if `Use` was not called first.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clearstaticpointerinstances" /><code>{"private static void ClearStaticPointerInstances()"}</code> | <span className="api-desc">Clears the loaded-pointer caches and queues. Hooked to `ApplicationManager.GameReload` in the static constructor.</span> |
| <Link id="m-ensurepointerfolderexists" /><code>{"private static void EnsurePointerFolderExists()"}</code> | <span className="api-desc">Creates the "Static Objects" parent object if it doesn't exist yet.</span> |
| <Link id="m-loadnext" /><code>{"private static void LoadNext(float allowance)"}</code> | <span className="api-desc">Spawns queued pointer prefabs until the time allowance runs out, then completes their load tasks. Called by `LoadAndUnload`.</span> |
| <Link id="m-unloadnext" /><code>{"private static void UnloadNext(float allowance)"}</code> | <span className="api-desc">Destroys spawned pointer prefabs that no chunk uses any more, until the time allowance runs out. Called by `LoadAndUnload`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ChunkPrefabPointer`:

<div className="api-used-in">

[`PrefabLoadManager.LoadPointer`](/mod/game-api/types/alta-world/prefabloadmanager#m-loadpointer-2), [`PrefabLoadManager.pointersByID`](/mod/game-api/types/alta-world/prefabloadmanager#m-pointersbyid), [`PrefabLoadManager.UnloadPointer`](/mod/game-api/types/alta-world/prefabloadmanager#m-unloadpointer-2).

</div>
