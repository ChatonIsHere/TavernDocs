---
title: "CookingPot.CookingStage"
description: "Where a cooking pot is in making a stew: preparation, warming up, stewing, then locked once the stew is done."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingPot.CookingStage

An **enum** in `Root.Township`, `Alta.Cooking`.

Where a cooking pot is in making a stew: preparation, warming up, stewing, then locked once the stew is done.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`CookingPot`](/mod/game-api/types/alta-crafting/cookingpot)

## Values

| Member |
| --- |
| <Link id="m-preparation" /><code>{"Preparation = 0"}</code> |
| <Link id="m-stewing" /><code>{"Stewing = 2"}</code> |
| <Link id="m-stewlocked" /><code>{"StewLocked = 3"}</code> |
| <Link id="m-warmingup" /><code>{"WarmingUp = 1"}</code> |

## Used in

Members of other types that take, return or hold a `CookingStage`:

[`CookingPot.currentStage`](/mod/game-api/types/alta-crafting/cookingpot#m-currentstage), [`CookingPotSaveData.currentStage`](/mod/game-api/types/alta-crafting/cookingpotsavedata#m-currentstage).
