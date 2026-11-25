---
title: "IRespawnShrineModel"
description: "interface IRespawnShrineModel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRespawnShrineModel

An **interface** in `Root.Township`, `ATT.Respawn`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Derived types** [`IRespawnSystemModel`](/game-api/types/game-other-namespaces/irespawnsystemmodel), [`RespawnShrineModel`](/game-api/types/game-other-namespaces/respawnshrinemodel), [`RespawnSystemModel`](/game-api/types/game-other-namespaces/respawnsystemmodel)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fuel" /><code>{"float Fuel { get; }"}</code> |  |
| <Link id="m-hasconsumedallfuel" /><code>{"bool HasConsumedAllFuel { get; }"}</code> |  |
| <Link id="m-shrineid" /><code>{"Guid ShrineId { get; }"}</code> |  |
| <Link id="m-subscribers" /><code>{"IEnumerable<int> Subscribers { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addsubscriber" /><code>{"bool AddSubscriber(int playerId)"}</code> |  |
| <Link id="m-removeallsubscribers" /><code>{"void RemoveAllSubscribers()"}</code> |  |
| <Link id="m-removesubscriber" /><code>{"bool RemoveSubscriber(int playerId)"}</code> |  |
| <Link id="m-setfuel" /><code>{"void SetFuel(float value)"}</code> |  |
| <Link id="m-sethasconsumedallfuel" /><code>{"void SetHasConsumedAllFuel(bool isEmptied)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IRespawnShrineModel`:

[`IRespawnBeaconView.OnModelChanged`](/game-api/types/game-other-namespaces/irespawnbeaconview#m-onmodelchanged), [`IRespawnSystemModel.Item`](/game-api/types/game-other-namespaces/irespawnsystemmodel#m-item), [`RespawnBeaconView.OnModelChanged`](/game-api/types/game-other-namespaces/respawnbeaconview#m-onmodelchanged), [`RespawnSystemModel.GetEnumerator`](/game-api/types/game-other-namespaces/respawnsystemmodel#m-getenumerator), [`RespawnSystemModel.Item`](/game-api/types/game-other-namespaces/respawnsystemmodel#m-item).
