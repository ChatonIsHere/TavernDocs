---
title: "BurnEffect"
description: "Effect that keeps raising the target's burn stat while active."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BurnEffect

A **class** in `Root.Township`, `Alta.Alchemy`.

Effect that keeps raising the target's `burn` stat while active. A positive strength starts it, zero or less stops it.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`EffectDefinition`](/mod/game-api/types/alta-stats-effects/effectdefinition)
- **Documented in** [Effects](/mod/game-api/game-systems/effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BurnEffect()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-burningmanager" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{", "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{"> burningManager"}</code> | <span className="api-desc">The burn stat of each stat manager currently burning.</span> |
| <Link id="m-firetick" /><code>{"private float fireTick"}</code> | <span className="api-desc">Burn added per stat manager update. Defaults to 1.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"protected override void Apply("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | <span className="api-desc">With positive strength, hooks the target's stat updates to add burn; otherwise unhooks and forgets the target.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-burn" /><code>{"private void Burn("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | <span className="api-desc">Adds `fireTick` to the target's burn stat on each stat manager update.</span> |

</details>
