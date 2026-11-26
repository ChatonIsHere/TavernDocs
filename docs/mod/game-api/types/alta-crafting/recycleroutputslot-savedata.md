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
| <Link id="m-ctor" /><code>{"SaveData()"}</code> | <span className="api-desc">Creates a `RecyclerOutputSlot.SaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"float content"}</code> | <span className="api-desc">How much is in the slot.</span> |
| <Link id="m-index" /><code>{"int index"}</code> | <span className="api-desc">Slot index in the recycler.</span> |
| <Link id="m-material" /><code><Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material"}</code> | <span className="api-desc">Physical material held in the slot.</span> |

## Used in

Members of other types that take, return or hold a `SaveData`:

<div className="api-used-in">

[`RecyclerOutputSlot.Load`](/mod/game-api/types/alta-crafting/recycleroutputslot#m-load), [`RecyclerOutputSlot.Save`](/mod/game-api/types/alta-crafting/recycleroutputslot#m-save).

</div>
