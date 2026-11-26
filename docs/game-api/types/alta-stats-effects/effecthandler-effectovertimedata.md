---
title: "EffectHandler.EffectOverTimeData"
description: "One queued effect-over-time entry on an EffectHandler: total strength, duration in seconds and the callback that applies each tick."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectHandler.EffectOverTimeData

A **class** in `Root.Township`, `Alta.Alchemy`.

One queued effect-over-time entry on an `EffectHandler`: total strength, duration in seconds and the callback that applies each tick.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Nested in** [`EffectHandler`](/game-api/types/alta-stats-effects/effecthandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectOverTimeData(float strength, int duration, "}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{" effectToModify, Action<"}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{", "}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> handleUpdate)"}</code> | Creates an `EffectHandler.EffectOverTimeData` from `strength`, `duration`, `effectToModify` and `handleUpdate`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{" effectDefinition"}</code> | The effect this entry changes. |
| <Link id="m-handleupdate" /><code>{"private Action<"}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{", "}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> handleUpdate"}</code> | Callback that applies one tick. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"int Duration { get; private set; }"}</code> | Number of one-second ticks. Strength is split evenly across them. |
| <Link id="m-strength" /><code>{"float Strength { get; private set; }"}</code> | Total amount applied over the whole duration. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleupdate-2" /><code>{"internal void HandleUpdate("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" effectHandler, float healthPerTime)"}</code> | Runs the callback for one tick with the handler, the effect and that tick's share of strength. |

</details>

## Used in

Members of other types that take, return or hold a `EffectOverTimeData`:

[`EffectHandler.EffectOverTimeLoop`](/game-api/types/alta-stats-effects/effecthandler#m-effectovertimeloop), [`EffectHandler.unitsToRegen`](/game-api/types/alta-stats-effects/effecthandler#m-unitstoregen).
