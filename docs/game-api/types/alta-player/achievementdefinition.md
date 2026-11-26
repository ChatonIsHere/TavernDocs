---
title: "AchievementDefinition"
description: "Asset for one achievement; its asset name is its ID."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AchievementDefinition

A **class** in `Root.Township`, `Alta.Achievements`.

Asset for one achievement; its asset name is its ID.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`AchievementDefinition.Create`](/game-api/types/alta-player/achievementdefinition-create)
- **Nested types** [`Create`](/game-api/types/alta-player/achievementdefinition-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AchievementDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"string Identifier { get; }"}</code> | The asset name, used as the achievement ID. |

## Used in

Members of other types that take, return or hold a `AchievementDefinition`:

[`Achievement.Achievement`](/game-api/types/alta-player/achievement#m-ctor), [`Achievement.Definition`](/game-api/types/alta-player/achievement#m-definition), [`AchievementManager.achievementMap`](/game-api/types/alta-player/achievementmanager#m-achievementmap), [`AchievementManager.definitions`](/game-api/types/alta-player/achievementmanager#m-definitions), [`AchievementManager.GetAchievement`](/game-api/types/alta-player/achievementmanager#m-getachievement-2).
