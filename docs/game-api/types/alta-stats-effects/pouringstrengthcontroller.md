---
title: "PouringStrengthController"
description: "Works out how hard a PourableContainer pours from how far it's tipped, with an optional boost when fully pouring."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PouringStrengthController

A **class** in `Root.Township`, `Alta.Liquid`.

Works out how hard a `PourableContainer` pours from how far it's tipped, with an optional boost when fully pouring. Sits next to the container.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`FixedPouringStrengthController`](/game-api/types/alta-stats-effects/fixedpouringstrengthcontroller), [`ShakeablePouringStrengthController`](/game-api/types/alta-stats-effects/shakeablepouringstrengthcontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PouringStrengthController()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-pouringcontainer" /><code>{"protected "}<Link to="/game-api/types/alta-stats-effects/pourablecontainer">{"PourableContainer"}</Link>{" pouringContainer"}</code> | The container on the same object. |
| <Link id="m-pouringmultiplier" /><code>{"protected float pouringMultiplier"}</code> | Base multiplier on pour strength. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fullypouringstrengthmultiplier" /><code>{"private float fullyPouringStrengthMultiplier"}</code> | Strength multiplier while fully pouring (default 15). |
| <Link id="m-isallowingfullypouring" /><code>{"private bool isAllowingFullyPouring"}</code> | Whether the full-pour boost can apply. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpouringstrength" /><code>{"virtual float GetPouringStrength(out bool isFullyPouring)"}</code> | Returns the pour strength: multiplier times the surface's tipping value times the full-pour boost. |
| <Link id="m-getfullypouringvalues" /><code>{"protected void GetFullyPouringValues(out bool isFullyPouring, out float fullyPouringMultiplier)"}</code> | Reports whether the container is fully pouring (if allowed) and the multiplier to use. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the `PourableContainer` on the same object. |

</details>

## Used in

Members of other types that take, return or hold a `PouringStrengthController`:

[`PourableContainer.pouringStrengthController`](/game-api/types/alta-stats-effects/pourablecontainer#m-pouringstrengthcontroller).
