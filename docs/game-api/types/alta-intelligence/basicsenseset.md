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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Documented in** [Targets and senses](/game-api/creatures/targets-and-senses#basicsenseset)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"private BasicSenseSet()"}</code> |

</details>

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-intensities" /><code>{"private float[] intensities"}</code> | Backing field for `Intensities`. |
| <Link id="m-pool" /><code>{"private static Stack<"}<Link to="/game-api/types/alta-intelligence/basicsenseset">{"BasicSenseSet"}</Link>{"> pool"}</code> | Private: shared stack of released sets. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-intensities-2" /><code>{"float[] Intensities { get; }"}</code> | The 32 intensity values, indexed by sense. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply("}<Link to="/game-api/types/alta-intelligence/sensesetup">{"SenseSetup"}</Link>{"[] setup, string errorName)"}</code> | Copies intensities in, either from a list of `SenseSetup` entries (by sense index) or from a full 32 value array. |
| <Link id="m-apply-2" /><code>{"void Apply(float[] intensities)"}</code> | Copies intensities in, either from a list of `SenseSetup` entries (by sense index) or from a full 32 value array. |
| <Link id="m-get" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/basicsenseset">{"BasicSenseSet"}</Link>{" Get()"}</code> | Takes a cleared set from the pool, or makes a new one. |
| <Link id="m-modify" /><code>{"void Modify("}<Link to="/game-api/types/alta-intelligence/senseold">{"SenseOld"}</Link>{" sense, float value)"}</code> | Sets one intensity, indexed by the old `SenseOld` enum. |
| <Link id="m-release" /><code>{"void Release()"}</code> | Clears the set and returns it to the pool (kept to 100 sets). |
| <Link id="m-zeroall" /><code>{"void ZeroAll()"}</code> | Sets every intensity to zero. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | Private: zeroes every intensity. |

</details>

## Used in

Members of other types that take, return or hold a `BasicSenseSet`:

[`ITarget.Senses`](/game-api/types/alta-intelligence/itarget#m-senses), [`Target.senses`](/game-api/types/alta-intelligence/target#m-senses), [`Target.Senses`](/game-api/types/alta-intelligence/target#m-senses-2).
