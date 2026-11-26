---
title: "VirtualKey"
description: "One key on a VirtualKeyboard: shows its character (or shifted one) on a text renderer and sends its key code when pressed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VirtualKey

A **class** in `Root.Township`, the global namespace.

One key on a `VirtualKeyboard`: shows its character (or shifted one) on a text renderer and sends its key code when pressed.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VirtualKey()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buttoncollider" /><code>{"private BoxCollider buttonCollider"}</code> | <span className="api-desc">The key's collider, scaled up for the space key.</span> |
| <Link id="m-info" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" info"}</code> | <span className="api-desc">Key code and shifted key code for this key.</span> |
| <Link id="m-scalingtransforms" /><code>{"private Transform[] scalingTransforms"}</code> | <span className="api-desc">Transforms scaled to `spaceScale` for the space key.</span> |
| <Link id="m-spacescale" /><code>{"private Vector3 spaceScale"}</code> | <span className="api-desc">Scale used for the space key.</span> |
| <Link id="m-text" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" text"}</code> | <span className="api-desc">Text renderer showing the key's label.</span> |
| <Link id="m-virtualkeyboard" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualkeyboard">{"VirtualKeyboard"}</Link>{" virtualKeyboard"}</code> | <span className="api-desc">The keyboard this key belongs to.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-press" /><code>{"void Press()"}</code> | <span className="api-desc">Sends the key's code (or shift code while shift is held) to the keyboard.</span> |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" info, "}<Link to="/mod/game-api/types/global-t-x/virtualkeyboard">{"VirtualKeyboard"}</Link>{" virtualKeyboard)"}</code> | <span className="api-desc">Stores the key info and keyboard, and updates the label when shift changes.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applytext" /><code>{"private void ApplyText(string newText)"}</code> | <span className="api-desc">Sets the key's label if it changed.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks from the keyboard's shift event.</span> |
| <Link id="m-updateimage" /><code>{"private void UpdateImage(bool isShiftPressed)"}</code> | <span className="api-desc">Sets the label from the key code, with symbols, names for modifiers and case for letters. The space key gets scaled instead.</span> |

</details>

## Used in

Members of other types that take, return or hold a `VirtualKey`:

<div className="api-used-in">

[`VirtualKeyboard.keyPrefab`](/mod/game-api/types/global-t-x/virtualkeyboard#m-keyprefab).

</div>
