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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"IndirectModifier(float baseValue, uint duration, "}<Link to="/game-api/types/global-c-d/curve">{"Curve"}</Link>{" valueOverDuration, uint tick)"}</code> |
| <Link id="m-ctor-2" /><code>{"IndirectModifier(float baseValue, uint duration, "}<Link to="/game-api/types/global-c-d/curve">{"Curve"}</Link>{" valueOverDuration)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"Action<"}<Link to="/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{"> Changed"}</code> | Called when the value moves by more than 0.1. Must be set, or `Update` throws. |
| <Link id="m-finished" /><code>{"Action<"}<Link to="/game-api/types/alta-stats-effects/indirectmodifier">{"IndirectModifier"}</Link>{"> Finished"}</code> | Called on each `Update` once the duration has passed. Must be set. |

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-basevalue" /><code>{"private float baseValue"}</code> |
| <Link id="m-duration" /><code>{"private uint duration"}</code> |
| <Link id="m-tick" /><code>{"private uint tick"}</code> |
| <Link id="m-valueoverduration" /><code>{"private "}<Link to="/game-api/types/global-c-d/curve">{"Curve"}</Link>{" valueOverDuration"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lastvalue" /><code>{"float LastValue { get; private set; }"}</code> | The value before the latest change. Inside `Changed` it still holds the old value. |
| <Link id="m-value" /><code>{"float Value { get; private set; }"}</code> | Current value of the modifier. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-save" /><code><Link to="/game-api/types/alta-stats-effects/indirectmodifiersavedata">{"IndirectModifierSaveData"}</Link>{" Save()"}</code> | Returns the curve, base value, duration and current tick for saving. |
| <Link id="m-update" /><code>{"void Update()"}</code> | Advances one tick and updates the value, or calls `Finished` once the duration is reached. |

## Used in

Members of other types that take, return or hold a `IndirectModifier`:

[`IndirectStatModifier.ChangedModifier`](/game-api/types/alta-stats-effects/indirectstatmodifier#m-changedmodifier), [`IndirectStatModifier.FinishedModifier`](/game-api/types/alta-stats-effects/indirectstatmodifier#m-finishedmodifier), [`IndirectStatModifier.RegisterModifier`](/game-api/types/alta-stats-effects/indirectstatmodifier#m-registermodifier), [`IndirectStatModifier.trackedModifiers`](/game-api/types/alta-stats-effects/indirectstatmodifier#m-trackedmodifiers), [`StatManager.ApplyIndirectModifier`](/game-api/types/alta-stats-effects/statmanager#m-applyindirectmodifier).
