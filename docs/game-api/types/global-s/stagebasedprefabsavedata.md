---
title: "StageBasedPrefabSaveData"
description: "Save data for a StageBasedPrefab (version 1)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StageBasedPrefabSaveData

A **class** in `Root.Township`, no namespace.

Save data for a `StageBasedPrefab` (version 1).

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NewSaveData<StageBasedPrefab, StageBasedPrefabSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`StageBasedPrefab`](/game-api/types/global-s/stagebasedprefab), [`StageBasedPrefabSaveData`](/game-api/types/global-s/stagebasedprefabsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StageBasedPrefabSaveData()"}</code> | Creates a `StageBasedPrefabSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentstageentity" /><code>{"int currentStageEntity"}</code> | Child index of the current stage's entity, or -1 if none. |
| <Link id="m-definition" /><code><Link to="/game-api/types/global-p/prefabstagedefinition">{"PrefabStageDefinition"}</Link>{" definition"}</code> | The stage definition in use. |
| <Link id="m-stageindex" /><code>{"int stageIndex"}</code> | The current stage. |
