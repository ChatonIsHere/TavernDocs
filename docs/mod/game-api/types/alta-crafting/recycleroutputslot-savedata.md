---
title: "RecyclerOutputSlot.SaveData"
description: "Saved state of one recycler output slot: its index, fill amount and material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecyclerOutputSlot.SaveData

A **class** in `Root.Township`, `Alta.Blacksmithing`.

Saved state of one recycler output slot: its index, fill amount and material.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`RecyclerOutputSlot`](/mod/game-api/types/alta-crafting/recycleroutputslot)
- **Derived types** [`RecyclerSaveData`](/mod/game-api/types/alta-crafting/recyclersavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SaveData()"}</code> | Creates a `RecyclerOutputSlot.SaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"float content"}</code> | How much is in the slot. |
| <Link id="m-index" /><code>{"int index"}</code> | Slot index in the recycler. |
| <Link id="m-material" /><code><Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material"}</code> | Physical material held in the slot. |

## Used in

Members of other types that take, return or hold a `SaveData`:

[`RecyclerOutputSlot.Load`](/mod/game-api/types/alta-crafting/recycleroutputslot#m-load), [`RecyclerOutputSlot.Save`](/mod/game-api/types/alta-crafting/recycleroutputslot#m-save).
