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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `PlayOnly`, `Module`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WorldLandmarkManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidlandmarks" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/worldlandmark">{"WorldLandmark"}</Link>{"[] androidLandmarks"}</code> | <span className="api-desc">Landmarks used on Android.</span> |
| <Link id="m-instance" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world/worldlandmarkmanager">{"WorldLandmarkManager"}</Link>{" instance"}</code> | <span className="api-desc">The current manager.</span> |
| <Link id="m-issetup" /><code>{"private bool isSetup"}</code> | <span className="api-desc">True between `Setup` and `Stop`.</span> |
| <Link id="m-landmarks" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/worldlandmark">{"WorldLandmark"}</Link>{"[] landmarks"}</code> | <span className="api-desc">Landmarks used on Windows.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-toload" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{", HashSet<"}<Link to="/mod/game-api/types/alta-world/worldlandmark">{"WorldLandmark"}</Link>{">> toLoad"}</code> | <span className="api-desc">Landmarks shown when each chunk loads.</span> |
| <Link id="m-tounload" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{", HashSet<"}<Link to="/mod/game-api/types/alta-world/worldlandmark">{"WorldLandmark"}</Link>{">> toUnload"}</code> | <span className="api-desc">Landmarks hidden when each static chunk loads.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islandmarkloadingenabled" /><code>{"static bool IsLandmarkLoadingEnabled { get; set; }"}</code> | <span className="api-desc">Global switch for landmark loading. Default true.</span> |
| <Link id="m-landmarks-2" /><code><Link to="/mod/game-api/types/alta-world/worldlandmark">{"WorldLandmark"}</Link>{"[] Landmarks { get; set; }"}</code> | <span className="api-desc">The landmarks for this platform: the Android list on Android, the main list on Windows, otherwise null.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forceunloadall" /><code>{"static void ForceUnloadAll()"}</code> | <span className="api-desc">Unloads every landmark.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Client: sets up if landmark loading is enabled.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: sets up only in local test.</span> |

<details className="api-private">
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attemptloadlandmark" /><code>{"private void AttemptLoadLandmark("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">When a chunk fully loads, loads its landmarks that have a loaded chunk and none of their static chunks loaded.</span> |
| <Link id="m-attemptloadlandmarkfromstatic" /><code>{"private void AttemptLoadLandmarkFromStatic("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">When a static chunk begins unloading, loads the landmarks it was hiding and holds the unload until they finish.</span> |
| <Link id="m-attemptunloadlandmark" /><code>{"private void AttemptUnloadLandmark("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">When a chunk fully unloads, asks its landmarks to check whether they should unload.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets the static instance.</span> |
| <Link id="m-enablelandmarks" /><code>{"private static void EnableLandmarks(bool enabled)"}</code> | <span className="api-desc">Console `landmarks enable`: sets up or stops the manager.</span> |
| <Link id="m-forceunloadlandmark" /><code>{"private void ForceUnloadLandmark("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">When a static chunk fully loads, unloads the landmarks it replaces.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the manager and clears the instance.</span> |
| <Link id="m-resolvechunkreferences" /><code>{"private void ResolveChunkReferences()"}</code> | <span className="api-desc">Has each landmark find its chunks.</span> |
| <Link id="m-setloadingenabled" /><code>{"private static void SetLoadingEnabled(bool isLoading)"}</code> | <span className="api-desc">Console `landmarks load-enabled`: sets `IsLandmarkLoadingEnabled` and sets up if turned on.</span> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | <span className="api-desc">Hooks each landmark's chunks' load and unload events, then loads the landmarks that should already show.</span> |
| <Link id="m-stop" /><code>{"private void Stop()"}</code> | <span className="api-desc">Unhooks all chunk events and resets each landmark.</span> |

</details>
