---
title: "CrippleStatDefinition"
description: "Stat definition for cripple-style stats that move back by a fixed amount every stat manager update."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CrippleStatDefinition

A **class** in `Root.Township`, no namespace.

Stat definition for cripple-style stats that move back by a fixed amount every stat manager update.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`StatDefinition`](/game-api/types/alta-stats-effects/statdefinition)
- **Derived types** [`CrippleStatDefinition.Create`](/game-api/types/global-c-d/cripplestatdefinition-create)
- **Nested types** [`Create`](/game-api/types/global-c-d/cripplestatdefinition-create)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CrippleStatDefinition()"}</code> |

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
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Hooks the manager's update to regen the stat up to its maximum, or with `isBuildup` to drain it. |

## Used in

Members of other types that take, return or hold a `CrippleStatDefinition`:

[`CombatStateSettings.crippleStatDefinition`](/game-api/types/alta-player/combatstatesettings#m-cripplestatdefinition), [`CombatStateSettings.CrippleStatDefinition`](/game-api/types/alta-player/combatstatesettings#m-cripplestatdefinition-2).
