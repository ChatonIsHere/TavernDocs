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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`HashedGeneralValue<CosmeticColor>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`CosmeticColor`](/mod/game-api/types/alta-customization/cosmeticcolor)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticColor()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color0" /><code>{"private Color color0"}</code> | <span className="api-desc">Backing field for `Color0`.</span> |
| <Link id="m-color1" /><code>{"private Color color1"}</code> | <span className="api-desc">Backing field for `Color1`.</span> |
| <Link id="m-color2" /><code>{"private Color color2"}</code> | <span className="api-desc">Backing field for `Color2`.</span> |
| <Link id="m-colora1" /><code>{"private static readonly int ColorA1"}</code> | <span className="api-desc">Shader property ID for `_ColorA1`.</span> |
| <Link id="m-colora2" /><code>{"private static readonly int ColorA2"}</code> | <span className="api-desc">Shader property ID for `_ColorA2`.</span> |
| <Link id="m-colora3" /><code>{"private static readonly int ColorA3"}</code> | <span className="api-desc">Shader property ID for `_ColorA3`.</span> |
| <Link id="m-colorb1" /><code>{"private static readonly int ColorB1"}</code> | <span className="api-desc">Shader property ID for `_ColorB1`.</span> |
| <Link id="m-colorb2" /><code>{"private static readonly int ColorB2"}</code> | <span className="api-desc">Shader property ID for `_ColorB2`.</span> |
| <Link id="m-colorb3" /><code>{"private static readonly int ColorB3"}</code> | <span className="api-desc">Shader property ID for `_ColorB3`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-color0-2" /><code>{"Color Color0 { get; }"}</code> | <span className="api-desc">First colour of the set.</span> |
| <Link id="m-color1-2" /><code>{"Color Color1 { get; }"}</code> | <span className="api-desc">Second colour of the set.</span> |
| <Link id="m-color2-2" /><code>{"Color Color2 { get; }"}</code> | <span className="api-desc">Third colour of the set.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applya" /><code>{"void ApplyA(Material material)"}</code> | <span className="api-desc">Writes the three colours to the material's `_ColorA1` to `_ColorA3` properties.</span> |
| <Link id="m-applyb" /><code>{"void ApplyB(Material material)"}</code> | <span className="api-desc">Writes the three colours to the material's `_ColorB1` to `_ColorB3` properties.</span> |
| <Link id="m-togradient" /><code>{"Gradient ToGradient()"}</code> | <span className="api-desc">Builds a fully opaque gradient from the three colours, using each colour's alpha as its key position.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-copycolors" /><code>{"private void CopyColors()"}</code> | <span className="api-desc">Editor context menu: copies the first colour's RGB to the other two, keeping their alphas.</span> |
| <Link id="m-resetalphas" /><code>{"private void ResetAlphas()"}</code> | <span className="api-desc">Editor context menu: sets the alphas to 0, 0.5 and 1. The alphas are the gradient key positions in `ToGradient`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticColor`:

<div className="api-used-in">

[`SkinSettings.Set`](/mod/game-api/types/alta-player/skinsettings#m-set), [`ColoredMeshes.color`](/mod/game-api/types/alta-customization/coloredmeshes#m-color), [`ColoredMeshes.Color`](/mod/game-api/types/alta-customization/coloredmeshes#m-color-2), [`CosmeticMeshPartBase<T>.ApplyColorToArguments`](/mod/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-applycolortoarguments), [`CosmeticMeshPartBase<T>.GetCustomPickupColors`](/mod/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-getcustompickupcolors), [`CosmeticPalette.colors`](/mod/game-api/types/alta-customization/cosmeticpalette#m-colors), [`CosmeticPalette.Colors`](/mod/game-api/types/alta-customization/cosmeticpalette#m-colors-2), [`CosmeticSkinColor.noseColor`](/mod/game-api/types/alta-customization/cosmeticskincolor#m-nosecolor), [`CosmeticSkinColor.skinColor`](/mod/game-api/types/alta-customization/cosmeticskincolor#m-skincolor), [`CosmeticSkinColor.SkinColor`](/mod/game-api/types/alta-customization/cosmeticskincolor#m-skincolor-2), [`ICosmeticMeshPartBase.ApplyColorToArguments`](/mod/game-api/types/alta-customization/icosmeticmeshpartbase#m-applycolortoarguments), [`ICosmeticMeshPartBase.GetCustomPickupColors`](/mod/game-api/types/alta-customization/icosmeticmeshpartbase#m-getcustompickupcolors), [`SkinMeshPart.GetCustomPickupColors`](/mod/game-api/types/alta-customization/skinmeshpart#m-getcustompickupcolors), [`TexturePacker.ExistingBlit.colorA`](/mod/game-api/types/alta-customization/texturepacker-existingblit#m-colora), [`TexturePacker.ExistingBlit.colorB`](/mod/game-api/types/alta-customization/texturepacker-existingblit#m-colorb), [`TexturePacker.ExistingBlit.ExistingBlit`](/mod/game-api/types/alta-customization/texturepacker-existingblit#m-ctor), [`TwoColors.primary`](/mod/game-api/types/alta-customization/twocolors#m-primary), [`TwoColors.Primary`](/mod/game-api/types/alta-customization/twocolors#m-primary-2), [`TwoColors.secondary`](/mod/game-api/types/alta-customization/twocolors#m-secondary), [`TwoColors.Secondary`](/mod/game-api/types/alta-customization/twocolors#m-secondary-2), [`ColorBoardItem.color`](/mod/game-api/types/global-c-d/colorboarditem#m-color), [`ColorBoardItem.CosmeticColor`](/mod/game-api/types/global-c-d/colorboarditem#m-cosmeticcolor), [`CosmeticParticleColorer.SetColor`](/mod/game-api/types/global-c-d/cosmeticparticlecolorer#m-setcolor), [`PaintBrush.color`](/mod/game-api/types/global-p/paintbrush#m-color), [`PaintBrush.Color`](/mod/game-api/types/global-p/paintbrush#m-color-2).

</div>
