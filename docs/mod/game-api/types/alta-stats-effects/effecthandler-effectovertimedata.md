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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Nested in** [`EffectHandler`](/mod/game-api/types/alta-stats-effects/effecthandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectOverTimeData(float strength, int duration, "}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{" effectToModify, Action<"}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{", "}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> handleUpdate)"}</code> | <span className="api-desc">Creates an `EffectHandler.EffectOverTimeData` from `strength`, `duration`, `effectToModify` and `handleUpdate`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{" effectDefinition"}</code> | <span className="api-desc">The effect this entry changes.</span> |
| <Link id="m-handleupdate" /><code>{"private Action<"}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{", "}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> handleUpdate"}</code> | <span className="api-desc">Callback that applies one tick.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"int Duration { get; private set; }"}</code> | <span className="api-desc">Number of one-second ticks. Strength is split evenly across them.</span> |
| <Link id="m-strength" /><code>{"float Strength { get; private set; }"}</code> | <span className="api-desc">Total amount applied over the whole duration.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleupdate-2" /><code>{"internal void HandleUpdate("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" effectHandler, float healthPerTime)"}</code> | <span className="api-desc">Runs the callback for one tick with the handler, the effect and that tick's share of strength.</span> |

</details>

## Used in

Members of other types that take, return or hold a `EffectOverTimeData`:

<div className="api-used-in">

[`EffectHandler.EffectOverTimeLoop`](/mod/game-api/types/alta-stats-effects/effecthandler#m-effectovertimeloop), [`EffectHandler.unitsToRegen`](/mod/game-api/types/alta-stats-effects/effecthandler#m-unitstoregen).

</div>
