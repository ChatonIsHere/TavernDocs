---
title: "AchievementStatDefinition"
description: "Asset for one stat that achievements track; its asset name is its ID."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AchievementStatDefinition

A **class** in `Root.Township`, `Alta.Achievements`.

Asset for one stat that achievements track; its asset name is its ID.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`AchievementStatDefinition.Create`](/mod/game-api/types/alta-player/achievementstatdefinition-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-player/achievementstatdefinition-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AchievementStatDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/stattype">{"StatType"}</Link>{" type"}</code> | <span className="api-desc">Backing field for `Type`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"string Identifier { get; }"}</code> | <span className="api-desc">The asset name, used as the stat ID.</span> |
| <Link id="m-type-2" /><code><Link to="/mod/game-api/types/alta-player/stattype">{"StatType"}</Link>{" Type { get; }"}</code> | <span className="api-desc">The kind of value the stat holds.</span> |

## Used in

Members of other types that take, return or hold a `AchievementStatDefinition`:

<div className="api-used-in">

[`AchievementManager.GetStat`](/mod/game-api/types/alta-player/achievementmanager#m-getstat-2), [`AchievementManager.statDefinitions`](/mod/game-api/types/alta-player/achievementmanager#m-statdefinitions), [`AchievementManager.statMap`](/mod/game-api/types/alta-player/achievementmanager#m-statmap), [`Stat.Definition`](/mod/game-api/types/alta-player/stat#m-definition), [`Stat.Stat`](/mod/game-api/types/alta-player/stat#m-ctor).

</div>
