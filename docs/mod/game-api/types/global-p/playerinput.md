---
title: "PlayerInput"
description: "One hand's input component on the platform player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerInput

A **class** in `Root.Township`, the global namespace.

One hand's input component on the platform player. Holds the hand index, raw button state, the D-pad helper and haptics. Client side; get it from the player's `LeftInput` or `RightInput`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerInput()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actionsmanager" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controlleractionsmanager">{"ControllerActionsManager"}</Link>{" actionsManager"}</code> | <span className="api-desc">The actions manager for this hand.</span> |
| <Link id="m-handindex" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex"}</code> | <span className="api-desc">Which hand this input is for.</span> |
| <Link id="m-inputcontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/deviceinputcontroller">{"DeviceInputController"}</Link>{" inputController"}</code> | <span className="api-desc">The platform controller feeding this hand; set by `SetPlatformController`.</span> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | <span className="api-desc">Backing field for `TargetTransform`.</span> |
| <Link id="m-vrtrackeddevice" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/vrtrackeddevice">{"VRTrackedDevice"}</Link>{" vrTrackedDevice"}</code> | <span className="api-desc">Tracked device for the target transform; disposed when the target changes.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actionsmanager-2" /><code><Link to="/mod/game-api/types/global-c-d/controlleractionsmanager">{"ControllerActionsManager"}</Link>{" ActionsManager { get; }"}</code> | <span className="api-desc">The `ControllerActionsManager` set on the prefab for this hand.</span> |
| <Link id="m-dpad" /><code><Link to="/mod/game-api/types/global-c-d/controllerdpad">{"ControllerDPad"}</Link>{" DPad { get; private set; }"}</code> | <span className="api-desc">A `ControllerDPad` created in `Awake` and updated every frame for this hand.</span> |
| <Link id="m-handindex-2" /><code><Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" { get; }"}</code> | <span className="api-desc">Which hand this input is for (left or right), set on the prefab.</span> |
| <Link id="m-hasplatformcontroller" /><code>{"bool HasPlatformController { get; private set; }"}</code> | <span className="api-desc">True once `SetPlatformController` has given this hand a device input controller.</span> |
| <Link id="m-inputcontroller-2" /><code><Link to="/mod/game-api/types/global-c-d/deviceinputcontroller">{"DeviceInputController"}</Link>{" InputController { get; }"}</code> | <span className="api-desc">The device input controller that feeds this hand, or null until one is set.</span> |
| <Link id="m-otherplayerinput" /><code><Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" OtherPlayerInput { get; }"}</code> | <span className="api-desc">The input for the opposite hand, taken from the owning player.</span> |
| <Link id="m-player" /><code><Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" Player { get; private set; }"}</code> | <span className="api-desc">The platform player this hand belongs to, set by `InitializeForPlayer`.</span> |
| <Link id="m-rawinput" /><code><Link to="/mod/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" RawInput { get; }"}</code> | <span className="api-desc">The `ControllerInput` holding this hand's current button and axis values. The input controller writes into it each frame while the player is loaded.</span> |
| <Link id="m-targettransform-2" /><code>{"Transform TargetTransform { get; set; }"}</code> | <span className="api-desc">The transform the hand tracks. Setting a new one rebuilds the tracked device (empty in this build).</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-trackeddevice" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/trackeddevice">{"TrackedDevice"}</Link>{" "}<Link to="/mod/game-api/types/alta-menus/trackeddevice">{"TrackedDevice"}</Link>{" { get; }"}</code> | <span className="api-desc">The left or right controller device, by `handIndex`.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-receivedcontroller" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{"> ReceivedController"}</code> | <span className="api-desc">Raised when `SetPlatformController` assigns a device input controller.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeforplayer" /><code>{"void InitializeForPlayer("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Stores the platform player that owns this hand. Needed before `OtherPlayerInput` works.</span> |
| <Link id="m-setplatformcontroller" /><code>{"void SetPlatformController("}<Link to="/mod/game-api/types/global-c-d/deviceinputcontroller">{"DeviceInputController"}</Link>{" inputController)"}</code> | <span className="api-desc">Assigns the device input controller for this hand and raises `ReceivedController`.</span> |
| <Link id="m-triggerhaptic" /><code>{"void TriggerHaptic(float strength, float duration, float frequency = 80)"}</code> | <span className="api-desc">Client: vibrates this controller, either at a fixed strength for a duration or following a curve. Scaled by the haptics strength setting; does nothing without a controller.</span> |
| <Link id="m-triggerhaptic-2" /><code>{"void TriggerHaptic(AnimationCurve curve, float strength = 1, float frequency = 80)"}</code> | <span className="api-desc">Client: vibrates this controller, either at a fixed strength for a duration or following a curve. Scaled by the haptics strength setting; does nothing without a controller.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Creates the D-pad helper.</span> |
| <Link id="m-createtrackeddevice" /><code>{"private void CreateTrackedDevice()"}</code> | <span className="api-desc">Empty in this build.</span> |
| <Link id="m-haptic" /><code>{"private IEnumerator Haptic(float strength, float duration, float frequency) (iterator)"}</code> | <span className="api-desc">Coroutine that plays a haptic pulse, either at a fixed strength for a duration or following a curve, scaled by the haptics strength setting.</span> |
| <Link id="m-haptic-2" /><code>{"private IEnumerator Haptic(AnimationCurve curve, float strength, float frequency) (iterator)"}</code> | <span className="api-desc">Coroutine that plays a haptic pulse, either at a fixed strength for a duration or following a curve, scaled by the haptics strength setting.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Disables the D-pad, disposes the tracked device and stops the pre-render position update.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Enables the D-pad and hooks the pre-render position update.</span> |
| <Link id="m-positionpostprocessor" /><code>{"private void PositionPostProcessor(ref Vector3 input)"}</code> | <span className="api-desc">Adds the player height fix to a tracked position's height.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Pushes the platform controller's input into this hand and updates the D-pad.</span> |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition()"}</code> | <span className="api-desc">Just before rendering, asks the platform controller to update this hand's position.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerInput`:

<div className="api-used-in">

[`AccessibleDocks.CheckInput`](/mod/game-api/types/alta-player/accessibledocks#m-checkinput), [`AccessibleDocks.StopInput`](/mod/game-api/types/alta-player/accessibledocks#m-stopinput), [`CosmeticCustomizationManager.ExitCustomizationRoom`](/mod/game-api/types/alta-customization/cosmeticcustomizationmanager#m-exitcustomizationroom), [`CosmeticCustomizationManager.Randomize`](/mod/game-api/types/alta-customization/cosmeticcustomizationmanager#m-randomize-2), [`Book.ClientMoveLeft`](/mod/game-api/types/alta-items/book#m-clientmoveleft), [`Book.ClientMoveRight`](/mod/game-api/types/alta-items/book#m-clientmoveright), [`Book.ClientSwiped`](/mod/game-api/types/alta-items/book#m-clientswiped), [`QuickAccessMenuController.ButtonPress`](/mod/game-api/types/alta-player/quickaccessmenucontroller#m-buttonpress), [`QuickAccessMenuController.ButtonRelease`](/mod/game-api/types/alta-player/quickaccessmenucontroller#m-buttonrelease), [`QuickAccessMenuController.ToggleButtonPress`](/mod/game-api/types/alta-player/quickaccessmenucontroller#m-togglebuttonpress), [`HandCamera.EndHaptics`](/mod/game-api/types/alta-customization/handcamera#m-endhaptics), [`HandCamera.LongHaptic`](/mod/game-api/types/alta-customization/handcamera#m-longhaptic), [`HandCamera.longHaptics`](/mod/game-api/types/alta-customization/handcamera#m-longhaptics), [`HandCamera.Screenshot`](/mod/game-api/types/alta-customization/handcamera#m-screenshot-2), [`HandCamera.StartHaptics`](/mod/game-api/types/alta-customization/handcamera#m-starthaptics), [`LiveDataDisplayView.ToggleFPSDisplay`](/mod/game-api/types/alta-utilities/livedatadisplayview#m-togglefpsdisplay), [`AutoCamDeviceController.CreateController`](/mod/game-api/types/global-a-b/autocamdevicecontroller#m-createcontroller), [`BaseOpenXRInputController.BaseOpenXRInputController`](/mod/game-api/types/global-a-b/baseopenxrinputcontroller#m-ctor), [`CharacterPoseSaver.ButtonPressed`](/mod/game-api/types/global-c-d/characterposesaver#m-buttonpressed), [`ClickedEndEventHandler.BeginInvoke`](/mod/game-api/types/global-c-d/clickedendeventhandler#m-begininvoke), [`ClickedEndEventHandler.Invoke`](/mod/game-api/types/global-c-d/clickedendeventhandler#m-invoke), [`ClickedEventHandler.BeginInvoke`](/mod/game-api/types/global-c-d/clickedeventhandler#m-begininvoke), [`ClickedEventHandler.Invoke`](/mod/game-api/types/global-c-d/clickedeventhandler#m-invoke), [`Controller.Initialize`](/mod/game-api/types/global-c-d/controller#m-initialize), [`Controller.PlayerInput`](/mod/game-api/types/global-c-d/controller#m-playerinput), [`ControllerAction.AddInputAndListeners`](/mod/game-api/types/global-c-d/controlleraction#m-addinputandlisteners), [`ControllerAction.OnActionEnded`](/mod/game-api/types/global-c-d/controlleraction#m-onactionended), [`ControllerAction.OnActionStarted`](/mod/game-api/types/global-c-d/controlleraction#m-onactionstarted), [`ControllerAction.PopulateInputSourcePair`](/mod/game-api/types/global-c-d/controlleraction#m-populateinputsourcepair), [`ControllerAction.RemoveAllInputsAndListeners`](/mod/game-api/types/global-c-d/controlleraction#m-removeallinputsandlisteners), [`ControllerAction.RemoveInputsAndListeners`](/mod/game-api/types/global-c-d/controlleraction#m-removeinputsandlisteners), [`ControllerAction.SetInputAndListeners`](/mod/game-api/types/global-c-d/controlleraction#m-setinputandlisteners), [`ControllerActionProxy.InvokeEnded`](/mod/game-api/types/global-c-d/controlleractionproxy#m-invokeended), [`ControllerActionProxy.InvokeStarted`](/mod/game-api/types/global-c-d/controlleractionproxy#m-invokestarted), [`ControllerActions.ControllerActions`](/mod/game-api/types/global-c-d/controlleractions#m-ctor), [`ControllerActions.playerInput`](/mod/game-api/types/global-c-d/controlleractions#m-playerinput), [`ControllerActionsManager.playerInput`](/mod/game-api/types/global-c-d/controlleractionsmanager#m-playerinput), [`ControllerDPad.CalculateSwipe`](/mod/game-api/types/global-c-d/controllerdpad#m-calculateswipe), [`ControllerDPad.ControllerDPad`](/mod/game-api/types/global-c-d/controllerdpad#m-ctor), [`ControllerDPad.PadTouched`](/mod/game-api/types/global-c-d/controllerdpad#m-padtouched), [`ControllerDPad.playerInput`](/mod/game-api/types/global-c-d/controllerdpad#m-playerinput), [`ControllerExtension.Input`](/mod/game-api/types/global-c-d/controllerextension#m-input), [`ControllerInput.SetAndCallEvents`](/mod/game-api/types/global-c-d/controllerinput#m-setandcallevents), [`ControllerInputButtonPressed.ButtonPressed`](/mod/game-api/types/global-c-d/controllerinputbuttonpressed#m-buttonpressed), [`DamageDebugDisplay.ToggleFPSDisplay`](/mod/game-api/types/global-c-d/damagedebugdisplay#m-togglefpsdisplay), [`DeviceInputController.DeviceInputController`](/mod/game-api/types/global-c-d/deviceinputcontroller#m-ctor), [`DeviceInputController.PlayerInput`](/mod/game-api/types/global-c-d/deviceinputcontroller#m-playerinput), [`DeviceInputController.SendInputTo`](/mod/game-api/types/global-c-d/deviceinputcontroller#m-sendinputto), [`DmgTDisplay.ToggleFPSDisplay`](/mod/game-api/types/global-c-d/dmgtdisplay#m-togglefpsdisplay), [`DPadInputSource.DPadInputSource`](/mod/game-api/types/global-c-d/dpadinputsource#m-ctor), [`DPadInputSource.playerInput`](/mod/game-api/types/global-c-d/dpadinputsource#m-playerinput), [`FlyCamDeviceController.CreateController`](/mod/game-api/types/global-e-h/flycamdevicecontroller#m-createcontroller), [`FlyCamHands.InvisibilityPressed`](/mod/game-api/types/global-e-h/flycamhands#m-invisibilitypressed), [`FlyCamHands.ModMuteMic`](/mod/game-api/types/global-e-h/flycamhands#m-modmutemic), [`FlyCamHands.MuteOwnMic`](/mod/game-api/types/global-e-h/flycamhands#m-muteownmic), [`FlyCamHands.SparkPressed`](/mod/game-api/types/global-e-h/flycamhands#m-sparkpressed), [`FlyCamInputController.FlyCamInputController`](/mod/game-api/types/global-e-h/flycaminputcontroller#m-ctor), [`GenericOpenXRInputController.GenericOpenXRInputController`](/mod/game-api/types/global-e-h/genericopenxrinputcontroller#m-ctor), [`GrabAssistController.StartUpdatingGrabAssist`](/mod/game-api/types/global-e-h/grabassistcontroller#m-startupdatinggrabassist), [`GrabAssistController.StopUpdatingGrabAssist`](/mod/game-api/types/global-e-h/grabassistcontroller#m-stopupdatinggrabassist) and 67 more.

</div>
