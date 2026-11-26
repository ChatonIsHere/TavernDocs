---
title: "VirtualKeyboardSetup"
description: "Layout asset for the in-game virtual keyboard: its keys and whether each row is ordered."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VirtualKeyboardSetup

A **class** in `Root.Township`, the global namespace.

Layout asset for the in-game virtual keyboard: its keys and whether each row is ordered.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`VirtualKeyboardSetup.Virtual_Keyboard_Setup`](/mod/game-api/types/global-t-x/virtualkeyboardsetup-virtual_keyboard_setup)
- **Nested types** [`Virtual_Keyboard_Setup`](/mod/game-api/types/global-t-x/virtualkeyboardsetup-virtual_keyboard_setup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VirtualKeyboardSetup()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-keysinfo" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{"[] keysInfo"}</code> | Backing field for `KeysInfo`, the keys of this layout. |
| <Link id="m-rowisordered" /><code>{"private bool[] rowIsOrdered"}</code> | Backing field for `RowIsOrdered`, one flag per keyboard row. `TouchScreenKeyboard` sizes its row data from it. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-keysinfo-2" /><code><Link to="/mod/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{"[] KeysInfo { get; }"}</code> | The keys on the keyboard. |
| <Link id="m-rowisordered-2" /><code>{"bool[] RowIsOrdered { get; }"}</code> | Per row, whether the keys keep their set order. |

## Used in

Members of other types that take, return or hold a `VirtualKeyboardSetup`:

[`KeyboardSet.completionKeyboard`](/mod/game-api/types/global-i-l/keyboardset#m-completionkeyboard), [`KeyboardSet.CompletionKeyboard`](/mod/game-api/types/global-i-l/keyboardset#m-completionkeyboard-2), [`KeyboardSet.keyboards`](/mod/game-api/types/global-i-l/keyboardset#m-keyboards), [`KeyboardSet.Keyboards`](/mod/game-api/types/global-i-l/keyboardset#m-keyboards-2), [`TouchScreenKeyboard.androidSetup`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-androidsetup), [`TouchScreenKeyboard.BaseKeyboardSetup`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-basekeyboardsetup), [`TouchScreenKeyboard.KeyboardSetup`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-keyboardsetup), [`TouchScreenKeyboard.setup`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-setup), [`VirtualKeyboard.setup`](/mod/game-api/types/global-t-x/virtualkeyboard#m-setup).
