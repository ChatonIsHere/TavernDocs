---
title: "RockCluster"
description: "A Cluster of Rock parts that all share one BoulderDefinition."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RockCluster

A **class** in `Root.Township`, the global namespace.

A `Cluster` of `Rock` parts that all share one `BoulderDefinition`. The server picks the definition and syncs it and the part list to clients; saved with `RockClusterSaveData`.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`Cluster`](/mod/game-api/types/global-c-d/cluster), [`ISavable<RockClusterSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<RockClusterSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`RockClusterSaveData`](/mod/game-api/types/global-q-r/rockclustersavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RockCluster()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/boulderdefinition">{"BoulderDefinition"}</Link>{" definition"}</code> | <span className="api-desc">The `BoulderDefinition` shared by every rock in the cluster. Saved.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-options" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" options"}</code> | <span className="api-desc">Object pipeline that picks a `BoulderDefinition` for a freshly generated cluster.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-c-d/clusterentitiesregisterarguments">{"ClusterEntitiesRegisterArguments"}</Link>{"> sync"}</code> | <span className="api-desc">Method sync that sends the definition and part list to clients.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addingfinished" /><code>{"override void AddingFinished("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: after all parts are added, sets them up and sends the definition and part IDs to the chunks.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the `sync` method sync on `SyncA`.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: for newly generated spawns, picks a definition from `options`.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the definition and part IDs to a joining player.</span> |
| <Link id="m-addinternal" /><code>{"protected override void AddInternal("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" part)"}</code> | <span className="api-desc">Adds a part and, if the definition is known, defines the rock and makes the cluster its chunking parent.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gettemporarypartsidentifiers" /><code>{"private int GetTemporaryPartsIdentifiers()"}</code> | <span className="api-desc">Writes the part entity IDs into the shared `TemporaryUint256.array` and returns how many it wrote.</span> |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" part)"}</code> | <span className="api-desc">Defines one part's `Rock` with the cluster's definition and sets the cluster as its chunking parent.</span> |
| <Link id="m-setupexisting" /><code>{"private void SetupExisting("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Sets up all current parts. Logs an error and picks a random definition if none is set.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-c-d/clusterentitiesregisterarguments">{"ClusterEntitiesRegisterArguments"}</Link>{" args)"}</code> | <span className="api-desc">Serializes the definition hash and part IDs. Clients look up the definition and set up each part once it spawns.</span> |

</details>
