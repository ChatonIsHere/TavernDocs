---
title: "TimedPrefabStageDefinition.TimeSetup"
description: "One timed stage change: after a number of seconds, switch to a given stage."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimedPrefabStageDefinition.TimeSetup

A **class** in `Root.Township`, the global namespace.

One timed stage change: after a number of seconds, switch to a given stage.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TimedPrefabStageDefinition`](/mod/game-api/types/global-t-x/timedprefabstagedefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimeSetup()"}</code> | Creates a `TimedPrefabStageDefinition.TimeSetup` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-stageindex" /><code>{"private int stageIndex"}</code> | Backing field for `StageIndex`. |
| <Link id="m-timesincestart" /><code>{"private float timeSinceStart"}</code> | Backing field for `TimeSinceStart`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-stageindex-2" /><code>{"int StageIndex { get; }"}</code> | Stage to switch to. |
| <Link id="m-timesincestart-2" /><code>{"float TimeSinceStart { get; }"}</code> | Seconds after the timer starts (default 10). |

## Used in

Members of other types that take, return or hold a `TimeSetup`:

[`TimedPrefabStageDefinition.Times`](/mod/game-api/types/global-t-x/timedprefabstagedefinition#m-times), [`TimedPrefabStageDefinition.timesPerStage`](/mod/game-api/types/global-t-x/timedprefabstagedefinition#m-timesperstage).
