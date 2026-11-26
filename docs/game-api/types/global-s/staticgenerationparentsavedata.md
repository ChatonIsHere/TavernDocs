---
title: "StaticGenerationParentSaveData"
description: "Save data for StaticGenerationParent (version 1): the generation seed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticGenerationParentSaveData

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for `StaticGenerationParent` (version 1): the generation seed.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NewSaveData<StaticGenerationParent, StaticGenerationParentSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`StaticGenerationParent`](/game-api/types/global-s/staticgenerationparent), [`StaticGenerationParentSaveData`](/game-api/types/global-s/staticgenerationparentsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StaticGenerationParentSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isserveronly" /><code>{"bool isServerOnly"}</code> | Saved flag that `StaticGenerationParent` never reads or writes. |
| <Link id="m-seed" /><code>{"int seed"}</code> | The generation seed saved and loaded by `StaticGenerationParent`. |
