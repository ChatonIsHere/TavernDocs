---
title: "ChanceBasedEffectDefinition"
description: "Base for effects that only apply some of the time: the chance is the strength times chanceMultiplier."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChanceBasedEffectDefinition

An **abstract class** in `Root.Township`, `Alta.Alchemy`.

Base for effects that only apply some of the time: the chance is the strength times `chanceMultiplier`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`EffectDefinition`](/game-api/types/alta-stats-effects/effectdefinition)
- **Derived types** [`TeleportEffect`](/game-api/types/alta-stats-effects/teleporteffect)
- **Documented in** [Effects](/game-api/game-systems/effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ChanceBasedEffectDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chancemultiplier" /><code>{"private float chanceMultiplier"}</code> | Scales strength into the apply chance. Defaults to 1. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkapply" /><code>{"override void CheckApply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | Applies the effect if a random roll is below strength times `chanceMultiplier`. |
