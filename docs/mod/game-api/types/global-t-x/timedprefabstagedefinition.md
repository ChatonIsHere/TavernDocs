---
title: "TimedPrefabStageDefinition"
description: "Asset listing when a TimeBasedStagedPrefab moves to each stage, counted from when its timer starts (under Woodcutting/Timed Stage Definitions)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimedPrefabStageDefinition

A **class** in `Root.Township`, the global namespace.

Asset listing when a `TimeBasedStagedPrefab` moves to each stage, counted from when its timer starts (under Woodcutting/Timed Stage Definitions).

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`HashedGeneralValue<TimedPrefabStageDefinition>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`TimedPrefabStageDefinition`](/mod/game-api/types/global-t-x/timedprefabstagedefinition)
- **Nested types** [`TimeSetup`](/mod/game-api/types/global-t-x/timedprefabstagedefinition-timesetup)
- **Attributes** `HashedPath`, `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimedPrefabStageDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdestroyingthisonlaststage" /><code>{"private bool isDestroyingThisOnLastStage"}</code> | <span className="api-desc">Backing field for `IsDestroyingThisOnLastStage`.</span> |
| <Link id="m-timesperstage" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/timedprefabstagedefinition-timesetup">{"TimedPrefabStageDefinition.TimeSetup"}</Link>{"[] timesPerStage"}</code> | <span className="api-desc">Backing field for `Times`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdestroyingthisonlaststage-2" /><code>{"bool IsDestroyingThisOnLastStage { get; }"}</code> | <span className="api-desc">If true, reaching the last entry destroys the staged prefab and leaves the current stage entity in the world on its own.</span> |
| <Link id="m-times" /><code><Link to="/mod/game-api/types/global-t-x/timedprefabstagedefinition-timesetup">{"TimedPrefabStageDefinition.TimeSetup"}</Link>{"[] Times { get; }"}</code> | <span className="api-desc">Stage changes in order; times must go up.</span> |

## Used in

Members of other types that take, return or hold a `TimedPrefabStageDefinition`:

<div className="api-used-in">

[`TimeBasedStagedPrefab.timesSetup`](/mod/game-api/types/global-t-x/timebasedstagedprefab#m-timessetup), [`TimeBasedStagedPrefabSaveData.definition`](/mod/game-api/types/global-t-x/timebasedstagedprefabsavedata#m-definition).

</div>
