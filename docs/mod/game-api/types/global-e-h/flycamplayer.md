---
title: "FlyCamPlayer"
description: "A keyboard-and-mouse fly camera that acts as a player controller (for spectating or filming)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlyCamPlayer

A **class** in `Root.Township`, the global namespace.

A keyboard-and-mouse fly camera that acts as a player controller (for spectating or filming). It can hide itself from other players.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`PlayerController`](/mod/game-api/types/global-p/playercontroller), [`INetworkEntityBehaviour`](/mod/game-api/types/alta-networking/inetworkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FlyCamPlayer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-onvisibilitychanged" /><code>{"Action<bool> OnVisibilityChanged"}</code> | <span className="api-desc">Called when the camera is shown or hidden to others.</span> |

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cameratoenableforlocal" /><code>{"private GameObject cameraToEnableForLocal"}</code> | <span className="api-desc">Camera object turned on only for the local player.</span> |
| <Link id="m-cinematiclerp" /><code>{"private float cinematicLerp"}</code> | <span className="api-desc">Lerp factor for cinematic movement.</span> |
| <Link id="m-cinematicstoplerp" /><code>{"private float cinematicStopLerp"}</code> | <span className="api-desc">Lerp factor used when cinematic movement stops.</span> |
| <Link id="m-climbspeed" /><code>{"private float climbSpeed"}</code> | <span className="api-desc">Vertical move speed.</span> |
| <Link id="m-currentsensitivity" /><code>{"private int currentSensitivity"}</code> | <span className="api-desc">Backing field for `CurrentSensitivity`, an index into `sensibilityLevels`.</span> |
| <Link id="m-eyefocuscontroller" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/eyefocuscontroller">{"EyeFocusController"}</Link>{" eyeFocusController"}</code> | <span className="api-desc">Eye focus controller on the fly cam.</span> |
| <Link id="m-fastmovefactor" /><code>{"private float fastMoveFactor"}</code> | <span className="api-desc">Speed multiplier for fast movement.</span> |
| <Link id="m-normalmovespeed" /><code>{"private float normalMoveSpeed"}</code> | <span className="api-desc">Base move speed.</span> |
| <Link id="m-renderergroup" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" rendererGroup"}</code> | <span className="api-desc">Renderers turned on or off by `UpdateVisibility`. Not set on a headless server.</span> |
| <Link id="m-sensibilitylevels" /><code>{"private float[] sensibilityLevels"}</code> | <span className="api-desc">Camera sensitivity options; the middle one is the default.</span> |
| <Link id="m-slowmovefactor" /><code>{"private float slowMoveFactor"}</code> | <span className="api-desc">Speed multiplier for slow movement.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-camerasensitivity" /><code>{"float CameraSensitivity { get; }"}</code> | <span className="api-desc">Look speed at the current sensitivity level (120, 90 or 45 by default).</span> |
| <Link id="m-cinematiclerp-2" /><code>{"float CinematicLerp { get; }"}</code> | <span className="api-desc">Smoothing amount while moving in cinematic mode.</span> |
| <Link id="m-cinematiclerpstop" /><code>{"float CinematicLerpStop { get; }"}</code> | <span className="api-desc">Smoothing amount when stopping in cinematic mode.</span> |
| <Link id="m-climbspeed-2" /><code>{"float ClimbSpeed { get; }"}</code> | <span className="api-desc">Up and down speed.</span> |
| <Link id="m-currentsensitivity-2" /><code>{"int CurrentSensitivity { get; set; }"}</code> | <span className="api-desc">Index into the sensitivity levels, clamped. Starts in the middle.</span> |
| <Link id="m-fastmovefactor-2" /><code>{"float FastMoveFactor { get; }"}</code> | <span className="api-desc">Speed multiplier when moving fast.</span> |
| <Link id="m-head" /><code>{"override Transform Head { get; }"}</code> | <span className="api-desc">The camera's transform.</span> |
| <Link id="m-headfollow" /><code>{"override Transform HeadFollow { get; }"}</code> | <span className="api-desc">The fly cam's own transform.</span> |
| <Link id="m-iscinematicmovement" /><code>{"bool IsCinematicMovement { get; set; }"}</code> | <span className="api-desc">Whether smoothed cinematic movement is on.</span> |
| <Link id="m-isshowingname" /><code>{"override bool IsShowingName { get; }"}</code> | <span className="api-desc">Shows its name only while visible.</span> |
| <Link id="m-isvisible" /><code>{"bool IsVisible { get; private set; }"}</code> | <span className="api-desc">Whether the fly cam's renderers are shown.</span> |
| <Link id="m-normalmovespeed-2" /><code>{"float NormalMoveSpeed { get; }"}</code> | <span className="api-desc">Base move speed.</span> |
| <Link id="m-slowmovefactor-2" /><code>{"float SlowMoveFactor { get; }"}</code> | <span className="api-desc">Speed multiplier when moving slowly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatevisibility" /><code>{"void UpdateVisibility(bool isVisible)"}</code> | <span className="api-desc">Shows or hides the fly cam's renderers (not on headless) and raises the change.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Marks it alive, sets the middle sensitivity and hooks linking to the local player.</span> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | <span className="api-desc">Hides the cursor again if this was the local player.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onlinkedtoplayer" /><code>{"private void OnLinkedToPlayer()"}</code> | <span className="api-desc">When this is the local player, turns on its camera and shows the cursor.</span> |

</details>

## Used in

Members of other types that take, return or hold a `FlyCamPlayer`:

<div className="api-used-in">

[`PlayerControllerPrefabs.flyCamPlayer`](/mod/game-api/types/game-other-namespaces/playercontrollerprefabs#m-flycamplayer), [`FlyCamHands.flyCam`](/mod/game-api/types/global-e-h/flycamhands#m-flycam), [`FlyCamLocomotionController.PlayerController`](/mod/game-api/types/global-e-h/flycamlocomotioncontroller#m-playercontroller).

</div>
