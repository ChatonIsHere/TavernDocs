---
title: "BasicSenseSet"
description: "A pooled array of 32 sense intensities used by AI targets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicSenseSet

A **class** in `Root.Township`, `Alta.Intelligence`.

A pooled array of 32 sense intensities used by AI targets. Get one with `Get` and give it back with `Release`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Documented in** [Targets and senses](/mod/game-api/creatures/targets-and-senses#basicsenseset)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private BasicSenseSet()"}</code> | <span className="api-desc">Creates a `BasicSenseSet` with default values.</span> |

</details>

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-intensities" /><code>{"private float[] intensities"}</code> | <span className="api-desc">Backing field for `Intensities`.</span> |
| <Link id="m-pool" /><code>{"private static Stack<"}<Link to="/mod/game-api/types/alta-intelligence/basicsenseset">{"BasicSenseSet"}</Link>{"> pool"}</code> | <span className="api-desc">Private: shared stack of released sets.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-intensities-2" /><code>{"float[] Intensities { get; }"}</code> | <span className="api-desc">The 32 intensity values, indexed by sense.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply("}<Link to="/mod/game-api/types/alta-intelligence/sensesetup">{"SenseSetup"}</Link>{"[] setup, string errorName)"}</code> | <span className="api-desc">Copies intensities in, either from a list of `SenseSetup` entries (by sense index) or from a full 32 value array.</span> |
| <Link id="m-apply-2" /><code>{"void Apply(float[] intensities)"}</code> | <span className="api-desc">Copies intensities in, either from a list of `SenseSetup` entries (by sense index) or from a full 32 value array.</span> |
| <Link id="m-get" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/basicsenseset">{"BasicSenseSet"}</Link>{" Get()"}</code> | <span className="api-desc">Takes a cleared set from the pool, or makes a new one.</span> |
| <Link id="m-modify" /><code>{"void Modify("}<Link to="/mod/game-api/types/alta-intelligence/senseold">{"SenseOld"}</Link>{" sense, float value)"}</code> | <span className="api-desc">Sets one intensity, indexed by the old `SenseOld` enum.</span> |
| <Link id="m-release" /><code>{"void Release()"}</code> | <span className="api-desc">Clears the set and returns it to the pool (kept to 100 sets).</span> |
| <Link id="m-zeroall" /><code>{"void ZeroAll()"}</code> | <span className="api-desc">Sets every intensity to zero.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | <span className="api-desc">Private: zeroes every intensity.</span> |

</details>

## Used in

Members of other types that take, return or hold a `BasicSenseSet`:

<div className="api-used-in">

[`ITarget.Senses`](/mod/game-api/types/alta-intelligence/itarget#m-senses), [`Target.senses`](/mod/game-api/types/alta-intelligence/target#m-senses), [`Target.Senses`](/mod/game-api/types/alta-intelligence/target#m-senses-2).

</div>
