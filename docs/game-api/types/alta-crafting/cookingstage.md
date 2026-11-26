---
title: "CookingStage"
description: "Item component that tags an item with a cooking stage: burnt, cooked, ripe or unripe."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingStage

A **class** in `Root.Township`, `Alta.Cooking`.

Item component that tags an item with a cooking stage: burnt, cooked, ripe or unripe.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`ItemComponent`](/game-api/types/global-i-l/itemcomponent)
- **Nested types** [`Stage`](/game-api/types/alta-crafting/cookingstage-stage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingStage()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-stage" /><code><Link to="/game-api/types/alta-crafting/cookingstage-stage">{"CookingStage.Stage"}</Link>{" stage"}</code> | The item's stage. |
