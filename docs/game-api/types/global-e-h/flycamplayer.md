---
title: "FlyCamPlayer"
description: "class FlyCamPlayer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlyCamPlayer

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`PlayerController`](/game-api/types/global-p/playercontroller), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FlyCamPlayer()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-onvisibilitychanged" /><code>{"Action<bool> OnVisibilityChanged"}</code> |  |
| <Link id="m-cameratoenableforlocal" /><code>{"private GameObject cameraToEnableForLocal"}</code> |  |
| <Link id="m-cinematiclerp" /><code>{"private float cinematicLerp"}</code> |  |
| <Link id="m-cinematicstoplerp" /><code>{"private float cinematicStopLerp"}</code> |  |
| <Link id="m-climbspeed" /><code>{"private float climbSpeed"}</code> |  |
| <Link id="m-currentsensitivity" /><code>{"private int currentSensitivity"}</code> |  |
| <Link id="m-eyefocuscontroller" /><code>{"private "}<Link to="/game-api/types/alta-player/eyefocuscontroller">{"EyeFocusController"}</Link>{" eyeFocusController"}</code> |  |
| <Link id="m-fastmovefactor" /><code>{"private float fastMoveFactor"}</code> |  |
| <Link id="m-normalmovespeed" /><code>{"private float normalMoveSpeed"}</code> |  |
| <Link id="m-renderergroup" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" rendererGroup"}</code> |  |
| <Link id="m-sensibilitylevels" /><code>{"private float[] sensibilityLevels"}</code> |  |
| <Link id="m-slowmovefactor" /><code>{"private float slowMoveFactor"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-camerasensitivity" /><code>{"float CameraSensitivity { get; }"}</code> |  |
| <Link id="m-cinematiclerp-2" /><code>{"float CinematicLerp { get; }"}</code> |  |
| <Link id="m-cinematiclerpstop" /><code>{"float CinematicLerpStop { get; }"}</code> |  |
| <Link id="m-climbspeed-2" /><code>{"float ClimbSpeed { get; }"}</code> |  |
| <Link id="m-currentsensitivity-2" /><code>{"int CurrentSensitivity { get; set; }"}</code> |  |
| <Link id="m-fastmovefactor-2" /><code>{"float FastMoveFactor { get; }"}</code> |  |
| <Link id="m-head" /><code>{"override Transform Head { get; }"}</code> |  |
| <Link id="m-headfollow" /><code>{"override Transform HeadFollow { get; }"}</code> |  |
| <Link id="m-iscinematicmovement" /><code>{"bool IsCinematicMovement { get; set; }"}</code> |  |
| <Link id="m-isshowingname" /><code>{"override bool IsShowingName { get; }"}</code> |  |
| <Link id="m-isvisible" /><code>{"bool IsVisible { get; private set; }"}</code> |  |
| <Link id="m-normalmovespeed-2" /><code>{"float NormalMoveSpeed { get; }"}</code> |  |
| <Link id="m-slowmovefactor-2" /><code>{"float SlowMoveFactor { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatevisibility" /><code>{"void UpdateVisibility(bool isVisible)"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> |  |
| <Link id="m-onlinkedtoplayer" /><code>{"private void OnLinkedToPlayer()"}</code> |  |

## Used in

Members of other types that take, return or hold a `FlyCamPlayer`:

[`PlayerControllerPrefabs.flyCamPlayer`](/game-api/types/game-other-namespaces/playercontrollerprefabs#m-flycamplayer), [`FlyCamHands.flyCam`](/game-api/types/global-e-h/flycamhands#m-flycam), [`FlyCamLocomotionController.PlayerController`](/game-api/types/global-e-h/flycamlocomotioncontroller#m-playercontroller).
