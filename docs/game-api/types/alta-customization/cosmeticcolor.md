---
title: "CosmeticColor"
description: "A hashed asset holding a three-colour set for cosmetics, written into material colour slots A or B."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticColor

A **class** in `Root.Township`, `Alta.Customization`.

A hashed asset holding a three-colour set for cosmetics, written into material colour slots A or B.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`HashedGeneralValue<CosmeticColor>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`CosmeticColor`](/game-api/types/alta-customization/cosmeticcolor)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticColor()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-color0" /><code>{"private Color color0"}</code> |  |
| <Link id="m-color1" /><code>{"private Color color1"}</code> |  |
| <Link id="m-color2" /><code>{"private Color color2"}</code> |  |
| <Link id="m-colora1" /><code>{"private static readonly int ColorA1"}</code> |  |
| <Link id="m-colora2" /><code>{"private static readonly int ColorA2"}</code> |  |
| <Link id="m-colora3" /><code>{"private static readonly int ColorA3"}</code> |  |
| <Link id="m-colorb1" /><code>{"private static readonly int ColorB1"}</code> |  |
| <Link id="m-colorb2" /><code>{"private static readonly int ColorB2"}</code> |  |
| <Link id="m-colorb3" /><code>{"private static readonly int ColorB3"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-color0-2" /><code>{"Color Color0 { get; }"}</code> | First colour of the set. |
| <Link id="m-color1-2" /><code>{"Color Color1 { get; }"}</code> | Second colour of the set. |
| <Link id="m-color2-2" /><code>{"Color Color2 { get; }"}</code> | Third colour of the set. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applya" /><code>{"void ApplyA(Material material)"}</code> | Writes the three colours to the material's `_ColorA1` to `_ColorA3` properties. |
| <Link id="m-applyb" /><code>{"void ApplyB(Material material)"}</code> | Writes the three colours to the material's `_ColorB1` to `_ColorB3` properties. |
| <Link id="m-togradient" /><code>{"Gradient ToGradient()"}</code> | Builds a fully opaque gradient from the three colours, using each colour's alpha as its key position. |
| <Link id="m-copycolors" /><code>{"private void CopyColors()"}</code> |  |
| <Link id="m-resetalphas" /><code>{"private void ResetAlphas()"}</code> |  |

## Used in

Members of other types that take, return or hold a `CosmeticColor`:

[`SkinSettings.Set`](/game-api/types/alta-player/skinsettings#m-set), [`ColoredMeshes.color`](/game-api/types/alta-customization/coloredmeshes#m-color), [`ColoredMeshes.Color`](/game-api/types/alta-customization/coloredmeshes#m-color-2), [`CosmeticMeshPartBase<T>.ApplyColorToArguments`](/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-applycolortoarguments), [`CosmeticMeshPartBase<T>.GetCustomPickupColors`](/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-getcustompickupcolors), [`CosmeticPalette.colors`](/game-api/types/alta-customization/cosmeticpalette#m-colors), [`CosmeticPalette.Colors`](/game-api/types/alta-customization/cosmeticpalette#m-colors-2), [`CosmeticSkinColor.noseColor`](/game-api/types/alta-customization/cosmeticskincolor#m-nosecolor), [`CosmeticSkinColor.skinColor`](/game-api/types/alta-customization/cosmeticskincolor#m-skincolor), [`CosmeticSkinColor.SkinColor`](/game-api/types/alta-customization/cosmeticskincolor#m-skincolor-2), [`ICosmeticMeshPartBase.ApplyColorToArguments`](/game-api/types/alta-customization/icosmeticmeshpartbase#m-applycolortoarguments), [`ICosmeticMeshPartBase.GetCustomPickupColors`](/game-api/types/alta-customization/icosmeticmeshpartbase#m-getcustompickupcolors), [`SkinMeshPart.GetCustomPickupColors`](/game-api/types/alta-customization/skinmeshpart#m-getcustompickupcolors), [`TexturePacker.ExistingBlit.colorA`](/game-api/types/alta-customization/texturepacker-existingblit#m-colora), [`TexturePacker.ExistingBlit.colorB`](/game-api/types/alta-customization/texturepacker-existingblit#m-colorb), [`TexturePacker.ExistingBlit.ExistingBlit`](/game-api/types/alta-customization/texturepacker-existingblit#m-ctor), [`TwoColors.primary`](/game-api/types/alta-customization/twocolors#m-primary), [`TwoColors.Primary`](/game-api/types/alta-customization/twocolors#m-primary-2), [`TwoColors.secondary`](/game-api/types/alta-customization/twocolors#m-secondary), [`TwoColors.Secondary`](/game-api/types/alta-customization/twocolors#m-secondary-2), [`ColorBoardItem.color`](/game-api/types/global-c-d/colorboarditem#m-color), [`ColorBoardItem.CosmeticColor`](/game-api/types/global-c-d/colorboarditem#m-cosmeticcolor), [`CosmeticParticleColorer.SetColor`](/game-api/types/global-c-d/cosmeticparticlecolorer#m-setcolor), [`PaintBrush.color`](/game-api/types/global-p/paintbrush#m-color), [`PaintBrush.Color`](/game-api/types/global-p/paintbrush#m-color-2).
