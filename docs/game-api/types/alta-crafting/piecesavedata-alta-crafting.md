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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PieceSaveData()"}</code> | Creates a `PieceSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-failurehealth" /><code>{"float failureHealth"}</code> | Remaining failure health. Nail hits take failure damage off it; below zero the project fails, and lower values raise the chance the piece pops out. |
| <Link id="m-hash" /><code>{"int hash"}</code> | Hash identifying the piece. |
| <Link id="m-iscomplete" /><code>{"bool isComplete"}</code> | Whether the piece is finished. |
| <Link id="m-material" /><code><Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material"}</code> | Physical material the piece is made of. |

## Used in

Members of other types that take, return or hold a `PieceSaveData`:

[`GenericCraftingPiece.ApplySaveData`](/game-api/types/alta-crafting/genericcraftingpiece#m-applysavedata), [`GenericCraftingPiece.GetSaveData`](/game-api/types/alta-crafting/genericcraftingpiece#m-getsavedata), [`GenericCraftingStationData.pieces`](/game-api/types/alta-crafting/genericcraftingstationdata#m-pieces).
