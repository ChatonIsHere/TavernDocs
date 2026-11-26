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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`DurationEffect<DamageOverTime>`](/game-api/types/alta-stats-effects/durationeffect-t)
- **Derived types** [`DamageOverTime`](/game-api/types/alta-stats-effects/damageovertime)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DamageOverTime(float strength, float frequency)"}</code> | Creates a `DamageOverTime` from `strength` and `frequency`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-strength" /><code>{"float Strength { get; private set; }"}</code> | The strength passed to the constructor. The frequency argument is ignored. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update()"}</code> | Empty. |
