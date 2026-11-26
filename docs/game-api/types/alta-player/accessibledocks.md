---
title: "AccessibleDocks"
description: "Accessibility option on the local player's body that moves the belt and back docks up in front of the camera so they are easy to reach."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AccessibleDocks

A **class** in `Root.Township`, `Alta.Character`.

Accessibility option on the local player's body that moves the belt and back docks up in front of the camera so they are easy to reach. Client only; toggled by holding both quick access buttons or from the quick access menu.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`, [`IInitializeAsLocalPlayer`](/game-api/types/global-i-l/iinitializeaslocalplayer)
- **Nested types** [`DockSetup`](/game-api/types/alta-player/accessibledocks-docksetup)
- **Documented in** [Player inventory](/game-api/items/player-inventory)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AccessibleDocks()"}</code> |

## Fields

<details>
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnapplynumbers" /><code>{"private bool btnApplyNumbers"}</code> | Inspector button that runs `ApplyNumbers`. |
| <Link id="m-btndebug" /><code>{"private bool btnDebug"}</code> | Inspector button that runs `ToggleActive`. |
| <Link id="m-btnsetupnumbers" /><code>{"private bool btnSetupNumbers"}</code> | Inspector button that runs `SetupNumbers`. |
| <Link id="m-cameratransform" /><code>{"private Transform cameraTransform"}</code> | The player's camera, which the docks follow while active. |
| <Link id="m-dockssetup" /><code>{"private "}<Link to="/game-api/types/alta-player/accessibledocks-docksetup">{"AccessibleDocks.DockSetup"}</Link>{"[] docksSetup"}</code> | Each dock with its resting and accessible positions and its number label's rotations. |
| <Link id="m-hasfinishedsetup" /><code>{"private bool hasFinishedSetup"}</code> | Set by `FinishSetup`; toggling does nothing until then. |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | Backing field for `IsActive`. |
| <Link id="m-islerping" /><code>{"private bool isLerping"}</code> | True while the docks are still easing towards the camera after turning on. |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | The dock group's current local position, eased each frame. |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | How fast docks move when showing or hiding (default 20). |
| <Link id="m-local" /><code>{"private static "}<Link to="/game-api/types/alta-player/accessibledocks">{"AccessibleDocks"}</Link>{" local"}</code> | The local player's instance. |
| <Link id="m-neutralaxis" /><code>{"private Vector3 neutralAxis"}</code> | Axis removed from the camera offset, so the docks don't follow the camera along it. |
| <Link id="m-originalposition" /><code>{"private Vector3 originalPosition"}</code> | The dock group's resting local position. |
| <Link id="m-originaltargetparent" /><code>{"private Transform originalTargetParent"}</code> | Parent whose space the camera position is measured in. |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | The local player controller, for reading the quick access buttons. |
| <Link id="m-positionfromcamera" /><code>{"private Vector3 positionFromCamera"}</code> | Offset from the camera where the docks sit while active. |
| <Link id="m-positionupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" positionUpdate"}</code> | The registered per-frame update, `PositionUpdate` or `ReturnToPosition`. |
| <Link id="m-rotationlerpspeed" /><code>{"private float rotationLerpSpeed"}</code> | How fast dock number labels rotate when showing or hiding (default 20). |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | The transform that holds the docks and is moved. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive-2" /><code>{"static bool IsActive { get; }"}</code> | True while the local player's accessible docks are out. False if there is no local instance. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishsetup" /><code>{"void FinishSetup()"}</code> | Records each dock's resting position and allows toggling. Called by `DockPositionController` once docks are placed. |
| <Link id="m-toggleactive" /><code>{"static void ToggleActive()"}</code> | Toggles the local player's accessible docks. Used by the quick access menu action. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applynumbers" /><code>{"private void ApplyNumbers()"}</code> | Editor button: sets each dock number to its accessible rotation. |
| <Link id="m-checkinput" /><code>{"private void CheckInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | When both quick access buttons are held and accessibility is on, shows the docks, or toggles them if the toggle setting is on. |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Makes this the local instance and hooks both controllers' quick access action. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the position update and clears the local instance. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws where the docks will sit relative to the camera. |
| <Link id="m-positionupdate-2" /><code>{"private void PositionUpdate()"}</code> | Per-frame update while active: moves the dock group in front of the camera, easing in at first. |
| <Link id="m-returntoposition" /><code>{"private void ReturnToPosition()"}</code> | Per-frame update after turning off: eases the docks back to their resting place, then stops. |
| <Link id="m-setactive" /><code>{"private void SetActive(bool isActive)"}</code> | Switches between showing and hiding the docks and registers the matching update. Ignored until setup is finished. |
| <Link id="m-setupnumbers" /><code>{"private void SetupNumbers()"}</code> | Editor button: records each number's resting rotation and works out a rotation that faces the camera. |
| <Link id="m-stopinput" /><code>{"private async void StopInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput, bool isDisabling)"}</code> | In hold mode, hides the docks half a second after either quick access button is released. |

</details>

## Used in

Members of other types that take, return or hold a `AccessibleDocks`:

[`DockPositionController.accessibleDocks`](/game-api/types/alta-player/dockpositioncontroller#m-accessibledocks).
