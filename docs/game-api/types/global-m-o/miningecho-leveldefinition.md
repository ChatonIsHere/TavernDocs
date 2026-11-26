---
title: "MiningEcho.LevelDefinition"
description: "Echo settings for one mining echo skill level: size and how the echo grows over time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MiningEcho.LevelDefinition

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Echo settings for one mining echo skill level: size and how the echo grows over time.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`MiningEcho`](/game-api/types/global-m-o/miningecho)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LevelDefinition()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectdurationcurve" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" effectDurationCurve"}</code> | Curve and duration for the echo. |
| <Link id="m-size" /><code>{"private float size"}</code> | Backing field for `Size`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"AnimationCurve Curve { get; }"}</code> | Curve of echo radius over its duration. |
| <Link id="m-duration" /><code>{"float Duration { get; }"}</code> | How long the echo lasts. |
| <Link id="m-scale" /><code>{"Vector3 Scale { get; }"}</code> | `Size` as a uniform scale for the effect. |
| <Link id="m-size-2" /><code>{"float Size { get; }"}</code> | Maximum echo radius. |

## Used in

Members of other types that take, return or hold a `LevelDefinition`:

[`MiningEcho.levelDefinitions`](/game-api/types/global-m-o/miningecho#m-leveldefinitions), [`MiningEcho.MiningEchoExecution.levelDefinition`](/game-api/types/global-m-o/miningecho-miningechoexecution#m-leveldefinition), [`MiningEcho.MiningEchoExecution.MiningEchoExecution`](/game-api/types/global-m-o/miningecho-miningechoexecution#m-ctor).
