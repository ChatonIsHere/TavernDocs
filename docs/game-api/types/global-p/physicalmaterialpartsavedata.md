---
title: "PhysicalMaterialPartSaveData"
description: "Save format (version 1) for PhysicalMaterialPart, storing which physical material (wood, metal and so on) the part is made of."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PhysicalMaterialPartSaveData

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save format (version 1) for `PhysicalMaterialPart`, storing which physical material (wood, metal and so on) the part is made of.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NewSaveData<PhysicalMaterialPart, PhysicalMaterialPartSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PhysicalMaterialPart`](/game-api/types/global-p/physicalmaterialpart), [`PhysicalMaterialPartSaveData`](/game-api/types/global-p/physicalmaterialpartsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PhysicalMaterialPartSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-material" /><code><Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material"}</code> | The part's physical material. |
