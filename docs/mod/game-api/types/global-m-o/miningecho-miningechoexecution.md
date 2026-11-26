---
title: "MiningEcho.MiningEchoExecution"
description: "One running mining echo pulse: a sphere that grows from where a tool hit, used by MiningEcho to tell IListenToMiningEcho listeners where the pulse is each..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MiningEcho.MiningEchoExecution

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One running mining echo pulse: a sphere that grows from where a tool hit, used by `MiningEcho` to tell `IListenToMiningEcho` listeners where the pulse is each frame.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`MiningEcho`](/mod/game-api/types/global-m-o/miningecho)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MiningEchoExecution(Vector3 center, "}<Link to="/mod/game-api/types/global-m-o/miningecho-leveldefinition">{"MiningEcho.LevelDefinition"}</Link>{" levelDefinition)"}</code> | <span className="api-desc">Creates a `MiningEcho.MiningEchoExecution` from `center` and `levelDefinition`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-leveldefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/miningecho-leveldefinition">{"MiningEcho.LevelDefinition"}</Link>{" levelDefinition"}</code> | <span className="api-desc">The skill level settings (size, curve and duration) for this pulse.</span> |
| <Link id="m-progress" /><code>{"private float progress"}</code> | <span className="api-desc">How far through the pulse is, from 0 to 1.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-center" /><code>{"Vector3 Center { get; }"}</code> | <span className="api-desc">The world point of the hit the echo started from.</span> |
| <Link id="m-isfinished" /><code>{"bool IsFinished { get; }"}</code> | <span className="api-desc">True once the pulse has run for its full duration.</span> |
| <Link id="m-radius" /><code>{"float Radius { get; }"}</code> | <span className="api-desc">The current radius: the level's size times its curve at the current progress.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"void Update()"}</code> | <span className="api-desc">Moves the pulse forward by one frame of its duration. Called by `MiningEcho`'s update loop.</span> |

## Used in

Members of other types that take, return or hold a `MiningEchoExecution`:

<div className="api-used-in">

[`MiningEcho.miningEchoes`](/mod/game-api/types/global-m-o/miningecho#m-miningechoes).

</div>
