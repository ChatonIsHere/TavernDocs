---
title: "StatChangeEffect"
description: "Stat effect that adds the strength to the stat's base value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatChangeEffect

A **class** in `Root.Township`, `Alta.Alchemy`.

Stat effect that adds the strength to the stat's base value.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatEffect`](/game-api/types/alta-stats-effects/stateffect)
- **Attributes** `HashedPath`
- **Documented in** [Effects](/game-api/game-systems/effects)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StatChangeEffect()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifystat" /><code>{"protected override void ModifyStat("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, float strength)"}</code> | Adds the strength to the stat's `Base`. |
