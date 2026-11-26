---
title: "StatSetEffect"
description: "Stat effect that sets the stat's base value to the strength."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatSetEffect

A **class** in `Root.Township`, `Alta.Alchemy`.

Stat effect that sets the stat's base value to the strength.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatEffect`](/mod/game-api/types/alta-stats-effects/stateffect)
- **Documented in** [Effects](/mod/game-api/game-systems/effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatSetEffect()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifystat" /><code>{"protected override void ModifyStat("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, float strength)"}</code> | Sets the stat's `Base` to the strength. |
