---
title: "ChunkDisplayTool"
description: "Debug tool for the feature test gymnasium that draws coloured quads over chunk bounds: none, all chunks or loaded ones only."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkDisplayTool

A **class** in `Root.Township`, `ATT.FeatureTestGymnasium`.

Debug tool for the feature test gymnasium that draws coloured quads over chunk bounds: none, all chunks or loaded ones only. Singleton behaviour.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`SingletonBehaviour<ChunkDisplayTool>`](/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`ChunkDisplayTool`](/game-api/types/game-other-namespaces/chunkdisplaytool)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ChunkDisplayTool()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allscenechunks" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"[] allSceneChunks"}</code> | Backing field for `AllSceneChunks`. |
| <Link id="m-cachedchunkdisplays" /><code>{"private readonly Dictionary<int, GameObject> cachedChunkDisplays"}</code> | Quad object per chunk, keyed by chunk hash code. |
| <Link id="m-chunkdisplayprefab" /><code>{"private Renderer chunkDisplayPrefab"}</code> | Quad prefab to spawn per chunk. |
| <Link id="m-defaultmode" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/gymnasiumvisualchunkdisplaymode">{"GymnasiumVisualChunkDisplayMode"}</Link>{" defaultMode"}</code> | Mode set on enable. |
| <Link id="m-displayopacity" /><code>{"private int displayOpacity"}</code> | Alpha (0 to 255) for the quad colours. |
| <Link id="m-loadedchunks" /><code>{"private readonly HashSet<int> loadedChunks"}</code> | Hash codes of chunks that have fully loaded. Never removed on unload. |
| <Link id="m-quadrotation" /><code>{"private static readonly Quaternion QuadRotation"}</code> | Rotation that lays the quad flat. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentmode" /><code><Link to="/game-api/types/game-other-namespaces/gymnasiumvisualchunkdisplaymode">{"GymnasiumVisualChunkDisplayMode"}</Link>{" CurrentMode { get; private set; }"}</code> | The current display mode. Set to the default on enable, but not applied until `AdvanceMode`. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allscenechunks-2" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"[] AllSceneChunks { get; }"}</code> | Every `LocationChunk` in the scene, found once and cached. |
| <Link id="m-nextmode" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/gymnasiumvisualchunkdisplaymode">{"GymnasiumVisualChunkDisplayMode"}</Link>{" NextMode { get; }"}</code> | The mode after the current one, wrapping round. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-advancemode" /><code>{"void AdvanceMode()"}</code> | Switches to the next display mode and applies it. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applymode" /><code>{"private void ApplyMode("}<Link to="/game-api/types/game-other-namespaces/gymnasiumvisualchunkdisplaymode">{"GymnasiumVisualChunkDisplayMode"}</Link>{" mode)"}</code> | Shows or hides chunk quads for the given mode. |
| <Link id="m-createchunkquad" /><code>{"private GameObject CreateChunkQuad(Bounds bounds)"}</code> | Spawns a quad the size of the chunk bounds with a random bright colour. |
| <Link id="m-displayall" /><code>{"private void DisplayAll()"}</code> | Shows a quad for every chunk in the scene. |
| <Link id="m-displaychunkvisual" /><code>{"private void DisplayChunkVisual("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Shows the chunk's quad, creating it the first time. |
| <Link id="m-displayloadedonly" /><code>{"private void DisplayLoadedOnly()"}</code> | Hides all quads, then shows those for chunks that have loaded. |
| <Link id="m-displaynone" /><code>{"private void DisplayNone()"}</code> | Hides every quad. |
| <Link id="m-onchunkloaded" /><code>{"private void OnChunkLoaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Records the chunk as loaded and shows it in loaded-only mode. |
| <Link id="m-onchunkunloaded" /><code>{"private void OnChunkUnLoaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Hides the chunk's quad in loaded-only mode. It stays in `loadedChunks`. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks from every chunk's load events. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Sets the default mode and hooks every chunk's load and unload events. |

</details>
