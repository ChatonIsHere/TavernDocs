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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`SingletonBehaviour<ChunkDisplayTool>`](/mod/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`ChunkDisplayTool`](/mod/game-api/types/game-other-namespaces/chunkdisplaytool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkDisplayTool()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allscenechunks" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"[] allSceneChunks"}</code> | <span className="api-desc">Backing field for `AllSceneChunks`.</span> |
| <Link id="m-cachedchunkdisplays" /><code>{"private readonly Dictionary<int, GameObject> cachedChunkDisplays"}</code> | <span className="api-desc">Quad object per chunk, keyed by chunk hash code.</span> |
| <Link id="m-chunkdisplayprefab" /><code>{"private Renderer chunkDisplayPrefab"}</code> | <span className="api-desc">Quad prefab to spawn per chunk.</span> |
| <Link id="m-defaultmode" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/gymnasiumvisualchunkdisplaymode">{"GymnasiumVisualChunkDisplayMode"}</Link>{" defaultMode"}</code> | <span className="api-desc">Mode set on enable.</span> |
| <Link id="m-displayopacity" /><code>{"private int displayOpacity"}</code> | <span className="api-desc">Alpha (0 to 255) for the quad colours.</span> |
| <Link id="m-loadedchunks" /><code>{"private readonly HashSet<int> loadedChunks"}</code> | <span className="api-desc">Hash codes of chunks that have fully loaded. Never removed on unload.</span> |
| <Link id="m-quadrotation" /><code>{"private static readonly Quaternion QuadRotation"}</code> | <span className="api-desc">Rotation that lays the quad flat.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentmode" /><code><Link to="/mod/game-api/types/game-other-namespaces/gymnasiumvisualchunkdisplaymode">{"GymnasiumVisualChunkDisplayMode"}</Link>{" CurrentMode { get; private set; }"}</code> | <span className="api-desc">The current display mode. Set to the default on enable, but not applied until `AdvanceMode`.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allscenechunks-2" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"[] AllSceneChunks { get; }"}</code> | <span className="api-desc">Every `LocationChunk` in the scene, found once and cached.</span> |
| <Link id="m-nextmode" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/gymnasiumvisualchunkdisplaymode">{"GymnasiumVisualChunkDisplayMode"}</Link>{" NextMode { get; }"}</code> | <span className="api-desc">The mode after the current one, wrapping round.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-advancemode" /><code>{"void AdvanceMode()"}</code> | <span className="api-desc">Switches to the next display mode and applies it.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applymode" /><code>{"private void ApplyMode("}<Link to="/mod/game-api/types/game-other-namespaces/gymnasiumvisualchunkdisplaymode">{"GymnasiumVisualChunkDisplayMode"}</Link>{" mode)"}</code> | <span className="api-desc">Shows or hides chunk quads for the given mode.</span> |
| <Link id="m-createchunkquad" /><code>{"private GameObject CreateChunkQuad(Bounds bounds)"}</code> | <span className="api-desc">Spawns a quad the size of the chunk bounds with a random bright colour.</span> |
| <Link id="m-displayall" /><code>{"private void DisplayAll()"}</code> | <span className="api-desc">Shows a quad for every chunk in the scene.</span> |
| <Link id="m-displaychunkvisual" /><code>{"private void DisplayChunkVisual("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Shows the chunk's quad, creating it the first time.</span> |
| <Link id="m-displayloadedonly" /><code>{"private void DisplayLoadedOnly()"}</code> | <span className="api-desc">Hides all quads, then shows those for chunks that have loaded.</span> |
| <Link id="m-displaynone" /><code>{"private void DisplayNone()"}</code> | <span className="api-desc">Hides every quad.</span> |
| <Link id="m-onchunkloaded" /><code>{"private void OnChunkLoaded("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Records the chunk as loaded and shows it in loaded-only mode.</span> |
| <Link id="m-onchunkunloaded" /><code>{"private void OnChunkUnLoaded("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Hides the chunk's quad in loaded-only mode. It stays in `loadedChunks`.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks from every chunk's load events.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Sets the default mode and hooks every chunk's load and unload events.</span> |

</details>
