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
| <Link id="m-ctor" /><code>{"VirtualKeyboard()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bendingaxis" /><code>{"private Vector3 bendingAxis"}</code> | Axis the keyboard curves around when `bendingRadius` is positive. |
| <Link id="m-bendingnormal" /><code>{"private Vector3 bendingNormal"}</code> | Direction the keyboard faces, used when bending the key layout. |
| <Link id="m-bendingradius" /><code>{"private float bendingRadius"}</code> | Radius of the keyboard's curve. Zero or less (the default is -1) keeps the keys flat. |
| <Link id="m-doubleshifttimer" /><code>{"private float doubleShiftTimer"}</code> | Seconds within which a second shift press locks shift (default 0.5). |
| <Link id="m-input" /><code>{"private string input"}</code> | Backing field for `Input`, the text typed so far. |
| <Link id="m-isshiftlocked" /><code>{"private bool isShiftLocked"}</code> | True when shift is locked by a double press, so it stays on after typing a character. |
| <Link id="m-keyparent" /><code>{"private Transform keyParent"}</code> | Transform the spawned keys are parented to. |
| <Link id="m-keyprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualkey">{"VirtualKey"}</Link>{" keyPrefab"}</code> | The `VirtualKey` prefab spawned for each key. |
| <Link id="m-originoffset" /><code>{"private Vector2 originOffset"}</code> | Offset added to every key's layout position after scaling. |
| <Link id="m-scale" /><code>{"private float scale"}</code> | Multiplier applied to the key layout positions. |
| <Link id="m-setup" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{" setup"}</code> | The `VirtualKeyboardSetup` asset that lists the keys and their layout positions. |
| <Link id="m-shiftlockmarker" /><code>{"private GameObject shiftLockMarker"}</code> | Object meant to show that shift lock is on. Not used in this class's code. |
| <Link id="m-timetodoubleshift" /><code>{"private float timeToDoubleShift"}</code> | Real time until which a second shift press counts as a double press. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-input-2" /><code>{"string Input { get; set; }"}</code> | The typed text. Setting it raises `InputChanged` and releases shift unless shift is locked. |
| <Link id="m-isshiftpressed" /><code>{"bool IsShiftPressed { get; private set; }"}</code> | True while shift is active. |
| <Link id="m-isshowingsecret" /><code>{"bool IsShowingSecret { get; private set; }"}</code> | Whether secret text is shown in plain. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-displaysecrettoggled" /><code>{"event Action<bool> DisplaySecretToggled"}</code> | Raised when secret (password) display is toggled. |
| <Link id="m-inputchanged" /><code>{"event Action InputChanged"}</code> | Raised when the text changes. |
| <Link id="m-nextpressed" /><code>{"event Action NextPressed"}</code> | Raised when return is pressed. |
| <Link id="m-shiftchanged" /><code>{"event Action<bool> ShiftChanged"}</code> | Raised when shift turns on or off. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearfocus" /><code>{"void ClearFocus()"}</code> | Removes every `InputChanged` and `NextPressed` listener, so the previous field stops receiving input. |
| <Link id="m-keypressed" /><code>{"void KeyPressed(KeyCode key)"}</code> | Handles a key: letters, digits, symbols, backspace, space, return (raises `NextPressed`) and shift. |
| <Link id="m-togglesecret" /><code>{"void ToggleSecret(bool isShowingSecret)"}</code> | Sets whether secret text is shown and raises `DisplaySecretToggled`. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"private void GetPosition(Vector2 original, out Vector3 position, out Quaternion rotation)"}</code> | Turns a key's 2D layout position into a local position and rotation, applying `scale`, `originOffset` and the optional bend. |
| <Link id="m-includeletter" /><code>{"private void IncludeLetter(string letter)"}</code> | Appends a letter to `Input`, upper case if shift is down and lower case otherwise. |
| <Link id="m-includenumber" /><code>{"private void IncludeNumber(int number)"}</code> | Appends a digit to `Input`. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Editor only: draws a wire box at each key position from `setup` while not playing. |
| <Link id="m-pressshift" /><code>{"private void PressShift()"}</code> | Toggles shift. A second press within `doubleShiftTimer` seconds turns on shift lock instead. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Spawns one `keyPrefab` per entry in `setup` under `keyParent` and places each one. |

</details>

## Used in

Members of other types that take, return or hold a `VirtualKeyboard`:

[`VirtualKey.Setup`](/mod/game-api/types/global-t-x/virtualkey#m-setup), [`VirtualKey.virtualKeyboard`](/mod/game-api/types/global-t-x/virtualkey#m-virtualkeyboard).
