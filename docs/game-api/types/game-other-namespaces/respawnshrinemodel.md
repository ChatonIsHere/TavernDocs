---
title: "RespawnShrineModel"
description: "Data for one respawn shrine in the respawn system model: its id, fuel, empty flag and the ids of players who respawn there."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnShrineModel

A **class** in `Root.Township`, `ATT.Respawn`.

Data for one respawn shrine in the respawn system model: its id, fuel, empty flag and the ids of players who respawn there. Serialised with Newtonsoft JSON.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IRespawnShrineModel`](/game-api/types/game-other-namespaces/irespawnshrinemodel)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RespawnShrineModel(Guid newShrineId)"}</code> |
| <Link id="m-ctor-2" /><code>{"RespawnShrineModel()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-subscribers" /><code>{"private List<int> subscribers"}</code> | Backing list for `Subscribers`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fuel" /><code>{"float Fuel { get; private set; }"}</code> | Fuel left in the shrine. |
| <Link id="m-hasconsumedallfuel" /><code>{"bool HasConsumedAllFuel { get; private set; }"}</code> | True once the shrine has used up all its fuel. |
| <Link id="m-shrineid" /><code>{"Guid ShrineId { get; private set; }"}</code> | The shrine's GUID, matching its shrine settings. |
| <Link id="m-subscribers-2" /><code>{"IEnumerable<int> Subscribers { get; }"}</code> | User ids of players whose respawn point is this shrine. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addsubscriber" /><code>{"bool AddSubscriber(int playerId)"}</code> | Adds a player id as a subscriber. Returns false and logs an error if already subscribed. |
| <Link id="m-removeallsubscribers" /><code>{"void RemoveAllSubscribers()"}</code> | Removes every subscriber. |
| <Link id="m-removesubscriber" /><code>{"bool RemoveSubscriber(int playerId)"}</code> | Removes a player id from the subscribers. Returns false if it was not there. |
| <Link id="m-setfuel" /><code>{"void SetFuel(float value)"}</code> | Sets the fuel value. |
| <Link id="m-sethasconsumedallfuel" /><code>{"void SetHasConsumedAllFuel(bool isEmptied)"}</code> | Sets `HasConsumedAllFuel`. |

## Used in

Members of other types that take, return or hold a `RespawnShrineModel`:

[`RespawnSystemModel.respawnShrineModels`](/game-api/types/game-other-namespaces/respawnsystemmodel#m-respawnshrinemodels).
