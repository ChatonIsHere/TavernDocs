---
title: "TouchScreenKeyboardKey"
description: "One key on the in-game VR touch screen keyboard."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TouchScreenKeyboardKey

A **class** in `Root.Township`, no namespace.

One key on the in-game VR touch screen keyboard. Shows its label (changing with shift), sends its key to the `TouchScreenKeyboard` when pressed, and repeats backspace when held. Client only.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`BasicTouchScreenButton`](/game-api/types/global-a-b/basictouchscreenbutton), [`ILabeledTouchScreenButton`](/game-api/types/global-i-l/ilabeledtouchscreenbutton), [`ITouchScreenButton`](/game-api/types/global-i-l/itouchscreenbutton)
- **Nested types** [`BackspaceActions`](/game-api/types/global-t-x/touchscreenkeyboardkey-backspaceactions), [`KeySizeType`](/game-api/types/global-t-x/touchscreenkeyboardkey-keysizetype), [`SpecialKeySetup`](/game-api/types/global-t-x/touchscreenkeyboardkey-specialkeysetup)
- **Attributes** `SelectionBase`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TouchScreenKeyboardKey()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-spacebuttonsize" /><code>{"Vector2 spaceButtonSize"}</code> | Touch size used for the space bar. |

<details>
<summary>25 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-backspacedelay" /><code>{"private float backspaceDelay"}</code> |
| <Link id="m-buttontype" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenkeyboardkey-keysizetype">{"TouchScreenKeyboardKey.KeySizeType"}</Link>{" buttonType"}</code> |
| <Link id="m-changes" /><code>{"private List<UnityEvent> changes"}</code> |
| <Link id="m-closestdistance" /><code>{"private float closestDistance"}</code> |
| <Link id="m-closestdistancetopresssquared" /><code>{"private float closestDistanceToPressSquared"}</code> |
| <Link id="m-completiontext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" completionText"}</code> |
| <Link id="m-continuousbackspacedelay" /><code>{"private float continuousBackspaceDelay"}</code> |
| <Link id="m-currentaction" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenkeyboardkey-backspaceactions">{"TouchScreenKeyboardKey.BackspaceActions"}</Link>{" currentAction"}</code> |
| <Link id="m-depressedposition" /><code>{"private Vector3 depressedPosition"}</code> |
| <Link id="m-distanceposition" /><code>{"private Transform distancePosition"}</code> |
| <Link id="m-distancescaling" /><code>{"private Transform distanceScaling"}</code> |
| <Link id="m-isusingspecialsetup" /><code>{"private bool isUsingSpecialSetup"}</code> |
| <Link id="m-onpresschange" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenkeyboardkey-specialkeysetup">{"TouchScreenKeyboardKey.SpecialKeySetup"}</Link>{"[] onPressChange"}</code> |
| <Link id="m-pressmaterial" /><code>{"private Material pressMaterial"}</code> |
| <Link id="m-pressrenderer" /><code>{"private Renderer pressRenderer"}</code> |
| <Link id="m-releasedmaterial" /><code>{"private Material releasedMaterial"}</code> |
| <Link id="m-scalewithdistanceon" /><code>{"private bool scaleWithDistanceOn"}</code> |
| <Link id="m-scalewithdistancesquared" /><code>{"private AnimationCurve scaleWithDistanceSquared"}</code> |
| <Link id="m-specialsetups" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenkeyboardkey-specialkeysetup">{"TouchScreenKeyboardKey.SpecialKeySetup"}</Link>{"[] specialSetups"}</code> |
| <Link id="m-suggestionbuttonsize" /><code>{"private Vector2 suggestionButtonSize"}</code> |
| <Link id="m-text" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" text"}</code> |
| <Link id="m-touchdistance" /><code>{"private float touchDistance"}</code> |
| <Link id="m-touchdistancetopress" /><code>{"private AnimationCurve touchDistanceToPress"}</code> |
| <Link id="m-updatebackspace" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateBackspace"}</code> |
| <Link id="m-virtualkeyboard" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" virtualKeyboard"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buttonsize" /><code>{"override Vector2 ButtonSize { get; }"}</code> | Touch size of the key: the base size, the suggestion size, or the space bar size. |

<details>
<summary>2 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-info" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" Info { get; set; }"}</code> |
| <Link id="m-text-2" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" Text { get; }"}</code> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-shiftchanged" /><code>{"event Action<bool> ShiftChanged"}</code> | Shift change event declared on the key. Nothing in this class raises it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applytext" /><code>{"void ApplyText(string newText)"}</code> | Sets the key's label, if it differs from the current one. |
| <Link id="m-cleardistance" /><code>{"void ClearDistance()"}</code> | Resets the closest finger distance before a new round of `UpdateDistance` calls. |
| <Link id="m-getbuttontypefromkeycode" /><code><Link to="/game-api/types/global-t-x/touchscreenkeyboardkey-keysizetype">{"TouchScreenKeyboardKey.KeySizeType"}</Link>{" GetButtonTypeFromKeyCode(KeyCode keycode, out Vector2 size)"}</code> | Size type for a key code: Space is the space bar, F5 to F8 are suggestion keys, everything else is a base key. |
| <Link id="m-gettext" /><code>{"string GetText()"}</code> | The key's current label. |
| <Link id="m-initshowingsecret" /><code>{"void InitShowingSecret(GameObject hideObject)"}</code> | Hides the given object unless the keyboard's current user shows secret (password) text. |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" info, "}<Link to="/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" virtualKeyboard, bool? scaleWithDistance = null)"}</code> | Sets the key's layout info and keyboard, applies any special setup for that key, and otherwise labels it and follows shift changes. |
| <Link id="m-setupdistance" /><code>{"void SetupDistance()"}</code> | Applies the closest finger distance: scales the key if enabled and pushes it in when a finger is close enough. |
| <Link id="m-updatedistance" /><code>{"void UpdateDistance(float distanceSquared, float touchDistance)"}</code> | Records a finger distance if it is closer than any seen since `ClearDistance`. |
| <Link id="m-internalpress" /><code>{"protected override void InternalPress()"}</code> | Sends the key (or its shift key) to the keyboard, starts the backspace repeat for backspace, and runs any on-press events. |
| <Link id="m-internalrelease" /><code>{"protected override void InternalRelease()"}</code> | Restores the released material and stops the backspace repeat. |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkforspecialsetup" /><code>{"private bool CheckForSpecialSetup("}<Link to="/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" info)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-setupcorereferences" /><code>{"private void SetupCoreReferences("}<Link to="/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" virtualKeyboard, bool? scaleWithDistance)"}</code> |
| <Link id="m-updatebackspace-2" /><code>{"private void UpdateBackspace()"}</code> |
| <Link id="m-updateimage" /><code>{"private void UpdateImage(bool isShiftPressed)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `TouchScreenKeyboardKey`:

[`TouchScreenKeyboard.AddExtraKey`](/game-api/types/global-t-x/touchscreenkeyboard#m-addextrakey), [`TouchScreenKeyboard.keyPrefab`](/game-api/types/global-t-x/touchscreenkeyboard#m-keyprefab), [`TouchScreenKeyboard.SpawnKey`](/game-api/types/global-t-x/touchscreenkeyboard#m-spawnkey).
