---
title: "VirtualKeyboardSetup"
description: "Layout asset for the in-game virtual keyboard: its keys and whether each row is ordered."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VirtualKeyboardSetup

A **class** in `Root.Township`, no namespace.

Layout asset for the in-game virtual keyboard: its keys and whether each row is ordered.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`VirtualKeyboardSetup.Virtual_Keyboard_Setup`](/game-api/types/global-t-x/virtualkeyboardsetup-virtual_keyboard_setup)
- **Nested types** [`Virtual_Keyboard_Setup`](/game-api/types/global-t-x/virtualkeyboardsetup-virtual_keyboard_setup)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VirtualKeyboardSetup()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-keysinfo" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{"[] keysInfo"}</code> |
| <Link id="m-rowisordered" /><code>{"private bool[] rowIsOrdered"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-keysinfo-2" /><code><Link to="/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{"[] KeysInfo { get; }"}</code> | The keys on the keyboard. |
| <Link id="m-rowisordered-2" /><code>{"bool[] RowIsOrdered { get; }"}</code> | Per row, whether the keys keep their set order. |

## Used in

Members of other types that take, return or hold a `VirtualKeyboardSetup`:

[`KeyboardSet.completionKeyboard`](/game-api/types/global-i-l/keyboardset#m-completionkeyboard), [`KeyboardSet.CompletionKeyboard`](/game-api/types/global-i-l/keyboardset#m-completionkeyboard-2), [`KeyboardSet.keyboards`](/game-api/types/global-i-l/keyboardset#m-keyboards), [`KeyboardSet.Keyboards`](/game-api/types/global-i-l/keyboardset#m-keyboards-2), [`TouchScreenKeyboard.androidSetup`](/game-api/types/global-t-x/touchscreenkeyboard#m-androidsetup), [`TouchScreenKeyboard.BaseKeyboardSetup`](/game-api/types/global-t-x/touchscreenkeyboard#m-basekeyboardsetup), [`TouchScreenKeyboard.KeyboardSetup`](/game-api/types/global-t-x/touchscreenkeyboard#m-keyboardsetup), [`TouchScreenKeyboard.setup`](/game-api/types/global-t-x/touchscreenkeyboard#m-setup), [`VirtualKeyboard.setup`](/game-api/types/global-t-x/virtualkeyboard#m-setup).
