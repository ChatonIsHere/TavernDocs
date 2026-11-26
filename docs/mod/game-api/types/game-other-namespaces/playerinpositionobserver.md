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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerInPositionObserver()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distancethreshold" /><code>{"private float distanceThreshold"}</code> | <span className="api-desc">Distance in metres that counts as in position. Defaults to 3.</span> |
| <Link id="m-domain" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" domain"}</code> | <span className="api-desc">The tutorial domain this observer is in.</span> |
| <Link id="m-issearching" /><code>{"private bool isSearching"}</code> | <span className="api-desc">Whether the polling loop is running.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-searchintervalseconds" /><code>{"private int searchIntervalSeconds"}</code> | <span className="api-desc">Seconds between checks. Defaults to 1.</span> |
| <Link id="m-targetplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" targetPlayer"}</code> | <span className="api-desc">The domain's player being watched.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Server: stops the polling loop.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws the trigger radius in the editor.</span> |
| <Link id="m-searchforplayerinrange" /><code>{"private async void SearchForPlayerInRange()"}</code> | <span className="api-desc">Every `searchIntervalSeconds`, checks the player's feet distance and broadcasts the event once in range, then stops.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Server: finds the parent `Domain`, takes its player and starts searching. Logs an error outside a domain.</span> |
| <Link id="m-stopsearching" /><code>{"private void StopSearching()"}</code> | <span className="api-desc">Ends the polling loop.</span> |

</details>
