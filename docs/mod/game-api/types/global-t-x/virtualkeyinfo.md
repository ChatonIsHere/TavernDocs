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
| <Link id="m-ctor" /><code>{"VirtualKeyInfo()"}</code> | <span className="api-desc">Creates a `VirtualKeyInfo` from `key`.</span> |
| <Link id="m-ctor-2" /><code>{"VirtualKeyInfo(KeyCode key)"}</code> | <span className="api-desc">Creates a `VirtualKeyInfo` from `key`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-key" /><code>{"KeyCode key"}</code> | <span className="api-desc">The key typed normally.</span> |
| <Link id="m-position" /><code>{"Vector2 position"}</code> | <span className="api-desc">Where the key sits on the keyboard layout.</span> |
| <Link id="m-row" /><code>{"int row"}</code> | <span className="api-desc">The keyboard row the key is on, or -1 if not set.</span> |
| <Link id="m-shiftkey" /><code>{"KeyCode shiftKey"}</code> | <span className="api-desc">The key typed while shift is active.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"bool Equals("}<Link to="/mod/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" compare)"}</code> | <span className="api-desc">True if position, key, shift key and row all match.</span> |

## Used in

Members of other types that take, return or hold a `VirtualKeyInfo`:

<div className="api-used-in">

[`TouchScreenKeyboard.AddExtraKey`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-addextrakey), [`TouchScreenKeyboard.SpawnKey`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-spawnkey), [`TouchScreenKeyboard.KeyBoardEdgesInfo.KeyBoardEdgesInfo`](/mod/game-api/types/global-t-x/touchscreenkeyboard-keyboardedgesinfo#m-ctor), [`TouchScreenKeyboard.KeyBoardEdgesInfo.keysInfo`](/mod/game-api/types/global-t-x/touchscreenkeyboard-keyboardedgesinfo#m-keysinfo), [`TouchScreenKeyboardKey.CheckForSpecialSetup`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey#m-checkforspecialsetup), [`TouchScreenKeyboardKey.Info`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey#m-info), [`TouchScreenKeyboardKey.Setup`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey#m-setup), [`VirtualKey.info`](/mod/game-api/types/global-t-x/virtualkey#m-info), [`VirtualKey.Setup`](/mod/game-api/types/global-t-x/virtualkey#m-setup), [`VirtualKeyboardSetup.keysInfo`](/mod/game-api/types/global-t-x/virtualkeyboardsetup#m-keysinfo), [`VirtualKeyboardSetup.KeysInfo`](/mod/game-api/types/global-t-x/virtualkeyboardsetup#m-keysinfo-2).

</div>
