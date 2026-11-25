---
title: "RespawnShrineSubscriberMarkController"
description: "class RespawnShrineSubscriberMarkController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnShrineSubscriberMarkController

A **class** in `Root.Township`, `ATT.Respawn`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnShrineSubscriberMarkController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-subscribermarkrotator" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/rotator">{"Rotator"}</Link>{" subscriberMarkRotator"}</code> |  |
| <Link id="m-subscribermarks" /><code>{"private List<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> subscriberMarks"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-systemsettings" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/irespawnsystemsettings">{"IRespawnSystemSettings"}</Link>{" SystemSettings { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canrefreshsubscribermarks" /><code>{"bool CanRefreshSubscriberMarks()"}</code> |  |
| <Link id="m-updatesubscribermarks" /><code>{"void UpdateSubscriberMarks(int numberOfSubscribers, bool isSubscribedToShrine)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-calculateorbposition" /><code>{"private Vector3 CalculateOrbPosition(float spawnAngle, float distanceFromCentre)"}</code> |  |
| <Link id="m-calculatesubscribermarkpositions" /><code>{"private Vector3[] CalculateSubscriberMarkPositions(int numberOfSubscribers, float angleBetweenMarks)"}</code> |  |

## Used in

Members of other types that take, return or hold a `RespawnShrineSubscriberMarkController`:

[`PoweredRespawnShrine.subscriberMarkController`](/game-api/types/game-other-namespaces/poweredrespawnshrine#m-subscribermarkcontroller).
