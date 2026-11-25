---
title: "PlayerVisionComfort"
description: "class PlayerVisionComfort in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerVisionComfort

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerVisionComfort("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller, "}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice, IPostProcessController postProcessController)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-confortspeed" /><code>{"private float confortSpeed"}</code> |  |
| <Link id="m-controller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller"}</code> |  |
| <Link id="m-currentcomfort" /><code>{"private float currentComfort"}</code> |  |
| <Link id="m-hasbeenmoved" /><code>{"private bool hasBeenMoved"}</code> |  |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> |  |
| <Link id="m-maxconfortintensity" /><code>{"private float maxConfortIntensity"}</code> |  |
| <Link id="m-platformdevice" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice"}</code> |  |
| <Link id="m-postprocesscontroller" /><code>{"private readonly IPostProcessController postProcessController"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/global-p/playervisioncomfortsettings">{"PlayerVisionComfortSettings"}</Link>{" settings"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |
| <Link id="m-wasmoved" /><code>{"private bool wasMoved"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |  |
| <Link id="m-onpostprocessvaluesreset" /><code>{"private void OnPostProcessValuesReset()"}</code> |  |
| <Link id="m-updatebasedonsettings" /><code>{"private void UpdateBasedOnSettings(Settings settings)"}</code> |  |
| <Link id="m-updatecomfort" /><code>{"private void UpdateComfort()"}</code> |  |
| <Link id="m-updatefov" /><code>{"private void UpdateFOV()"}</code> |  |
| <Link id="m-updatemoved" /><code>{"private void UpdateMoved()"}</code> |  |
| <Link id="m-updatesettings" /><code>{"private void UpdateSettings("}<Link to="/game-api/types/global-m-o/movementconfortstrength">{"MovementConfortStrength"}</Link>{" comfortLevel)"}</code> |  |
| <Link id="m-updatesettings-2" /><code>{"private void UpdateSettings("}<Link to="/game-api/types/global-m-o/movementconfortspeed">{"MovementConfortSpeed"}</Link>{" confortSpeed)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerVisionComfort`:

[`VRPlayerController.visionComfort`](/game-api/types/global-t-x/vrplayercontroller#m-visioncomfort).
