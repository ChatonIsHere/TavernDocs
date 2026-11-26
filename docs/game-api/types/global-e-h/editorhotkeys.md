---
title: "EditorHotKeys"
description: "Asset listing editor menu paths and the hotkeys to bind to them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditorHotKeys

A **class** in `Root.Township`, no namespace.

Asset listing editor menu paths and the hotkeys to bind to them.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`EditorHotKeys.Create`](/game-api/types/global-e-h/editorhotkeys-create)
- **Nested types** [`Create`](/game-api/types/global-e-h/editorhotkeys-create), [`Hotkey`](/game-api/types/global-e-h/editorhotkeys-hotkey)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EditorHotKeys()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hotkeys" /><code>{"private "}<Link to="/game-api/types/global-e-h/editorhotkeys-hotkey">{"EditorHotKeys.Hotkey"}</Link>{"[] hotkeys"}</code> | The configured hotkeys, each a menu path, modifier flags and key. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmap" /><code>{"Dictionary<string, string> GetMap()"}</code> | Returns a map from menu path to Unity menu shortcut text (such as `_%#a`) for each hotkey. |
