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
| <Link id="m-ctor" /><code>{"ProfileChunkLoading()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentprofile" /><code>{"private Coroutine currentProfile"}</code> | The running coroutine. |
| <Link id="m-isstarting" /><code>{"private bool isStarting"}</code> | Inspector button that starts the run. |
| <Link id="m-iterations" /><code>{"private int iterations"}</code> | How many times to go through the positions (default 10). |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | The `ChunkLoading` NLog logger. |
| <Link id="m-positions" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/profilechunkloading-profilingposition">{"ProfileChunkLoading.ProfilingPosition"}</Link>{"> positions"}</code> | Backing field for `Positions`. |
| <Link id="m-profilingdata" /><code>{"private "}<Link to="/mod/game-api/types/global-p/profilechunkloading-profiledata">{"ProfileChunkLoading.ProfileData"}</Link>{" profilingData"}</code> | Results for the current position. |
| <Link id="m-waitingfor" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> waitingFor"}</code> | Chunks not yet loaded or unloaded. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-positions-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-p/profilechunkloading-profilingposition">{"ProfileChunkLoading.ProfilingPosition"}</Link>{"> Positions { get; }"}</code> | The positions to profile. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-profile" /><code>{"IEnumerator Profile() (iterator)"}</code> | Coroutine that runs every position for each iteration, with server diagnostics off, and logs the results to the `ChunkLoading` logger. |
| <Link id="m-startprofiling" /><code>{"void StartProfiling()"}</code> | Starts the run if one isn't already going. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-markasloaded" /><code>{"private void MarkAsLoaded("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" loadedChunk)"}</code> | Removes a chunk from the wait list once fully loaded. |
| <Link id="m-markasunloaded" /><code>{"private void MarkAsUnloaded("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" loadedChunk)"}</code> | Removes a chunk from the wait list once fully unloaded. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws a sphere at each position. |

</details>
