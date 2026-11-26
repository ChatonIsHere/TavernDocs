---
title: "PlayerVisionComfort"
description: "Client: the movement comfort vignette."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerVisionComfort

A **class** in `Root.Township`, no namespace.

Client: the movement comfort vignette. It fades in while the player is moved artificially and fades out after, using the player's comfort settings.

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerVisionComfort("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller, "}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice, IPostProcessController postProcessController)"}</code> | Creates a `PlayerVisionComfort` from `controller`, `platformDevice` and `postProcessController`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | NLog logger for the class. |

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-confortspeed" /><code>{"private float confortSpeed"}</code> | How fast the comfort ramps up while moving. |
| <Link id="m-controller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller"}</code> | The player controller being watched. |
| <Link id="m-currentcomfort" /><code>{"private float currentComfort"}</code> | Current ramp value, from 0 to 1. |
| <Link id="m-hasbeenmoved" /><code>{"private bool hasBeenMoved"}</code> | True if the player was moved since the last update. |
| <Link id="m-maxconfortintensity" /><code>{"private float maxConfortIntensity"}</code> | Vignette strength at full comfort, from the strength setting. |
| <Link id="m-platformdevice" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice"}</code> | Device the movement FOV source is set on. |
| <Link id="m-postprocesscontroller" /><code>{"private readonly IPostProcessController postProcessController"}</code> | Post processing controller that draws the vignette. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/global-p/playervisioncomfortsettings">{"PlayerVisionComfortSettings"}</Link>{" settings"}</code> | The global vision comfort settings. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle for the late update registration. |
| <Link id="m-wasmoved" /><code>{"private bool wasMoved"}</code> | Whether the player was moved in the previous update. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Stops the update and unsubscribes from settings changes. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onpostprocessvaluesreset" /><code>{"private void OnPostProcessValuesReset()"}</code> | Applies the comfort strength again after post processing values are reset. |
| <Link id="m-updatebasedonsettings" /><code>{"private void UpdateBasedOnSettings(Settings settings)"}</code> | Applies the comfort strength and speed from the game settings. |
| <Link id="m-updatecomfort" /><code>{"private void UpdateComfort()"}</code> | Late update: ramps the comfort up while moved and down otherwise, then sets the vignette level. |
| <Link id="m-updatefov" /><code>{"private void UpdateFOV()"}</code> | Same ramp as `UpdateComfort` but only sets the device's movement FOV source. Nothing calls it. |
| <Link id="m-updatemoved" /><code>{"private void UpdateMoved()"}</code> | Marks that the player was moved this frame. Hooked to the controller's `hasBeenMoved`. |
| <Link id="m-updatesettings" /><code>{"private void UpdateSettings("}<Link to="/game-api/types/global-m-o/movementconfortstrength">{"MovementConfortStrength"}</Link>{" comfortLevel)"}</code> | Applies a comfort strength (turning the vignette on or off) or a comfort speed setting. |
| <Link id="m-updatesettings-2" /><code>{"private void UpdateSettings("}<Link to="/game-api/types/global-m-o/movementconfortspeed">{"MovementConfortSpeed"}</Link>{" confortSpeed)"}</code> | Applies a comfort strength (turning the vignette on or off) or a comfort speed setting. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerVisionComfort`:

[`VRPlayerController.visionComfort`](/game-api/types/global-t-x/vrplayercontroller#m-visioncomfort).
