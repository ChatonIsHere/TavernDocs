---
title: "StatEffect"
description: "Finds StatToAffect on the target's StatManager and calls ModifyStat."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatEffect

An **abstract class** in `Root.Township`, `Alta.Alchemy`.

Finds `StatToAffect` on the target's `StatManager` and calls `ModifyStat`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`EffectDefinition`](/game-api/types/alta-stats-effects/effectdefinition)
- **Derived types** [`StatChangeEffect`](/game-api/types/alta-stats-effects/statchangeeffect), [`StatSetEffect`](/game-api/types/alta-stats-effects/statseteffect)
- **Documented in** [Effects](/game-api/game-systems/effects)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected StatEffect()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-stattoaffect" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statToAffect"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-stattoaffect-2" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" StatToAffect { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-apply" /><code>{"protected override void Apply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> |
| <Link id="m-modifystat" /><code>{"protected abstract void ModifyStat("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, float strength)"}</code> |
