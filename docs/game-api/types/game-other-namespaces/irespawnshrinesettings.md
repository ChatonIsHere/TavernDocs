---
title: "IRespawnShrineSettings"
description: "interface IRespawnShrineSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRespawnShrineSettings

An **interface** in `Root.Township`, `ATT.Respawn`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Derived types** [`IRespawnSystemSettings`](/game-api/types/game-other-namespaces/irespawnsystemsettings), [`RespawnShrineData`](/game-api/types/game-other-namespaces/respawnshrinedata), [`RespawnSystemSettings`](/game-api/types/game-other-namespaces/respawnsystemsettings)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-beaconposition" /><code>{"Vector3 BeaconPosition { get; }"}</code> |  |
| <Link id="m-beaconprefabdefinition" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" BeaconPrefabDefinition { get; }"}</code> |  |
| <Link id="m-fuelconsumedperhour" /><code>{"float FuelConsumedPerHour { get; }"}</code> |  |
| <Link id="m-isglobalrespawnshrine" /><code>{"bool IsGlobalRespawnShrine { get; }"}</code> |  |
| <Link id="m-maxfuelcapacity" /><code>{"int MaxFuelCapacity { get; }"}</code> |  |
| <Link id="m-resourcetype" /><code><Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" ResourceType { get; }"}</code> |  |
| <Link id="m-shrineid" /><code>{"Guid ShrineId { get; }"}</code> |  |
| <Link id="m-spawnposition" /><code>{"Vector3 SpawnPosition { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getresourcetypehash" /><code>{"uint GetResourceTypeHash()"}</code> |  |

## Used in

Members of other types that take, return or hold a `IRespawnShrineSettings`:

[`IRespawnSystemSettings.GetShrineSettings`](/game-api/types/game-other-namespaces/irespawnsystemsettings#m-getshrinesettings), [`IRespawnSystemSettings.Item`](/game-api/types/game-other-namespaces/irespawnsystemsettings#m-item), [`PoweredRespawnShrine.shrineSettings`](/game-api/types/game-other-namespaces/poweredrespawnshrine#m-shrinesettings), [`RespawnSystemSettings.GetEnumerator`](/game-api/types/game-other-namespaces/respawnsystemsettings#m-getenumerator), [`RespawnSystemSettings.GetShrineSettings`](/game-api/types/game-other-namespaces/respawnsystemsettings#m-getshrinesettings), [`RespawnSystemSettings.Item`](/game-api/types/game-other-namespaces/respawnsystemsettings#m-item).
