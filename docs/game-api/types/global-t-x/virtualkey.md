---
title: "VirtualKey"
description: "One key on a VirtualKeyboard: shows its character (or shifted one) on a text renderer and sends its key code when pressed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VirtualKey

A **class** in `Root.Township`, no namespace.

One key on a `VirtualKeyboard`: shows its character (or shifted one) on a text renderer and sends its key code when pressed.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VirtualKey()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buttoncollider" /><code>{"private BoxCollider buttonCollider"}</code> | The key's collider, scaled up for the space key. |
| <Link id="m-info" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" info"}</code> | Key code and shifted key code for this key. |
| <Link id="m-scalingtransforms" /><code>{"private Transform[] scalingTransforms"}</code> | Transforms scaled to `spaceScale` for the space key. |
| <Link id="m-spacescale" /><code>{"private Vector3 spaceScale"}</code> | Scale used for the space key. |
| <Link id="m-text" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" text"}</code> | Text renderer showing the key's label. |
| <Link id="m-virtualkeyboard" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualkeyboard">{"VirtualKeyboard"}</Link>{" virtualKeyboard"}</code> | The keyboard this key belongs to. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-press" /><code>{"void Press()"}</code> | Sends the key's code (or shift code while shift is held) to the keyboard. |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" info, "}<Link to="/game-api/types/global-t-x/virtualkeyboard">{"VirtualKeyboard"}</Link>{" virtualKeyboard)"}</code> | Stores the key info and keyboard, and updates the label when shift changes. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applytext" /><code>{"private void ApplyText(string newText)"}</code> | Sets the key's label if it changed. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks from the keyboard's shift event. |
| <Link id="m-updateimage" /><code>{"private void UpdateImage(bool isShiftPressed)"}</code> | Sets the label from the key code, with symbols, names for modifiers and case for letters. The space key gets scaled instead. |

</details>

## Used in

Members of other types that take, return or hold a `VirtualKey`:

[`VirtualKeyboard.keyPrefab`](/game-api/types/global-t-x/virtualkeyboard#m-keyprefab).
