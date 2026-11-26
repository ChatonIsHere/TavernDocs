---
title: "PoisonStat"
description: "Stat definition for poison."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PoisonStat

A **class** in `Root.Township`, `Alta.StatSystem`.

Stat definition for poison. While above 0, each stat update deals a small poison damage to another stat and then clears itself.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatDefinition`](/mod/game-api/types/alta-stats-effects/statdefinition)
- **Derived types** [`PoisonStat.Create`](/mod/game-api/types/alta-stats-effects/poisonstat-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-stats-effects/poisonstat-create)
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PoisonStat()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-poisondamage" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" poisonDamage"}</code> | Damage data with `DamageSource.Poison`, set as the change source on the hurt stat. |
| <Link id="m-poisonedstatdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" poisonedStatDefinition"}</code> | The stat that takes the damage. |
| <Link id="m-tickdamage" /><code>{"private float tickDamage"}</code> | Amount taken from the poisoned stat each update. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Starts the poison update while the value is above 0 and stops it at 0. |
