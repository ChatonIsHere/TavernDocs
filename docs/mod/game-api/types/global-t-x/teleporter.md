---
title: "Teleporter"
description: "Hand controller extension for pointer teleporting: shows the pointer while the teleport action is held and moves the player there on release."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Teleporter

A **class** in `Root.Township`, the global namespace.

Hand controller extension for pointer teleporting: shows the pointer while the teleport action is held and moves the player there on release. Local player only, and not in auto cam mode.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`ControllerExtension`](/mod/game-api/types/global-c-d/controllerextension)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Teleporter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-custom" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/customteleportation">{"CustomTeleportation"}</Link>{" custom"}</code> | Custom teleport behaviour on the current target, if any. |
| <Link id="m-hasstarted" /><code>{"private bool hasStarted"}</code> | Set once `Start` has run. |
| <Link id="m-interactor" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> | The controller's interactor, fetched on first use. |
| <Link id="m-isoverobject" /><code>{"private bool isOverObject"}</code> | Whether the pointer is over a valid target. |
| <Link id="m-isshowing" /><code>{"private bool isShowing"}</code> | Whether the pointer is showing. |
| <Link id="m-otherteleporter" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/teleporter">{"Teleporter"}</Link>{" otherTeleporter"}</code> | The other hand's teleporter; its teleport is cancelled when this one fires. |
| <Link id="m-pointer" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pointer">{"Pointer"}</Link>{" pointer"}</code> | The pointer extension on the same controller. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-directionsetting" /><code>{"int DirectionSetting { get; set; }"}</code> | A settable value with no reader in this class. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastcolliderhit" /><code>{"private Collider LastColliderHit { get; set; }"}</code> | The collider the pointer last hit, to detect target changes. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-departed" /><code>{"event Action<Vector3> Departed"}</code> | Raised with the hand's position when a teleport happens. Plays the depart sound. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attemptteleport" /><code>{"void AttemptTeleport("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller, bool isDisabling)"}</code> | Called when the teleport action ends. Teleports if the pointer has a valid target, and cancels the other hand's pointer. |
| <Link id="m-initializecontrollerextension" /><code>{"override void InitializeControllerExtension()"}</code> | Finds the hand's `Pointer` and links to the other hand's teleporter once the local player is set. |
| <Link id="m-startshowpointer" /><code>{"void StartShowPointer("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Shows the pointer while teleporting is allowed (not downed, hand free, locomotion not blocked). |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancelteleport" /><code>{"private void CancelTeleport("}<Link to="/mod/game-api/types/global-c-d/controlleractionproxy">{"ControllerActionProxy"}</Link>{" proxy)"}</code> | Ends the teleport without moving when the Teleport action is disabled. |
| <Link id="m-checkshowpointer" /><code>{"private IEnumerator CheckShowPointer() (iterator)"}</code> | Coroutine that keeps the teleport pointer shown while the input stays valid. |
| <Link id="m-checkvalidendinput" /><code>{"private bool CheckValidEndInput()"}</code> | True if the pointer is showing, the hand is free and the player is alive. |
| <Link id="m-checkvalidinput" /><code>{"private bool CheckValidInput()"}</code> | True if teleporting isn't blocked, Teleport is held, the hand is free and locomotion isn't blocked. |
| <Link id="m-handleteleportend" /><code>{"private void HandleTeleportEnd(bool isAttempting)"}</code> | Hides the pointer and, if attempting and valid, teleports to the hit point or runs the target's custom teleport. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Cancels any teleport and unhooks the Teleport action events. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Hooks the Teleport action events in VR modes, and shows the pointer if the button is already held. |
| <Link id="m-setupotherteleporter" /><code>{"private void SetupOtherTeleporter()"}</code> | Finds the other hand's teleporter once the player is linked as local. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Marks the teleporter as started. |
| <Link id="m-targetchanged" /><code>{"private void TargetChanged("}<Link to="/mod/game-api/types/global-p/pointer">{"Pointer"}</Link>{" pointer, Collider collider, bool isValid)"}</code> | Ends and begins `CustomTeleportation` on targets as the pointer moves between colliders. |
| <Link id="m-teleportstartedsound" /><code>{"private void TeleportStartedSound(Vector3 position)"}</code> | Plays the teleport depart sound at the given position. |

</details>

## Used in

Members of other types that take, return or hold a `Teleporter`:

[`CustomTeleportation.Attempt`](/mod/game-api/types/global-c-d/customteleportation#m-attempt), [`CustomTeleportation.Begin`](/mod/game-api/types/global-c-d/customteleportation#m-begin), [`CustomTeleportation.End`](/mod/game-api/types/global-c-d/customteleportation#m-end), [`HandHandler.Teleporter`](/mod/game-api/types/global-e-h/handhandler#m-teleporter), [`TeleportationPoint.Attempt`](/mod/game-api/types/global-t-x/teleportationpoint#m-attempt), [`TeleportationPoint.Begin`](/mod/game-api/types/global-t-x/teleportationpoint#m-begin), [`TeleportationPoint.End`](/mod/game-api/types/global-t-x/teleportationpoint#m-end).
