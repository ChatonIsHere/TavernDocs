---
title: "StructureType"
description: "Asset for a kind of mining or cave structure, giving the size of one tile."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StructureType

A **class** in `Root.Township`, the global namespace.

Asset for a kind of mining or cave structure, giving the size of one tile. Used by `StructureCube`, `StructurePart` and `MiningBaseGenerator`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`StructureType.Create`](/mod/game-api/types/global-s/structuretype-create)
- **Nested types** [`Create`](/mod/game-api/types/global-s/structuretype-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StructureType()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-tilesize" /><code>{"private Vector3 tileSize"}</code> | <span className="api-desc">Backing field for `TileSize`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-tilesize-2" /><code>{"Vector3 TileSize { get; }"}</code> | <span className="api-desc">Size of one structure tile in world units.</span> |

## Used in

Members of other types that take, return or hold a `StructureType`:

<div className="api-used-in">

[`MiningBaseGenerator.structureType`](/mod/game-api/types/global-m-o/miningbasegenerator#m-structuretype), [`StructurePart.structureType`](/mod/game-api/types/global-s/structurepart#m-structuretype), [`StructurePart.StructureType`](/mod/game-api/types/global-s/structurepart#m-structuretype-2).

</div>
