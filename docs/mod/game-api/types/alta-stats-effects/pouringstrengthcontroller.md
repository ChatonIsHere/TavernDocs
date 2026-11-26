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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`FixedPouringStrengthController`](/mod/game-api/types/alta-stats-effects/fixedpouringstrengthcontroller), [`ShakeablePouringStrengthController`](/mod/game-api/types/alta-stats-effects/shakeablepouringstrengthcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PouringStrengthController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-pouringcontainer" /><code>{"protected "}<Link to="/mod/game-api/types/alta-stats-effects/pourablecontainer">{"PourableContainer"}</Link>{" pouringContainer"}</code> | <span className="api-desc">The container on the same object.</span> |
| <Link id="m-pouringmultiplier" /><code>{"protected float pouringMultiplier"}</code> | <span className="api-desc">Base multiplier on pour strength.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fullypouringstrengthmultiplier" /><code>{"private float fullyPouringStrengthMultiplier"}</code> | <span className="api-desc">Strength multiplier while fully pouring (default 15).</span> |
| <Link id="m-isallowingfullypouring" /><code>{"private bool isAllowingFullyPouring"}</code> | <span className="api-desc">Whether the full-pour boost can apply.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpouringstrength" /><code>{"virtual float GetPouringStrength(out bool isFullyPouring)"}</code> | <span className="api-desc">Returns the pour strength: multiplier times the surface's tipping value times the full-pour boost.</span> |
| <Link id="m-getfullypouringvalues" /><code>{"protected void GetFullyPouringValues(out bool isFullyPouring, out float fullyPouringMultiplier)"}</code> | <span className="api-desc">Reports whether the container is fully pouring (if allowed) and the multiplier to use.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the `PourableContainer` on the same object.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PouringStrengthController`:

<div className="api-used-in">

[`PourableContainer.pouringStrengthController`](/mod/game-api/types/alta-stats-effects/pourablecontainer#m-pouringstrengthcontroller).

</div>
