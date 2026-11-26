---
title: "TaxSaveData"
description: "Save data for a TaxManager: whether taxing is running and the time saved for its repeating tax entry."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TaxSaveData

A **class** in `Root.Township`, `Alta.Trading`.

Save data for a `TaxManager`: whether taxing is running and the time saved for its repeating tax entry.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NewSaveData<TaxManager, TaxSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`TaxManager`](/mod/game-api/types/alta-crafting/taxmanager), [`TaxSaveData`](/mod/game-api/types/alta-crafting/taxsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TaxSaveData()"}</code> | <span className="api-desc">Creates a `TaxSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currenttime" /><code>{"TimeSpan currentTime"}</code> | <span className="api-desc">Saved timeline entry time for the tax timer. Zero when not taxing. Used on load to work out missed intervals.</span> |
| <Link id="m-istaxing" /><code>{"bool isTaxing"}</code> | <span className="api-desc">Whether taxing was in progress when saved.</span> |

## Used in

Members of other types that take, return or hold a `TaxSaveData`:

<div className="api-used-in">

[`TaxManager.Load`](/mod/game-api/types/alta-crafting/taxmanager#m-load), [`TaxManager.Save`](/mod/game-api/types/alta-crafting/taxmanager#m-save).

</div>
