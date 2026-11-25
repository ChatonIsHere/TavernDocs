---
title: "AccessibleDocks"
description: "The accessibility option that moves belt docks to easier spots (local player)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AccessibleDocks

A **class** in `Root.Township`, `Alta.Character`.

The accessibility option that moves belt docks to easier spots (local player).

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

| Member |
| --- |
| <Link id="m-btnapplynumbers" /><code>{"private bool btnApplyNumbers"}</code> |
| <Link id="m-btndebug" /><code>{"private bool btnDebug"}</code> |
| <Link id="m-btnsetupnumbers" /><code>{"private bool btnSetupNumbers"}</code> |
| <Link id="m-cameratransform" /><code>{"private Transform cameraTransform"}</code> |
| <Link id="m-dockssetup" /><code>{"private "}<Link to="/game-api/types/alta-player/accessibledocks-docksetup">{"AccessibleDocks.DockSetup"}</Link>{"[] docksSetup"}</code> |
| <Link id="m-hasfinishedsetup" /><code>{"private bool hasFinishedSetup"}</code> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> |
| <Link id="m-islerping" /><code>{"private bool isLerping"}</code> |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> |
| <Link id="m-local" /><code>{"private static "}<Link to="/game-api/types/alta-player/accessibledocks">{"AccessibleDocks"}</Link>{" local"}</code> |
| <Link id="m-neutralaxis" /><code>{"private Vector3 neutralAxis"}</code> |
| <Link id="m-originalposition" /><code>{"private Vector3 originalPosition"}</code> |
| <Link id="m-originaltargetparent" /><code>{"private Transform originalTargetParent"}</code> |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> |
| <Link id="m-positionfromcamera" /><code>{"private Vector3 positionFromCamera"}</code> |
| <Link id="m-positionupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" positionUpdate"}</code> |
| <Link id="m-rotationlerpspeed" /><code>{"private float rotationLerpSpeed"}</code> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isactive-2" /><code>{"static bool IsActive { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-finishsetup" /><code>{"void FinishSetup()"}</code> |
| <Link id="m-toggleactive" /><code>{"static void ToggleActive()"}</code> |

<details>
<summary>10 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-applynumbers" /><code>{"private void ApplyNumbers()"}</code> |
| <Link id="m-checkinput" /><code>{"private void CheckInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-positionupdate-2" /><code>{"private void PositionUpdate()"}</code> |
| <Link id="m-returntoposition" /><code>{"private void ReturnToPosition()"}</code> |
| <Link id="m-setactive" /><code>{"private void SetActive(bool isActive)"}</code> |
| <Link id="m-setupnumbers" /><code>{"private void SetupNumbers()"}</code> |
| <Link id="m-stopinput" /><code>{"private async void StopInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput, bool isDisabling)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `AccessibleDocks`:

[`DockPositionController.accessibleDocks`](/game-api/types/alta-player/dockpositioncontroller#m-accessibledocks).
