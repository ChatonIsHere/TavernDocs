---
title: "PrefabStageDefinition"
description: "Asset listing the network prefab for each stage of a staged object (under Woodcutting/Stage Definitions), each with a local offset and rotation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabStageDefinition

A **class** in `Root.Township`, no namespace.

Asset listing the network prefab for each stage of a staged object (under Woodcutting/Stage Definitions), each with a local offset and rotation. Read by `StageBasedPrefab`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`HashedGeneralValue<PrefabStageDefinition>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`PrefabStageDefinition`](/game-api/types/global-p/prefabstagedefinition)
- **Nested types** [`PrefabSetup`](/game-api/types/global-p/prefabstagedefinition-prefabsetup)
- **Attributes** `HashedPath`, `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PrefabStageDefinition()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-stages" /><code>{"private "}<Link to="/game-api/types/global-p/prefabstagedefinition-prefabsetup">{"PrefabStageDefinition.PrefabSetup"}</Link>{"[] stages"}</code> | Backing field for `Stages`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-stagecount" /><code>{"int StageCount { get; }"}</code> | Number of stages. |
| <Link id="m-stages-2" /><code><Link to="/game-api/types/global-p/prefabstagedefinition-prefabsetup">{"PrefabStageDefinition.PrefabSetup"}</Link>{"[] Stages { get; }"}</code> | Prefab, local position and local rotation for each stage, in order. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getstage" /><code>{"internal "}<Link to="/game-api/types/global-p/prefabstagedefinition-prefabsetup">{"PrefabStageDefinition.PrefabSetup"}</Link>{" GetStage(int index)"}</code> | Returns the setup for a stage index, or null if out of range. |

</details>

## Used in

Members of other types that take, return or hold a `PrefabStageDefinition`:

[`StageBasedPrefab.stages`](/game-api/types/global-s/stagebasedprefab#m-stages), [`StageBasedPrefabSaveData.definition`](/game-api/types/global-s/stagebasedprefabsavedata#m-definition).
