---
title: "VirtualKeyboard"
description: "class VirtualKeyboard in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VirtualKeyboard

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VirtualKeyboard()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bendingaxis" /><code>{"private Vector3 bendingAxis"}</code> |  |
| <Link id="m-bendingnormal" /><code>{"private Vector3 bendingNormal"}</code> |  |
| <Link id="m-bendingradius" /><code>{"private float bendingRadius"}</code> |  |
| <Link id="m-doubleshifttimer" /><code>{"private float doubleShiftTimer"}</code> |  |
| <Link id="m-input" /><code>{"private string input"}</code> |  |
| <Link id="m-isshiftlocked" /><code>{"private bool isShiftLocked"}</code> |  |
| <Link id="m-keyparent" /><code>{"private Transform keyParent"}</code> |  |
| <Link id="m-keyprefab" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualkey">{"VirtualKey"}</Link>{" keyPrefab"}</code> |  |
| <Link id="m-originoffset" /><code>{"private Vector2 originOffset"}</code> |  |
| <Link id="m-scale" /><code>{"private float scale"}</code> |  |
| <Link id="m-setup" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{" setup"}</code> |  |
| <Link id="m-shiftlockmarker" /><code>{"private GameObject shiftLockMarker"}</code> |  |
| <Link id="m-timetodoubleshift" /><code>{"private float timeToDoubleShift"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-input-2" /><code>{"string Input { get; set; }"}</code> |  |
| <Link id="m-isshiftpressed" /><code>{"bool IsShiftPressed { get; private set; }"}</code> |  |
| <Link id="m-isshowingsecret" /><code>{"bool IsShowingSecret { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-displaysecrettoggled" /><code>{"event Action<bool> DisplaySecretToggled"}</code> |  |
| <Link id="m-inputchanged" /><code>{"event Action InputChanged"}</code> |  |
| <Link id="m-nextpressed" /><code>{"event Action NextPressed"}</code> |  |
| <Link id="m-shiftchanged" /><code>{"event Action<bool> ShiftChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearfocus" /><code>{"void ClearFocus()"}</code> |  |
| <Link id="m-keypressed" /><code>{"void KeyPressed(KeyCode key)"}</code> |  |
| <Link id="m-togglesecret" /><code>{"void ToggleSecret(bool isShowingSecret)"}</code> |  |
| <Link id="m-getposition" /><code>{"private void GetPosition(Vector2 original, out Vector3 position, out Quaternion rotation)"}</code> |  |
| <Link id="m-includeletter" /><code>{"private void IncludeLetter(string letter)"}</code> |  |
| <Link id="m-includenumber" /><code>{"private void IncludeNumber(int number)"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-pressshift" /><code>{"private void PressShift()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |

## Used in

Members of other types that take, return or hold a `VirtualKeyboard`:

[`VirtualKey.Setup`](/game-api/types/global-t-x/virtualkey#m-setup), [`VirtualKey.virtualKeyboard`](/game-api/types/global-t-x/virtualkey#m-virtualkeyboard).
