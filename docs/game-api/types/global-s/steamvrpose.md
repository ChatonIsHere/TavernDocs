---
title: "SteamVRPose"
description: "class SteamVRPose in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteamVRPose

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SteamVRPose(SteamVR_TrackedObject.EIndex index)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"private int index"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-index-2" /><code>{"SteamVR_TrackedObject.EIndex Index { get; private set; }"}</code> |  |
| <Link id="m-isconnected" /><code>{"bool IsConnected { get; private set; }"}</code> |  |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; set; }"}</code> |  |
| <Link id="m-isreserved" /><code>{"bool IsReserved { get; set; }"}</code> |  |
| <Link id="m-position" /><code>{"Vector3 Position { get; private set; }"}</code> |  |
| <Link id="m-rotation" /><code>{"Quaternion Rotation { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event "}<Link to="/game-api/types/global-p/posechangedhandler">{"PoseChangedHandler"}</Link>{" Changed"}</code> |  |
| <Link id="m-connected" /><code>{"event Action Connected"}</code> |  |
| <Link id="m-disconnected" /><code>{"event Action Disconnected"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleupdate" /><code>{"void HandleUpdate(Vector3 localPosition, Quaternion localRotation)"}</code> |  |
| <Link id="m-handleupdate-2" /><code>{"void HandleUpdate(TrackedDevicePose_t[] poses)"}</code> |  |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected()"}</code> |  |
| <Link id="m-onconnected" /><code>{"private void OnConnected()"}</code> |  |

## Used in

Members of other types that take, return or hold a `SteamVRPose`:

[`PoseChangedHandler.BeginInvoke`](/game-api/types/global-p/posechangedhandler#m-begininvoke), [`PoseChangedHandler.Invoke`](/game-api/types/global-p/posechangedhandler#m-invoke), [`SteamVRDeviceLifecycle.foundControllers`](/game-api/types/global-s/steamvrdevicelifecycle#m-foundcontrollers), [`SteamVRDeviceLifecycle.GetPose`](/game-api/types/global-s/steamvrdevicelifecycle#m-getpose), [`SteamVRDeviceLifecycle.poses`](/game-api/types/global-s/steamvrdevicelifecycle#m-poses).
