---
title: "GrowerGroupSaveData"
description: "Save data for a GrowerGroup: one entry per growing child."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowerGroupSaveData

A **class** in `Root.Township`, the global namespace.

Save data for a `GrowerGroup`: one entry per growing child.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NewSaveData<GrowerGroup, GrowerGroupSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`GrowerGroup`](/mod/game-api/types/global-e-h/growergroup), [`GrowerGroupSaveData`](/mod/game-api/types/global-e-h/growergroupsavedata)
- **Nested types** [`Item`](/mod/game-api/types/global-e-h/growergroupsavedata-item)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrowerGroupSaveData()"}</code> | <span className="api-desc">Creates a `GrowerGroupSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code><Link to="/mod/game-api/types/global-e-h/growergroupsavedata-item">{"GrowerGroupSaveData.Item"}</Link>{"[] items"}</code> | <span className="api-desc">Saved state of each grower: stage, start time, definition, spawned stage, position and rotation.</span> |
