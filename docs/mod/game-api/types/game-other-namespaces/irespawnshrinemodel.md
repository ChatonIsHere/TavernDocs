---
title: "IRespawnShrineModel"
description: "Saved state of one respawn shrine: fuel left and the players who use it as their spawn point."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRespawnShrineModel

An **interface** in `Root.Township`, `ATT.Respawn`.

Saved state of one respawn shrine: fuel left and the players who use it as their spawn point.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Derived types** [`IRespawnSystemModel`](/mod/game-api/types/game-other-namespaces/irespawnsystemmodel), [`RespawnShrineModel`](/mod/game-api/types/game-other-namespaces/respawnshrinemodel), [`RespawnSystemModel`](/mod/game-api/types/game-other-namespaces/respawnsystemmodel)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fuel" /><code>{"float Fuel { get; }"}</code> | <span className="api-desc">Fuel currently in the shrine.</span> |
| <Link id="m-hasconsumedallfuel" /><code>{"bool HasConsumedAllFuel { get; }"}</code> | <span className="api-desc">True once the fuel has run out.</span> |
| <Link id="m-shrineid" /><code>{"Guid ShrineId { get; }"}</code> | <span className="api-desc">Id of the shrine this model belongs to.</span> |
| <Link id="m-subscribers" /><code>{"IEnumerable<int> Subscribers { get; }"}</code> | <span className="api-desc">Ids of players linked to the shrine, probably as their respawn point.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addsubscriber" /><code>{"bool AddSubscriber(int playerId)"}</code> | <span className="api-desc">Links a player id. False if it was already linked, probably.</span> |
| <Link id="m-removeallsubscribers" /><code>{"void RemoveAllSubscribers()"}</code> | <span className="api-desc">Unlinks every player.</span> |
| <Link id="m-removesubscriber" /><code>{"bool RemoveSubscriber(int playerId)"}</code> | <span className="api-desc">Unlinks a player id. False if it wasn't linked, probably.</span> |
| <Link id="m-setfuel" /><code>{"void SetFuel(float value)"}</code> | <span className="api-desc">Sets the fuel amount.</span> |
| <Link id="m-sethasconsumedallfuel" /><code>{"void SetHasConsumedAllFuel(bool isEmptied)"}</code> | <span className="api-desc">Sets whether the fuel has run out.</span> |

## Used in

Members of other types that take, return or hold a `IRespawnShrineModel`:

<div className="api-used-in">

[`IRespawnBeaconView.OnModelChanged`](/mod/game-api/types/game-other-namespaces/irespawnbeaconview#m-onmodelchanged), [`IRespawnSystemModel.Item`](/mod/game-api/types/game-other-namespaces/irespawnsystemmodel#m-item), [`RespawnBeaconView.OnModelChanged`](/mod/game-api/types/game-other-namespaces/respawnbeaconview#m-onmodelchanged), [`RespawnSystemModel.GetEnumerator`](/mod/game-api/types/game-other-namespaces/respawnsystemmodel#m-getenumerator), [`RespawnSystemModel.Item`](/mod/game-api/types/game-other-namespaces/respawnsystemmodel#m-item).

</div>
