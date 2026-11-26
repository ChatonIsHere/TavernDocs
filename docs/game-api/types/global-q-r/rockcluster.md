---
title: "RockCluster"
description: "class RockCluster in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RockCluster

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`Cluster`](/game-api/types/global-c-d/cluster), [`ISavable<RockClusterSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<RockClusterSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`RockClusterSaveData`](/game-api/types/global-q-r/rockclustersavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RockCluster()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-definition" /><code>{"private "}<Link to="/game-api/types/alta-items/boulderdefinition">{"BoulderDefinition"}</Link>{" definition"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-options" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" options"}</code> |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-c-d/clusterentitiesregisterarguments">{"ClusterEntitiesRegisterArguments"}</Link>{"> sync"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-addingfinished" /><code>{"override void AddingFinished("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-addinternal" /><code>{"protected override void AddInternal("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" part)"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-gettemporarypartsidentifiers" /><code>{"private int GetTemporaryPartsIdentifiers()"}</code> |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" part)"}</code> |
| <Link id="m-setupexisting" /><code>{"private void SetupExisting("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-c-d/clusterentitiesregisterarguments">{"ClusterEntitiesRegisterArguments"}</Link>{" args)"}</code> |

</details>
