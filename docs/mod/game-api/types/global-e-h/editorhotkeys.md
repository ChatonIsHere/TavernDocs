---
title: "EditorHotKeys"
description: "Asset listing editor menu paths and the hotkeys to bind to them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditorHotKeys

A **class** in `Root.Township`, the global namespace.

Asset listing editor menu paths and the hotkeys to bind to them.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`EditorHotKeys.Create`](/mod/game-api/types/global-e-h/editorhotkeys-create)
- **Nested types** [`Create`](/mod/game-api/types/global-e-h/editorhotkeys-create), [`Hotkey`](/mod/game-api/types/global-e-h/editorhotkeys-hotkey)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EditorHotKeys()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hotkeys" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/editorhotkeys-hotkey">{"EditorHotKeys.Hotkey"}</Link>{"[] hotkeys"}</code> | The configured hotkeys, each a menu path, modifier flags and key. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmap" /><code>{"Dictionary<string, string> GetMap()"}</code> | Returns a map from menu path to Unity menu shortcut text (such as `_%#a`) for each hotkey. |
