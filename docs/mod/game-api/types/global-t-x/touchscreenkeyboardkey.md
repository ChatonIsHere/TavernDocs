---
title: "TouchScreenKeyboardKey"
description: "One key on the in-game VR touch screen keyboard."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TouchScreenKeyboardKey

A **class** in `Root.Township`, the global namespace.

One key on the in-game VR touch screen keyboard. Shows its label (changing with shift), sends its key to the `TouchScreenKeyboard` when pressed, and repeats backspace when held. Client only.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`BasicTouchScreenButton`](/mod/game-api/types/global-a-b/basictouchscreenbutton), [`ILabeledTouchScreenButton`](/mod/game-api/types/global-i-l/ilabeledtouchscreenbutton), [`ITouchScreenButton`](/mod/game-api/types/global-i-l/itouchscreenbutton)
- **Nested types** [`BackspaceActions`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey-backspaceactions), [`KeySizeType`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey-keysizetype), [`SpecialKeySetup`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey-specialkeysetup)
- **Attributes** `SelectionBase`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TouchScreenKeyboardKey()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-spacebuttonsize" /><code>{"Vector2 spaceButtonSize"}</code> | Touch size used for the space bar. |

<details>
<summary>25 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backspacedelay" /><code>{"private float backspaceDelay"}</code> | Time left before the held backspace moves to its next stage. |
| <Link id="m-buttontype" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboardkey-keysizetype">{"TouchScreenKeyboardKey.KeySizeType"}</Link>{" buttonType"}</code> | Size class of the key (normal, suggestion or space bar), set from the key code. |
| <Link id="m-changes" /><code>{"private List<UnityEvent> changes"}</code> | Events to run when this key is pressed, from `onPressChange`. |
| <Link id="m-closestdistance" /><code>{"private float closestDistance"}</code> | Squared distance of the nearest finger this frame. |
| <Link id="m-closestdistancetopresssquared" /><code>{"private float closestDistanceToPressSquared"}</code> | Squared distance under which the key starts moving towards the finger. |
| <Link id="m-completiontext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" completionText"}</code> | Label used for word suggestion keys. |
| <Link id="m-continuousbackspacedelay" /><code>{"private float continuousBackspaceDelay"}</code> | Time until the next repeated backspace. |
| <Link id="m-currentaction" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboardkey-backspaceactions">{"TouchScreenKeyboardKey.BackspaceActions"}</Link>{" currentAction"}</code> | Stage of a held backspace: single, continuous or word. |
| <Link id="m-depressedposition" /><code>{"private Vector3 depressedPosition"}</code> | Local position of the key cap when no finger is close. |
| <Link id="m-distanceposition" /><code>{"private Transform distancePosition"}</code> | Transform moved in and out as a finger gets near. |
| <Link id="m-distancescaling" /><code>{"private Transform distanceScaling"}</code> | Transform scaled by finger distance when `scaleWithDistanceOn` is set. Key images are also spawned under it. |
| <Link id="m-isusingspecialsetup" /><code>{"private bool isUsingSpecialSetup"}</code> | Not used in this build. |
| <Link id="m-onpresschange" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboardkey-specialkeysetup">{"TouchScreenKeyboardKey.SpecialKeySetup"}</Link>{"[] onPressChange"}</code> | Per key code, events to invoke each time that key is pressed. |
| <Link id="m-pressmaterial" /><code>{"private Material pressMaterial"}</code> | Material shown while pressed. |
| <Link id="m-pressrenderer" /><code>{"private Renderer pressRenderer"}</code> | Renderer whose material swaps on press and release. |
| <Link id="m-releasedmaterial" /><code>{"private Material releasedMaterial"}</code> | Material shown when released. |
| <Link id="m-scalewithdistanceon" /><code>{"private bool scaleWithDistanceOn"}</code> | Scales the key by finger distance when true. |
| <Link id="m-scalewithdistancesquared" /><code>{"private AnimationCurve scaleWithDistanceSquared"}</code> | Curve from squared finger distance to key scale. |
| <Link id="m-specialsetups" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboardkey-specialkeysetup">{"TouchScreenKeyboardKey.SpecialKeySetup"}</Link>{"[] specialSetups"}</code> | Per key code, events run once at setup to change that key's look. |
| <Link id="m-suggestionbuttonsize" /><code>{"private Vector2 suggestionButtonSize"}</code> | Button size for suggestion keys (F5 to F8). |
| <Link id="m-text" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" text"}</code> | Main key label. |
| <Link id="m-touchdistance" /><code>{"private float touchDistance"}</code> | Touch depth of the nearest finger, used with `touchDistanceToPress`. |
| <Link id="m-touchdistancetopress" /><code>{"private AnimationCurve touchDistanceToPress"}</code> | Curve from touch depth to how far the key cap moves. |
| <Link id="m-updatebackspace" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateBackspace"}</code> | Registered update method for held backspace. |
| <Link id="m-virtualkeyboard" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" virtualKeyboard"}</code> | The keyboard this key belongs to. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buttonsize" /><code>{"override Vector2 ButtonSize { get; }"}</code> | Touch size of the key: the base size, the suggestion size, or the space bar size. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-info" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" Info { get; set; }"}</code> | Key codes (normal and shifted) this key sends. |
| <Link id="m-text-2" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" Text { get; }"}</code> | The label in use: the main text, or the completion text when the main one is hidden. |

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
| <Link id="m-getbuttontypefromkeycode" /><code><Link to="/mod/game-api/types/global-t-x/touchscreenkeyboardkey-keysizetype">{"TouchScreenKeyboardKey.KeySizeType"}</Link>{" GetButtonTypeFromKeyCode(KeyCode keycode, out Vector2 size)"}</code> | Size type for a key code: Space is the space bar, F5 to F8 are suggestion keys, everything else is a base key. |
| <Link id="m-gettext" /><code>{"string GetText()"}</code> | The key's current label. |
| <Link id="m-initshowingsecret" /><code>{"void InitShowingSecret(GameObject hideObject)"}</code> | Hides the given object unless the keyboard's current user shows secret (password) text. |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" info, "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" virtualKeyboard, bool? scaleWithDistance = null)"}</code> | Sets the key's layout info and keyboard, applies any special setup for that key, and otherwise labels it and follows shift changes. |
| <Link id="m-setupdistance" /><code>{"void SetupDistance()"}</code> | Applies the closest finger distance: scales the key if enabled and pushes it in when a finger is close enough. |
| <Link id="m-updatedistance" /><code>{"void UpdateDistance(float distanceSquared, float touchDistance)"}</code> | Records a finger distance if it is closer than any seen since `ClearDistance`. |
| <Link id="m-internalpress" /><code>{"protected override void InternalPress()"}</code> | Sends the key (or its shift key) to the keyboard, starts the backspace repeat for backspace, and runs any on-press events. |
| <Link id="m-internalrelease" /><code>{"protected override void InternalRelease()"}</code> | Restores the released material and stops the backspace repeat. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforspecialsetup" /><code>{"private bool CheckForSpecialSetup("}<Link to="/mod/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" info)"}</code> | Applies mapped function-key visuals and special setups for this key, and collects its on-press events. True if any applied. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks from the keyboard's shift change and stops the backspace update. |
| <Link id="m-setupcorereferences" /><code>{"private void SetupCoreReferences("}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" virtualKeyboard, bool? scaleWithDistance)"}</code> | Stores the keyboard, picks the key size from the key code and optionally overrides distance scaling. |
| <Link id="m-updatebackspace-2" /><code>{"private void UpdateBackspace()"}</code> | Per-frame while backspace is held: one delete, then repeated deletes, then whole-word deletes. |
| <Link id="m-updateimage" /><code>{"private void UpdateImage(bool isShiftPressed)"}</code> | Sets the label to the character for the current key, upper or lower case by shift. |

</details>

## Used in

Members of other types that take, return or hold a `TouchScreenKeyboardKey`:

[`TouchScreenKeyboard.AddExtraKey`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-addextrakey), [`TouchScreenKeyboard.keyPrefab`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-keyprefab), [`TouchScreenKeyboard.SpawnKey`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-spawnkey).
