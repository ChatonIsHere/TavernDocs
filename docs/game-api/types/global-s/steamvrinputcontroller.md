---
title: "SteamVRInputController"
description: "Reads SteamVR input actions (action set a_township_tale) for one hand and fills the game's ControllerInput, sets the hand pose and plays haptics."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteamVRInputController

A **class** in `Root.Township`, no namespace.

Reads SteamVR input actions (action set `a_township_tale`) for one hand and fills the game's `ControllerInput`, sets the hand pose and plays haptics. Client only.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`DeviceInputController`](/game-api/types/global-c-d/deviceinputcontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SteamVRInputController("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |

## Fields

<details>
<summary>27 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-assistgrabaction" /><code>{"private SteamVR_Action_Boolean assistGrabAction"}</code> | `AssistGrab` action, fills `GrabAssist`. |
| <Link id="m-gestures" /><code>{"private SteamVR_Action_Vector2 gestures"}</code> | `Gestures` 2D action. |
| <Link id="m-grabaction" /><code>{"private SteamVR_Action_Boolean grabAction"}</code> | `Grab` action. |
| <Link id="m-grabstrengthaction" /><code>{"private SteamVR_Action_Single grabStrengthAction"}</code> | `GrabStrength` axis; above 0.5 counts as a hard grab. Full strength if the action is inactive. |
| <Link id="m-haptic" /><code>{"private SteamVR_Action_Vibration haptic"}</code> | `Haptic` vibration action. |
| <Link id="m-inputsource" /><code>{"private SteamVR_Input_Sources inputSource"}</code> | Which hand this controller reads (left or right). |
| <Link id="m-itemleftaction" /><code>{"private SteamVR_Action_Boolean itemLeftAction"}</code> | `ItemToTheLeft` action, sends an item to the left. |
| <Link id="m-itemrightaction" /><code>{"private SteamVR_Action_Boolean itemRightAction"}</code> | `ItemToTheRight` action, sends an item to the right. |
| <Link id="m-joystickdpad" /><code>{"private SteamVR_Action_Vector2 joystickDpad"}</code> | `JoystickDpad` 2D action; a sideways push also sends items and snap turns. |
| <Link id="m-lockforgesturesaction" /><code>{"private SteamVR_Action_Boolean lockForGesturesAction"}</code> | `LockforGestures` action. |
| <Link id="m-metamenuaction" /><code>{"private SteamVR_Action_Boolean metaMenuAction"}</code> | `Menu` action, opens the meta menu. |
| <Link id="m-poseaction" /><code>{"private SteamVR_Action_Pose poseAction"}</code> | `Pose` action for the hand's position, rotation and velocity. |
| <Link id="m-releasetogglegrabaction" /><code>{"private SteamVR_Action_Boolean releaseToggleGrabAction"}</code> | `ReleaseToggleGrab` action. |
| <Link id="m-skeleton" /><code>{"private SteamVR_Action_Skeleton skeleton"}</code> | Hand skeleton action for this hand, used for finger curls. |
| <Link id="m-smoothlocomotion" /><code>{"private SteamVR_Action_Vector2 smoothLocomotion"}</code> | `SmoothLocomotion` 2D action. |
| <Link id="m-smoothrotationspeed" /><code>{"private SteamVR_Action_Vector2 smoothRotationSpeed"}</code> | `SmoothRotationSpeed` 2D action; its x size sets the smooth turn speed. |
| <Link id="m-squeezeaction" /><code>{"private SteamVR_Action_Single squeezeAction"}</code> | `Squeeze` axis, fills `GrabAxis`. |
| <Link id="m-swipemotion" /><code>{"private SteamVR_Action_Vector2 swipeMotion"}</code> | `SwipeMotion` 2D action; whether it's active decides `HasSwipe`. |
| <Link id="m-swipetouchaction" /><code>{"private SteamVR_Action_Boolean swipeTouchAction"}</code> | `SwipeTouch` action. |
| <Link id="m-takescreenshotaction" /><code>{"private SteamVR_Action_Boolean takeScreenshotAction"}</code> | `TakePhoto` action. |
| <Link id="m-takescreenshotlongaction" /><code>{"private SteamVR_Action_Boolean takeScreenshotLongAction"}</code> | `takephotolonghold` action, also triggers a photo. |
| <Link id="m-teleportaction" /><code>{"private SteamVR_Action_Boolean teleportAction"}</code> | `Teleport` action. |
| <Link id="m-togglegrabaction" /><code>{"private SteamVR_Action_Boolean toggleGrabAction"}</code> | `ToggleGrab` action. |
| <Link id="m-togglegrabactiondoubletap" /><code>{"private SteamVR_Action_Boolean toggleGrabActionDoubleTap"}</code> | `ToggleGrabDoubleTap` action; a double tap also toggles grab. |
| <Link id="m-togglerunaction" /><code>{"private SteamVR_Action_Boolean toggleRunAction"}</code> | `ToggleRun` action. |
| <Link id="m-turnleftaction" /><code>{"private SteamVR_Action_Boolean turnLeftAction"}</code> | `TurnLeft` snap turn action. |
| <Link id="m-turnrightaction" /><code>{"private SteamVR_Action_Boolean turnRightAction"}</code> | `TurnRight` snap turn action. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-triggerhaptics" /><code>{"override void TriggerHaptics(float strength, float frequency, float remainingTime)"}</code> | Plays a vibration on this hand. |
| <Link id="m-updateposition" /><code>{"override void UpdatePosition()"}</code> | Moves the hand's target transform to the SteamVR pose, with the player height fix added. |
| <Link id="m-populateinput" /><code>{"protected override void PopulateInput("}<Link to="/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" input)"}</code> | Copies every action state for this hand into `ControllerInput`, including finger curls (which also count as grab) and joystick left or right as item send and snap turn. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"private void GetAction<T>(out T action, string name)"}</code> | Looks up a SteamVR action by name in the `a_township_tale` action set. |

</details>
