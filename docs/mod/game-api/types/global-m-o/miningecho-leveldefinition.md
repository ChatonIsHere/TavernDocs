---
title: "MiningEcho.LevelDefinition"
description: "Echo settings for one mining echo skill level: size and how the echo grows over time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MiningEcho.LevelDefinition

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Echo settings for one mining echo skill level: size and how the echo grows over time.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`MiningEcho`](/mod/game-api/types/global-m-o/miningecho)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LevelDefinition()"}</code> | <span className="api-desc">Creates a `MiningEcho.LevelDefinition` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectdurationcurve" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" effectDurationCurve"}</code> | <span className="api-desc">Curve and duration for the echo.</span> |
| <Link id="m-size" /><code>{"private float size"}</code> | <span className="api-desc">Backing field for `Size`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"AnimationCurve Curve { get; }"}</code> | <span className="api-desc">Curve of echo radius over its duration.</span> |
| <Link id="m-duration" /><code>{"float Duration { get; }"}</code> | <span className="api-desc">How long the echo lasts.</span> |
| <Link id="m-scale" /><code>{"Vector3 Scale { get; }"}</code> | <span className="api-desc">`Size` as a uniform scale for the effect.</span> |
| <Link id="m-size-2" /><code>{"float Size { get; }"}</code> | <span className="api-desc">Maximum echo radius.</span> |

## Used in

Members of other types that take, return or hold a `LevelDefinition`:

<div className="api-used-in">

[`MiningEcho.levelDefinitions`](/mod/game-api/types/global-m-o/miningecho#m-leveldefinitions), [`MiningEcho.MiningEchoExecution.levelDefinition`](/mod/game-api/types/global-m-o/miningecho-miningechoexecution#m-leveldefinition), [`MiningEcho.MiningEchoExecution.MiningEchoExecution`](/mod/game-api/types/global-m-o/miningecho-miningechoexecution#m-ctor).

</div>
