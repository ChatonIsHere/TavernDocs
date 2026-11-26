---
title: "IndirectModifier"
description: "A stat modifier whose value follows a curve over a number of ticks, scaled by a base value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IndirectModifier

A **class** in `Root.Township`, `Alta.StatSystem`.

A stat modifier whose value follows a curve over a number of ticks, scaled by a base value. The owner calls `Update` each tick.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IndirectModifier(float baseValue, uint duration, "}<Link to="/mod/game-api/types/global-c-d/curve">{"Curve"}</Link>{" valueOverDuration, uint tick)"}</code> | <span className="api-desc">Creates an `IndirectModifier` from `baseValue`, `duration` and `valueOverDuration`.</span> |
| <Link id="m-ctor-2" /><code>{"IndirectModifier(float baseValue, uint duration, "}<Link to="/mod/game-api/types/global-c-d/curve">{"Curve"}</Link>{" valueOverDuration)"}</code> | <span className="api-desc">Creates an `IndirectModifier` from `baseValue`, `duration` and `valueOverDuration`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"Action<"}<Link to="/mod/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{"> Changed"}</code> | <span className="api-desc">Called when the value moves by more than 0.1. Must be set, or `Update` throws.</span> |
| <Link id="m-finished" /><code>{"Action<"}<Link to="/mod/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{"> Finished"}</code> | <span className="api-desc">Called on each `Update` once the duration has passed. Must be set.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basevalue" /><code>{"private float baseValue"}</code> | <span className="api-desc">Value the curve is multiplied by.</span> |
| <Link id="m-duration" /><code>{"private uint duration"}</code> | <span className="api-desc">Length in ticks; `Finished` fires on the tick that reaches it.</span> |
| <Link id="m-tick" /><code>{"private uint tick"}</code> | <span className="api-desc">Ticks run so far, one per `Update`. Saved, so the modifier can resume.</span> |
| <Link id="m-valueoverduration" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/curve">{"Curve"}</Link>{" valueOverDuration"}</code> | <span className="api-desc">Curve from progress (0 to 1) to a factor of `baseValue`. `Changed` only fires when the value moves by more than 0.1.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lastvalue" /><code>{"float LastValue { get; private set; }"}</code> | <span className="api-desc">The value before the latest change. Inside `Changed` it still holds the old value.</span> |
| <Link id="m-value" /><code>{"float Value { get; private set; }"}</code> | <span className="api-desc">Current value of the modifier.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/alta-stats-effects/indirectmodifiersavedata">{"IndirectModifierSaveData"}</Link>{" Save()"}</code> | <span className="api-desc">Returns the curve, base value, duration and current tick for saving.</span> |
| <Link id="m-update" /><code>{"void Update()"}</code> | <span className="api-desc">Advances one tick and updates the value, or calls `Finished` once the duration is reached.</span> |

## Used in

Members of other types that take, return or hold a `IndirectModifier`:

<div className="api-used-in">

[`IndirectStatModifier.ChangedModifier`](/mod/game-api/types/alta-stats-effects/indirectstatmodifier#m-changedmodifier), [`IndirectStatModifier.FinishedModifier`](/mod/game-api/types/alta-stats-effects/indirectstatmodifier#m-finishedmodifier), [`IndirectStatModifier.RegisterModifier`](/mod/game-api/types/alta-stats-effects/indirectstatmodifier#m-registermodifier), [`IndirectStatModifier.trackedModifiers`](/mod/game-api/types/alta-stats-effects/indirectstatmodifier#m-trackedmodifiers), [`StatManager.ApplyIndirectModifier`](/mod/game-api/types/alta-stats-effects/statmanager#m-applyindirectmodifier).

</div>
