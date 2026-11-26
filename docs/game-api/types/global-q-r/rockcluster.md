---
title: "RockCluster"
description: "A Cluster of Rock parts that all share one BoulderDefinition."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RockCluster

A **class** in `Root.Township`, no namespace.

A `Cluster` of `Rock` parts that all share one `BoulderDefinition`. The server picks the definition and syncs it and the part list to clients; saved with `RockClusterSaveData`.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`Cluster`](/game-api/types/global-c-d/cluster), [`ISavable<RockClusterSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<RockClusterSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`RockClusterSaveData`](/game-api/types/global-q-r/rockclustersavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RockCluster()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code>{"private "}<Link to="/game-api/types/alta-items/boulderdefinition">{"BoulderDefinition"}</Link>{" definition"}</code> | The `BoulderDefinition` shared by every rock in the cluster. Saved. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-options" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" options"}</code> | Object pipeline that picks a `BoulderDefinition` for a freshly generated cluster. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-c-d/clusterentitiesregisterarguments">{"ClusterEntitiesRegisterArguments"}</Link>{"> sync"}</code> | Method sync that sends the definition and part list to clients. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addingfinished" /><code>{"override void AddingFinished("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: after all parts are added, sets them up and sends the definition and part IDs to the chunks. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the `sync` method sync on `SyncA`. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: for newly generated spawns, picks a definition from `options`. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the definition and part IDs to a joining player. |
| <Link id="m-addinternal" /><code>{"protected override void AddInternal("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" part)"}</code> | Adds a part and, if the definition is known, defines the rock and makes the cluster its chunking parent. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gettemporarypartsidentifiers" /><code>{"private int GetTemporaryPartsIdentifiers()"}</code> | Writes the part entity IDs into the shared `TemporaryUint256.array` and returns how many it wrote. |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" part)"}</code> | Defines one part's `Rock` with the cluster's definition and sets the cluster as its chunking parent. |
| <Link id="m-setupexisting" /><code>{"private void SetupExisting("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Sets up all current parts. Logs an error and picks a random definition if none is set. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-c-d/clusterentitiesregisterarguments">{"ClusterEntitiesRegisterArguments"}</Link>{" args)"}</code> | Serializes the definition hash and part IDs. Clients look up the definition and set up each part once it spawns. |

</details>
