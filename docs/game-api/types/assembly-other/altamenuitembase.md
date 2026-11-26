---
title: "AltaMenuItemBase"
description: "Root of a nested class tree that mirrors Unity editor menu paths."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaMenuItemBase

A **class** in `Alta.MenuItem`, no namespace.

Root of a nested class tree that mirrors Unity editor menu paths. Menu items inherit from a nested class, and the class path (underscores as spaces) becomes the menu path. Editor tooling.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Nested types** [`_3rd_Party`](/game-api/types/assembly-other/altamenuitembase-_3rd_party), [`Assets`](/game-api/types/assembly-other/altamenuitembase-assets), [`CONTEXT<T>`](/game-api/types/assembly-other/altamenuitembase-context-t), [`Edit`](/game-api/types/assembly-other/altamenuitembase-edit), [`File`](/game-api/types/assembly-other/altamenuitembase-file), [`GameObject`](/game-api/types/assembly-other/altamenuitembase-gameobject), [`Play`](/game-api/types/assembly-other/altamenuitembase-play), [`Select`](/game-api/types/assembly-other/altamenuitembase-select), [`Tools`](/game-api/types/assembly-other/altamenuitembase-tools), [`Township`](/game-api/types/assembly-other/altamenuitembase-township), [`Window`](/game-api/types/assembly-other/altamenuitembase-window)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AltaMenuItemBase()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-menuitems" /><code>{"private static readonly Dictionary<Type, "}<Link to="/game-api/types/assembly-other/altamenuitem">{"AltaMenuItem"}</Link>{"> menuItems"}</code> | Cache of menu item instances by type. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getitem" /><code>{"static "}<Link to="/game-api/types/assembly-other/altamenuitem">{"AltaMenuItem"}</Link>{" GetItem<T>()"}</code> | Returns a cached instance of the given menu item type, creating it on first use. |
