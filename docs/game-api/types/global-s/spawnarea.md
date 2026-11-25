---
title: "SpawnArea"
description: "A circle on the ground where things (or players) spawn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnArea

A **class** in `Root.Township`, no namespace.

A circle on the ground where things (or players) spawn. Gives repeatable positions by index, raycast onto valid ground away from blocking layers. Named areas are listed in `InstanceMap`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<SpawnAreaSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<SpawnAreaSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`ISpawnPositions`](/game-api/types/global-i-l/ispawnpositions)
- **Derived types** [`SpawnAreaSaveData`](/game-api/types/global-s/spawnareasavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnArea()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instancemap" /><code>{"static Dictionary<"}<Link to="/game-api/types/global-s/spawnareaidentifier">{"SpawnAreaIdentifier"}</Link>{", "}<Link to="/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{"> InstanceMap"}</code> | Every spawn area with a non-default identifier, by identifier. |
| <Link id="m-avoidcastradius" /><code>{"private float avoidCastRadius"}</code> |  |
| <Link id="m-avoidlayers" /><code>{"private LayerMask avoidLayers"}</code> |  |
| <Link id="m-groundlayers" /><code>{"private LayerMask groundLayers"}</code> |  |
| <Link id="m-identifier" /><code>{"private "}<Link to="/game-api/types/global-s/spawnareaidentifier">{"SpawnAreaIdentifier"}</Link>{" identifier"}</code> |  |
| <Link id="m-isaligningnormal" /><code>{"private bool isAligningNormal"}</code> |  |
| <Link id="m-maxacceptableangledot" /><code>{"private float maxAcceptableAngleDot"}</code> |  |
| <Link id="m-maxiterations" /><code>{"private int maxIterations"}</code> |  |
| <Link id="m-seed" /><code>{"private int seed"}</code> |  |
| <Link id="m-size" /><code>{"private float size"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier-2" /><code><Link to="/game-api/types/global-s/spawnareaidentifier">{"SpawnAreaIdentifier"}</Link>{" Identifier { get; }"}</code> | Which named spawn area this is. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"void Awake()"}</code> | Picks a random seed and adds the area to `InstanceMap` if it's named. |
| <Link id="m-getrandomspawnposition" /><code>{"Vector3 GetRandomSpawnPosition()"}</code> | A valid position from a random index. |
| <Link id="m-getspawnposition" /><code><Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetSpawnPosition(int index)"}</code> | The spawn point for an index. The same index gives the same point while the seed lasts. Falls back to the centre. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-setsize" /><code>{"private void ISpawnPositions.SetSize(float size)"}</code> |  |
| <Link id="m-validposition" /><code>{"private bool ValidPosition(ref Vector3 position, ref Quaternion rotation)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SpawnArea`:

[`INetworkScene.RespawnPoint`](/game-api/types/alta-networking/inetworkscene#m-respawnpoint), [`NetworkScene.Alta.Networking.INetworkScene.RespawnPoint`](/game-api/types/alta-networking/networkscene#m-alta-networking-inetworkscene-respawnpoint), [`NetworkScene.respawnPoint`](/game-api/types/alta-networking/networkscene#m-respawnpoint), [`GymnasiumOnDemandPrefabSpawner.spawnArea`](/game-api/types/game-other-namespaces/gymnasiumondemandprefabspawner#m-spawnarea), [`GymnasiumTeleportPointPage.SetupElement`](/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-setupelement), [`GymnasiumTeleportPointPage.teleportPoints`](/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-teleportpoints), [`InGameInspector.SpawnPointTeleporter.availablePoints`](/game-api/types/global-i-l/ingameinspector-spawnpointteleporter#m-availablepoints), [`LocalNetworkScene.RespawnPoint`](/game-api/types/global-i-l/localnetworkscene#m-respawnpoint), [`LocalNetworkScene.spawnArea`](/game-api/types/global-i-l/localnetworkscene#m-spawnarea), [`TeleportPointElement.Setup`](/game-api/types/global-t-x/teleportpointelement#m-setup), [`TeleportPointElement.spawnPoint`](/game-api/types/global-t-x/teleportpointelement#m-spawnpoint), [`TeleportPointElement.SpawnPoint`](/game-api/types/global-t-x/teleportpointelement#m-spawnpoint-2).
