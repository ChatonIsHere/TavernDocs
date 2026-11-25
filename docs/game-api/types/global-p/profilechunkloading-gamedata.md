---
title: "ProfileChunkLoading.GameData"
description: "A snapshot of spawned object counts taken when it is created, used by the chunk loading profiler to log how much a load brought in."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfileChunkLoading.GameData

A **class** in `Root.Township`, no namespace.

A snapshot of spawned object counts taken when it is created, used by the chunk loading profiler to log how much a load brought in.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`ProfileChunkLoading`](/game-api/types/global-p/profilechunkloading)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GameData()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-aiagentcount" /><code>{"int AiAgentCount { get; set; }"}</code> | Number of AI agents being updated. |
| <Link id="m-chunksloadedcount" /><code>{"int ChunksLoadedCount { get; set; }"}</code> | Number of loaded chunks. |
| <Link id="m-firebugcount" /><code>{"int FirebugCount { get; set; }"}</code> | Spawned firebugs. |
| <Link id="m-goteracount" /><code>{"int GoteraCount { get; set; }"}</code> | Spawned goteras. |
| <Link id="m-loadedarea" /><code>{"float LoadedArea { get; set; }"}</code> | Total ground area of the chunks loaded, filled in by the profiler afterwards. |
| <Link id="m-networkentitiescount" /><code>{"int NetworkEntitiesCount { get; set; }"}</code> | Spawned network entities. |
| <Link id="m-networkprefabscount" /><code>{"int NetworkPrefabsCount { get; set; }"}</code> | Spawned network prefabs. |
| <Link id="m-networkrigidbodiesawakecount" /><code>{"int NetworkRigidbodiesAwakeCount { get; set; }"}</code> | Network rigidbodies currently awake. |
| <Link id="m-networkrigidbodiescount" /><code>{"int NetworkRigidbodiesCount { get; set; }"}</code> | Spawned network rigidbodies. |
| <Link id="m-phantomcount" /><code>{"int PhantomCount { get; set; }"}</code> | Spawned phantoms. |
| <Link id="m-pointersloaded" /><code>{"int PointersLoaded { get; set; }"}</code> | Chunk prefab pointers currently loaded. |
| <Link id="m-spriggullcount" /><code>{"int SpriggullCount { get; set; }"}</code> | Spawned spriggulls. |
| <Link id="m-turabadacount" /><code>{"int TurabadaCount { get; set; }"}</code> | Spawned turabadas. |
| <Link id="m-wyrmcount" /><code>{"int WyrmCount { get; set; }"}</code> | Spawned wyrms. |

## Used in

Members of other types that take, return or hold a `GameData`:

[`ProfileChunkLoading.ProfileData.LoadData`](/game-api/types/global-p/profilechunkloading-profiledata#m-loaddata).
