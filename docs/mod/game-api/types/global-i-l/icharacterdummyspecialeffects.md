---
title: "ICharacterDummySpecialEffects"
description: "Special effects for a character dummy's clothes and head renderers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICharacterDummySpecialEffects

An **interface** in `Root.Township`, the global namespace.

Special effects for a character dummy's clothes and head renderers. Implemented by `PlayerSpecialEffectsController` and held on `ClothesSettings.SpecialEffects`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`PlayerSpecialEffectsController`](/mod/game-api/types/global-p/playerspecialeffectscontroller)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkinitialize" /><code>{"void CheckInitialize(SkinnedMeshRenderer[] clothes, SkinnedMeshRenderer[] head)"}</code> | Sets up the effects for the given clothes and head renderers if not done yet. |

## Used in

Members of other types that take, return or hold a `ICharacterDummySpecialEffects`:

[`ClothesSettings.SpecialEffects`](/mod/game-api/types/alta-player/clothessettings#m-specialeffects).
