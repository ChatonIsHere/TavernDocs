---
title: "KeyboardSet"
description: "Asset listing a set of virtual keyboard layouts, which one is the default, and a completion keyboard."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KeyboardSet

A **class** in `Root.Township`, no namespace.

Asset listing a set of virtual keyboard layouts, which one is the default, and a completion keyboard.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"KeyboardSet()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-completionkeyboard" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{" completionKeyboard"}</code> | Backing field for `CompletionKeyboard`. |
| <Link id="m-defaultkeyboardindex" /><code>{"private int defaultKeyboardIndex"}</code> | Backing field for `DefaultKeyboardIndex`. |
| <Link id="m-keyboards" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{"[] keyboards"}</code> | Backing field for `Keyboards`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-completionkeyboard-2" /><code><Link to="/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{" CompletionKeyboard { get; }"}</code> | Keyboard layout for word completion. |
| <Link id="m-defaultkeyboardindex-2" /><code>{"int DefaultKeyboardIndex { get; }"}</code> | Index in `Keyboards` shown first. |
| <Link id="m-keyboards-2" /><code><Link to="/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{"[] Keyboards { get; }"}</code> | The keyboard layouts the player can switch between. |

## Used in

Members of other types that take, return or hold a `KeyboardSet`:

[`TouchScreenKeyboard.androidMultiKeyboardSetup`](/game-api/types/global-t-x/touchscreenkeyboard#m-androidmultikeyboardsetup), [`TouchScreenKeyboard.MultiKeyboardSetup`](/game-api/types/global-t-x/touchscreenkeyboard#m-multikeyboardsetup), [`TouchScreenKeyboard.pcMultiKeyboardSetup`](/game-api/types/global-t-x/touchscreenkeyboard#m-pcmultikeyboardsetup).
