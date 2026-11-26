---
title: "PieceSaveData"
description: "Save data for one generic-crafting piece: which piece, whether it's done, its material and how close it is to breaking."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PieceSaveData

A **class** in `Root.Township`, `Alta.Crafting`.

Save data for one generic-crafting piece: which piece, whether it's done, its material and how close it is to breaking.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PieceSaveData()"}</code> | <span className="api-desc">Creates a `PieceSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-failurehealth" /><code>{"float failureHealth"}</code> | <span className="api-desc">Remaining failure health. Nail hits take failure damage off it; below zero the project fails, and lower values raise the chance the piece pops out.</span> |
| <Link id="m-hash" /><code>{"int hash"}</code> | <span className="api-desc">Hash identifying the piece.</span> |
| <Link id="m-iscomplete" /><code>{"bool isComplete"}</code> | <span className="api-desc">Whether the piece is finished.</span> |
| <Link id="m-material" /><code><Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material"}</code> | <span className="api-desc">Physical material the piece is made of.</span> |

## Used in

Members of other types that take, return or hold a `PieceSaveData`:

<div className="api-used-in">

[`GenericCraftingPiece.ApplySaveData`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-applysavedata), [`GenericCraftingPiece.GetSaveData`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-getsavedata), [`GenericCraftingStationData.pieces`](/mod/game-api/types/alta-crafting/genericcraftingstationdata#m-pieces).

</div>
