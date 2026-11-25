---
title: "BuildUpconcoctionEffect"
description: "abstract class BuildUpconcoctionEffect in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildUpconcoctionEffect

An **abstract class** in `Root.Township`, `Alta.Alchemy`.

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

| Member |
| --- |
| <Link id="m-buildupduration" /><code>{"private float buildupDuration"}</code> |
| <Link id="m-buildupmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{", float> buildupMap"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-checkapply" /><code>{"override void CheckApply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-runbuildup" /><code>{"private IEnumerator RunBuildup("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target) (iterator)"}</code> |

</details>
