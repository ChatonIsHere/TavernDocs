---
title: "WorldLandmarkManager"
description: "class WorldLandmarkManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WorldLandmarkManager

A **class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `PlayOnly`, `Module`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WorldLandmarkManager()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-androidlandmarks" /><code>{"private "}<Link to="/game-api/types/alta-world/worldlandmark">{"WorldLandmark"}</Link>{"[] androidLandmarks"}</code> |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/alta-world/worldlandmarkmanager">{"WorldLandmarkManager"}</Link>{" instance"}</code> |
| <Link id="m-issetup" /><code>{"private bool isSetup"}</code> |
| <Link id="m-landmarks" /><code>{"private "}<Link to="/game-api/types/alta-world/worldlandmark">{"WorldLandmark"}</Link>{"[] landmarks"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-toload" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{", HashSet<"}<Link to="/game-api/types/alta-world/worldlandmark">{"WorldLandmark"}</Link>{">> toLoad"}</code> |
| <Link id="m-tounload" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{", HashSet<"}<Link to="/game-api/types/alta-world/worldlandmark">{"WorldLandmark"}</Link>{">> toUnload"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-islandmarkloadingenabled" /><code>{"static bool IsLandmarkLoadingEnabled { get; set; }"}</code> |
| <Link id="m-landmarks-2" /><code><Link to="/game-api/types/alta-world/worldlandmark">{"WorldLandmark"}</Link>{"[] Landmarks { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-forceunloadall" /><code>{"static void ForceUnloadAll()"}</code> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |

<details>
<summary>11 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-attemptloadlandmark" /><code>{"private void AttemptLoadLandmark("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |
| <Link id="m-attemptloadlandmarkfromstatic" /><code>{"private void AttemptLoadLandmarkFromStatic("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |
| <Link id="m-attemptunloadlandmark" /><code>{"private void AttemptUnloadLandmark("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-enablelandmarks" /><code>{"private static void EnableLandmarks(bool enabled)"}</code> |
| <Link id="m-forceunloadlandmark" /><code>{"private void ForceUnloadLandmark("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-resolvechunkreferences" /><code>{"private void ResolveChunkReferences()"}</code> |
| <Link id="m-setloadingenabled" /><code>{"private static void SetLoadingEnabled(bool isLoading)"}</code> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> |
| <Link id="m-stop" /><code>{"private void Stop()"}</code> |

</details>
