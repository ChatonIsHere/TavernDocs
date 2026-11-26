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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`EffectDefinition`](/game-api/types/alta-stats-effects/effectdefinition)
- **Documented in** [Effects](/game-api/game-systems/effects)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BurnEffect()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-burningmanager" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{", "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{"> burningManager"}</code> | The burn stat of each stat manager currently burning. |
| <Link id="m-firetick" /><code>{"private float fireTick"}</code> | Burn added per stat manager update. Defaults to 1. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"protected override void Apply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | With positive strength, hooks the target's stat updates to add burn; otherwise unhooks and forgets the target. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-burn" /><code>{"private void Burn("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | Adds `fireTick` to the target's burn stat on each stat manager update. |

</details>
