---
title: "HandyCameraManager.PlayerCameraHandler"
description: "class HandyCameraManager.PlayerCameraHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandyCameraManager.PlayerCameraHandler

A **private class** in `Root.Township`, `Alta.ScreenshotCamera`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Nested in** [`HandyCameraManager`](/game-api/types/alta-customization/handycameramanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerCameraHandler("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, float maxDistanceSquared, float timeToDespawn, float outOfRangeHaptic, Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> destroyCamera)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-destroycamera" /><code>{"private Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> destroyCamera"}</code> |  |
| <Link id="m-maxdistancesquared" /><code>{"private float maxDistanceSquared"}</code> |  |
| <Link id="m-outofrangehaptic" /><code>{"private float outOfRangeHaptic"}</code> |  |
| <Link id="m-timer" /><code>{"private float timer"}</code> |  |
| <Link id="m-timetodespawn" /><code>{"private float timeToDespawn"}</code> |  |
| <Link id="m-updatedistance" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateDistance"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-camera" /><code><Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" Camera { get; }"}</code> |  |
| <Link id="m-player" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Player { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |  |
| <Link id="m-playerdestroyed" /><code>{"private void PlayerDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-updatedistance-2" /><code>{"private void UpdateDistance()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerCameraHandler`:

[`HandyCameraManager.playersCameras`](/game-api/types/alta-customization/handycameramanager#m-playerscameras).
