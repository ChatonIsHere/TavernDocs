---
title: "PlayerInput"
description: "One hand's input component on the platform player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerInput

A **class** in `Root.Township`, no namespace.

One hand's input component on the platform player. Holds the hand index, raw button state, the D-pad helper and haptics. Client side; get it from the player's `LeftInput` or `RightInput`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerInput()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-actionsmanager" /><code>{"private "}<Link to="/game-api/types/global-c-d/controlleractionsmanager">{"ControllerActionsManager"}</Link>{" actionsManager"}</code> |
| <Link id="m-handindex" /><code>{"private "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex"}</code> |
| <Link id="m-inputcontroller" /><code>{"private "}<Link to="/game-api/types/global-c-d/deviceinputcontroller">{"DeviceInputController"}</Link>{" inputController"}</code> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> |
| <Link id="m-vrtrackeddevice" /><code>{"private "}<Link to="/game-api/types/alta-menus/vrtrackeddevice">{"VRTrackedDevice"}</Link>{" vrTrackedDevice"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actionsmanager-2" /><code><Link to="/game-api/types/global-c-d/controlleractionsmanager">{"ControllerActionsManager"}</Link>{" ActionsManager { get; }"}</code> | The `ControllerActionsManager` set on the prefab for this hand. |
| <Link id="m-dpad" /><code><Link to="/game-api/types/global-c-d/controllerdpad">{"ControllerDPad"}</Link>{" DPad { get; private set; }"}</code> | A `ControllerDPad` created in `Awake` and updated every frame for this hand. |
| <Link id="m-handindex-2" /><code><Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" { get; }"}</code> | Which hand this input is for (left or right), set on the prefab. |
| <Link id="m-hasplatformcontroller" /><code>{"bool HasPlatformController { get; private set; }"}</code> | True once `SetPlatformController` has given this hand a device input controller. |
| <Link id="m-inputcontroller-2" /><code><Link to="/game-api/types/global-c-d/deviceinputcontroller">{"DeviceInputController"}</Link>{" InputController { get; }"}</code> | The device input controller that feeds this hand, or null until one is set. |
| <Link id="m-otherplayerinput" /><code><Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" OtherPlayerInput { get; }"}</code> | The input for the opposite hand, taken from the owning player. |
| <Link id="m-player" /><code><Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" Player { get; private set; }"}</code> | The platform player this hand belongs to, set by `InitializeForPlayer`. |
| <Link id="m-rawinput" /><code><Link to="/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" RawInput { get; }"}</code> | The `ControllerInput` holding this hand's current button and axis values. The input controller writes into it each frame while the player is loaded. |
| <Link id="m-targettransform-2" /><code>{"Transform TargetTransform { get; set; }"}</code> | The transform the hand tracks. Setting a new one rebuilds the tracked device (empty in this build). |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-trackeddevice" /><code>{"private "}<Link to="/game-api/types/alta-menus/trackeddevice">{"TrackedDevice"}</Link>{" "}<Link to="/game-api/types/alta-menus/trackeddevice">{"TrackedDevice"}</Link>{" { get; }"}</code> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-receivedcontroller" /><code>{"event Action<"}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{"> ReceivedController"}</code> | Raised when `SetPlatformController` assigns a device input controller. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeforplayer" /><code>{"void InitializeForPlayer("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player)"}</code> | Stores the platform player that owns this hand. Needed before `OtherPlayerInput` works. |
| <Link id="m-setplatformcontroller" /><code>{"void SetPlatformController("}<Link to="/game-api/types/global-c-d/deviceinputcontroller">{"DeviceInputController"}</Link>{" inputController)"}</code> | Assigns the device input controller for this hand and raises `ReceivedController`. |
| <Link id="m-triggerhaptic" /><code>{"void TriggerHaptic(float strength, float duration, float frequency = 80)"}</code> | Client: vibrates this controller, either at a fixed strength for a duration or following a curve. Scaled by the haptics strength setting; does nothing without a controller. |
| <Link id="m-triggerhaptic-2" /><code>{"void TriggerHaptic(AnimationCurve curve, float strength = 1, float frequency = 80)"}</code> | Client: vibrates this controller, either at a fixed strength for a duration or following a curve. Scaled by the haptics strength setting; does nothing without a controller. |

