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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WorldLandmark()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isloaded" /><code>{"private bool isLoaded"}</code> | Whether the landmark is meant to be loaded; set as soon as `Load` starts. Backing field for `IsLoaded`. |
| <Link id="m-load" /><code>{"private AsyncOperationHandle<GameObject> load"}</code> | The addressables load operation for the prefab. |
| <Link id="m-loadedchunks" /><code>{"private "}<Link to="/game-api/types/alta-world/chunkreference">{"ChunkReference"}</Link>{"[] loadedChunks"}</code> | References to chunks that keep the landmark loaded while any of them is loaded. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |
| <Link id="m-prefab" /><code>{"private AssetReference prefab"}</code> | Addressable prefab spawned when the landmark loads. Backing field for `Prefab`. |
| <Link id="m-sceneloadedchunks" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"[] sceneLoadedChunks"}</code> | Resolved chunks from `loadedChunks`. Backing field for `LoadedChunks`. |
| <Link id="m-scenestaticchunks" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"[] sceneStaticChunks"}</code> | Resolved chunks from `staticChunks`. Backing field for `StaticChunks`. |
| <Link id="m-staticchunks" /><code>{"private "}<Link to="/game-api/types/alta-world/chunkreference">{"ChunkReference"}</Link>{"[] staticChunks"}</code> | References to static chunks linked to the landmark. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isloaded-2" /><code>{"bool IsLoaded { get; }"}</code> | True from `Load` until `Unload`, even while still loading. |
| <Link id="m-isloading" /><code>{"bool IsLoading { get; }"}</code> | True while the prefab load is still running. |
| <Link id="m-loadedchunks-2" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"[] LoadedChunks { get; }"}</code> | The scene chunks that keep this landmark loaded. Filled by `ResolveChunkReferences`. |
| <Link id="m-loadingtask" /><code>{"TaskCompletionSource<bool> LoadingTask { get; private set; }"}</code> | Completes when the current load finishes. Null when not loading. |
| <Link id="m-prefab-2" /><code>{"AssetReference Prefab { get; }"}</code> | The Addressables reference to the landmark prefab. |
| <Link id="m-spawnedprefab" /><code>{"GameObject SpawnedPrefab { get; private set; }"}</code> | The spawned landmark object while loaded. |
| <Link id="m-staticchunks-2" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"[] StaticChunks { get; }"}</code> | The scene chunks listed as static for this landmark. Filled by `ResolveChunkReferences`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkunload" /><code>{"void CheckUnload()"}</code> | Unloads the landmark if none of its loaded chunks are loaded. |
| <Link id="m-load-2" /><code>{"bool Load()"}</code> | Starts loading and spawning the prefab. False if it was already loaded. |
| <Link id="m-resetreferences" /><code>{"void ResetReferences()"}</code> | Destroys the spawned prefab, releases the asset and drops the load handle. |
| <Link id="m-resolvechunkreferences" /><code>{"void ResolveChunkReferences()"}</code> | Turns the chunk references into scene chunks, skipping missing ones. |
| <Link id="m-unload" /><code>{"void Unload()"}</code> | Destroys the spawned prefab and releases the asset. |
| <Link id="m-onloadcompleted" /><code>{"protected virtual void OnLoadCompleted(GameObject spawnedPrefab)"}</code> | Override hook, called with the spawned prefab after loading. |
| <Link id="m-onunloadcompleted" /><code>{"protected virtual void OnUnloadCompleted()"}</code> | Override hook, called after unloading. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loadcomplete" /><code>{"private void LoadComplete(AsyncOperationHandle<GameObject> spawned)"}</code> | Addressables callback: finishes `LoadingTask` and spawns the prefab, or releases it if the landmark was unloaded meanwhile. |

</details>

## Used in

Members of other types that take, return or hold a `WorldLandmark`:

[`WorldLandmarkManager.androidLandmarks`](/game-api/types/alta-world/worldlandmarkmanager#m-androidlandmarks), [`WorldLandmarkManager.landmarks`](/game-api/types/alta-world/worldlandmarkmanager#m-landmarks), [`WorldLandmarkManager.Landmarks`](/game-api/types/alta-world/worldlandmarkmanager#m-landmarks-2), [`WorldLandmarkManager.toLoad`](/game-api/types/alta-world/worldlandmarkmanager#m-toload), [`WorldLandmarkManager.toUnload`](/game-api/types/alta-world/worldlandmarkmanager#m-tounload).
