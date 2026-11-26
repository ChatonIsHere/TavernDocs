---
title: "SteamVRInputController"
description: "Reads SteamVR input actions (action set a_township_tale) for one hand and fills the game's ControllerInput, sets the hand pose and plays haptics."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteamVRInputController

A **class** in `Root.Township`, the global namespace.

Reads SteamVR input actions (action set `a_township_tale`) for one hand and fills the game's `ControllerInput`, sets the hand pose and plays haptics. Client only.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`DeviceInputController`](/mod/game-api/types/global-c-d/deviceinputcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SteamVRInputController("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Creates a `SteamVRInputController` from `controller`.</span> |

## Fields

<details className="api-private">
<summary>27 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-assistgrabaction" /><code>{"private SteamVR_Action_Boolean assistGrabAction"}</code> | <span className="api-desc">`AssistGrab` action, fills `GrabAssist`.</span> |
| <Link id="m-gestures" /><code>{"private SteamVR_Action_Vector2 gestures"}</code> | <span className="api-desc">`Gestures` 2D action.</span> |
| <Link id="m-grabaction" /><code>{"private SteamVR_Action_Boolean grabAction"}</code> | <span className="api-desc">`Grab` action.</span> |
| <Link id="m-grabstrengthaction" /><code>{"private SteamVR_Action_Single grabStrengthAction"}</code> | <span className="api-desc">`GrabStrength` axis; above 0.5 counts as a hard grab. Full strength if the action is inactive.</span> |
| <Link id="m-haptic" /><code>{"private SteamVR_Action_Vibration haptic"}</code> | <span className="api-desc">`Haptic` vibration action.</span> |
| <Link id="m-inputsource" /><code>{"private SteamVR_Input_Sources inputSource"}</code> | <span className="api-desc">Which hand this controller reads (left or right).</span> |
| <Link id="m-itemleftaction" /><code>{"private SteamVR_Action_Boolean itemLeftAction"}</code> | <span className="api-desc">`ItemToTheLeft` action, sends an item to the left.</span> |
| <Link id="m-itemrightaction" /><code>{"private SteamVR_Action_Boolean itemRightAction"}</code> | <span className="api-desc">`ItemToTheRight` action, sends an item to the right.</span> |
| <Link id="m-joystickdpad" /><code>{"private SteamVR_Action_Vector2 joystickDpad"}</code> | <span className="api-desc">`JoystickDpad` 2D action; a sideways push also sends items and snap turns.</span> |
| <Link id="m-lockforgesturesaction" /><code>{"private SteamVR_Action_Boolean lockForGesturesAction"}</code> | <span className="api-desc">`LockforGestures` action.</span> |
| <Link id="m-metamenuaction" /><code>{"private SteamVR_Action_Boolean metaMenuAction"}</code> | <span className="api-desc">`Menu` action, opens the meta menu.</span> |
| <Link id="m-poseaction" /><code>{"private SteamVR_Action_Pose poseAction"}</code> | <span className="api-desc">`Pose` action for the hand's position, rotation and velocity.</span> |
| <Link id="m-releasetogglegrabaction" /><code>{"private SteamVR_Action_Boolean releaseToggleGrabAction"}</code> | <span className="api-desc">`ReleaseToggleGrab` action.</span> |
| <Link id="m-skeleton" /><code>{"private SteamVR_Action_Skeleton skeleton"}</code> | <span className="api-desc">Hand skeleton action for this hand, used for finger curls.</span> |
| <Link id="m-smoothlocomotion" /><code>{"private SteamVR_Action_Vector2 smoothLocomotion"}</code> | <span className="api-desc">`SmoothLocomotion` 2D action.</span> |
| <Link id="m-smoothrotationspeed" /><code>{"private SteamVR_Action_Vector2 smoothRotationSpeed"}</code> | <span className="api-desc">`SmoothRotationSpeed` 2D action; its x size sets the smooth turn speed.</span> |
| <Link id="m-squeezeaction" /><code>{"private SteamVR_Action_Single squeezeAction"}</code> | <span className="api-desc">`Squeeze` axis, fills `GrabAxis`.</span> |
| <Link id="m-swipemotion" /><code>{"private SteamVR_Action_Vector2 swipeMotion"}</code> | <span className="api-desc">`SwipeMotion` 2D action; whether it's active decides `HasSwipe`.</span> |
| <Link id="m-swipetouchaction" /><code>{"private SteamVR_Action_Boolean swipeTouchAction"}</code> | <span className="api-desc">`SwipeTouch` action.</span> |
| <Link id="m-takescreenshotaction" /><code>{"private SteamVR_Action_Boolean takeScreenshotAction"}</code> | <span className="api-desc">`TakePhoto` action.</span> |
| <Link id="m-takescreenshotlongaction" /><code>{"private SteamVR_Action_Boolean takeScreenshotLongAction"}</code> | <span className="api-desc">`takephotolonghold` action, also triggers a photo.</span> |
| <Link id="m-teleportaction" /><code>{"private SteamVR_Action_Boolean teleportAction"}</code> | <span className="api-desc">`Teleport` action.</span> |
| <Link id="m-togglegrabaction" /><code>{"private SteamVR_Action_Boolean toggleGrabAction"}</code> | <span className="api-desc">`ToggleGrab` action.</span> |
| <Link id="m-togglegrabactiondoubletap" /><code>{"private SteamVR_Action_Boolean toggleGrabActionDoubleTap"}</code> | <span className="api-desc">`ToggleGrabDoubleTap` action; a double tap also toggles grab.</span> |
| <Link id="m-togglerunaction" /><code>{"private SteamVR_Action_Boolean toggleRunAction"}</code> | <span className="api-desc">`ToggleRun` action.</span> |
| <Link id="m-turnleftaction" /><code>{"private SteamVR_Action_Boolean turnLeftAction"}</code> | <span className="api-desc">`TurnLeft` snap turn action.</span> |
| <Link id="m-turnrightaction" /><code>{"private SteamVR_Action_Boolean turnRightAction"}</code> | <span className="api-desc">`TurnRight` snap turn action.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-triggerhaptics" /><code>{"override void TriggerHaptics(float strength, float frequency, float remainingTime)"}</code> | <span className="api-desc">Plays a vibration on this hand.</span> |
| <Link id="m-updateposition" /><code>{"override void UpdatePosition()"}</code> | <span className="api-desc">Moves the hand's target transform to the SteamVR pose, with the player height fix added.</span> |
| <Link id="m-populateinput" /><code>{"protected override void PopulateInput("}<Link to="/mod/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" input)"}</code> | <span className="api-desc">Copies every action state for this hand into `ControllerInput`, including finger curls (which also count as grab) and joystick left or right as item send and snap turn.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"private void GetAction<T>(out T action, string name)"}</code> | <span className="api-desc">Looks up a SteamVR action by name in the `a_township_tale` action set.</span> |

</details>
