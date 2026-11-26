---
title: "ChunkDetector"
description: "Server: keeps a chunked entity in the right chunk by re-evaluating its chunk whenever its transform moves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkDetector

A **class** in `Root.Township`, no namespace.

Server: keeps a chunked entity in the right chunk by re-evaluating its chunk whenever its transform moves. Only runs while the entity has no parent chunker and isn't in the global chunk.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `DisallowMultipleComponent`, `ExecuteInEditMode`
- **Documented in** [Chunks](/game-api/world/chunks#chunkdetector)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ChunkDetector()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-testing" /><code>{"static uint Testing"}</code> | Static counter not used anywhere in the game code. |

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunker" /><code>{"private "}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" chunker"}</code> | The entity's `Chunker`. |
| <Link id="m-chunkupdatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" chunkUpdateModule"}</code> | Shared update module that runs every detector's check during Update. |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | Backing field for `IsEnabled`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | Transform watched for movement. Set to this transform by default. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle of the registered per-frame check, or null. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasupdate" /><code>{"bool HasUpdate { get; }"}</code> | True while the per-frame chunk check is registered. |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> | Turns detection on or off. Can only be on for the server. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Schedules `DelayInitialize` for the next frame. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforchunkupdate" /><code>{"private void CheckForChunkUpdate()"}</code> | Per-frame update: re-evaluates the chunk if the target transform has changed. Logs and rethrows if the entity is gone. |
| <Link id="m-delayinitialize" /><code>{"private void DelayInitialize()"}</code> | One frame after server init, enables the component if the entity is still alive and has a real identifier. |
| <Link id="m-editorsetup" /><code>{"private bool EditorSetup()"}</code> | Editor helper: sets the target transform to this one and disables the component by default. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Removes the update and the parent-change hook. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Gets the entity's chunker, starts checking if it has no parent, and watches for parent changes. |
| <Link id="m-registerupdate" /><code>{"private void RegisterUpdate()"}</code> | Evaluates the chunk once, then registers the per-frame check (skipped for global-chunk entities). |
| <Link id="m-startcheckingforchunkchange" /><code>{"private void StartCheckingForChunkChange("}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" oldChunkerParent, "}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" newChunkerParent)"}</code> | Stops checking when the chunker gets a parent (the parent decides the chunk) and resumes when it's unparented. |

</details>

## Used in

Members of other types that take, return or hold a `ChunkDetector`:

[`BoundsPopulationItem.detector`](/game-api/types/alta-world-generation/boundspopulationitem#m-detector), [`RadialPopulationItem.detector`](/game-api/types/alta-world-generation/radialpopulationitem#m-detector).
