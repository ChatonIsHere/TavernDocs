---
title: "WorldLandmark"
description: "class WorldLandmark in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WorldLandmark

A **class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WorldLandmark()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isloaded" /><code>{"private bool isLoaded"}</code> |  |
| <Link id="m-load" /><code>{"private AsyncOperationHandle<GameObject> load"}</code> |  |
| <Link id="m-loadedchunks" /><code>{"private "}<Link to="/game-api/types/alta-world/chunkreference">{"ChunkReference"}</Link>{"[] loadedChunks"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-prefab" /><code>{"private AssetReference prefab"}</code> |  |
| <Link id="m-sceneloadedchunks" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"[] sceneLoadedChunks"}</code> |  |
| <Link id="m-scenestaticchunks" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"[] sceneStaticChunks"}</code> |  |
| <Link id="m-staticchunks" /><code>{"private "}<Link to="/game-api/types/alta-world/chunkreference">{"ChunkReference"}</Link>{"[] staticChunks"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isloaded-2" /><code>{"bool IsLoaded { get; }"}</code> |  |
| <Link id="m-isloading" /><code>{"bool IsLoading { get; }"}</code> |  |
| <Link id="m-loadedchunks-2" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"[] LoadedChunks { get; }"}</code> |  |
| <Link id="m-loadingtask" /><code>{"TaskCompletionSource<bool> LoadingTask { get; private set; }"}</code> |  |
| <Link id="m-prefab-2" /><code>{"AssetReference Prefab { get; }"}</code> |  |
| <Link id="m-spawnedprefab" /><code>{"GameObject SpawnedPrefab { get; private set; }"}</code> |  |
| <Link id="m-staticchunks-2" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"[] StaticChunks { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkunload" /><code>{"void CheckUnload()"}</code> |  |
| <Link id="m-load-2" /><code>{"bool Load()"}</code> |  |
| <Link id="m-resetreferences" /><code>{"void ResetReferences()"}</code> |  |
| <Link id="m-resolvechunkreferences" /><code>{"void ResolveChunkReferences()"}</code> |  |
| <Link id="m-unload" /><code>{"void Unload()"}</code> |  |
| <Link id="m-loadcomplete" /><code>{"private void LoadComplete(AsyncOperationHandle<GameObject> spawned)"}</code> |  |
| <Link id="m-onloadcompleted" /><code>{"protected virtual void OnLoadCompleted(GameObject spawnedPrefab)"}</code> |  |
| <Link id="m-onunloadcompleted" /><code>{"protected virtual void OnUnloadCompleted()"}</code> |  |

## Used in

Members of other types that take, return or hold a `WorldLandmark`:

[`WorldLandmarkManager.androidLandmarks`](/game-api/types/alta-world/worldlandmarkmanager#m-androidlandmarks), [`WorldLandmarkManager.landmarks`](/game-api/types/alta-world/worldlandmarkmanager#m-landmarks), [`WorldLandmarkManager.Landmarks`](/game-api/types/alta-world/worldlandmarkmanager#m-landmarks-2), [`WorldLandmarkManager.toLoad`](/game-api/types/alta-world/worldlandmarkmanager#m-toload), [`WorldLandmarkManager.toUnload`](/game-api/types/alta-world/worldlandmarkmanager#m-tounload).
