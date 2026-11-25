---
title: "Teleporter"
description: "class Teleporter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Teleporter

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`ControllerExtension`](/game-api/types/global-c-d/controllerextension)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Teleporter()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-custom" /><code>{"private "}<Link to="/game-api/types/global-c-d/customteleportation">{"CustomTeleportation"}</Link>{" custom"}</code> |  |
| <Link id="m-hasstarted" /><code>{"private bool hasStarted"}</code> |  |
| <Link id="m-interactor" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> |  |
| <Link id="m-isoverobject" /><code>{"private bool isOverObject"}</code> |  |
| <Link id="m-isshowing" /><code>{"private bool isShowing"}</code> |  |
| <Link id="m-otherteleporter" /><code>{"private "}<Link to="/game-api/types/global-t-x/teleporter">{"Teleporter"}</Link>{" otherTeleporter"}</code> |  |
| <Link id="m-pointer" /><code>{"private "}<Link to="/game-api/types/global-p/pointer">{"Pointer"}</Link>{" pointer"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-directionsetting" /><code>{"int DirectionSetting { get; set; }"}</code> |  |
| <Link id="m-lastcolliderhit" /><code>{"private Collider LastColliderHit { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-departed" /><code>{"event Action<Vector3> Departed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attemptteleport" /><code>{"void AttemptTeleport("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller, bool isDisabling)"}</code> |  |
| <Link id="m-initializecontrollerextension" /><code>{"override void InitializeControllerExtension()"}</code> |  |
| <Link id="m-startshowpointer" /><code>{"void StartShowPointer("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |
| <Link id="m-cancelteleport" /><code>{"private void CancelTeleport("}<Link to="/game-api/types/global-c-d/controlleractionproxy">{"ControllerActionProxy"}</Link>{" proxy)"}</code> |  |
| <Link id="m-checkshowpointer" /><code>{"private IEnumerator CheckShowPointer() (iterator)"}</code> |  |
| <Link id="m-checkvalidendinput" /><code>{"private bool CheckValidEndInput()"}</code> |  |
| <Link id="m-checkvalidinput" /><code>{"private bool CheckValidInput()"}</code> |  |
| <Link id="m-handleteleportend" /><code>{"private void HandleTeleportEnd(bool isAttempting)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-setupotherteleporter" /><code>{"private void SetupOtherTeleporter()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-targetchanged" /><code>{"private void TargetChanged("}<Link to="/game-api/types/global-p/pointer">{"Pointer"}</Link>{" pointer, Collider collider, bool isValid)"}</code> |  |
| <Link id="m-teleportstartedsound" /><code>{"private void TeleportStartedSound(Vector3 position)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Teleporter`:

[`CustomTeleportation.Attempt`](/game-api/types/global-c-d/customteleportation#m-attempt), [`CustomTeleportation.Begin`](/game-api/types/global-c-d/customteleportation#m-begin), [`CustomTeleportation.End`](/game-api/types/global-c-d/customteleportation#m-end), [`HandHandler.Teleporter`](/game-api/types/global-e-h/handhandler#m-teleporter), [`TeleportationPoint.Attempt`](/game-api/types/global-t-x/teleportationpoint#m-attempt), [`TeleportationPoint.Begin`](/game-api/types/global-t-x/teleportationpoint#m-begin), [`TeleportationPoint.End`](/game-api/types/global-t-x/teleportationpoint#m-end).
