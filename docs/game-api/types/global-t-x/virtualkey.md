---
title: "VirtualKey"
description: "class VirtualKey in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VirtualKey

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VirtualKey()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-buttoncollider" /><code>{"private BoxCollider buttonCollider"}</code> |
| <Link id="m-info" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" info"}</code> |
| <Link id="m-scalingtransforms" /><code>{"private Transform[] scalingTransforms"}</code> |
| <Link id="m-spacescale" /><code>{"private Vector3 spaceScale"}</code> |
| <Link id="m-text" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" text"}</code> |
| <Link id="m-virtualkeyboard" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualkeyboard">{"VirtualKeyboard"}</Link>{" virtualKeyboard"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-press" /><code>{"void Press()"}</code> |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" info, "}<Link to="/game-api/types/global-t-x/virtualkeyboard">{"VirtualKeyboard"}</Link>{" virtualKeyboard)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-applytext" /><code>{"private void ApplyText(string newText)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-updateimage" /><code>{"private void UpdateImage(bool isShiftPressed)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `VirtualKey`:

[`VirtualKeyboard.keyPrefab`](/game-api/types/global-t-x/virtualkeyboard#m-keyprefab).
