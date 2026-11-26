---
title: "FuelComparer"
description: "Sorts Fuel by EfficiencyCap, lowest first."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FuelComparer

A **class** in `Root.Township`, `Alta.Heat`.

Sorts `Fuel` by `EfficiencyCap`, lowest first.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `IComparer<Fuel>`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FuelComparer()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-compare" /><code>{"int Compare("}<Link to="/mod/game-api/types/global-e-h/fuel">{"Fuel"}</Link>{" x, "}<Link to="/mod/game-api/types/global-e-h/fuel">{"Fuel"}</Link>{" y)"}</code> | <span className="api-desc">Compares two fuels by `EfficiencyCap`.</span> |
