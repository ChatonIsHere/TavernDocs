---
title: "CookableEvent"
description: "A serialized event that passes a Cookable, set up in the Inspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookableEvent

A **class** in `Root.Township`, `Alta.Cooking`.

A serialized event that passes a `Cookable`, set up in the Inspector. `CookingPot` uses one for rejected ingredients.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`AltaEvent<Cookable, CookableUnityEvent>`](/mod/game-api/types/global-a-b/altaevent-t-unityeventt)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookableEvent()"}</code> | Creates a `CookableEvent` with default values. |

## Used in

Members of other types that take, return or hold a `CookableEvent`:

[`CookingPot.rejectedIngredient`](/mod/game-api/types/alta-crafting/cookingpot#m-rejectedingredient).
