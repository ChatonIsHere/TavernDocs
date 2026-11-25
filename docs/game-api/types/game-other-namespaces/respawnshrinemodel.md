---
title: "RespawnShrineModel"
description: "class RespawnShrineModel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnShrineModel

A **class** in `Root.Township`, `ATT.Respawn`.

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

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-subscribers" /><code>{"private List<int> subscribers"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-fuel" /><code>{"float Fuel { get; private set; }"}</code> |
| <Link id="m-hasconsumedallfuel" /><code>{"bool HasConsumedAllFuel { get; private set; }"}</code> |
| <Link id="m-shrineid" /><code>{"Guid ShrineId { get; private set; }"}</code> |
| <Link id="m-subscribers-2" /><code>{"IEnumerable<int> Subscribers { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-addsubscriber" /><code>{"bool AddSubscriber(int playerId)"}</code> |
| <Link id="m-removeallsubscribers" /><code>{"void RemoveAllSubscribers()"}</code> |
| <Link id="m-removesubscriber" /><code>{"bool RemoveSubscriber(int playerId)"}</code> |
| <Link id="m-setfuel" /><code>{"void SetFuel(float value)"}</code> |
| <Link id="m-sethasconsumedallfuel" /><code>{"void SetHasConsumedAllFuel(bool isEmptied)"}</code> |

## Used in

Members of other types that take, return or hold a `RespawnShrineModel`:

[`RespawnSystemModel.respawnShrineModels`](/game-api/types/game-other-namespaces/respawnsystemmodel#m-respawnshrinemodels).
