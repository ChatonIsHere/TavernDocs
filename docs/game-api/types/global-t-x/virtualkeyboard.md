---
title: "VirtualKeyboard"
description: "In-world VR keyboard that builds keys from a VirtualKeyboardSetup, optionally bent around an axis, and keeps the typed text."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VirtualKeyboard

A **class** in `Root.Township`, no namespace.

In-world VR keyboard that builds keys from a `VirtualKeyboardSetup`, optionally bent around an axis, and keeps the typed text. Client side.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VirtualKeyboard()"}</code> |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-bendingaxis" /><code>{"private Vector3 bendingAxis"}</code> |
| <Link id="m-bendingnormal" /><code>{"private Vector3 bendingNormal"}</code> |
| <Link id="m-bendingradius" /><code>{"private float bendingRadius"}</code> |
| <Link id="m-doubleshifttimer" /><code>{"private float doubleShiftTimer"}</code> |
| <Link id="m-input" /><code>{"private string input"}</code> |
| <Link id="m-isshiftlocked" /><code>{"private bool isShiftLocked"}</code> |
| <Link id="m-keyparent" /><code>{"private Transform keyParent"}</code> |
| <Link id="m-keyprefab" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualkey">{"VirtualKey"}</Link>{" keyPrefab"}</code> |
| <Link id="m-originoffset" /><code>{"private Vector2 originOffset"}</code> |
| <Link id="m-scale" /><code>{"private float scale"}</code> |
| <Link id="m-setup" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{" setup"}</code> |
| <Link id="m-shiftlockmarker" /><code>{"private GameObject shiftLockMarker"}</code> |
| <Link id="m-timetodoubleshift" /><code>{"private float timeToDoubleShift"}</code> |

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

| Member |
| --- |
| <Link id="m-getposition" /><code>{"private void GetPosition(Vector2 original, out Vector3 position, out Quaternion rotation)"}</code> |
| <Link id="m-includeletter" /><code>{"private void IncludeLetter(string letter)"}</code> |
| <Link id="m-includenumber" /><code>{"private void IncludeNumber(int number)"}</code> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |
| <Link id="m-pressshift" /><code>{"private void PressShift()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `VirtualKeyboard`:

[`VirtualKey.Setup`](/game-api/types/global-t-x/virtualkey#m-setup), [`VirtualKey.virtualKeyboard`](/game-api/types/global-t-x/virtualkey#m-virtualkeyboard).
