---
title: "PlayerVisionComfort"
description: "Client: the movement comfort vignette."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerVisionComfort

A **class** in `Root.Township`, the global namespace.

Client: the movement comfort vignette. It fades in while the player is moved artificially and fades out after, using the player's comfort settings.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerVisionComfort("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller, "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice, IPostProcessController postProcessController)"}</code> | <span className="api-desc">Creates a `PlayerVisionComfort` from `controller`, `platformDevice` and `postProcessController`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | <span className="api-desc">NLog logger for the class.</span> |

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-confortspeed" /><code>{"private float confortSpeed"}</code> | <span className="api-desc">How fast the comfort ramps up while moving.</span> |
| <Link id="m-controller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller"}</code> | <span className="api-desc">The player controller being watched.</span> |
| <Link id="m-currentcomfort" /><code>{"private float currentComfort"}</code> | <span className="api-desc">Current ramp value, from 0 to 1.</span> |
| <Link id="m-hasbeenmoved" /><code>{"private bool hasBeenMoved"}</code> | <span className="api-desc">True if the player was moved since the last update.</span> |
| <Link id="m-maxconfortintensity" /><code>{"private float maxConfortIntensity"}</code> | <span className="api-desc">Vignette strength at full comfort, from the strength setting.</span> |
| <Link id="m-platformdevice" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice"}</code> | <span className="api-desc">Device the movement FOV source is set on.</span> |
| <Link id="m-postprocesscontroller" /><code>{"private readonly IPostProcessController postProcessController"}</code> | <span className="api-desc">Post processing controller that draws the vignette.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playervisioncomfortsettings">{"PlayerVisionComfortSettings"}</Link>{" settings"}</code> | <span className="api-desc">The global vision comfort settings.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle for the late update registration.</span> |
| <Link id="m-wasmoved" /><code>{"private bool wasMoved"}</code> | <span className="api-desc">Whether the player was moved in the previous update.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Stops the update and unsubscribes from settings changes.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onpostprocessvaluesreset" /><code>{"private void OnPostProcessValuesReset()"}</code> | <span className="api-desc">Applies the comfort strength again after post processing values are reset.</span> |
| <Link id="m-updatebasedonsettings" /><code>{"private void UpdateBasedOnSettings(Settings settings)"}</code> | <span className="api-desc">Applies the comfort strength and speed from the game settings.</span> |
| <Link id="m-updatecomfort" /><code>{"private void UpdateComfort()"}</code> | <span className="api-desc">Late update: ramps the comfort up while moved and down otherwise, then sets the vignette level.</span> |
| <Link id="m-updatefov" /><code>{"private void UpdateFOV()"}</code> | <span className="api-desc">Same ramp as `UpdateComfort` but only sets the device's movement FOV source. Nothing calls it.</span> |
| <Link id="m-updatemoved" /><code>{"private void UpdateMoved()"}</code> | <span className="api-desc">Marks that the player was moved this frame. Hooked to the controller's `hasBeenMoved`.</span> |
| <Link id="m-updatesettings" /><code>{"private void UpdateSettings("}<Link to="/mod/game-api/types/global-m-o/movementconfortstrength">{"MovementConfortStrength"}</Link>{" comfortLevel)"}</code> | <span className="api-desc">Applies a comfort strength (turning the vignette on or off) or a comfort speed setting.</span> |
| <Link id="m-updatesettings-2" /><code>{"private void UpdateSettings("}<Link to="/mod/game-api/types/global-m-o/movementconfortspeed">{"MovementConfortSpeed"}</Link>{" confortSpeed)"}</code> | <span className="api-desc">Applies a comfort strength (turning the vignette on or off) or a comfort speed setting.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerVisionComfort`:

<div className="api-used-in">

[`VRPlayerController.visionComfort`](/mod/game-api/types/global-t-x/vrplayercontroller#m-visioncomfort).

</div>
