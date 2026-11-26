---
title: "IndirectModifierSaveData"
description: "Saved state of one IndirectModifier, a stat change that plays out over a curve for a number of ticks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IndirectModifierSaveData

A **class** in `Root.Township`, `Alta.StatSystem`.

Saved state of one `IndirectModifier`, a stat change that plays out over a curve for a number of ticks. On load, ticks for the time passed since saving are added, and modifiers that ran out are dropped.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"IndirectModifierSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-basevalue" /><code>{"float baseValue"}</code> | Value the curve is multiplied by. |
| <Link id="m-duration" /><code>{"uint duration"}</code> | Total length of the modifier in ticks. |
| <Link id="m-tick" /><code>{"uint tick"}</code> | Ticks already run when it was saved. |
| <Link id="m-valueoverduration" /><code><Link to="/game-api/types/global-c-d/curve">{"Curve"}</Link>{" valueOverDuration"}</code> | Curve of the value over the modifier's life, from 0 to 1. |

## Used in

Members of other types that take, return or hold a `IndirectModifierSaveData`:

[`IndirectModifier.Save`](/game-api/types/alta-stats-effects/indirectmodifier#m-save), [`StatManagerSaveData.IndirectStatModifier.modifiers`](/game-api/types/alta-stats-effects/statmanagersavedata-indirectstatmodifier#m-modifiers), [`StatManagerSaveData1.IndirectStatModifier.modifiers`](/game-api/types/alta-stats-effects/statmanagersavedata1-indirectstatmodifier#m-modifiers).
