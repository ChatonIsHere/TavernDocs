---
title: "WorldLandmarkManager"
description: "Loads and unloads world landmarks (stand-in models of distant places) as the chunks they depend on load."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WorldLandmarkManager

A **class** in `Root.Township`, `Alta.Chunks`.

Loads and unloads world landmarks (stand-in models of distant places) as the chunks they depend on load. Runs on clients, and on the server only in local test. Also the `landmarks` console module.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `PlayOnly`, `Module`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WorldLandmarkManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidlandmarks" /><code>{"private "}<Link to="/game-api/types/alta-world/worldlandmark">{"WorldLandmark"}</Link>{"[] androidLandmarks"}</code> | Landmarks used on Android. |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/alta-world/worldlandmarkmanager">{"WorldLandmarkManager"}</Link>{" instance"}</code> | The current manager. |
| <Link id="m-issetup" /><code>{"private bool isSetup"}</code> | True between `Setup` and `Stop`. |
| <Link id="m-landmarks" /><code>{"private "}<Link to="/game-api/types/alta-world/worldlandmark">{"WorldLandmark"}</Link>{"[] landmarks"}</code> | Landmarks used on Windows. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-toload" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{", HashSet<"}<Link to="/game-api/types/alta-world/worldlandmark">{"WorldLandmark"}</Link>{">> toLoad"}</code> | Landmarks shown when each chunk loads. |
| <Link id="m-tounload" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{", HashSet<"}<Link to="/game-api/types/alta-world/worldlandmark">{"WorldLandmark"}</Link>{">> toUnload"}</code> | Landmarks hidden when each static chunk loads. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islandmarkloadingenabled" /><code>{"static bool IsLandmarkLoadingEnabled { get; set; }"}</code> | Global switch for landmark loading. Default true. |
| <Link id="m-landmarks-2" /><code><Link to="/game-api/types/alta-world/worldlandmark">{"WorldLandmark"}</Link>{"[] Landmarks { get; set; }"}</code> | The landmarks for this platform: the Android list on Android, the main list on Windows, otherwise null. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forceunloadall" /><code>{"static void ForceUnloadAll()"}</code> | Unloads every landmark. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Client: sets up if landmark loading is enabled. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: sets up only in local test. |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attemptloadlandmark" /><code>{"private void AttemptLoadLandmark("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | When a chunk fully loads, loads its landmarks that have a loaded chunk and none of their static chunks loaded. |
| <Link id="m-attemptloadlandmarkfromstatic" /><code>{"private void AttemptLoadLandmarkFromStatic("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | When a static chunk begins unloading, loads the landmarks it was hiding and holds the unload until they finish. |
| <Link id="m-attemptunloadlandmark" /><code>{"private void AttemptUnloadLandmark("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | When a chunk fully unloads, asks its landmarks to check whether they should unload. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets the static instance. |
| <Link id="m-enablelandmarks" /><code>{"private static void EnableLandmarks(bool enabled)"}</code> | Console `landmarks enable`: sets up or stops the manager. |
| <Link id="m-forceunloadlandmark" /><code>{"private void ForceUnloadLandmark("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | When a static chunk fully loads, unloads the landmarks it replaces. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the manager and clears the instance. |
| <Link id="m-resolvechunkreferences" /><code>{"private void ResolveChunkReferences()"}</code> | Has each landmark find its chunks. |
| <Link id="m-setloadingenabled" /><code>{"private static void SetLoadingEnabled(bool isLoading)"}</code> | Console `landmarks load-enabled`: sets `IsLandmarkLoadingEnabled` and sets up if turned on. |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | Hooks each landmark's chunks' load and unload events, then loads the landmarks that should already show. |
| <Link id="m-stop" /><code>{"private void Stop()"}</code> | Unhooks all chunk events and resets each landmark. |

</details>
