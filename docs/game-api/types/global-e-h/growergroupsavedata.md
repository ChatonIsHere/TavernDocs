---
title: "GrowerGroupSaveData"
description: "Save data for a GrowerGroup: one entry per growing child."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowerGroupSaveData

A **class** in `Root.Township`, no namespace.

Save data for a `GrowerGroup`: one entry per growing child.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NewSaveData<GrowerGroup, GrowerGroupSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`GrowerGroup`](/game-api/types/global-e-h/growergroup), [`GrowerGroupSaveData`](/game-api/types/global-e-h/growergroupsavedata)
- **Nested types** [`Item`](/game-api/types/global-e-h/growergroupsavedata-item)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrowerGroupSaveData()"}</code> | Creates a `GrowerGroupSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code><Link to="/game-api/types/global-e-h/growergroupsavedata-item">{"GrowerGroupSaveData.Item"}</Link>{"[] items"}</code> | Saved state of each grower: stage, start time, definition, spawned stage, position and rotation. |
