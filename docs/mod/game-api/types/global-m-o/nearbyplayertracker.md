---
title: "NearbyPlayerTracker"
description: "Server-side component that watches one player and fires events when their head enters or leaves a radius around it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NearbyPlayerTracker

A **class** in `Root.Township`, the global namespace.

Server-side component that watches one player and fires events when their head enters or leaves a radius around it. Starts disabled until `Track` is called.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NearbyPlayerTracker()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enteredradius" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" enteredRadius"}</code> | <span className="api-desc">Event fired when the player comes within the radius.</span> |
| <Link id="m-isfirst" /><code>{"private bool isFirst"}</code> | <span className="api-desc">Unused.</span> |
| <Link id="m-leftradius" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" leftRadius"}</code> | <span className="api-desc">Event fired when the player leaves the radius or is destroyed.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player"}</code> | <span className="api-desc">The player being tracked.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Distance from this object to the player's head that counts as near.</span> |
| <Link id="m-stoppedtracking" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" stoppedTracking"}</code> | <span className="api-desc">Event fired when tracking stops.</span> |
| <Link id="m-waswithin" /><code>{"private bool wasWithin"}</code> | <span className="api-desc">Whether the player was inside on the last check.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-stoptracking" /><code>{"void StopTracking()"}</code> | <span className="api-desc">Fires `stoppedTracking`, unhooks the player's destroy events and disables the component.</span> |
| <Link id="m-track" /><code>{"void Track("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: starts tracking a player, fires entered or left at once, and watches for them being destroyed.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Disables the component until tracking starts.</span> |
| <Link id="m-checkwithin" /><code>{"private void CheckWithin(bool isForced)"}</code> | <span className="api-desc">Checks the player's head distance and fires entered or left when it changes (or always when forced).</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Checks the distance each frame while tracking.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops tracking if a player is set.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the radius.</span> |
| <Link id="m-playerdestroyed" /><code>{"private void PlayerDestroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Fires the left event when the player or their body is destroyed.</span> |

</details>
