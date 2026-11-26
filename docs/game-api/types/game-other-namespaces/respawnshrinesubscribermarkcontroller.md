---
title: "RespawnShrineSubscriberMarkController"
description: "Client: shows one pooled mark per player subscribed to a respawn shrine, with a separate mark for the local player in the centre and the rest spaced in a..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnShrineSubscriberMarkController

A **class** in `Root.Township`, `ATT.Respawn`.

Client: shows one pooled mark per player subscribed to a respawn shrine, with a separate mark for the local player in the centre and the rest spaced in a circle.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RespawnShrineSubscriberMarkController()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-subscribermarkrotator" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/rotator">{"Rotator"}</Link>{" subscriberMarkRotator"}</code> | Rotating parent the marks are spawned under. |
| <Link id="m-subscribermarks" /><code>{"private List<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> subscriberMarks"}</code> | The marks spawned now, released on the next update. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-systemsettings" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/irespawnsystemsettings">{"IRespawnSystemSettings"}</Link>{" SystemSettings { get; }"}</code> | The global `RespawnSystemSettings`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canrefreshsubscribermarks" /><code>{"bool CanRefreshSubscriberMarks()"}</code> | True on clients when the settings say to update marks on player join and leave. |
| <Link id="m-updatesubscribermarks" /><code>{"void UpdateSubscriberMarks(int numberOfSubscribers, bool isSubscribedToShrine)"}</code> | Client: releases the old marks and spawns new ones for the subscriber count. Does nothing on a remote server. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Creates the mark list if needed. |
| <Link id="m-calculateorbposition" /><code>{"private Vector3 CalculateOrbPosition(float spawnAngle, float distanceFromCentre)"}</code> | Returns a point on a circle around the centre at the given angle and distance. |
| <Link id="m-calculatesubscribermarkpositions" /><code>{"private Vector3[] CalculateSubscriberMarkPositions(int numberOfSubscribers, float angleBetweenMarks)"}</code> | Returns evenly spaced circle positions for the remote subscriber marks. |

</details>

## Used in

Members of other types that take, return or hold a `RespawnShrineSubscriberMarkController`:

[`PoweredRespawnShrine.subscriberMarkController`](/game-api/types/game-other-namespaces/poweredrespawnshrine#m-subscribermarkcontroller).
