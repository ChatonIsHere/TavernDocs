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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `ScriptableObject`, [`IRespawnShrineSettings`](/game-api/types/game-other-namespaces/irespawnshrinesettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnShrineData()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-beaconposition" /><code>{"private Vector3 beaconPosition"}</code> | Backing field for `BeaconPosition`. |
| <Link id="m-beaconprefabdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" beaconPrefabDefinition"}</code> | Backing field for `BeaconPrefabDefinition`. |
| <Link id="m-fuelconsumedperhour" /><code>{"private float fuelConsumedPerHour"}</code> | Backing field for `FuelConsumedPerHour`. |
| <Link id="m-guid" /><code>{"private string guid"}</code> | Shrine id as a string, set in the inspector. |
| <Link id="m-isglobalrespawnshrine" /><code>{"private bool isGlobalRespawnShrine"}</code> | Backing field for `IsGlobalRespawnShrine`. |
| <Link id="m-maximumfuelcapacity" /><code>{"private int maximumFuelCapacity"}</code> | Backing field for `MaxFuelCapacity`. |
| <Link id="m-resourcetype" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" resourceType"}</code> | Backing field for `ResourceType`. |
| <Link id="m-shrineid" /><code>{"private Guid shrineId"}</code> | Cached parsed value of `guid`. |
| <Link id="m-spawnposition" /><code>{"private Vector3 spawnPosition"}</code> | Backing field for `SpawnPosition`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-beaconposition-2" /><code>{"Vector3 BeaconPosition { get; }"}</code> | World position where the shrine's beacon view is shown. |
| <Link id="m-beaconprefabdefinition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" BeaconPrefabDefinition { get; }"}</code> | Pooled prefab for the beacon view. Not spawned for the global shrine. |
| <Link id="m-fuelconsumedperhour-2" /><code>{"float FuelConsumedPerHour { get; }"}</code> | Fuel the shrine burns per hour while powered. |
| <Link id="m-isglobalrespawnshrine-2" /><code>{"bool IsGlobalRespawnShrine { get; }"}</code> | True for the default shrine everyone respawns at when no powered shrine is active. |
| <Link id="m-maxfuelcapacity" /><code>{"int MaxFuelCapacity { get; }"}</code> | Most fuel the shrine holds. Zero or less means it never runs out. |
| <Link id="m-resourcetype-2" /><code><Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" ResourceType { get; }"}</code> | Dock settings for the fuel item the shrine takes. |
| <Link id="m-shrineid-2" /><code>{"Guid ShrineId { get; }"}</code> | The shrine's id, parsed from `guid` on first use and cached. |
| <Link id="m-spawnposition-2" /><code>{"Vector3 SpawnPosition { get; }"}</code> | World position players respawn at for this shrine. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getresourcetypehash" /><code>{"uint GetResourceTypeHash()"}</code> | Prefab hash of the first item the fuel dock accepts, used when spawning fuel into the dock. |

## Used in

Members of other types that take, return or hold a `RespawnShrineData`:

[`GlobalRespawnShrine.shrineSettings`](/game-api/types/game-other-namespaces/globalrespawnshrine#m-shrinesettings), [`RespawnSystemSettings.respawnShrineSettings`](/game-api/types/game-other-namespaces/respawnsystemsettings#m-respawnshrinesettings).
