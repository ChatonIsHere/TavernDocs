---
title: "VirtualKeyInfo"
description: "Layout data for one key of the in-game touch screen keyboard: where it sits, which row, and which key it types with and without shift."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VirtualKeyInfo

A **class** in `Root.Township`, the global namespace.

Layout data for one key of the in-game touch screen keyboard: where it sits, which row, and which key it types with and without shift.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VirtualKeyInfo()"}</code> | Creates a `VirtualKeyInfo` from `key`. |
| <Link id="m-ctor-2" /><code>{"VirtualKeyInfo(KeyCode key)"}</code> | Creates a `VirtualKeyInfo` from `key`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-key" /><code>{"KeyCode key"}</code> | The key typed normally. |
| <Link id="m-position" /><code>{"Vector2 position"}</code> | Where the key sits on the keyboard layout. |
| <Link id="m-row" /><code>{"int row"}</code> | The keyboard row the key is on, or -1 if not set. |
| <Link id="m-shiftkey" /><code>{"KeyCode shiftKey"}</code> | The key typed while shift is active. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"bool Equals("}<Link to="/mod/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" compare)"}</code> | True if position, key, shift key and row all match. |

## Used in

Members of other types that take, return or hold a `VirtualKeyInfo`:

[`TouchScreenKeyboard.AddExtraKey`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-addextrakey), [`TouchScreenKeyboard.SpawnKey`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-spawnkey), [`TouchScreenKeyboard.KeyBoardEdgesInfo.KeyBoardEdgesInfo`](/mod/game-api/types/global-t-x/touchscreenkeyboard-keyboardedgesinfo#m-ctor), [`TouchScreenKeyboard.KeyBoardEdgesInfo.keysInfo`](/mod/game-api/types/global-t-x/touchscreenkeyboard-keyboardedgesinfo#m-keysinfo), [`TouchScreenKeyboardKey.CheckForSpecialSetup`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey#m-checkforspecialsetup), [`TouchScreenKeyboardKey.Info`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey#m-info), [`TouchScreenKeyboardKey.Setup`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey#m-setup), [`VirtualKey.info`](/mod/game-api/types/global-t-x/virtualkey#m-info), [`VirtualKey.Setup`](/mod/game-api/types/global-t-x/virtualkey#m-setup), [`VirtualKeyboardSetup.keysInfo`](/mod/game-api/types/global-t-x/virtualkeyboardsetup#m-keysinfo), [`VirtualKeyboardSetup.KeysInfo`](/mod/game-api/types/global-t-x/virtualkeyboardsetup#m-keysinfo-2).
