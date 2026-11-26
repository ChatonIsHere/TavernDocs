---
title: "DamageOverTime"
description: "Old duration effect stub from the earlier alchemy code."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DamageOverTime

A **class** in `Root.Township`, `Alta.Alchemy`.

Old duration effect stub from the earlier alchemy code. It stores a strength and does nothing each update; nothing else in the game uses it.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`DurationEffect<DamageOverTime>`](/mod/game-api/types/alta-stats-effects/durationeffect-t)
- **Derived types** [`DamageOverTime`](/mod/game-api/types/alta-stats-effects/damageovertime)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DamageOverTime(float strength, float frequency)"}</code> | <span className="api-desc">Creates a `DamageOverTime` from `strength` and `frequency`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-strength" /><code>{"float Strength { get; private set; }"}</code> | <span className="api-desc">The strength passed to the constructor. The frequency argument is ignored.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update()"}</code> | <span className="api-desc">Empty.</span> |
