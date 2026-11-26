---
title: "WorldLandmark"
description: "An asset for a large landmark prefab that's loaded through Addressables while certain chunks are loaded, and unloaded when none of them are."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WorldLandmark

A **class** in `Root.Township`, `Alta.Chunks`.

An asset for a large landmark prefab that's loaded through Addressables while certain chunks are loaded, and unloaded when none of them are.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WorldLandmark()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isloaded" /><code>{"private bool isLoaded"}</code> | <span className="api-desc">Whether the landmark is meant to be loaded; set as soon as `Load` starts. Backing field for `IsLoaded`.</span> |
| <Link id="m-load" /><code>{"private AsyncOperationHandle<GameObject> load"}</code> | <span className="api-desc">The addressables load operation for the prefab.</span> |
| <Link id="m-loadedchunks" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunkreference">{"ChunkReference"}</Link>{"[] loadedChunks"}</code> | <span className="api-desc">References to chunks that keep the landmark loaded while any of them is loaded.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-prefab" /><code>{"private AssetReference prefab"}</code> | <span className="api-desc">Addressable prefab spawned when the landmark loads. Backing field for `Prefab`.</span> |
| <Link id="m-sceneloadedchunks" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"[] sceneLoadedChunks"}</code> | <span className="api-desc">Resolved chunks from `loadedChunks`. Backing field for `LoadedChunks`.</span> |
| <Link id="m-scenestaticchunks" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"[] sceneStaticChunks"}</code> | <span className="api-desc">Resolved chunks from `staticChunks`. Backing field for `StaticChunks`.</span> |
| <Link id="m-staticchunks" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunkreference">{"ChunkReference"}</Link>{"[] staticChunks"}</code> | <span className="api-desc">References to static chunks linked to the landmark.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isloaded-2" /><code>{"bool IsLoaded { get; }"}</code> | <span className="api-desc">True from `Load` until `Unload`, even while still loading.</span> |
| <Link id="m-isloading" /><code>{"bool IsLoading { get; }"}</code> | <span className="api-desc">True while the prefab load is still running.</span> |
| <Link id="m-loadedchunks-2" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"[] LoadedChunks { get; }"}</code> | <span className="api-desc">The scene chunks that keep this landmark loaded. Filled by `ResolveChunkReferences`.</span> |
| <Link id="m-loadingtask" /><code>{"TaskCompletionSource<bool> LoadingTask { get; private set; }"}</code> | <span className="api-desc">Completes when the current load finishes. Null when not loading.</span> |
| <Link id="m-prefab-2" /><code>{"AssetReference Prefab { get; }"}</code> | <span className="api-desc">The Addressables reference to the landmark prefab.</span> |
| <Link id="m-spawnedprefab" /><code>{"GameObject SpawnedPrefab { get; private set; }"}</code> | <span className="api-desc">The spawned landmark object while loaded.</span> |
| <Link id="m-staticchunks-2" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"[] StaticChunks { get; }"}</code> | <span className="api-desc">The scene chunks listed as static for this landmark. Filled by `ResolveChunkReferences`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkunload" /><code>{"void CheckUnload()"}</code> | <span className="api-desc">Unloads the landmark if none of its loaded chunks are loaded.</span> |
| <Link id="m-load-2" /><code>{"bool Load()"}</code> | <span className="api-desc">Starts loading and spawning the prefab. False if it was already loaded.</span> |
| <Link id="m-resetreferences" /><code>{"void ResetReferences()"}</code> | <span className="api-desc">Destroys the spawned prefab, releases the asset and drops the load handle.</span> |
| <Link id="m-resolvechunkreferences" /><code>{"void ResolveChunkReferences()"}</code> | <span className="api-desc">Turns the chunk references into scene chunks, skipping missing ones.</span> |
| <Link id="m-unload" /><code>{"void Unload()"}</code> | <span className="api-desc">Destroys the spawned prefab and releases the asset.</span> |
| <Link id="m-onloadcompleted" /><code>{"protected virtual void OnLoadCompleted(GameObject spawnedPrefab)"}</code> | <span className="api-desc">Override hook, called with the spawned prefab after loading.</span> |
| <Link id="m-onunloadcompleted" /><code>{"protected virtual void OnUnloadCompleted()"}</code> | <span className="api-desc">Override hook, called after unloading.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loadcomplete" /><code>{"private void LoadComplete(AsyncOperationHandle<GameObject> spawned)"}</code> | <span className="api-desc">Addressables callback: finishes `LoadingTask` and spawns the prefab, or releases it if the landmark was unloaded meanwhile.</span> |

</details>

## Used in

Members of other types that take, return or hold a `WorldLandmark`:

<div className="api-used-in">

[`WorldLandmarkManager.androidLandmarks`](/mod/game-api/types/alta-world/worldlandmarkmanager#m-androidlandmarks), [`WorldLandmarkManager.landmarks`](/mod/game-api/types/alta-world/worldlandmarkmanager#m-landmarks), [`WorldLandmarkManager.Landmarks`](/mod/game-api/types/alta-world/worldlandmarkmanager#m-landmarks-2), [`WorldLandmarkManager.toLoad`](/mod/game-api/types/alta-world/worldlandmarkmanager#m-toload), [`WorldLandmarkManager.toUnload`](/mod/game-api/types/alta-world/worldlandmarkmanager#m-tounload).

</div>
