---
title: "PlayerInPositionObserver"
description: "Placed in a step's dynamic content."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerInPositionObserver

A **class** in `Root.Township`, `ATT.MicroTutorial.Steps`.

Placed in a step's dynamic content. Server: polls the domain's player and broadcasts `PlayerInPositionEvent` once their feet are within range.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerInPositionObserver()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distancethreshold" /><code>{"private float distanceThreshold"}</code> | Distance in metres that counts as in position. Defaults to 3. |
| <Link id="m-domain" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" domain"}</code> | The tutorial domain this observer is in. |
| <Link id="m-issearching" /><code>{"private bool isSearching"}</code> | Whether the polling loop is running. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Class logger. |
| <Link id="m-searchintervalseconds" /><code>{"private int searchIntervalSeconds"}</code> | Seconds between checks. Defaults to 1. |
| <Link id="m-targetplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" targetPlayer"}</code> | The domain's player being watched. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Server: stops the polling loop. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws the trigger radius in the editor. |
| <Link id="m-searchforplayerinrange" /><code>{"private async void SearchForPlayerInRange()"}</code> | Every `searchIntervalSeconds`, checks the player's feet distance and broadcasts the event once in range, then stops. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Server: finds the parent `Domain`, takes its player and starts searching. Logs an error outside a domain. |
| <Link id="m-stopsearching" /><code>{"private void StopSearching()"}</code> | Ends the polling loop. |

</details>
