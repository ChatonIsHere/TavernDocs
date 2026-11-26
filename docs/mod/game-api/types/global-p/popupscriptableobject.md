---
title: "PopupScriptableObject"
description: "Base for assets such as TreeSize, DurabilitySettings and LootValue that name a resource sub folder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopupScriptableObject

A **class** in `Root.Township`, the global namespace.

Base for assets such as `TreeSize`, `DurabilitySettings` and `LootValue` that name a resource sub folder.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`TreeSize`](/mod/game-api/types/alta-crafting/treesize), [`DurabilitySettings`](/mod/game-api/types/global-c-d/durabilitysettings), [`LootValue`](/mod/game-api/types/global-i-l/lootvalue), [`SurfaceDefinition`](/mod/game-api/types/global-s/surfacedefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopupScriptableObject()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-subfolder" /><code>{"virtual string SubFolder { get; }"}</code> | <span className="api-desc">Sub folder for this asset type, for example "Items/". Empty by default.</span> |
