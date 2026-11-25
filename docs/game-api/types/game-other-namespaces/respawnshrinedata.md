---
title: "RespawnShrineData"
description: "class RespawnShrineData in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnShrineData

A **class** in `Root.Township`, `ATT.Respawn`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `ScriptableObject`, [`IRespawnShrineSettings`](/game-api/types/game-other-namespaces/irespawnshrinesettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnShrineData()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-beaconposition" /><code>{"private Vector3 beaconPosition"}</code> |  |
| <Link id="m-beaconprefabdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" beaconPrefabDefinition"}</code> |  |
| <Link id="m-fuelconsumedperhour" /><code>{"private float fuelConsumedPerHour"}</code> |  |
| <Link id="m-guid" /><code>{"private string guid"}</code> |  |
| <Link id="m-isglobalrespawnshrine" /><code>{"private bool isGlobalRespawnShrine"}</code> |  |
| <Link id="m-maximumfuelcapacity" /><code>{"private int maximumFuelCapacity"}</code> |  |
| <Link id="m-resourcetype" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" resourceType"}</code> |  |
| <Link id="m-shrineid" /><code>{"private Guid shrineId"}</code> |  |
| <Link id="m-spawnposition" /><code>{"private Vector3 spawnPosition"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-beaconposition-2" /><code>{"Vector3 BeaconPosition { get; }"}</code> |  |
| <Link id="m-beaconprefabdefinition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" BeaconPrefabDefinition { get; }"}</code> |  |
| <Link id="m-fuelconsumedperhour-2" /><code>{"float FuelConsumedPerHour { get; }"}</code> |  |
| <Link id="m-isglobalrespawnshrine-2" /><code>{"bool IsGlobalRespawnShrine { get; }"}</code> |  |
| <Link id="m-maxfuelcapacity" /><code>{"int MaxFuelCapacity { get; }"}</code> |  |
| <Link id="m-resourcetype-2" /><code><Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" ResourceType { get; }"}</code> |  |
| <Link id="m-shrineid-2" /><code>{"Guid ShrineId { get; }"}</code> |  |
| <Link id="m-spawnposition-2" /><code>{"Vector3 SpawnPosition { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getresourcetypehash" /><code>{"uint GetResourceTypeHash()"}</code> |  |

## Used in

Members of other types that take, return or hold a `RespawnShrineData`:

[`GlobalRespawnShrine.shrineSettings`](/game-api/types/game-other-namespaces/globalrespawnshrine#m-shrinesettings), [`RespawnSystemSettings.respawnShrineSettings`](/game-api/types/game-other-namespaces/respawnsystemsettings#m-respawnshrinesettings).
