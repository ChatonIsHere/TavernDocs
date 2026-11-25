---
title: "ChunkDetector"
description: "ChunkDetector (a NetworkEntityBehaviour, no namespace) is how most moving things keep their chunk right."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkDetector

A **class** in `Root.Township`, no namespace.

`ChunkDetector` (a `NetworkEntityBehaviour`, no namespace) is how most moving things keep their chunk right.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `DisallowMultipleComponent`, `ExecuteInEditMode`
- **Documented in** [Chunks](/game-api/world/chunks#chunkdetector)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkDetector()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-testing" /><code>{"static uint Testing"}</code> |  |
| <Link id="m-chunker" /><code>{"private "}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" chunker"}</code> |  |
| <Link id="m-chunkupdatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" chunkUpdateModule"}</code> |  |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasupdate" /><code>{"bool HasUpdate { get; }"}</code> |  |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-checkforchunkupdate" /><code>{"private void CheckForChunkUpdate()"}</code> |  |
| <Link id="m-delayinitialize" /><code>{"private void DelayInitialize()"}</code> |  |
| <Link id="m-editorsetup" /><code>{"private bool EditorSetup()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-registerupdate" /><code>{"private void RegisterUpdate()"}</code> |  |
| <Link id="m-startcheckingforchunkchange" /><code>{"private void StartCheckingForChunkChange("}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" oldChunkerParent, "}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" newChunkerParent)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ChunkDetector`:

[`BoundsPopulationItem.detector`](/game-api/types/alta-world-generation/boundspopulationitem#m-detector), [`RadialPopulationItem.detector`](/game-api/types/alta-world-generation/radialpopulationitem#m-detector).
