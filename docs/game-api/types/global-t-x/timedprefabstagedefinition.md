---
title: "TimedPrefabStageDefinition"
description: "Asset listing when a TimeBasedStagedPrefab moves to each stage, counted from when its timer starts (under Woodcutting/Timed Stage Definitions)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimedPrefabStageDefinition

A **class** in `Root.Township`, no namespace.

Asset listing when a `TimeBasedStagedPrefab` moves to each stage, counted from when its timer starts (under Woodcutting/Timed Stage Definitions).

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`HashedGeneralValue<TimedPrefabStageDefinition>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`TimedPrefabStageDefinition`](/game-api/types/global-t-x/timedprefabstagedefinition)
- **Nested types** [`TimeSetup`](/game-api/types/global-t-x/timedprefabstagedefinition-timesetup)
- **Attributes** `HashedPath`, `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimedPrefabStageDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdestroyingthisonlaststage" /><code>{"private bool isDestroyingThisOnLastStage"}</code> | Backing field for `IsDestroyingThisOnLastStage`. |
| <Link id="m-timesperstage" /><code>{"private "}<Link to="/game-api/types/global-t-x/timedprefabstagedefinition-timesetup">{"TimedPrefabStageDefinition.TimeSetup"}</Link>{"[] timesPerStage"}</code> | Backing field for `Times`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdestroyingthisonlaststage-2" /><code>{"bool IsDestroyingThisOnLastStage { get; }"}</code> | If true, reaching the last entry destroys the staged prefab and leaves the current stage entity in the world on its own. |
| <Link id="m-times" /><code><Link to="/game-api/types/global-t-x/timedprefabstagedefinition-timesetup">{"TimedPrefabStageDefinition.TimeSetup"}</Link>{"[] Times { get; }"}</code> | Stage changes in order; times must go up. |

## Used in

Members of other types that take, return or hold a `TimedPrefabStageDefinition`:

[`TimeBasedStagedPrefab.timesSetup`](/game-api/types/global-t-x/timebasedstagedprefab#m-timessetup), [`TimeBasedStagedPrefabSaveData.definition`](/game-api/types/global-t-x/timebasedstagedprefabsavedata#m-definition).
