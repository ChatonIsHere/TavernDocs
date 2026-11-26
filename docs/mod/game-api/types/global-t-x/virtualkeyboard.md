---
title: "VirtualKeyboard"
description: "In-world VR keyboard that builds keys from a VirtualKeyboardSetup, optionally bent around an axis, and keeps the typed text."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VirtualKeyboard

A **class** in `Root.Township`, the global namespace.

In-world VR keyboard that builds keys from a `VirtualKeyboardSetup`, optionally bent around an axis, and keeps the typed text. Client side.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VirtualKeyboard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bendingaxis" /><code>{"private Vector3 bendingAxis"}</code> | <span className="api-desc">Axis the keyboard curves around when `bendingRadius` is positive.</span> |
| <Link id="m-bendingnormal" /><code>{"private Vector3 bendingNormal"}</code> | <span className="api-desc">Direction the keyboard faces, used when bending the key layout.</span> |
| <Link id="m-bendingradius" /><code>{"private float bendingRadius"}</code> | <span className="api-desc">Radius of the keyboard's curve. Zero or less (the default is -1) keeps the keys flat.</span> |
| <Link id="m-doubleshifttimer" /><code>{"private float doubleShiftTimer"}</code> | <span className="api-desc">Seconds within which a second shift press locks shift (default 0.5).</span> |
| <Link id="m-input" /><code>{"private string input"}</code> | <span className="api-desc">Backing field for `Input`, the text typed so far.</span> |
| <Link id="m-isshiftlocked" /><code>{"private bool isShiftLocked"}</code> | <span className="api-desc">True when shift is locked by a double press, so it stays on after typing a character.</span> |
| <Link id="m-keyparent" /><code>{"private Transform keyParent"}</code> | <span className="api-desc">Transform the spawned keys are parented to.</span> |
| <Link id="m-keyprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualkey">{"VirtualKey"}</Link>{" keyPrefab"}</code> | <span className="api-desc">The `VirtualKey` prefab spawned for each key.</span> |
| <Link id="m-originoffset" /><code>{"private Vector2 originOffset"}</code> | <span className="api-desc">Offset added to every key's layout position after scaling.</span> |
| <Link id="m-scale" /><code>{"private float scale"}</code> | <span className="api-desc">Multiplier applied to the key layout positions.</span> |
| <Link id="m-setup" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{" setup"}</code> | <span className="api-desc">The `VirtualKeyboardSetup` asset that lists the keys and their layout positions.</span> |
| <Link id="m-shiftlockmarker" /><code>{"private GameObject shiftLockMarker"}</code> | <span className="api-desc">Object meant to show that shift lock is on. Not used in this class's code.</span> |
| <Link id="m-timetodoubleshift" /><code>{"private float timeToDoubleShift"}</code> | <span className="api-desc">Real time until which a second shift press counts as a double press.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-input-2" /><code>{"string Input { get; set; }"}</code> | <span className="api-desc">The typed text. Setting it raises `InputChanged` and releases shift unless shift is locked.</span> |
| <Link id="m-isshiftpressed" /><code>{"bool IsShiftPressed { get; private set; }"}</code> | <span className="api-desc">True while shift is active.</span> |
| <Link id="m-isshowingsecret" /><code>{"bool IsShowingSecret { get; private set; }"}</code> | <span className="api-desc">Whether secret text is shown in plain.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-displaysecrettoggled" /><code>{"event Action<bool> DisplaySecretToggled"}</code> | <span className="api-desc">Raised when secret (password) display is toggled.</span> |
| <Link id="m-inputchanged" /><code>{"event Action InputChanged"}</code> | <span className="api-desc">Raised when the text changes.</span> |
| <Link id="m-nextpressed" /><code>{"event Action NextPressed"}</code> | <span className="api-desc">Raised when return is pressed.</span> |
| <Link id="m-shiftchanged" /><code>{"event Action<bool> ShiftChanged"}</code> | <span className="api-desc">Raised when shift turns on or off.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearfocus" /><code>{"void ClearFocus()"}</code> | <span className="api-desc">Removes every `InputChanged` and `NextPressed` listener, so the previous field stops receiving input.</span> |
| <Link id="m-keypressed" /><code>{"void KeyPressed(KeyCode key)"}</code> | <span className="api-desc">Handles a key: letters, digits, symbols, backspace, space, return (raises `NextPressed`) and shift.</span> |
| <Link id="m-togglesecret" /><code>{"void ToggleSecret(bool isShowingSecret)"}</code> | <span className="api-desc">Sets whether secret text is shown and raises `DisplaySecretToggled`.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"private void GetPosition(Vector2 original, out Vector3 position, out Quaternion rotation)"}</code> | <span className="api-desc">Turns a key's 2D layout position into a local position and rotation, applying `scale`, `originOffset` and the optional bend.</span> |
| <Link id="m-includeletter" /><code>{"private void IncludeLetter(string letter)"}</code> | <span className="api-desc">Appends a letter to `Input`, upper case if shift is down and lower case otherwise.</span> |
| <Link id="m-includenumber" /><code>{"private void IncludeNumber(int number)"}</code> | <span className="api-desc">Appends a digit to `Input`.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Editor only: draws a wire box at each key position from `setup` while not playing.</span> |
| <Link id="m-pressshift" /><code>{"private void PressShift()"}</code> | <span className="api-desc">Toggles shift. A second press within `doubleShiftTimer` seconds turns on shift lock instead.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Spawns one `keyPrefab` per entry in `setup` under `keyParent` and places each one.</span> |

</details>

## Used in

Members of other types that take, return or hold a `VirtualKeyboard`:

<div className="api-used-in">

[`VirtualKey.Setup`](/mod/game-api/types/global-t-x/virtualkey#m-setup), [`VirtualKey.virtualKeyboard`](/mod/game-api/types/global-t-x/virtualkey#m-virtualkeyboard).

</div>
