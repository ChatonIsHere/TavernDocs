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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Derived types** [`IRespawnSystemModel`](/game-api/types/game-other-namespaces/irespawnsystemmodel), [`RespawnShrineModel`](/game-api/types/game-other-namespaces/respawnshrinemodel), [`RespawnSystemModel`](/game-api/types/game-other-namespaces/respawnsystemmodel)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fuel" /><code>{"float Fuel { get; }"}</code> | Fuel currently in the shrine. |
| <Link id="m-hasconsumedallfuel" /><code>{"bool HasConsumedAllFuel { get; }"}</code> | True once the fuel has run out. |
| <Link id="m-shrineid" /><code>{"Guid ShrineId { get; }"}</code> | Id of the shrine this model belongs to. |
| <Link id="m-subscribers" /><code>{"IEnumerable<int> Subscribers { get; }"}</code> | Ids of players linked to the shrine, probably as their respawn point. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addsubscriber" /><code>{"bool AddSubscriber(int playerId)"}</code> | Links a player id. False if it was already linked, probably. |
| <Link id="m-removeallsubscribers" /><code>{"void RemoveAllSubscribers()"}</code> | Unlinks every player. |
| <Link id="m-removesubscriber" /><code>{"bool RemoveSubscriber(int playerId)"}</code> | Unlinks a player id. False if it wasn't linked, probably. |
| <Link id="m-setfuel" /><code>{"void SetFuel(float value)"}</code> | Sets the fuel amount. |
| <Link id="m-sethasconsumedallfuel" /><code>{"void SetHasConsumedAllFuel(bool isEmptied)"}</code> | Sets whether the fuel has run out. |

## Used in

Members of other types that take, return or hold a `IRespawnShrineModel`:

[`IRespawnBeaconView.OnModelChanged`](/game-api/types/game-other-namespaces/irespawnbeaconview#m-onmodelchanged), [`IRespawnSystemModel.Item`](/game-api/types/game-other-namespaces/irespawnsystemmodel#m-item), [`RespawnBeaconView.OnModelChanged`](/game-api/types/game-other-namespaces/respawnbeaconview#m-onmodelchanged), [`RespawnSystemModel.GetEnumerator`](/game-api/types/game-other-namespaces/respawnsystemmodel#m-getenumerator), [`RespawnSystemModel.Item`](/game-api/types/game-other-namespaces/respawnsystemmodel#m-item).
