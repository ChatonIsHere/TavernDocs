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
| <Link id="m-ctor" /><code>{"TouchScreenKeyboardKey()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-spacebuttonsize" /><code>{"Vector2 spaceButtonSize"}</code> | <span className="api-desc">Touch size used for the space bar.</span> |

<details className="api-private">
<summary>25 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backspacedelay" /><code>{"private float backspaceDelay"}</code> | <span className="api-desc">Time left before the held backspace moves to its next stage.</span> |
| <Link id="m-buttontype" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboardkey-keysizetype">{"TouchScreenKeyboardKey.KeySizeType"}</Link>{" buttonType"}</code> | <span className="api-desc">Size class of the key (normal, suggestion or space bar), set from the key code.</span> |
| <Link id="m-changes" /><code>{"private List<UnityEvent> changes"}</code> | <span className="api-desc">Events to run when this key is pressed, from `onPressChange`.</span> |
| <Link id="m-closestdistance" /><code>{"private float closestDistance"}</code> | <span className="api-desc">Squared distance of the nearest finger this frame.</span> |
| <Link id="m-closestdistancetopresssquared" /><code>{"private float closestDistanceToPressSquared"}</code> | <span className="api-desc">Squared distance under which the key starts moving towards the finger.</span> |
| <Link id="m-completiontext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" completionText"}</code> | <span className="api-desc">Label used for word suggestion keys.</span> |
| <Link id="m-continuousbackspacedelay" /><code>{"private float continuousBackspaceDelay"}</code> | <span className="api-desc">Time until the next repeated backspace.</span> |
| <Link id="m-currentaction" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboardkey-backspaceactions">{"TouchScreenKeyboardKey.BackspaceActions"}</Link>{" currentAction"}</code> | <span className="api-desc">Stage of a held backspace: single, continuous or word.</span> |
| <Link id="m-depressedposition" /><code>{"private Vector3 depressedPosition"}</code> | <span className="api-desc">Local position of the key cap when no finger is close.</span> |
| <Link id="m-distanceposition" /><code>{"private Transform distancePosition"}</code> | <span className="api-desc">Transform moved in and out as a finger gets near.</span> |
| <Link id="m-distancescaling" /><code>{"private Transform distanceScaling"}</code> | <span className="api-desc">Transform scaled by finger distance when `scaleWithDistanceOn` is set. Key images are also spawned under it.</span> |
| <Link id="m-isusingspecialsetup" /><code>{"private bool isUsingSpecialSetup"}</code> | <span className="api-desc">Not used in this build.</span> |
| <Link id="m-onpresschange" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboardkey-specialkeysetup">{"TouchScreenKeyboardKey.SpecialKeySetup"}</Link>{"[] onPressChange"}</code> | <span className="api-desc">Per key code, events to invoke each time that key is pressed.</span> |
| <Link id="m-pressmaterial" /><code>{"private Material pressMaterial"}</code> | <span className="api-desc">Material shown while pressed.</span> |
| <Link id="m-pressrenderer" /><code>{"private Renderer pressRenderer"}</code> | <span className="api-desc">Renderer whose material swaps on press and release.</span> |
| <Link id="m-releasedmaterial" /><code>{"private Material releasedMaterial"}</code> | <span className="api-desc">Material shown when released.</span> |
| <Link id="m-scalewithdistanceon" /><code>{"private bool scaleWithDistanceOn"}</code> | <span className="api-desc">Scales the key by finger distance when true.</span> |
| <Link id="m-scalewithdistancesquared" /><code>{"private AnimationCurve scaleWithDistanceSquared"}</code> | <span className="api-desc">Curve from squared finger distance to key scale.</span> |
| <Link id="m-specialsetups" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboardkey-specialkeysetup">{"TouchScreenKeyboardKey.SpecialKeySetup"}</Link>{"[] specialSetups"}</code> | <span className="api-desc">Per key code, events run once at setup to change that key's look.</span> |
| <Link id="m-suggestionbuttonsize" /><code>{"private Vector2 suggestionButtonSize"}</code> | <span className="api-desc">Button size for suggestion keys (F5 to F8).</span> |
| <Link id="m-text" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" text"}</code> | <span className="api-desc">Main key label.</span> |
| <Link id="m-touchdistance" /><code>{"private float touchDistance"}</code> | <span className="api-desc">Touch depth of the nearest finger, used with `touchDistanceToPress`.</span> |
| <Link id="m-touchdistancetopress" /><code>{"private AnimationCurve touchDistanceToPress"}</code> | <span className="api-desc">Curve from touch depth to how far the key cap moves.</span> |
| <Link id="m-updatebackspace" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateBackspace"}</code> | <span className="api-desc">Registered update method for held backspace.</span> |
| <Link id="m-virtualkeyboard" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" virtualKeyboard"}</code> | <span className="api-desc">The keyboard this key belongs to.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buttonsize" /><code>{"override Vector2 ButtonSize { get; }"}</code> | <span className="api-desc">Touch size of the key: the base size, the suggestion size, or the space bar size.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-info" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" Info { get; set; }"}</code> | <span className="api-desc">Key codes (normal and shifted) this key sends.</span> |
| <Link id="m-text-2" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" Text { get; }"}</code> | <span className="api-desc">The label in use: the main text, or the completion text when the main one is hidden.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-shiftchanged" /><code>{"event Action<bool> ShiftChanged"}</code> | <span className="api-desc">Shift change event declared on the key. Nothing in this class raises it.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applytext" /><code>{"void ApplyText(string newText)"}</code> | <span className="api-desc">Sets the key's label, if it differs from the current one.</span> |
| <Link id="m-cleardistance" /><code>{"void ClearDistance()"}</code> | <span className="api-desc">Resets the closest finger distance before a new round of `UpdateDistance` calls.</span> |
| <Link id="m-getbuttontypefromkeycode" /><code><Link to="/mod/game-api/types/global-t-x/touchscreenkeyboardkey-keysizetype">{"TouchScreenKeyboardKey.KeySizeType"}</Link>{" GetButtonTypeFromKeyCode(KeyCode keycode, out Vector2 size)"}</code> | <span className="api-desc">Size type for a key code: Space is the space bar, F5 to F8 are suggestion keys, everything else is a base key.</span> |
| <Link id="m-gettext" /><code>{"string GetText()"}</code> | <span className="api-desc">The key's current label.</span> |
| <Link id="m-initshowingsecret" /><code>{"void InitShowingSecret(GameObject hideObject)"}</code> | <span className="api-desc">Hides the given object unless the keyboard's current user shows secret (password) text.</span> |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" info, "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" virtualKeyboard, bool? scaleWithDistance = null)"}</code> | <span className="api-desc">Sets the key's layout info and keyboard, applies any special setup for that key, and otherwise labels it and follows shift changes.</span> |
| <Link id="m-setupdistance" /><code>{"void SetupDistance()"}</code> | <span className="api-desc">Applies the closest finger distance: scales the key if enabled and pushes it in when a finger is close enough.</span> |
| <Link id="m-updatedistance" /><code>{"void UpdateDistance(float distanceSquared, float touchDistance)"}</code> | <span className="api-desc">Records a finger distance if it is closer than any seen since `ClearDistance`.</span> |
| <Link id="m-internalpress" /><code>{"protected override void InternalPress()"}</code> | <span className="api-desc">Sends the key (or its shift key) to the keyboard, starts the backspace repeat for backspace, and runs any on-press events.</span> |
| <Link id="m-internalrelease" /><code>{"protected override void InternalRelease()"}</code> | <span className="api-desc">Restores the released material and stops the backspace repeat.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforspecialsetup" /><code>{"private bool CheckForSpecialSetup("}<Link to="/mod/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" info)"}</code> | <span className="api-desc">Applies mapped function-key visuals and special setups for this key, and collects its on-press events. True if any applied.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks from the keyboard's shift change and stops the backspace update.</span> |
| <Link id="m-setupcorereferences" /><code>{"private void SetupCoreReferences("}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" virtualKeyboard, bool? scaleWithDistance)"}</code> | <span className="api-desc">Stores the keyboard, picks the key size from the key code and optionally overrides distance scaling.</span> |
| <Link id="m-updatebackspace-2" /><code>{"private void UpdateBackspace()"}</code> | <span className="api-desc">Per-frame while backspace is held: one delete, then repeated deletes, then whole-word deletes.</span> |
| <Link id="m-updateimage" /><code>{"private void UpdateImage(bool isShiftPressed)"}</code> | <span className="api-desc">Sets the label to the character for the current key, upper or lower case by shift.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TouchScreenKeyboardKey`:

<div className="api-used-in">

[`TouchScreenKeyboard.AddExtraKey`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-addextrakey), [`TouchScreenKeyboard.keyPrefab`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-keyprefab), [`TouchScreenKeyboard.SpawnKey`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-spawnkey).

</div>
