---
title: "StageBasedPrefabSaveData"
description: "Save data for a StageBasedPrefab (version 1)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StageBasedPrefabSaveData

A **class** in `Root.Township`, the global namespace.

Save data for a `StageBasedPrefab` (version 1).

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NewSaveData<StageBasedPrefab, StageBasedPrefabSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`StageBasedPrefab`](/mod/game-api/types/global-s/stagebasedprefab), [`StageBasedPrefabSaveData`](/mod/game-api/types/global-s/stagebasedprefabsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StageBasedPrefabSaveData()"}</code> | <span className="api-desc">Creates a `StageBasedPrefabSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentstageentity" /><code>{"int currentStageEntity"}</code> | <span className="api-desc">Child index of the current stage's entity, or -1 if none.</span> |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/global-p/prefabstagedefinition">{"PrefabStageDefinition"}</Link>{" definition"}</code> | <span className="api-desc">The stage definition in use.</span> |
| <Link id="m-stageindex" /><code>{"int stageIndex"}</code> | <span className="api-desc">The current stage.</span> |