<details>
<summary>9 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-createtrackeddevice" /><code>{"private void CreateTrackedDevice()"}</code> |
| <Link id="m-haptic" /><code>{"private IEnumerator Haptic(float strength, float duration, float frequency) (iterator)"}</code> |
| <Link id="m-haptic-2" /><code>{"private IEnumerator Haptic(AnimationCurve curve, float strength, float frequency) (iterator)"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |
| <Link id="m-positionpostprocessor" /><code>{"private void PositionPostProcessor(ref Vector3 input)"}</code> |
| <Link id="m-update" /><code>{"private void Update()"}</code> |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerInput`:

[`AccessibleDocks.CheckInput`](/game-api/types/alta-player/accessibledocks#m-checkinput), [`AccessibleDocks.StopInput`](/game-api/types/alta-player/accessibledocks#m-stopinput), [`CosmeticCustomizationManager.ExitCustomizationRoom`](/game-api/types/alta-customization/cosmeticcustomizationmanager#m-exitcustomizationroom), [`CosmeticCustomizationManager.Randomize`](/game-api/types/alta-customization/cosmeticcustomizationmanager#m-randomize-2), [`Book.ClientMoveLeft`](/game-api/types/alta-items/book#m-clientmoveleft), [`Book.ClientMoveRight`](/game-api/types/alta-items/book#m-clientmoveright), [`Book.ClientSwiped`](/game-api/types/alta-items/book#m-clientswiped), [`QuickAccessMenuController.ButtonPress`](/game-api/types/alta-player/quickaccessmenucontroller#m-buttonpress), [`QuickAccessMenuController.ButtonRelease`](/game-api/types/alta-player/quickaccessmenucontroller#m-buttonrelease), [`QuickAccessMenuController.ToggleButtonPress`](/game-api/types/alta-player/quickaccessmenucontroller#m-togglebuttonpress), [`HandCamera.EndHaptics`](/game-api/types/alta-customization/handcamera#m-endhaptics), [`HandCamera.LongHaptic`](/game-api/types/alta-customization/handcamera#m-longhaptic), [`HandCamera.longHaptics`](/game-api/types/alta-customization/handcamera#m-longhaptics), [`HandCamera.Screenshot`](/game-api/types/alta-customization/handcamera#m-screenshot-2), [`HandCamera.StartHaptics`](/game-api/types/alta-customization/handcamera#m-starthaptics), [`LiveDataDisplayView.ToggleFPSDisplay`](/game-api/types/alta-utilities/livedatadisplayview#m-togglefpsdisplay), [`AutoCamDeviceController.CreateController`](/game-api/types/global-a-b/autocamdevicecontroller#m-createcontroller), [`BaseOpenXRInputController.BaseOpenXRInputController`](/game-api/types/global-a-b/baseopenxrinputcontroller#m-ctor), [`CharacterPoseSaver.ButtonPressed`](/game-api/types/global-c-d/characterposesaver#m-buttonpressed), [`ClickedEndEventHandler.BeginInvoke`](/game-api/types/global-c-d/clickedendeventhandler#m-begininvoke), [`ClickedEndEventHandler.Invoke`](/game-api/types/global-c-d/clickedendeventhandler#m-invoke), [`ClickedEventHandler.BeginInvoke`](/game-api/types/global-c-d/clickedeventhandler#m-begininvoke), [`ClickedEventHandler.Invoke`](/game-api/types/global-c-d/clickedeventhandler#m-invoke), [`Controller.Initialize`](/game-api/types/global-c-d/controller#m-initialize), [`Controller.PlayerInput`](/game-api/types/global-c-d/controller#m-playerinput), [`ControllerAction.AddInputAndListeners`](/game-api/types/global-c-d/controlleraction#m-addinputandlisteners), [`ControllerAction.OnActionEnded`](/game-api/types/global-c-d/controlleraction#m-onactionended), [`ControllerAction.OnActionStarted`](/game-api/types/global-c-d/controlleraction#m-onactionstarted), [`ControllerAction.PopulateInputSourcePair`](/game-api/types/global-c-d/controlleraction#m-populateinputsourcepair), [`ControllerAction.RemoveAllInputsAndListeners`](/game-api/types/global-c-d/controlleraction#m-removeallinputsandlisteners), [`ControllerAction.RemoveInputsAndListeners`](/game-api/types/global-c-d/controlleraction#m-removeinputsandlisteners), [`ControllerAction.SetInputAndListeners`](/game-api/types/global-c-d/controlleraction#m-setinputandlisteners), [`ControllerActionProxy.InvokeEnded`](/game-api/types/global-c-d/controlleractionproxy#m-invokeended), [`ControllerActionProxy.InvokeStarted`](/game-api/types/global-c-d/controlleractionproxy#m-invokestarted), [`ControllerActions.ControllerActions`](/game-api/types/global-c-d/controlleractions#m-ctor), [`ControllerActions.playerInput`](/game-api/types/global-c-d/controlleractions#m-playerinput), [`ControllerActionsManager.playerInput`](/game-api/types/global-c-d/controlleractionsmanager#m-playerinput), [`ControllerDPad.CalculateSwipe`](/game-api/types/global-c-d/controllerdpad#m-calculateswipe), [`ControllerDPad.ControllerDPad`](/game-api/types/global-c-d/controllerdpad#m-ctor), [`ControllerDPad.PadTouched`](/game-api/types/global-c-d/controllerdpad#m-padtouched), [`ControllerDPad.playerInput`](/game-api/types/global-c-d/controllerdpad#m-playerinput), [`ControllerExtension.Input`](/game-api/types/global-c-d/controllerextension#m-input), [`ControllerInput.SetAndCallEvents`](/game-api/types/global-c-d/controllerinput#m-setandcallevents), [`ControllerInputButtonPressed.ButtonPressed`](/game-api/types/global-c-d/controllerinputbuttonpressed#m-buttonpressed), [`DamageDebugDisplay.ToggleFPSDisplay`](/game-api/types/global-c-d/damagedebugdisplay#m-togglefpsdisplay), [`DeviceInputController.DeviceInputController`](/game-api/types/global-c-d/deviceinputcontroller#m-ctor), [`DeviceInputController.PlayerInput`](/game-api/types/global-c-d/deviceinputcontroller#m-playerinput), [`DeviceInputController.SendInputTo`](/game-api/types/global-c-d/deviceinputcontroller#m-sendinputto), [`DmgTDisplay.ToggleFPSDisplay`](/game-api/types/global-c-d/dmgtdisplay#m-togglefpsdisplay), [`DPadInputSource.DPadInputSource`](/game-api/types/global-c-d/dpadinputsource#m-ctor), [`DPadInputSource.playerInput`](/game-api/types/global-c-d/dpadinputsource#m-playerinput), [`FlyCamDeviceController.CreateController`](/game-api/types/global-e-h/flycamdevicecontroller#m-createcontroller), [`FlyCamHands.InvisibilityPressed`](/game-api/types/global-e-h/flycamhands#m-invisibilitypressed), [`FlyCamHands.ModMuteMic`](/game-api/types/global-e-h/flycamhands#m-modmutemic), [`FlyCamHands.MuteOwnMic`](/game-api/types/global-e-h/flycamhands#m-muteownmic), [`FlyCamHands.SparkPressed`](/game-api/types/global-e-h/flycamhands#m-sparkpressed), [`FlyCamInputController.FlyCamInputController`](/game-api/types/global-e-h/flycaminputcontroller#m-ctor), [`GenericOpenXRInputController.GenericOpenXRInputController`](/game-api/types/global-e-h/genericopenxrinputcontroller#m-ctor), [`GrabAssistController.StartUpdatingGrabAssist`](/game-api/types/global-e-h/grabassistcontroller#m-startupdatinggrabassist), [`GrabAssistController.StopUpdatingGrabAssist`](/game-api/types/global-e-h/grabassistcontroller#m-stopupdatinggrabassist) and 67 more.
