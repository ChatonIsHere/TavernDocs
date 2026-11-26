---
title: "BuildUpconcoctionEffect"
description: "Base for effects whose strength adds up over repeated doses within a short window."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildUpconcoctionEffect

An **abstract class** in `Root.Township`, `Alta.Alchemy`.

Base for effects whose strength adds up over repeated doses within a short window. Each dose's strength is added to the running total before applying.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`EffectDefinition`](/game-api/types/alta-stats-effects/effectdefinition)
- **Derived types** [`BuildupTeleportEffect`](/game-api/types/alta-stats-effects/buildupteleporteffect)
- **Documented in** [Effects](/game-api/game-systems/effects)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected BuildUpconcoctionEffect()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buildupduration" /><code>{"private float buildupDuration"}</code> | Seconds a build-up lasts after the first dose. Defaults to 1. |
| <Link id="m-buildupmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{", float> buildupMap"}</code> | Running strength per effect handler during its build-up window. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkapply" /><code>{"override void CheckApply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | Adds this dose to the target's running strength (starting the window on the first dose), then applies the total. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-runbuildup" /><code>{"private IEnumerator RunBuildup("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target) (iterator)"}</code> | Coroutine that clears the target's running strength after `buildupDuration`. |

</details>
