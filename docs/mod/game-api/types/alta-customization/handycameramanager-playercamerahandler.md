---
title: "HandyCameraManager.PlayerCameraHandler"
description: "Server: tracks one player's hand camera and destroys it if the player is destroyed or stays too far from it for too long."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandyCameraManager.PlayerCameraHandler

A **private class** in `Root.Township`, `Alta.ScreenshotCamera`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Server: tracks one player's hand camera and destroys it if the player is destroyed or stays too far from it for too long.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Nested in** [`HandyCameraManager`](/mod/game-api/types/alta-customization/handycameramanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerCameraHandler("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, float maxDistanceSquared, float timeToDespawn, float outOfRangeHaptic, Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> destroyCamera)"}</code> | <span className="api-desc">Creates a `HandyCameraManager.PlayerCameraHandler` from `player`, `camera`, `maxDistanceSquared`, `timeToDespawn`, `outOfRangeHaptic` and `destroyCamera`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroycamera" /><code>{"private Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> destroyCamera"}</code> | <span className="api-desc">Callback that destroys this player's camera.</span> |
| <Link id="m-maxdistancesquared" /><code>{"private float maxDistanceSquared"}</code> | <span className="api-desc">Squared distance from the head beyond which the camera counts as out of range.</span> |
| <Link id="m-outofrangehaptic" /><code>{"private float outOfRangeHaptic"}</code> | <span className="api-desc">Haptic strength used while the camera is out of range.</span> |
| <Link id="m-timer" /><code>{"private float timer"}</code> | <span className="api-desc">Time left before an out of range camera is destroyed. Reset when back in range.</span> |
| <Link id="m-timetodespawn" /><code>{"private float timeToDespawn"}</code> | <span className="api-desc">Seconds out of range before the camera is destroyed.</span> |
| <Link id="m-updatedistance" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateDistance"}</code> | <span className="api-desc">Late update registration for `UpdateDistance`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-camera" /><code><Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" Camera { get; }"}</code> | <span className="api-desc">The player's hand camera.</span> |
| <Link id="m-player" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Player { get; }"}</code> | <span className="api-desc">The player who owns the camera.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Unhooks the player destroyed event and stops the distance check.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playerdestroyed" /><code>{"private void PlayerDestroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Destroys the camera when the player's entity is destroyed.</span> |
| <Link id="m-updatedistance-2" /><code>{"private void UpdateDistance()"}</code> | <span className="api-desc">Late update: while the camera is out of range, counts down and buzzes the local player's controllers, then destroys it when time runs out.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerCameraHandler`:

<div className="api-used-in">

[`HandyCameraManager.playersCameras`](/mod/game-api/types/alta-customization/handycameramanager#m-playerscameras).

</div>
