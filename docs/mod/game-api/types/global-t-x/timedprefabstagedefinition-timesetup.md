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
| <Link id="m-ctor" /><code>{"TimeSetup()"}</code> | <span className="api-desc">Creates a `TimedPrefabStageDefinition.TimeSetup` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-stageindex" /><code>{"private int stageIndex"}</code> | <span className="api-desc">Backing field for `StageIndex`.</span> |
| <Link id="m-timesincestart" /><code>{"private float timeSinceStart"}</code> | <span className="api-desc">Backing field for `TimeSinceStart`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-stageindex-2" /><code>{"int StageIndex { get; }"}</code> | <span className="api-desc">Stage to switch to.</span> |
| <Link id="m-timesincestart-2" /><code>{"float TimeSinceStart { get; }"}</code> | <span className="api-desc">Seconds after the timer starts (default 10).</span> |

## Used in

Members of other types that take, return or hold a `TimeSetup`:

<div className="api-used-in">

[`TimedPrefabStageDefinition.Times`](/mod/game-api/types/global-t-x/timedprefabstagedefinition#m-times), [`TimedPrefabStageDefinition.timesPerStage`](/mod/game-api/types/global-t-x/timedprefabstagedefinition#m-timesperstage).

</div>
