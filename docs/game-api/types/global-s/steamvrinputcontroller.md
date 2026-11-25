---
title: "SteamVRInputController"
description: "class SteamVRInputController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteamVRInputController

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`DeviceInputController`](/game-api/types/global-c-d/deviceinputcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SteamVRInputController("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-assistgrabaction" /><code>{"private SteamVR_Action_Boolean assistGrabAction"}</code> |  |
| <Link id="m-gestures" /><code>{"private SteamVR_Action_Vector2 gestures"}</code> |  |
| <Link id="m-grabaction" /><code>{"private SteamVR_Action_Boolean grabAction"}</code> |  |
| <Link id="m-grabstrengthaction" /><code>{"private SteamVR_Action_Single grabStrengthAction"}</code> |  |
| <Link id="m-haptic" /><code>{"private SteamVR_Action_Vibration haptic"}</code> |  |
| <Link id="m-inputsource" /><code>{"private SteamVR_Input_Sources inputSource"}</code> |  |
| <Link id="m-itemleftaction" /><code>{"private SteamVR_Action_Boolean itemLeftAction"}</code> |  |
| <Link id="m-itemrightaction" /><code>{"private SteamVR_Action_Boolean itemRightAction"}</code> |  |
| <Link id="m-joystickdpad" /><code>{"private SteamVR_Action_Vector2 joystickDpad"}</code> |  |
| <Link id="m-lockforgesturesaction" /><code>{"private SteamVR_Action_Boolean lockForGesturesAction"}</code> |  |
| <Link id="m-metamenuaction" /><code>{"private SteamVR_Action_Boolean metaMenuAction"}</code> |  |
| <Link id="m-poseaction" /><code>{"private SteamVR_Action_Pose poseAction"}</code> |  |
| <Link id="m-releasetogglegrabaction" /><code>{"private SteamVR_Action_Boolean releaseToggleGrabAction"}</code> |  |
| <Link id="m-skeleton" /><code>{"private SteamVR_Action_Skeleton skeleton"}</code> |  |
| <Link id="m-smoothlocomotion" /><code>{"private SteamVR_Action_Vector2 smoothLocomotion"}</code> |  |
| <Link id="m-smoothrotationspeed" /><code>{"private SteamVR_Action_Vector2 smoothRotationSpeed"}</code> |  |
| <Link id="m-squeezeaction" /><code>{"private SteamVR_Action_Single squeezeAction"}</code> |  |
| <Link id="m-swipemotion" /><code>{"private SteamVR_Action_Vector2 swipeMotion"}</code> |  |
| <Link id="m-swipetouchaction" /><code>{"private SteamVR_Action_Boolean swipeTouchAction"}</code> |  |
| <Link id="m-takescreenshotaction" /><code>{"private SteamVR_Action_Boolean takeScreenshotAction"}</code> |  |
| <Link id="m-takescreenshotlongaction" /><code>{"private SteamVR_Action_Boolean takeScreenshotLongAction"}</code> |  |
| <Link id="m-teleportaction" /><code>{"private SteamVR_Action_Boolean teleportAction"}</code> |  |
| <Link id="m-togglegrabaction" /><code>{"private SteamVR_Action_Boolean toggleGrabAction"}</code> |  |
| <Link id="m-togglegrabactiondoubletap" /><code>{"private SteamVR_Action_Boolean toggleGrabActionDoubleTap"}</code> |  |
| <Link id="m-togglerunaction" /><code>{"private SteamVR_Action_Boolean toggleRunAction"}</code> |  |
| <Link id="m-turnleftaction" /><code>{"private SteamVR_Action_Boolean turnLeftAction"}</code> |  |
| <Link id="m-turnrightaction" /><code>{"private SteamVR_Action_Boolean turnRightAction"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-triggerhaptics" /><code>{"override void TriggerHaptics(float strength, float frequency, float remainingTime)"}</code> |  |
| <Link id="m-updateposition" /><code>{"override void UpdatePosition()"}</code> |  |
| <Link id="m-getaction" /><code>{"private void GetAction<T>(out T action, string name)"}</code> |  |
| <Link id="m-populateinput" /><code>{"protected override void PopulateInput("}<Link to="/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" input)"}</code> |  |
