---
title: "BurnEffect"
description: "Positive strength starts adding to the \"burn\" stat every tick, negative stops it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BurnEffect

A **class** in `Root.Township`, `Alta.Alchemy`.

Positive strength starts adding to the `"burn"` stat every tick, negative stops it.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`EffectDefinition`](/game-api/types/alta-stats-effects/effectdefinition)
- **Documented in** [Effects](/game-api/game-systems/effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BurnEffect()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-burningmanager" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{", "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{"> burningManager"}</code> |  |
| <Link id="m-firetick" /><code>{"private float fireTick"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"protected override void Apply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> |  |
| <Link id="m-burn" /><code>{"private void Burn("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> |  |
