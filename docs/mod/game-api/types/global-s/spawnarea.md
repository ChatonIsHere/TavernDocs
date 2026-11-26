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
| <Link id="m-ctor" /><code>{"SpawnArea()"}</code> | <span className="api-desc">Creates a `SpawnArea` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instancemap" /><code>{"static Dictionary<"}<Link to="/mod/game-api/types/global-s/spawnareaidentifier">{"SpawnAreaIdentifier"}</Link>{", "}<Link to="/mod/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{"> InstanceMap"}</code> | <span className="api-desc">Every spawn area with a non-default identifier, by identifier.</span> |

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-avoidcastradius" /><code>{"private float avoidCastRadius"}</code> | <span className="api-desc">Radius checked around a spot for avoid-layer objects. Below 0 skips the check.</span> |
| <Link id="m-avoidlayers" /><code>{"private LayerMask avoidLayers"}</code> | <span className="api-desc">Layers that block a spawn spot, both when hit by the ground ray and nearby.</span> |
| <Link id="m-groundlayers" /><code>{"private LayerMask groundLayers"}</code> | <span className="api-desc">Layers counted as ground for the downward raycast.</span> |
| <Link id="m-identifier" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawnareaidentifier">{"SpawnAreaIdentifier"}</Link>{" identifier"}</code> | <span className="api-desc">Backing field for `Identifier`. Non-default areas register in `InstanceMap`, for example the respawn point.</span> |
| <Link id="m-isaligningnormal" /><code>{"private bool isAligningNormal"}</code> | <span className="api-desc">Whether spawn rotation tilts to match the ground normal.</span> |
| <Link id="m-maxacceptableangledot" /><code>{"private float maxAcceptableAngleDot"}</code> | <span className="api-desc">Lowest ground normal y (set from an angle) a spot can have. -1 allows any slope.</span> |
| <Link id="m-maxiterations" /><code>{"private int maxIterations"}</code> | <span className="api-desc">Random tries before falling back to the area's centre (100 by default).</span> |
| <Link id="m-seed" /><code>{"private int seed"}</code> | <span className="api-desc">Random seed picked in `Awake`, so the same index gives the same spot during a session.</span> |
| <Link id="m-size" /><code>{"private float size"}</code> | <span className="api-desc">Radius of the circle spawn spots are picked in.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier-2" /><code><Link to="/mod/game-api/types/global-s/spawnareaidentifier">{"SpawnAreaIdentifier"}</Link>{" Identifier { get; }"}</code> | <span className="api-desc">Which named spawn area this is.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"void Awake()"}</code> | <span className="api-desc">Picks a random seed and adds the area to `InstanceMap` if it's named.</span> |
| <Link id="m-getrandomspawnposition" /><code>{"Vector3 GetRandomSpawnPosition()"}</code> | <span className="api-desc">A valid position from a random index.</span> |
| <Link id="m-getspawnposition" /><code><Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetSpawnPosition(int index)"}</code> | <span className="api-desc">The spawn point for an index. The same index gives the same point while the seed lasts. Falls back to the centre.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Removes the area from `InstanceMap`.</span> |
| <Link id="m-setsize" /><code>{"private void ISpawnPositions.SetSize(float size)"}</code> | <span className="api-desc">Sets the spawn circle's radius.</span> |
| <Link id="m-validposition" /><code>{"private bool ValidPosition(ref Vector3 position, ref Quaternion rotation)"}</code> | <span className="api-desc">Raycasts down to ground near the point and checks the slope and that nothing in the avoid layers is nearby.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SpawnArea`:

<div className="api-used-in">

[`INetworkScene.RespawnPoint`](/mod/game-api/types/alta-networking/inetworkscene#m-respawnpoint), [`NetworkScene.Alta.Networking.INetworkScene.RespawnPoint`](/mod/game-api/types/alta-networking/networkscene#m-alta-networking-inetworkscene-respawnpoint), [`NetworkScene.respawnPoint`](/mod/game-api/types/alta-networking/networkscene#m-respawnpoint), [`GymnasiumOnDemandPrefabSpawner.spawnArea`](/mod/game-api/types/game-other-namespaces/gymnasiumondemandprefabspawner#m-spawnarea), [`GymnasiumTeleportPointPage.SetupElement`](/mod/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-setupelement), [`GymnasiumTeleportPointPage.teleportPoints`](/mod/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-teleportpoints), [`InGameInspector.SpawnPointTeleporter.availablePoints`](/mod/game-api/types/global-i-l/ingameinspector-spawnpointteleporter#m-availablepoints), [`LocalNetworkScene.RespawnPoint`](/mod/game-api/types/global-i-l/localnetworkscene#m-respawnpoint), [`LocalNetworkScene.spawnArea`](/mod/game-api/types/global-i-l/localnetworkscene#m-spawnarea), [`TeleportPointElement.Setup`](/mod/game-api/types/global-t-x/teleportpointelement#m-setup), [`TeleportPointElement.spawnPoint`](/mod/game-api/types/global-t-x/teleportpointelement#m-spawnpoint), [`TeleportPointElement.SpawnPoint`](/mod/game-api/types/global-t-x/teleportpointelement#m-spawnpoint-2).

</div>
