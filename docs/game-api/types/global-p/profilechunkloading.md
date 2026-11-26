---
title: "ProfileChunkLoading"
description: "class ProfileChunkLoading in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfileChunkLoading

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`GameData`](/game-api/types/global-p/profilechunkloading-gamedata), [`ProfileData`](/game-api/types/global-p/profilechunkloading-profiledata), [`ProfilingPosition`](/game-api/types/global-p/profilechunkloading-profilingposition)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ProfileChunkLoading()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-currentprofile" /><code>{"private Coroutine currentProfile"}</code> |
| <Link id="m-isstarting" /><code>{"private bool isStarting"}</code> |
| <Link id="m-iterations" /><code>{"private int iterations"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-positions" /><code>{"private List<"}<Link to="/game-api/types/global-p/profilechunkloading-profilingposition">{"ProfileChunkLoading.ProfilingPosition"}</Link>{"> positions"}</code> |
| <Link id="m-profilingdata" /><code>{"private "}<Link to="/game-api/types/global-p/profilechunkloading-profiledata">{"ProfileChunkLoading.ProfileData"}</Link>{" profilingData"}</code> |
| <Link id="m-waitingfor" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> waitingFor"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-positions-2" /><code>{"List<"}<Link to="/game-api/types/global-p/profilechunkloading-profilingposition">{"ProfileChunkLoading.ProfilingPosition"}</Link>{"> Positions { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-profile" /><code>{"IEnumerator Profile() (iterator)"}</code> |
| <Link id="m-startprofiling" /><code>{"void StartProfiling()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-markasloaded" /><code>{"private void MarkAsLoaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" loadedChunk)"}</code> |
| <Link id="m-markasunloaded" /><code>{"private void MarkAsUnloaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" loadedChunk)"}</code> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |

</details>
