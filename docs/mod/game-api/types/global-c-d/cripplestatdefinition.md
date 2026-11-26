---
title: "CrippleStatDefinition"
description: "Stat definition for cripple-style stats that move back by a fixed amount every stat manager update."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CrippleStatDefinition

A **class** in `Root.Township`, the global namespace.

Stat definition for cripple-style stats that move back by a fixed amount every stat manager update.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`StatDefinition`](/mod/game-api/types/alta-stats-effects/statdefinition)
- **Derived types** [`CrippleStatDefinition.Create`](/mod/game-api/types/global-c-d/cripplestatdefinition-create)
- **Nested types** [`Create`](/mod/game-api/types/global-c-d/cripplestatdefinition-create)
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CrippleStatDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isbuildup" /><code>{"private bool isBuildup"}</code> | If true, the stat drains by `regenPerTick` each update instead of filling. |
| <Link id="m-regenpertick" /><code>{"private float regenPerTick"}</code> | Amount added to (or taken from) the stat's base each update. Defaults to 0.01. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Hooks the manager's update to regen the stat up to its maximum, or with `isBuildup` to drain it. |

## Used in

Members of other types that take, return or hold a `CrippleStatDefinition`:

[`CombatStateSettings.crippleStatDefinition`](/mod/game-api/types/alta-player/combatstatesettings#m-cripplestatdefinition), [`CombatStateSettings.CrippleStatDefinition`](/mod/game-api/types/alta-player/combatstatesettings#m-cripplestatdefinition-2).
