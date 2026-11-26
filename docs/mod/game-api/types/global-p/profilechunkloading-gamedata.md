---
title: "ProfileChunkLoading.GameData"
description: "A snapshot of spawned object counts taken when it is created, used by the chunk loading profiler to log how much a load brought in."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfileChunkLoading.GameData

A **class** in `Root.Township`, the global namespace.

A snapshot of spawned object counts taken when it is created, used by the chunk loading profiler to log how much a load brought in.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`ProfileChunkLoading`](/mod/game-api/types/global-p/profilechunkloading)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameData()"}</code> | <span className="api-desc">Creates a `ProfileChunkLoading.GameData` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-aiagentcount" /><code>{"int AiAgentCount { get; set; }"}</code> | <span className="api-desc">Number of AI agents being updated.</span> |
| <Link id="m-chunksloadedcount" /><code>{"int ChunksLoadedCount { get; set; }"}</code> | <span className="api-desc">Number of loaded chunks.</span> |
| <Link id="m-firebugcount" /><code>{"int FirebugCount { get; set; }"}</code> | <span className="api-desc">Spawned firebugs.</span> |
| <Link id="m-goteracount" /><code>{"int GoteraCount { get; set; }"}</code> | <span className="api-desc">Spawned goteras.</span> |
| <Link id="m-loadedarea" /><code>{"float LoadedArea { get; set; }"}</code> | <span className="api-desc">Total ground area of the chunks loaded, filled in by the profiler afterwards.</span> |
| <Link id="m-networkentitiescount" /><code>{"int NetworkEntitiesCount { get; set; }"}</code> | <span className="api-desc">Spawned network entities.</span> |
| <Link id="m-networkprefabscount" /><code>{"int NetworkPrefabsCount { get; set; }"}</code> | <span className="api-desc">Spawned network prefabs.</span> |
| <Link id="m-networkrigidbodiesawakecount" /><code>{"int NetworkRigidbodiesAwakeCount { get; set; }"}</code> | <span className="api-desc">Network rigidbodies currently awake.</span> |
| <Link id="m-networkrigidbodiescount" /><code>{"int NetworkRigidbodiesCount { get; set; }"}</code> | <span className="api-desc">Spawned network rigidbodies.</span> |
| <Link id="m-phantomcount" /><code>{"int PhantomCount { get; set; }"}</code> | <span className="api-desc">Spawned phantoms.</span> |
| <Link id="m-pointersloaded" /><code>{"int PointersLoaded { get; set; }"}</code> | <span className="api-desc">Chunk prefab pointers currently loaded.</span> |
| <Link id="m-spriggullcount" /><code>{"int SpriggullCount { get; set; }"}</code> | <span className="api-desc">Spawned spriggulls.</span> |
| <Link id="m-turabadacount" /><code>{"int TurabadaCount { get; set; }"}</code> | <span className="api-desc">Spawned turabadas.</span> |
| <Link id="m-wyrmcount" /><code>{"int WyrmCount { get; set; }"}</code> | <span className="api-desc">Spawned wyrms.</span> |

## Used in

Members of other types that take, return or hold a `GameData`:

<div className="api-used-in">

[`ProfileChunkLoading.ProfileData.LoadData`](/mod/game-api/types/global-p/profilechunkloading-profiledata#m-loaddata).

</div>
