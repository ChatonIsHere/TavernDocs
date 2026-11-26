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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatEffect`](/mod/game-api/types/alta-stats-effects/stateffect)
- **Attributes** `HashedPath`
- **Documented in** [Effects](/mod/game-api/game-systems/effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatChangeEffect()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifystat" /><code>{"protected override void ModifyStat("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, float strength)"}</code> | <span className="api-desc">Adds the strength to the stat's `Base`.</span> |
