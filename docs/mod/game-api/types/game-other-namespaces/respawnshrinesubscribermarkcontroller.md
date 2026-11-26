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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnShrineSubscriberMarkController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-subscribermarkrotator" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/rotator">{"Rotator"}</Link>{" subscriberMarkRotator"}</code> | <span className="api-desc">Rotating parent the marks are spawned under.</span> |
| <Link id="m-subscribermarks" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> subscriberMarks"}</code> | <span className="api-desc">The marks spawned now, released on the next update.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-systemsettings" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemsettings">{"IRespawnSystemSettings"}</Link>{" SystemSettings { get; }"}</code> | <span className="api-desc">The global `RespawnSystemSettings`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canrefreshsubscribermarks" /><code>{"bool CanRefreshSubscriberMarks()"}</code> | <span className="api-desc">True on clients when the settings say to update marks on player join and leave.</span> |
| <Link id="m-updatesubscribermarks" /><code>{"void UpdateSubscriberMarks(int numberOfSubscribers, bool isSubscribedToShrine)"}</code> | <span className="api-desc">Client: releases the old marks and spawns new ones for the subscriber count. Does nothing on a remote server.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Creates the mark list if needed.</span> |
| <Link id="m-calculateorbposition" /><code>{"private Vector3 CalculateOrbPosition(float spawnAngle, float distanceFromCentre)"}</code> | <span className="api-desc">Returns a point on a circle around the centre at the given angle and distance.</span> |
| <Link id="m-calculatesubscribermarkpositions" /><code>{"private Vector3[] CalculateSubscriberMarkPositions(int numberOfSubscribers, float angleBetweenMarks)"}</code> | <span className="api-desc">Returns evenly spaced circle positions for the remote subscriber marks.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RespawnShrineSubscriberMarkController`:

<div className="api-used-in">

[`PoweredRespawnShrine.subscriberMarkController`](/mod/game-api/types/game-other-namespaces/poweredrespawnshrine#m-subscribermarkcontroller).

</div>
