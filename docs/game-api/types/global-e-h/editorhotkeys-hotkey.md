---
title: "EditorHotKeys.Hotkey"
description: "An editor menu path bound to a key combination, turned into Unity's menu hotkey string."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditorHotKeys.Hotkey

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

An editor menu path bound to a key combination, turned into Unity's menu hotkey string.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Nested in** [`EditorHotKeys`](/game-api/types/global-e-h/editorhotkeys)
- **Nested types** [`Key`](/game-api/types/global-e-h/editorhotkeys-hotkey-key), [`Modifier`](/game-api/types/global-e-h/editorhotkeys-hotkey-modifier)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Hotkey()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-key" /><code>{"private "}<Link to="/game-api/types/global-e-h/editorhotkeys-hotkey-key">{"EditorHotKeys.Hotkey.Key"}</Link>{" key"}</code> | The key. |
| <Link id="m-modifier" /><code>{"private "}<Link to="/game-api/types/global-e-h/editorhotkeys-hotkey-modifier">{"EditorHotKeys.Hotkey.Modifier"}</Link>{" modifier"}</code> | Ctrl, Shift and Alt flags. |
| <Link id="m-path" /><code>{"private string path"}</code> | Backing field for `Path`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-path-2" /><code>{"string Path { get; }"}</code> | The menu path the hotkey is for. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"string Evaluate()"}</code> | Returns the Unity menu hotkey suffix, such as `_%#a` for Ctrl+Shift+A. |

## Used in

Members of other types that take, return or hold a `Hotkey`:

[`EditorHotKeys.hotkeys`](/game-api/types/global-e-h/editorhotkeys#m-hotkeys).
