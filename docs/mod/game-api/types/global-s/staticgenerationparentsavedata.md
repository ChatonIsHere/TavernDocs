---
title: "StaticGenerationParentSaveData"
description: "Save data for StaticGenerationParent (version 1): the generation seed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticGenerationParentSaveData

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for `StaticGenerationParent` (version 1): the generation seed.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NewSaveData<StaticGenerationParent, StaticGenerationParentSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`StaticGenerationParent`](/mod/game-api/types/global-s/staticgenerationparent), [`StaticGenerationParentSaveData`](/mod/game-api/types/global-s/staticgenerationparentsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticGenerationParentSaveData()"}</code> | <span className="api-desc">Creates a `StaticGenerationParentSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isserveronly" /><code>{"bool isServerOnly"}</code> | <span className="api-desc">Saved flag that `StaticGenerationParent` never reads or writes.</span> |
| <Link id="m-seed" /><code>{"int seed"}</code> | <span className="api-desc">The generation seed saved and loaded by `StaticGenerationParent`.</span> |
