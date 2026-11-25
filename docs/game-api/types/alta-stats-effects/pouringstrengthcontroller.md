---
title: "PouringStrengthController"
description: "class PouringStrengthController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PouringStrengthController

A **class** in `Root.Township`, `Alta.Liquid`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`FixedPouringStrengthController`](/game-api/types/alta-stats-effects/fixedpouringstrengthcontroller), [`ShakeablePouringStrengthController`](/game-api/types/alta-stats-effects/shakeablepouringstrengthcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PouringStrengthController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fullypouringstrengthmultiplier" /><code>{"private float fullyPouringStrengthMultiplier"}</code> |  |
| <Link id="m-isallowingfullypouring" /><code>{"private bool isAllowingFullyPouring"}</code> |  |
| <Link id="m-pouringcontainer" /><code>{"protected "}<Link to="/game-api/types/alta-stats-effects/pourablecontainer">{"PourableContainer"}</Link>{" pouringContainer"}</code> |  |
| <Link id="m-pouringmultiplier" /><code>{"protected float pouringMultiplier"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpouringstrength" /><code>{"virtual float GetPouringStrength(out bool isFullyPouring)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-getfullypouringvalues" /><code>{"protected void GetFullyPouringValues(out bool isFullyPouring, out float fullyPouringMultiplier)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PouringStrengthController`:

[`PourableContainer.pouringStrengthController`](/game-api/types/alta-stats-effects/pourablecontainer#m-pouringstrengthcontroller).
