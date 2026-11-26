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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Nested in** [`HandyCameraManager`](/game-api/types/alta-customization/handycameramanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerCameraHandler("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, float maxDistanceSquared, float timeToDespawn, float outOfRangeHaptic, Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> destroyCamera)"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroycamera" /><code>{"private Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> destroyCamera"}</code> | Callback that destroys this player's camera. |
| <Link id="m-maxdistancesquared" /><code>{"private float maxDistanceSquared"}</code> | Squared distance from the head beyond which the camera counts as out of range. |
| <Link id="m-outofrangehaptic" /><code>{"private float outOfRangeHaptic"}</code> | Haptic strength used while the camera is out of range. |
| <Link id="m-timer" /><code>{"private float timer"}</code> | Time left before an out of range camera is destroyed. Reset when back in range. |
| <Link id="m-timetodespawn" /><code>{"private float timeToDespawn"}</code> | Seconds out of range before the camera is destroyed. |
| <Link id="m-updatedistance" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateDistance"}</code> | Late update registration for `UpdateDistance`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-camera" /><code><Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" Camera { get; }"}</code> | The player's hand camera. |
| <Link id="m-player" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Player { get; }"}</code> | The player who owns the camera. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Unhooks the player destroyed event and stops the distance check. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playerdestroyed" /><code>{"private void PlayerDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Destroys the camera when the player's entity is destroyed. |
| <Link id="m-updatedistance-2" /><code>{"private void UpdateDistance()"}</code> | Late update: while the camera is out of range, counts down and buzzes the local player's controllers, then destroys it when time runs out. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerCameraHandler`:

[`HandyCameraManager.playersCameras`](/game-api/types/alta-customization/handycameramanager#m-playerscameras).
