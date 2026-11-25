---
title: "PlayerCosmeticWrapper"
description: "class PlayerCosmeticWrapper in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCosmeticWrapper

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationWrapper`](/game-api/types/alta-customization/customizationwrapper)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerCosmeticWrapper("}<Link to="/game-api/types/alta-customization/icustomizationvisualmanager">{"ICustomizationVisualManager"}</Link>{" manager)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-randomizecache" /><code>{"private readonly List<uint> randomizeCache"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-getitem" /><code>{"override async Task<"}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> GetItem(uint hash)"}</code> |
| <Link id="m-getitem-2" /><code>{"Task<"}<Link to="/game-api/types/alta-customization/playercosmeticdefinition">{"PlayerCosmeticDefinition"}</Link>{"> GetItem(string sku)"}</code> |
| <Link id="m-postrandomize" /><code>{"async Task PostRandomize()"}</code> |

## Used in

Members of other types that take, return or hold a `PlayerCosmeticWrapper`:

[`CosmeticHairPart.PostRandomize`](/game-api/types/alta-customization/cosmetichairpart#m-postrandomize), [`CosmeticOwnershipManager.Randomize`](/game-api/types/alta-customization/cosmeticownershipmanager#m-randomize-3), [`CustomizationVisualPart.PostRandomize`](/game-api/types/alta-customization/customizationvisualpart#m-postrandomize), [`ICustomizationPart.PostRandomize`](/game-api/types/alta-customization/icustomizationpart#m-postrandomize), [`PlayerCharacterCustomizationManager.Cosmetics`](/game-api/types/alta-customization/playercharactercustomizationmanager#m-cosmetics), [`StaticRandomCustomization.Save`](/game-api/types/alta-customization/staticrandomcustomization#m-save), [`PlayerLikeSpectralGhost.Randomize`](/game-api/types/alta-intelligence/playerlikespectralghost#m-randomize).
