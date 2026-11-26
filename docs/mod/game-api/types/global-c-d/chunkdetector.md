---
title: "ChunkDetector"
description: "Server: keeps a chunked entity in the right chunk by re-evaluating its chunk whenever its transform moves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkDetector

A **class** in `Root.Township`, the global namespace.

Server: keeps a chunked entity in the right chunk by re-evaluating its chunk whenever its transform moves. Only runs while the entity has no parent chunker and isn't in the global chunk.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `DisallowMultipleComponent`, `ExecuteInEditMode`
- **Documented in** [Chunks](/mod/game-api/world/chunks#chunkdetector)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkDetector()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-testing" /><code>{"static uint Testing"}</code> | <span className="api-desc">Static counter not used anywhere in the game code.</span> |

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunker" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" chunker"}</code> | <span className="api-desc">The entity's `Chunker`.</span> |
| <Link id="m-chunkupdatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" chunkUpdateModule"}</code> | <span className="api-desc">Shared update module that runs every detector's check during Update.</span> |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | <span className="api-desc">Backing field for `IsEnabled`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | <span className="api-desc">Transform watched for movement. Set to this transform by default.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle of the registered per-frame check, or null.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasupdate" /><code>{"bool HasUpdate { get; }"}</code> | <span className="api-desc">True while the per-frame chunk check is registered.</span> |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> | <span className="api-desc">Turns detection on or off. Can only be on for the server.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Schedules `DelayInitialize` for the next frame.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforchunkupdate" /><code>{"private void CheckForChunkUpdate()"}</code> | <span className="api-desc">Per-frame update: re-evaluates the chunk if the target transform has changed. Logs and rethrows if the entity is gone.</span> |
| <Link id="m-delayinitialize" /><code>{"private void DelayInitialize()"}</code> | <span className="api-desc">One frame after server init, enables the component if the entity is still alive and has a real identifier.</span> |
| <Link id="m-editorsetup" /><code>{"private bool EditorSetup()"}</code> | <span className="api-desc">Editor helper: sets the target transform to this one and disables the component by default.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Removes the update and the parent-change hook.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Gets the entity's chunker, starts checking if it has no parent, and watches for parent changes.</span> |
| <Link id="m-registerupdate" /><code>{"private void RegisterUpdate()"}</code> | <span className="api-desc">Evaluates the chunk once, then registers the per-frame check (skipped for global-chunk entities).</span> |
| <Link id="m-startcheckingforchunkchange" /><code>{"private void StartCheckingForChunkChange("}<Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" oldChunkerParent, "}<Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" newChunkerParent)"}</code> | <span className="api-desc">Stops checking when the chunker gets a parent (the parent decides the chunk) and resumes when it's unparented.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ChunkDetector`:

<div className="api-used-in">

[`BoundsPopulationItem.detector`](/mod/game-api/types/alta-world-generation/boundspopulationitem#m-detector), [`RadialPopulationItem.detector`](/mod/game-api/types/alta-world-generation/radialpopulationitem#m-detector).

</div>
