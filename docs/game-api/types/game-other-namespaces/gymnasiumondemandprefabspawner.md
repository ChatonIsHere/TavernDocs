---
title: "GymnasiumOnDemandPrefabSpawner"
description: "class GymnasiumOnDemandPrefabSpawner in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GymnasiumOnDemandPrefabSpawner

A **class** in `Root.Township`, `ATT.FeatureTestGymnasium`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<GymnasiumOnDemandPrefabSpawnerData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<GymnasiumOnDemandPrefabSpawnerData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GymnasiumOnDemandPrefabSpawnerData`](/game-api/types/global-e-h/gymnasiumondemandprefabspawnerdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GymnasiumOnDemandPrefabSpawner()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-backgroundsize" /><code>{"private Vector3 backgroundSize"}</code> |  |
| <Link id="m-board" /><code>{"private Transform board"}</code> |  |
| <Link id="m-buttonprefab" /><code>{"private "}<Link to="/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" buttonPrefab"}</code> |  |
| <Link id="m-buttonprefabsize" /><code>{"private Vector3 buttonPrefabSize"}</code> |  |
| <Link id="m-prefabstospawn" /><code>{"private uint[] prefabsToSpawn"}</code> |  |
| <Link id="m-spawnarea" /><code>{"private "}<Link to="/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" spawnArea"}</code> |  |
| <Link id="m-spawnednetworkprefabs" /><code>{"private readonly List<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> spawnedNetworkPrefabs"}</code> |  |
| <Link id="m-syncbuttonsetup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncButtonSetup"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/global-e-h/gymnasiumondemandprefabspawnerdata">{"GymnasiumOnDemandPrefabSpawnerData"}</Link>{" data, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-save" /><code><Link to="/game-api/types/global-e-h/gymnasiumondemandprefabspawnerdata">{"GymnasiumOnDemandPrefabSpawnerData"}</Link>{" Save("}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |  |
| <Link id="m-createbutton" /><code>{"private "}<Link to="/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" CreateButton(Vector3 position, float scale)"}</code> |  |
| <Link id="m-destroynetworkprefabs" /><code>{"private void DestroyNetworkPrefabs()"}</code> |  |
| <Link id="m-setupbutton" /><code>{"private void SetupButton("}<Link to="/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" button, Action action, string label)"}</code> |  |
| <Link id="m-setupspawnbuttons" /><code>{"private void SetupSpawnButtons()"}</code> |  |
| <Link id="m-spawnnetworkprefabwithid" /><code>{"private void SpawnNetworkPrefabWithId(uint networkPrefabId)"}</code> |  |
| <Link id="m-syncbuttonsetup-2" /><code>{"private void SyncButtonSetup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
