---
title: "PlayerCosmeticWrapper"
description: "The customization wrapper for player cosmetics: loads PlayerCosmeticDefinition items through the wrapper's addressable session."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCosmeticWrapper

A **class** in `Root.Township`, `Alta.Customization`.

The customization wrapper for player cosmetics: loads `PlayerCosmeticDefinition` items through the wrapper's addressable session.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationWrapper`](/mod/game-api/types/alta-customization/customizationwrapper)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerCosmeticWrapper("}<Link to="/mod/game-api/types/alta-customization/icustomizationvisualmanager">{"ICustomizationVisualManager"}</Link>{" manager)"}</code> | Creates a `PlayerCosmeticWrapper` from `manager`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-randomizecache" /><code>{"private readonly List<uint> randomizeCache"}</code> | Copy of the item list used during `PostRandomize`, so the list can change while it runs. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getitem" /><code>{"override async Task<"}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> GetItem(uint hash)"}</code> | Loads a player cosmetic definition by hash or by SKU. |
| <Link id="m-getitem-2" /><code>{"Task<"}<Link to="/mod/game-api/types/alta-customization/playercosmeticdefinition">{"PlayerCosmeticDefinition"}</Link>{"> GetItem(string sku)"}</code> | Loads a player cosmetic definition by hash or by SKU. |
| <Link id="m-postrandomize" /><code>{"async Task PostRandomize()"}</code> | After a randomize, runs each part's `PostRandomize` step for every equipped item. Used for new characters and spectral ghosts. |

## Used in

Members of other types that take, return or hold a `PlayerCosmeticWrapper`:

[`CosmeticHairPart.PostRandomize`](/mod/game-api/types/alta-customization/cosmetichairpart#m-postrandomize), [`CosmeticOwnershipManager.Randomize`](/mod/game-api/types/alta-customization/cosmeticownershipmanager#m-randomize-3), [`CustomizationVisualPart.PostRandomize`](/mod/game-api/types/alta-customization/customizationvisualpart#m-postrandomize), [`ICustomizationPart.PostRandomize`](/mod/game-api/types/alta-customization/icustomizationpart#m-postrandomize), [`PlayerCharacterCustomizationManager.Cosmetics`](/mod/game-api/types/alta-customization/playercharactercustomizationmanager#m-cosmetics), [`StaticRandomCustomization.Save`](/mod/game-api/types/alta-customization/staticrandomcustomization#m-save), [`PlayerLikeSpectralGhost.Randomize`](/mod/game-api/types/alta-intelligence/playerlikespectralghost#m-randomize).
