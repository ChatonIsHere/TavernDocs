---
title: "NearbyPlayerTracker"
description: "class NearbyPlayerTracker in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NearbyPlayerTracker

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NearbyPlayerTracker()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-enteredradius" /><code>{"private "}<Link to="/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" enteredRadius"}</code> |
| <Link id="m-isfirst" /><code>{"private bool isFirst"}</code> |
| <Link id="m-leftradius" /><code>{"private "}<Link to="/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" leftRadius"}</code> |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player"}</code> |
| <Link id="m-radius" /><code>{"private float radius"}</code> |
| <Link id="m-stoppedtracking" /><code>{"private "}<Link to="/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" stoppedTracking"}</code> |
| <Link id="m-waswithin" /><code>{"private bool wasWithin"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-stoptracking" /><code>{"void StopTracking()"}</code> |
| <Link id="m-track" /><code>{"void Track("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-checkwithin" /><code>{"private void CheckWithin(bool isForced)"}</code> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-playerdestroyed" /><code>{"private void PlayerDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |

</details>
