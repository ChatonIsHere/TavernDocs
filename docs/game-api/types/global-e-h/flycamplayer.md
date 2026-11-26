---
title: "FlyCamPlayer"
description: "A keyboard-and-mouse fly camera that acts as a player controller (for spectating or filming)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlyCamPlayer

A **class** in `Root.Township`, no namespace.

A keyboard-and-mouse fly camera that acts as a player controller (for spectating or filming). It can hide itself from other players.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`PlayerController`](/game-api/types/global-p/playercontroller), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FlyCamPlayer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-onvisibilitychanged" /><code>{"Action<bool> OnVisibilityChanged"}</code> | Called when the camera is shown or hidden to others. |

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cameratoenableforlocal" /><code>{"private GameObject cameraToEnableForLocal"}</code> | Camera object turned on only for the local player. |
| <Link id="m-cinematiclerp" /><code>{"private float cinematicLerp"}</code> | Lerp factor for cinematic movement. |
| <Link id="m-cinematicstoplerp" /><code>{"private float cinematicStopLerp"}</code> | Lerp factor used when cinematic movement stops. |
| <Link id="m-climbspeed" /><code>{"private float climbSpeed"}</code> | Vertical move speed. |
| <Link id="m-currentsensitivity" /><code>{"private int currentSensitivity"}</code> | Backing field for `CurrentSensitivity`, an index into `sensibilityLevels`. |
| <Link id="m-eyefocuscontroller" /><code>{"private "}<Link to="/game-api/types/alta-player/eyefocuscontroller">{"EyeFocusController"}</Link>{" eyeFocusController"}</code> | Eye focus controller on the fly cam. |
| <Link id="m-fastmovefactor" /><code>{"private float fastMoveFactor"}</code> | Speed multiplier for fast movement. |
| <Link id="m-normalmovespeed" /><code>{"private float normalMoveSpeed"}</code> | Base move speed. |
| <Link id="m-renderergroup" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" rendererGroup"}</code> | Renderers turned on or off by `UpdateVisibility`. Not set on a headless server. |
| <Link id="m-sensibilitylevels" /><code>{"private float[] sensibilityLevels"}</code> | Camera sensitivity options; the middle one is the default. |
| <Link id="m-slowmovefactor" /><code>{"private float slowMoveFactor"}</code> | Speed multiplier for slow movement. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-camerasensitivity" /><code>{"float CameraSensitivity { get; }"}</code> | Look speed at the current sensitivity level (120, 90 or 45 by default). |
| <Link id="m-cinematiclerp-2" /><code>{"float CinematicLerp { get; }"}</code> | Smoothing amount while moving in cinematic mode. |
| <Link id="m-cinematiclerpstop" /><code>{"float CinematicLerpStop { get; }"}</code> | Smoothing amount when stopping in cinematic mode. |
| <Link id="m-climbspeed-2" /><code>{"float ClimbSpeed { get; }"}</code> | Up and down speed. |
| <Link id="m-currentsensitivity-2" /><code>{"int CurrentSensitivity { get; set; }"}</code> | Index into the sensitivity levels, clamped. Starts in the middle. |
| <Link id="m-fastmovefactor-2" /><code>{"float FastMoveFactor { get; }"}</code> | Speed multiplier when moving fast. |
| <Link id="m-head" /><code>{"override Transform Head { get; }"}</code> | The camera's transform. |
| <Link id="m-headfollow" /><code>{"override Transform HeadFollow { get; }"}</code> | The fly cam's own transform. |
| <Link id="m-iscinematicmovement" /><code>{"bool IsCinematicMovement { get; set; }"}</code> | Whether smoothed cinematic movement is on. |
| <Link id="m-isshowingname" /><code>{"override bool IsShowingName { get; }"}</code> | Shows its name only while visible. |
| <Link id="m-isvisible" /><code>{"bool IsVisible { get; private set; }"}</code> | Whether the fly cam's renderers are shown. |
| <Link id="m-normalmovespeed-2" /><code>{"float NormalMoveSpeed { get; }"}</code> | Base move speed. |
| <Link id="m-slowmovefactor-2" /><code>{"float SlowMoveFactor { get; }"}</code> | Speed multiplier when moving slowly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatevisibility" /><code>{"void UpdateVisibility(bool isVisible)"}</code> | Shows or hides the fly cam's renderers (not on headless) and raises the change. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Marks it alive, sets the middle sensitivity and hooks linking to the local player. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Hides the cursor again if this was the local player. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onlinkedtoplayer" /><code>{"private void OnLinkedToPlayer()"}</code> | When this is the local player, turns on its camera and shows the cursor. |

</details>

## Used in

Members of other types that take, return or hold a `FlyCamPlayer`:

[`PlayerControllerPrefabs.flyCamPlayer`](/game-api/types/game-other-namespaces/playercontrollerprefabs#m-flycamplayer), [`FlyCamHands.flyCam`](/game-api/types/global-e-h/flycamhands#m-flycam), [`FlyCamLocomotionController.PlayerController`](/game-api/types/global-e-h/flycamlocomotioncontroller#m-playercontroller).
