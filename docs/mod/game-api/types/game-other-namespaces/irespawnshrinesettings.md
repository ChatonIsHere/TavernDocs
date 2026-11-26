---
title: "IRespawnShrineSettings"
description: "Fixed settings for one respawn shrine: its id, what it burns as fuel and where players and its beacon appear."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRespawnShrineSettings

An **interface** in `Root.Township`, `ATT.Respawn`.

Fixed settings for one respawn shrine: its id, what it burns as fuel and where players and its beacon appear.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Derived types** [`IRespawnSystemSettings`](/mod/game-api/types/game-other-namespaces/irespawnsystemsettings), [`RespawnShrineData`](/mod/game-api/types/game-other-namespaces/respawnshrinedata), [`RespawnSystemSettings`](/mod/game-api/types/game-other-namespaces/respawnsystemsettings)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-beaconposition" /><code>{"Vector3 BeaconPosition { get; }"}</code> | World position the shrine's beacon is placed at. |
| <Link id="m-beaconprefabdefinition" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" BeaconPrefabDefinition { get; }"}</code> | Pooled prefab spawned as the shrine's beacon. |
| <Link id="m-fuelconsumedperhour" /><code>{"float FuelConsumedPerHour { get; }"}</code> | How much fuel the shrine burns per hour. |
| <Link id="m-isglobalrespawnshrine" /><code>{"bool IsGlobalRespawnShrine { get; }"}</code> | True for a shrine that acts as a global spawn point rather than a player-owned one. |
| <Link id="m-maxfuelcapacity" /><code>{"int MaxFuelCapacity { get; }"}</code> | Most fuel units the shrine can hold. |
| <Link id="m-resourcetype" /><code><Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" ResourceType { get; }"}</code> | The dock settings that say which item the shrine accepts as fuel. |
| <Link id="m-shrineid" /><code>{"Guid ShrineId { get; }"}</code> | Unique id of the shrine, used to match it with its saved model. |
| <Link id="m-spawnposition" /><code>{"Vector3 SpawnPosition { get; }"}</code> | World position players respawn at. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getresourcetypehash" /><code>{"uint GetResourceTypeHash()"}</code> | Hash of the fuel resource type, for saving and comparing. |

## Used in

Members of other types that take, return or hold a `IRespawnShrineSettings`:

[`IRespawnSystemSettings.GetShrineSettings`](/mod/game-api/types/game-other-namespaces/irespawnsystemsettings#m-getshrinesettings), [`IRespawnSystemSettings.Item`](/mod/game-api/types/game-other-namespaces/irespawnsystemsettings#m-item), [`PoweredRespawnShrine.shrineSettings`](/mod/game-api/types/game-other-namespaces/poweredrespawnshrine#m-shrinesettings), [`RespawnSystemSettings.GetEnumerator`](/mod/game-api/types/game-other-namespaces/respawnsystemsettings#m-getenumerator), [`RespawnSystemSettings.GetShrineSettings`](/mod/game-api/types/game-other-namespaces/respawnsystemsettings#m-getshrinesettings), [`RespawnSystemSettings.Item`](/mod/game-api/types/game-other-namespaces/respawnsystemsettings#m-item).
