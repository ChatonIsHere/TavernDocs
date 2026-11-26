---
title: "ProfileChunkLoading"
description: "Debug tool: force-loads the chunks around each listed position in turn, timing the load and unload and logging FPS and entity counts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfileChunkLoading

A **class** in `Root.Township`, the global namespace.

Debug tool: force-loads the chunks around each listed position in turn, timing the load and unload and logging FPS and entity counts.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`GameData`](/mod/game-api/types/global-p/profilechunkloading-gamedata), [`ProfileData`](/mod/game-api/types/global-p/profilechunkloading-profiledata), [`ProfilingPosition`](/mod/game-api/types/global-p/profilechunkloading-profilingposition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProfileChunkLoading()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentprofile" /><code>{"private Coroutine currentProfile"}</code> | <span className="api-desc">The running coroutine.</span> |
| <Link id="m-isstarting" /><code>{"private bool isStarting"}</code> | <span className="api-desc">Inspector button that starts the run.</span> |
| <Link id="m-iterations" /><code>{"private int iterations"}</code> | <span className="api-desc">How many times to go through the positions (default 10).</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">The `ChunkLoading` NLog logger.</span> |
| <Link id="m-positions" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/profilechunkloading-profilingposition">{"ProfileChunkLoading.ProfilingPosition"}</Link>{"> positions"}</code> | <span className="api-desc">Backing field for `Positions`.</span> |
| <Link id="m-profilingdata" /><code>{"private "}<Link to="/mod/game-api/types/global-p/profilechunkloading-profiledata">{"ProfileChunkLoading.ProfileData"}</Link>{" profilingData"}</code> | <span className="api-desc">Results for the current position.</span> |
| <Link id="m-waitingfor" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> waitingFor"}</code> | <span className="api-desc">Chunks not yet loaded or unloaded.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-positions-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-p/profilechunkloading-profilingposition">{"ProfileChunkLoading.ProfilingPosition"}</Link>{"> Positions { get; }"}</code> | <span className="api-desc">The positions to profile.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-profile" /><code>{"IEnumerator Profile() (iterator)"}</code> | <span className="api-desc">Coroutine that runs every position for each iteration, with server diagnostics off, and logs the results to the `ChunkLoading` logger.</span> |
| <Link id="m-startprofiling" /><code>{"void StartProfiling()"}</code> | <span className="api-desc">Starts the run if one isn't already going.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-markasloaded" /><code>{"private void MarkAsLoaded("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" loadedChunk)"}</code> | <span className="api-desc">Removes a chunk from the wait list once fully loaded.</span> |
| <Link id="m-markasunloaded" /><code>{"private void MarkAsUnloaded("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" loadedChunk)"}</code> | <span className="api-desc">Removes a chunk from the wait list once fully unloaded.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws a sphere at each position.</span> |

</details>
