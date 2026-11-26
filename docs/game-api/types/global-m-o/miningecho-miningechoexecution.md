---
title: "MiningEcho.MiningEchoExecution"
description: "One running mining echo pulse: a sphere that grows from where a tool hit, used by MiningEcho to tell IListenToMiningEcho listeners where the pulse is each..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MiningEcho.MiningEchoExecution

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One running mining echo pulse: a sphere that grows from where a tool hit, used by `MiningEcho` to tell `IListenToMiningEcho` listeners where the pulse is each frame.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`MiningEcho`](/game-api/types/global-m-o/miningecho)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MiningEchoExecution(Vector3 center, "}<Link to="/game-api/types/global-m-o/miningecho-leveldefinition">{"MiningEcho.LevelDefinition"}</Link>{" levelDefinition)"}</code> | Creates a `MiningEcho.MiningEchoExecution` from `center` and `levelDefinition`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-leveldefinition" /><code>{"private "}<Link to="/game-api/types/global-m-o/miningecho-leveldefinition">{"MiningEcho.LevelDefinition"}</Link>{" levelDefinition"}</code> | The skill level settings (size, curve and duration) for this pulse. |
| <Link id="m-progress" /><code>{"private float progress"}</code> | How far through the pulse is, from 0 to 1. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-center" /><code>{"Vector3 Center { get; }"}</code> | The world point of the hit the echo started from. |
| <Link id="m-isfinished" /><code>{"bool IsFinished { get; }"}</code> | True once the pulse has run for its full duration. |
| <Link id="m-radius" /><code>{"float Radius { get; }"}</code> | The current radius: the level's size times its curve at the current progress. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"void Update()"}</code> | Moves the pulse forward by one frame of its duration. Called by `MiningEcho`'s update loop. |

## Used in

Members of other types that take, return or hold a `MiningEchoExecution`:

[`MiningEcho.miningEchoes`](/game-api/types/global-m-o/miningecho#m-miningechoes).
