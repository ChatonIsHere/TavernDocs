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
| <Link id="m-ctor" /><code>{"VirtualKeyboardSetup()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-keysinfo" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{"[] keysInfo"}</code> | <span className="api-desc">Backing field for `KeysInfo`, the keys of this layout.</span> |
| <Link id="m-rowisordered" /><code>{"private bool[] rowIsOrdered"}</code> | <span className="api-desc">Backing field for `RowIsOrdered`, one flag per keyboard row. `TouchScreenKeyboard` sizes its row data from it.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-keysinfo-2" /><code><Link to="/mod/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{"[] KeysInfo { get; }"}</code> | <span className="api-desc">The keys on the keyboard.</span> |
| <Link id="m-rowisordered-2" /><code>{"bool[] RowIsOrdered { get; }"}</code> | <span className="api-desc">Per row, whether the keys keep their set order.</span> |

## Used in

Members of other types that take, return or hold a `VirtualKeyboardSetup`:

<div className="api-used-in">

[`KeyboardSet.completionKeyboard`](/mod/game-api/types/global-i-l/keyboardset#m-completionkeyboard), [`KeyboardSet.CompletionKeyboard`](/mod/game-api/types/global-i-l/keyboardset#m-completionkeyboard-2), [`KeyboardSet.keyboards`](/mod/game-api/types/global-i-l/keyboardset#m-keyboards), [`KeyboardSet.Keyboards`](/mod/game-api/types/global-i-l/keyboardset#m-keyboards-2), [`TouchScreenKeyboard.androidSetup`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-androidsetup), [`TouchScreenKeyboard.BaseKeyboardSetup`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-basekeyboardsetup), [`TouchScreenKeyboard.KeyboardSetup`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-keyboardsetup), [`TouchScreenKeyboard.setup`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-setup), [`VirtualKeyboard.setup`](/mod/game-api/types/global-t-x/virtualkeyboard#m-setup).

</div>
