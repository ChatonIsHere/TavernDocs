---
title: "KeyboardSet"
description: "Asset listing a set of virtual keyboard layouts, which one is the default, and a completion keyboard."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KeyboardSet

A **class** in `Root.Township`, the global namespace.

Asset listing a set of virtual keyboard layouts, which one is the default, and a completion keyboard.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KeyboardSet()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-completionkeyboard" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{" completionKeyboard"}</code> | <span className="api-desc">Backing field for `CompletionKeyboard`.</span> |
| <Link id="m-defaultkeyboardindex" /><code>{"private int defaultKeyboardIndex"}</code> | <span className="api-desc">Backing field for `DefaultKeyboardIndex`.</span> |
| <Link id="m-keyboards" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{"[] keyboards"}</code> | <span className="api-desc">Backing field for `Keyboards`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-completionkeyboard-2" /><code><Link to="/mod/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{" CompletionKeyboard { get; }"}</code> | <span className="api-desc">Keyboard layout for word completion.</span> |
| <Link id="m-defaultkeyboardindex-2" /><code>{"int DefaultKeyboardIndex { get; }"}</code> | <span className="api-desc">Index in `Keyboards` shown first.</span> |
| <Link id="m-keyboards-2" /><code><Link to="/mod/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{"[] Keyboards { get; }"}</code> | <span className="api-desc">The keyboard layouts the player can switch between.</span> |

## Used in

Members of other types that take, return or hold a `KeyboardSet`:

<div className="api-used-in">

[`TouchScreenKeyboard.androidMultiKeyboardSetup`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-androidmultikeyboardsetup), [`TouchScreenKeyboard.MultiKeyboardSetup`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-multikeyboardsetup), [`TouchScreenKeyboard.pcMultiKeyboardSetup`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-pcmultikeyboardsetup).

</div>
