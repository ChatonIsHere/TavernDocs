---
title: "BasicSenseSet"
description: "class BasicSenseSet in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicSenseSet

A **class** in `Root.Township`, `Alta.Intelligence`.

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

| Member |
| --- |
| <Link id="m-intensities" /><code>{"private float[] intensities"}</code> |
| <Link id="m-pool" /><code>{"private static Stack<"}<Link to="/game-api/types/alta-intelligence/basicsenseset">{"BasicSenseSet"}</Link>{"> pool"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-intensities-2" /><code>{"float[] Intensities { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-apply" /><code>{"void Apply("}<Link to="/game-api/types/alta-intelligence/sensesetup">{"SenseSetup"}</Link>{"[] setup, string errorName)"}</code> |
| <Link id="m-apply-2" /><code>{"void Apply(float[] intensities)"}</code> |
| <Link id="m-get" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/basicsenseset">{"BasicSenseSet"}</Link>{" Get()"}</code> |
| <Link id="m-modify" /><code>{"void Modify("}<Link to="/game-api/types/alta-intelligence/senseold">{"SenseOld"}</Link>{" sense, float value)"}</code> |
| <Link id="m-release" /><code>{"void Release()"}</code> |
| <Link id="m-zeroall" /><code>{"void ZeroAll()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `BasicSenseSet`:

[`ITarget.Senses`](/game-api/types/alta-intelligence/itarget#m-senses), [`Target.senses`](/game-api/types/alta-intelligence/target#m-senses), [`Target.Senses`](/game-api/types/alta-intelligence/target#m-senses-2).
