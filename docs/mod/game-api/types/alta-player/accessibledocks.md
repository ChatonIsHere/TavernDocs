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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`, [`IInitializeAsLocalPlayer`](/mod/game-api/types/global-i-l/iinitializeaslocalplayer)
- **Nested types** [`DockSetup`](/mod/game-api/types/alta-player/accessibledocks-docksetup)
- **Documented in** [Player inventory](/mod/game-api/items/player-inventory)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AccessibleDocks()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnapplynumbers" /><code>{"private bool btnApplyNumbers"}</code> | <span className="api-desc">Inspector button that runs `ApplyNumbers`.</span> |
| <Link id="m-btndebug" /><code>{"private bool btnDebug"}</code> | <span className="api-desc">Inspector button that runs `ToggleActive`.</span> |
| <Link id="m-btnsetupnumbers" /><code>{"private bool btnSetupNumbers"}</code> | <span className="api-desc">Inspector button that runs `SetupNumbers`.</span> |
| <Link id="m-cameratransform" /><code>{"private Transform cameraTransform"}</code> | <span className="api-desc">The player's camera, which the docks follow while active.</span> |
| <Link id="m-dockssetup" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/accessibledocks-docksetup">{"AccessibleDocks.DockSetup"}</Link>{"[] docksSetup"}</code> | <span className="api-desc">Each dock with its resting and accessible positions and its number label's rotations.</span> |
| <Link id="m-hasfinishedsetup" /><code>{"private bool hasFinishedSetup"}</code> | <span className="api-desc">Set by `FinishSetup`; toggling does nothing until then.</span> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">Backing field for `IsActive`.</span> |
| <Link id="m-islerping" /><code>{"private bool isLerping"}</code> | <span className="api-desc">True while the docks are still easing towards the camera after turning on.</span> |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | <span className="api-desc">The dock group's current local position, eased each frame.</span> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | <span className="api-desc">How fast docks move when showing or hiding (default 20).</span> |
| <Link id="m-local" /><code>{"private static "}<Link to="/mod/game-api/types/alta-player/accessibledocks">{"AccessibleDocks"}</Link>{" local"}</code> | <span className="api-desc">The local player's instance.</span> |
| <Link id="m-neutralaxis" /><code>{"private Vector3 neutralAxis"}</code> | <span className="api-desc">Axis removed from the camera offset, so the docks don't follow the camera along it.</span> |
| <Link id="m-originalposition" /><code>{"private Vector3 originalPosition"}</code> | <span className="api-desc">The dock group's resting local position.</span> |
| <Link id="m-originaltargetparent" /><code>{"private Transform originalTargetParent"}</code> | <span className="api-desc">Parent whose space the camera position is measured in.</span> |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | <span className="api-desc">The local player controller, for reading the quick access buttons.</span> |
| <Link id="m-positionfromcamera" /><code>{"private Vector3 positionFromCamera"}</code> | <span className="api-desc">Offset from the camera where the docks sit while active.</span> |
| <Link id="m-positionupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" positionUpdate"}</code> | <span className="api-desc">The registered per-frame update, `PositionUpdate` or `ReturnToPosition`.</span> |
| <Link id="m-rotationlerpspeed" /><code>{"private float rotationLerpSpeed"}</code> | <span className="api-desc">How fast dock number labels rotate when showing or hiding (default 20).</span> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | <span className="api-desc">The transform that holds the docks and is moved.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive-2" /><code>{"static bool IsActive { get; }"}</code> | <span className="api-desc">True while the local player's accessible docks are out. False if there is no local instance.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishsetup" /><code>{"void FinishSetup()"}</code> | <span className="api-desc">Records each dock's resting position and allows toggling. Called by `DockPositionController` once docks are placed.</span> |
| <Link id="m-toggleactive" /><code>{"static void ToggleActive()"}</code> | <span className="api-desc">Toggles the local player's accessible docks. Used by the quick access menu action.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applynumbers" /><code>{"private void ApplyNumbers()"}</code> | <span className="api-desc">Editor button: sets each dock number to its accessible rotation.</span> |
| <Link id="m-checkinput" /><code>{"private void CheckInput("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | <span className="api-desc">When both quick access buttons are held and accessibility is on, shows the docks, or toggles them if the toggle setting is on.</span> |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | <span className="api-desc">Makes this the local instance and hooks both controllers' quick access action.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the position update and clears the local instance.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws where the docks will sit relative to the camera.</span> |
| <Link id="m-positionupdate-2" /><code>{"private void PositionUpdate()"}</code> | <span className="api-desc">Per-frame update while active: moves the dock group in front of the camera, easing in at first.</span> |
| <Link id="m-returntoposition" /><code>{"private void ReturnToPosition()"}</code> | <span className="api-desc">Per-frame update after turning off: eases the docks back to their resting place, then stops.</span> |
| <Link id="m-setactive" /><code>{"private void SetActive(bool isActive)"}</code> | <span className="api-desc">Switches between showing and hiding the docks and registers the matching update. Ignored until setup is finished.</span> |
| <Link id="m-setupnumbers" /><code>{"private void SetupNumbers()"}</code> | <span className="api-desc">Editor button: records each number's resting rotation and works out a rotation that faces the camera.</span> |
| <Link id="m-stopinput" /><code>{"private async void StopInput("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput, bool isDisabling)"}</code> | <span className="api-desc">In hold mode, hides the docks half a second after either quick access button is released.</span> |

</details>

## Used in

Members of other types that take, return or hold a `AccessibleDocks`:

<div className="api-used-in">

[`DockPositionController.accessibleDocks`](/mod/game-api/types/alta-player/dockpositioncontroller#m-accessibledocks).

</div>
