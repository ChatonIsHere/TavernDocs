---
title: "RespawnShrineData"
description: "Asset with the settings for one respawn shrine: id, fuel type and use, spawn and beacon positions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnShrineData

A **class** in `Root.Township`, `ATT.Respawn`.

Asset with the settings for one respawn shrine: id, fuel type and use, spawn and beacon positions. Looked up by shrine id through `RespawnSystemSettings`.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `ScriptableObject`, [`IRespawnShrineSettings`](/mod/game-api/types/game-other-namespaces/irespawnshrinesettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnShrineData()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-beaconposition" /><code>{"private Vector3 beaconPosition"}</code> | <span className="api-desc">Backing field for `BeaconPosition`.</span> |
| <Link id="m-beaconprefabdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" beaconPrefabDefinition"}</code> | <span className="api-desc">Backing field for `BeaconPrefabDefinition`.</span> |
| <Link id="m-fuelconsumedperhour" /><code>{"private float fuelConsumedPerHour"}</code> | <span className="api-desc">Backing field for `FuelConsumedPerHour`.</span> |
| <Link id="m-guid" /><code>{"private string guid"}</code> | <span className="api-desc">Shrine id as a string, set in the inspector.</span> |
| <Link id="m-isglobalrespawnshrine" /><code>{"private bool isGlobalRespawnShrine"}</code> | <span className="api-desc">Backing field for `IsGlobalRespawnShrine`.</span> |
| <Link id="m-maximumfuelcapacity" /><code>{"private int maximumFuelCapacity"}</code> | <span className="api-desc">Backing field for `MaxFuelCapacity`.</span> |
| <Link id="m-resourcetype" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" resourceType"}</code> | <span className="api-desc">Backing field for `ResourceType`.</span> |
| <Link id="m-shrineid" /><code>{"private Guid shrineId"}</code> | <span className="api-desc">Cached parsed value of `guid`.</span> |
| <Link id="m-spawnposition" /><code>{"private Vector3 spawnPosition"}</code> | <span className="api-desc">Backing field for `SpawnPosition`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-beaconposition-2" /><code>{"Vector3 BeaconPosition { get; }"}</code> | <span className="api-desc">World position where the shrine's beacon view is shown.</span> |
| <Link id="m-beaconprefabdefinition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" BeaconPrefabDefinition { get; }"}</code> | <span className="api-desc">Pooled prefab for the beacon view. Not spawned for the global shrine.</span> |
| <Link id="m-fuelconsumedperhour-2" /><code>{"float FuelConsumedPerHour { get; }"}</code> | <span className="api-desc">Fuel the shrine burns per hour while powered.</span> |
| <Link id="m-isglobalrespawnshrine-2" /><code>{"bool IsGlobalRespawnShrine { get; }"}</code> | <span className="api-desc">True for the default shrine everyone respawns at when no powered shrine is active.</span> |
| <Link id="m-maxfuelcapacity" /><code>{"int MaxFuelCapacity { get; }"}</code> | <span className="api-desc">Most fuel the shrine holds. Zero or less means it never runs out.</span> |
| <Link id="m-resourcetype-2" /><code><Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" ResourceType { get; }"}</code> | <span className="api-desc">Dock settings for the fuel item the shrine takes.</span> |
| <Link id="m-shrineid-2" /><code>{"Guid ShrineId { get; }"}</code> | <span className="api-desc">The shrine's id, parsed from `guid` on first use and cached.</span> |
| <Link id="m-spawnposition-2" /><code>{"Vector3 SpawnPosition { get; }"}</code> | <span className="api-desc">World position players respawn at for this shrine.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getresourcetypehash" /><code>{"uint GetResourceTypeHash()"}</code> | <span className="api-desc">Prefab hash of the first item the fuel dock accepts, used when spawning fuel into the dock.</span> |

## Used in

Members of other types that take, return or hold a `RespawnShrineData`:

<div className="api-used-in">

[`GlobalRespawnShrine.shrineSettings`](/mod/game-api/types/game-other-namespaces/globalrespawnshrine#m-shrinesettings), [`RespawnSystemSettings.respawnShrineSettings`](/mod/game-api/types/game-other-namespaces/respawnsystemsettings#m-respawnshrinesettings).

</div>
