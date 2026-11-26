---
title: "StatEffect"
description: "Base for effects that change one stat on the target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatEffect

An **abstract class** in `Root.Township`, `Alta.Alchemy`.

Base for effects that change one stat on the target. Subclasses decide how the strength changes it.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`EffectDefinition`](/game-api/types/alta-stats-effects/effectdefinition)
- **Derived types** [`StatChangeEffect`](/game-api/types/alta-stats-effects/statchangeeffect), [`StatSetEffect`](/game-api/types/alta-stats-effects/statseteffect)
- **Documented in** [Effects](/game-api/game-systems/effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected StatEffect()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-stattoaffect" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statToAffect"}</code> | Backing field for `StatToAffect`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-stattoaffect-2" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" StatToAffect { get; }"}</code> | The stat this effect changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"protected override void Apply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | Finds the target's stat for `statToAffect` and passes it to `ModifyStat`. |
| <Link id="m-modifystat" /><code>{"protected abstract void ModifyStat("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, float strength)"}</code> | Changes the stat by the strength. Each subclass decides how. |
