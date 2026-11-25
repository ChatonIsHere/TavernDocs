---
title: "ChunkDisplayTool"
description: "class ChunkDisplayTool in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkDisplayTool

A **class** in `Root.Township`, `ATT.FeatureTestGymnasium`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`SingletonBehaviour<ChunkDisplayTool>`](/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`ChunkDisplayTool`](/game-api/types/game-other-namespaces/chunkdisplaytool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkDisplayTool()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allscenechunks" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"[] allSceneChunks"}</code> |  |
| <Link id="m-cachedchunkdisplays" /><code>{"private readonly Dictionary<int, GameObject> cachedChunkDisplays"}</code> |  |
| <Link id="m-chunkdisplayprefab" /><code>{"private Renderer chunkDisplayPrefab"}</code> |  |
| <Link id="m-defaultmode" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/gymnasiumvisualchunkdisplaymode">{"GymnasiumVisualChunkDisplayMode"}</Link>{" defaultMode"}</code> |  |
| <Link id="m-displayopacity" /><code>{"private int displayOpacity"}</code> |  |
| <Link id="m-loadedchunks" /><code>{"private readonly HashSet<int> loadedChunks"}</code> |  |
| <Link id="m-quadrotation" /><code>{"private static readonly Quaternion QuadRotation"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentmode" /><code><Link to="/game-api/types/game-other-namespaces/gymnasiumvisualchunkdisplaymode">{"GymnasiumVisualChunkDisplayMode"}</Link>{" CurrentMode { get; private set; }"}</code> |  |
| <Link id="m-allscenechunks-2" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"[] AllSceneChunks { get; }"}</code> |  |
| <Link id="m-nextmode" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/gymnasiumvisualchunkdisplaymode">{"GymnasiumVisualChunkDisplayMode"}</Link>{" NextMode { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-advancemode" /><code>{"void AdvanceMode()"}</code> |  |
| <Link id="m-applymode" /><code>{"private void ApplyMode("}<Link to="/game-api/types/game-other-namespaces/gymnasiumvisualchunkdisplaymode">{"GymnasiumVisualChunkDisplayMode"}</Link>{" mode)"}</code> |  |
| <Link id="m-createchunkquad" /><code>{"private GameObject CreateChunkQuad(Bounds bounds)"}</code> |  |
| <Link id="m-displayall" /><code>{"private void DisplayAll()"}</code> |  |
| <Link id="m-displaychunkvisual" /><code>{"private void DisplayChunkVisual("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-displayloadedonly" /><code>{"private void DisplayLoadedOnly()"}</code> |  |
| <Link id="m-displaynone" /><code>{"private void DisplayNone()"}</code> |  |
| <Link id="m-onchunkloaded" /><code>{"private void OnChunkLoaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-onchunkunloaded" /><code>{"private void OnChunkUnLoaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
