---
title: "SpawnArea"
description: "A circle on the ground where things (or players) spawn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnArea

A **class** in `Root.Township`, the global namespace.

A circle on the ground where things (or players) spawn. Gives repeatable positions by index, raycast onto valid ground away from blocking layers. Named areas are listed in `InstanceMap`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<SpawnAreaSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<SpawnAreaSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`ISpawnPositions`](/mod/game-api/types/global-i-l/ispawnpositions)
- **Derived types** [`SpawnAreaSaveData`](/mod/game-api/types/global-s/spawnareasavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnArea()"}</code> | Creates a `SpawnArea` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instancemap" /><code>{"static Dictionary<"}<Link to="/mod/game-api/types/global-s/spawnareaidentifier">{"SpawnAreaIdentifier"}</Link>{", "}<Link to="/mod/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{"> InstanceMap"}</code> | Every spawn area with a non-default identifier, by identifier. |

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-avoidcastradius" /><code>{"private float avoidCastRadius"}</code> | Radius checked around a spot for avoid-layer objects. Below 0 skips the check. |
| <Link id="m-avoidlayers" /><code>{"private LayerMask avoidLayers"}</code> | Layers that block a spawn spot, both when hit by the ground ray and nearby. |
| <Link id="m-groundlayers" /><code>{"private LayerMask groundLayers"}</code> | Layers counted as ground for the downward raycast. |
| <Link id="m-identifier" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawnareaidentifier">{"SpawnAreaIdentifier"}</Link>{" identifier"}</code> | Backing field for `Identifier`. Non-default areas register in `InstanceMap`, for example the respawn point. |
| <Link id="m-isaligningnormal" /><code>{"private bool isAligningNormal"}</code> | Whether spawn rotation tilts to match the ground normal. |
| <Link id="m-maxacceptableangledot" /><code>{"private float maxAcceptableAngleDot"}</code> | Lowest ground normal y (set from an angle) a spot can have. -1 allows any slope. |
| <Link id="m-maxiterations" /><code>{"private int maxIterations"}</code> | Random tries before falling back to the area's centre (100 by default). |
| <Link id="m-seed" /><code>{"private int seed"}</code> | Random seed picked in `Awake`, so the same index gives the same spot during a session. |
| <Link id="m-size" /><code>{"private float size"}</code> | Radius of the circle spawn spots are picked in. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier-2" /><code><Link to="/mod/game-api/types/global-s/spawnareaidentifier">{"SpawnAreaIdentifier"}</Link>{" Identifier { get; }"}</code> | Which named spawn area this is. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"void Awake()"}</code> | Picks a random seed and adds the area to `InstanceMap` if it's named. |
| <Link id="m-getrandomspawnposition" /><code>{"Vector3 GetRandomSpawnPosition()"}</code> | A valid position from a random index. |
| <Link id="m-getspawnposition" /><code><Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetSpawnPosition(int index)"}</code> | The spawn point for an index. The same index gives the same point while the seed lasts. Falls back to the centre. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Removes the area from `InstanceMap`. |
| <Link id="m-setsize" /><code>{"private void ISpawnPositions.SetSize(float size)"}</code> | Sets the spawn circle's radius. |
| <Link id="m-validposition" /><code>{"private bool ValidPosition(ref Vector3 position, ref Quaternion rotation)"}</code> | Raycasts down to ground near the point and checks the slope and that nothing in the avoid layers is nearby. |

</details>

## Used in

Members of other types that take, return or hold a `SpawnArea`:

[`INetworkScene.RespawnPoint`](/mod/game-api/types/alta-networking/inetworkscene#m-respawnpoint), [`NetworkScene.Alta.Networking.INetworkScene.RespawnPoint`](/mod/game-api/types/alta-networking/networkscene#m-alta-networking-inetworkscene-respawnpoint), [`NetworkScene.respawnPoint`](/mod/game-api/types/alta-networking/networkscene#m-respawnpoint), [`GymnasiumOnDemandPrefabSpawner.spawnArea`](/mod/game-api/types/game-other-namespaces/gymnasiumondemandprefabspawner#m-spawnarea), [`GymnasiumTeleportPointPage.SetupElement`](/mod/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-setupelement), [`GymnasiumTeleportPointPage.teleportPoints`](/mod/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-teleportpoints), [`InGameInspector.SpawnPointTeleporter.availablePoints`](/mod/game-api/types/global-i-l/ingameinspector-spawnpointteleporter#m-availablepoints), [`LocalNetworkScene.RespawnPoint`](/mod/game-api/types/global-i-l/localnetworkscene#m-respawnpoint), [`LocalNetworkScene.spawnArea`](/mod/game-api/types/global-i-l/localnetworkscene#m-spawnarea), [`TeleportPointElement.Setup`](/mod/game-api/types/global-t-x/teleportpointelement#m-setup), [`TeleportPointElement.spawnPoint`](/mod/game-api/types/global-t-x/teleportpointelement#m-spawnpoint), [`TeleportPointElement.SpawnPoint`](/mod/game-api/types/global-t-x/teleportpointelement#m-spawnpoint-2).
