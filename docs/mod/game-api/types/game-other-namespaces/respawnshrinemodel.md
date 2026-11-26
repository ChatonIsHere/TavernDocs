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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IRespawnShrineModel`](/mod/game-api/types/game-other-namespaces/irespawnshrinemodel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnShrineModel(Guid newShrineId)"}</code> | <span className="api-desc">Creates a `RespawnShrineModel` with default values.</span> |
| <Link id="m-ctor-2" /><code>{"RespawnShrineModel()"}</code> | <span className="api-desc">Creates a `RespawnShrineModel` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-subscribers" /><code>{"private List<int> subscribers"}</code> | <span className="api-desc">Backing list for `Subscribers`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fuel" /><code>{"float Fuel { get; private set; }"}</code> | <span className="api-desc">Fuel left in the shrine.</span> |
| <Link id="m-hasconsumedallfuel" /><code>{"bool HasConsumedAllFuel { get; private set; }"}</code> | <span className="api-desc">True once the shrine has used up all its fuel.</span> |
| <Link id="m-shrineid" /><code>{"Guid ShrineId { get; private set; }"}</code> | <span className="api-desc">The shrine's GUID, matching its shrine settings.</span> |
| <Link id="m-subscribers-2" /><code>{"IEnumerable<int> Subscribers { get; }"}</code> | <span className="api-desc">User ids of players whose respawn point is this shrine.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addsubscriber" /><code>{"bool AddSubscriber(int playerId)"}</code> | <span className="api-desc">Adds a player id as a subscriber. Returns false and logs an error if already subscribed.</span> |
| <Link id="m-removeallsubscribers" /><code>{"void RemoveAllSubscribers()"}</code> | <span className="api-desc">Removes every subscriber.</span> |
| <Link id="m-removesubscriber" /><code>{"bool RemoveSubscriber(int playerId)"}</code> | <span className="api-desc">Removes a player id from the subscribers. Returns false if it was not there.</span> |
| <Link id="m-setfuel" /><code>{"void SetFuel(float value)"}</code> | <span className="api-desc">Sets the fuel value.</span> |
| <Link id="m-sethasconsumedallfuel" /><code>{"void SetHasConsumedAllFuel(bool isEmptied)"}</code> | <span className="api-desc">Sets `HasConsumedAllFuel`.</span> |

## Used in

Members of other types that take, return or hold a `RespawnShrineModel`:

<div className="api-used-in">

[`RespawnSystemModel.respawnShrineModels`](/mod/game-api/types/game-other-namespaces/respawnsystemmodel#m-respawnshrinemodels).

</div>
