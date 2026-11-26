---
title: "EditorHotKeys.Hotkey"
description: "An editor menu path bound to a key combination, turned into Unity's menu hotkey string."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditorHotKeys.Hotkey

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

An editor menu path bound to a key combination, turned into Unity's menu hotkey string.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`EditorHotKeys`](/mod/game-api/types/global-e-h/editorhotkeys)
- **Nested types** [`Key`](/mod/game-api/types/global-e-h/editorhotkeys-hotkey-key), [`Modifier`](/mod/game-api/types/global-e-h/editorhotkeys-hotkey-modifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Hotkey()"}</code> | <span className="api-desc">Creates an `EditorHotKeys.Hotkey` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-key" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/editorhotkeys-hotkey-key">{"EditorHotKeys.Hotkey.Key"}</Link>{" key"}</code> | <span className="api-desc">The key.</span> |
| <Link id="m-modifier" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/editorhotkeys-hotkey-modifier">{"EditorHotKeys.Hotkey.Modifier"}</Link>{" modifier"}</code> | <span className="api-desc">Ctrl, Shift and Alt flags.</span> |
| <Link id="m-path" /><code>{"private string path"}</code> | <span className="api-desc">Backing field for `Path`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-path-2" /><code>{"string Path { get; }"}</code> | <span className="api-desc">The menu path the hotkey is for.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"string Evaluate()"}</code> | <span className="api-desc">Returns the Unity menu hotkey suffix, such as `_%#a` for Ctrl+Shift+A.</span> |

## Used in

Members of other types that take, return or hold a `Hotkey`:

<div className="api-used-in">

[`EditorHotKeys.hotkeys`](/mod/game-api/types/global-e-h/editorhotkeys#m-hotkeys).

</div>
