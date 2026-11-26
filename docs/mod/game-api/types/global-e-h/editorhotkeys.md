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
| <Link id="m-ctor" /><code>{"EditorHotKeys()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hotkeys" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/editorhotkeys-hotkey">{"EditorHotKeys.Hotkey"}</Link>{"[] hotkeys"}</code> | <span className="api-desc">The configured hotkeys, each a menu path, modifier flags and key.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmap" /><code>{"Dictionary<string, string> GetMap()"}</code> | <span className="api-desc">Returns a map from menu path to Unity menu shortcut text (such as `_%#a`) for each hotkey.</span> |
