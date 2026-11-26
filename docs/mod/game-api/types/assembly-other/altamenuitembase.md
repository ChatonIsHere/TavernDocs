---
title: "AltaMenuItemBase"
description: "Root of a nested class tree that mirrors Unity editor menu paths."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaMenuItemBase

A **class** in `Alta.MenuItem`, the global namespace.

Root of a nested class tree that mirrors Unity editor menu paths. Menu items inherit from a nested class, and the class path (underscores as spaces) becomes the menu path. Editor tooling.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Nested types** [`_3rd_Party`](/mod/game-api/types/assembly-other/altamenuitembase-_3rd_party), [`Assets`](/mod/game-api/types/assembly-other/altamenuitembase-assets), [`CONTEXT<T>`](/mod/game-api/types/assembly-other/altamenuitembase-context-t), [`Edit`](/mod/game-api/types/assembly-other/altamenuitembase-edit), [`File`](/mod/game-api/types/assembly-other/altamenuitembase-file), [`GameObject`](/mod/game-api/types/assembly-other/altamenuitembase-gameobject), [`Play`](/mod/game-api/types/assembly-other/altamenuitembase-play), [`Select`](/mod/game-api/types/assembly-other/altamenuitembase-select), [`Tools`](/mod/game-api/types/assembly-other/altamenuitembase-tools), [`Township`](/mod/game-api/types/assembly-other/altamenuitembase-township), [`Window`](/mod/game-api/types/assembly-other/altamenuitembase-window)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaMenuItemBase()"}</code> | Creates an `AltaMenuItemBase` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-menuitems" /><code>{"private static readonly Dictionary<Type, "}<Link to="/mod/game-api/types/assembly-other/altamenuitem">{"AltaMenuItem"}</Link>{"> menuItems"}</code> | Cache of menu item instances by type. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getitem" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/altamenuitem">{"AltaMenuItem"}</Link>{" GetItem<T>()"}</code> | Returns a cached instance of the given menu item type, creating it on first use. |
