---
title: "TreeSize"
description: "A named tree size asset, picked from a popup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TreeSize

A **class** in `Root.Township`, `Alta.Woodcutting`.

A named tree size asset, picked from a popup. `PresetTree` has one and `TreeSpawner` lists the sizes it can spawn.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`PopupScriptableObject`](/game-api/types/global-p/popupscriptableobject)
- **Derived types** [`TreeSize.Create`](/game-api/types/alta-crafting/treesize-create)
- **Nested types** [`Create`](/game-api/types/alta-crafting/treesize-create)
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TreeSize()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-subfolder" /><code>{"override string SubFolder { get; }"}</code> | Folder the popup assets live in: `Woodcutting/`. |

## Used in

Members of other types that take, return or hold a `TreeSize`:

[`PresetTree.size`](/game-api/types/alta-crafting/presettree#m-size), [`PresetTree.Size`](/game-api/types/alta-crafting/presettree#m-size-2), [`TreeSpawner.sizes`](/game-api/types/alta-crafting/treespawner#m-sizes).
