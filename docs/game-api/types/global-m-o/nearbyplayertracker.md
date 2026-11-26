---
title: "NearbyPlayerTracker"
description: "Server-side component that watches one player and fires events when their head enters or leaves a radius around it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NearbyPlayerTracker

A **class** in `Root.Township`, no namespace.

Server-side component that watches one player and fires events when their head enters or leaves a radius around it. Starts disabled until `Track` is called.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NearbyPlayerTracker()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enteredradius" /><code>{"private "}<Link to="/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" enteredRadius"}</code> | Event fired when the player comes within the radius. |
| <Link id="m-isfirst" /><code>{"private bool isFirst"}</code> | Unused. |
| <Link id="m-leftradius" /><code>{"private "}<Link to="/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" leftRadius"}</code> | Event fired when the player leaves the radius or is destroyed. |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player"}</code> | The player being tracked. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Distance from this object to the player's head that counts as near. |
| <Link id="m-stoppedtracking" /><code>{"private "}<Link to="/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" stoppedTracking"}</code> | Event fired when tracking stops. |
| <Link id="m-waswithin" /><code>{"private bool wasWithin"}</code> | Whether the player was inside on the last check. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-stoptracking" /><code>{"void StopTracking()"}</code> | Fires `stoppedTracking`, unhooks the player's destroy events and disables the component. |
| <Link id="m-track" /><code>{"void Track("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: starts tracking a player, fires entered or left at once, and watches for them being destroyed. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Disables the component until tracking starts. |
| <Link id="m-checkwithin" /><code>{"private void CheckWithin(bool isForced)"}</code> | Checks the player's head distance and fires entered or left when it changes (or always when forced). |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Checks the distance each frame while tracking. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops tracking if a player is set. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the radius. |
| <Link id="m-playerdestroyed" /><code>{"private void PlayerDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Fires the left event when the player or their body is destroyed. |

</details>
