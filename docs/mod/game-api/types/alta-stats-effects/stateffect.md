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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`EffectDefinition`](/mod/game-api/types/alta-stats-effects/effectdefinition)
- **Derived types** [`StatChangeEffect`](/mod/game-api/types/alta-stats-effects/statchangeeffect), [`StatSetEffect`](/mod/game-api/types/alta-stats-effects/statseteffect)
- **Documented in** [Effects](/mod/game-api/game-systems/effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected StatEffect()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-stattoaffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statToAffect"}</code> | <span className="api-desc">Backing field for `StatToAffect`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-stattoaffect-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" StatToAffect { get; }"}</code> | <span className="api-desc">The stat this effect changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"protected override void Apply("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | <span className="api-desc">Finds the target's stat for `statToAffect` and passes it to `ModifyStat`.</span> |
| <Link id="m-modifystat" /><code>{"protected abstract void ModifyStat("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, float strength)"}</code> | <span className="api-desc">Changes the stat by the strength. Each subclass decides how.</span> |
