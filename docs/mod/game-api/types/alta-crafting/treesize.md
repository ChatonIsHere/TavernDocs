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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`PopupScriptableObject`](/mod/game-api/types/global-p/popupscriptableobject)
- **Derived types** [`TreeSize.Create`](/mod/game-api/types/alta-crafting/treesize-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-crafting/treesize-create)
- **Documented in** [Farming, woodcutting and carpentry](/mod/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TreeSize()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-subfolder" /><code>{"override string SubFolder { get; }"}</code> | <span className="api-desc">Folder the popup assets live in: `Woodcutting/`.</span> |

## Used in

Members of other types that take, return or hold a `TreeSize`:

<div className="api-used-in">

[`PresetTree.size`](/mod/game-api/types/alta-crafting/presettree#m-size), [`PresetTree.Size`](/mod/game-api/types/alta-crafting/presettree#m-size-2), [`TreeSpawner.sizes`](/mod/game-api/types/alta-crafting/treespawner#m-sizes).

</div>
