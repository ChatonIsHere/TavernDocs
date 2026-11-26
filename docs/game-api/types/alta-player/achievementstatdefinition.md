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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`AchievementStatDefinition.Create`](/game-api/types/alta-player/achievementstatdefinition-create)
- **Nested types** [`Create`](/game-api/types/alta-player/achievementstatdefinition-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AchievementStatDefinition()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/alta-player/stattype">{"StatType"}</Link>{" type"}</code> | Backing field for `Type`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"string Identifier { get; }"}</code> | The asset name, used as the stat ID. |
| <Link id="m-type-2" /><code><Link to="/game-api/types/alta-player/stattype">{"StatType"}</Link>{" Type { get; }"}</code> | The kind of value the stat holds. |

## Used in

Members of other types that take, return or hold a `AchievementStatDefinition`:

[`AchievementManager.GetStat`](/game-api/types/alta-player/achievementmanager#m-getstat-2), [`AchievementManager.statDefinitions`](/game-api/types/alta-player/achievementmanager#m-statdefinitions), [`AchievementManager.statMap`](/game-api/types/alta-player/achievementmanager#m-statmap), [`Stat.Definition`](/game-api/types/alta-player/stat#m-definition), [`Stat.Stat`](/game-api/types/alta-player/stat#m-ctor).
