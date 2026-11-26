---
title: "Glyph"
description: "A hashed sprite asset that can be stamped onto a page (book or paper)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Glyph

A **class** in `Root.Township`, `Alta.Pages`.

A hashed sprite asset that can be stamped onto a page (book or paper). Stored under `Pages/Glyphs`; placement is held by its nested `Positioning` class.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`HashedGeneralValue<Glyph>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`Glyph`](/mod/game-api/types/alta-items/glyph)
- **Nested types** [`Positioning`](/mod/game-api/types/alta-items/glyph-positioning)
- **Attributes** `HashedPath`
- **Documented in** [Pages and books](/mod/game-api/items/pages-and-books)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Glyph()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-positioninterval" /><code>{"const float PositionInterval"}</code> | Step a glyph's position is rounded to and synced at (0.01 of page width). |
| <Link id="m-rotationinterval" /><code>{"const float RotationInterval"}</code> | Step a glyph's rotation is rounded to, in degrees (10). |
| <Link id="m-scaleinterval" /><code>{"const float ScaleInterval"}</code> | Step a glyph's scale is rounded to (0.1). |
| <Link id="m-scalemaximum" /><code>{"const float ScaleMaximum"}</code> | Largest allowed glyph scale (4.5). |
| <Link id="m-scaleminimum" /><code>{"const float ScaleMinimum"}</code> | Smallest allowed glyph scale (0.25). |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sprite" /><code>{"private Sprite sprite"}</code> | Backing field for `Sprite`, the image drawn for this glyph on a page. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sprite-2" /><code>{"Sprite Sprite { get; }"}</code> | The sprite drawn for this glyph. |

## Used in

Members of other types that take, return or hold a `Glyph`:

[`EffectDefinition.effectGlyph`](/mod/game-api/types/alta-stats-effects/effectdefinition#m-effectglyph), [`ChiselDefinition.recipeGlyph`](/mod/game-api/types/alta-crafting/chiseldefinition#m-recipeglyph), [`StewIngredientBase.glyph`](/mod/game-api/types/alta-crafting/stewingredientbase#m-glyph), [`Item.glyph`](/mod/game-api/types/alta-items/item#m-glyph), [`Item.Glyph`](/mod/game-api/types/alta-items/item#m-glyph-2), [`FlairSettings.glyph`](/mod/game-api/types/alta-items/flairsettings#m-glyph), [`FlairSettings.Glyph`](/mod/game-api/types/alta-items/flairsettings#m-glyph-2), [`Glyph.Positioning.glyph`](/mod/game-api/types/alta-items/glyph-positioning#m-glyph), [`Glyph.Positioning.Glyph`](/mod/game-api/types/alta-items/glyph-positioning#m-glyph-2), [`Glyph.Positioning.Positioning`](/mod/game-api/types/alta-items/glyph-positioning#m-ctor-2), [`EdiblePageSettings.burntGlyph`](/mod/game-api/types/global-e-h/ediblepagesettings#m-burntglyph), [`EdiblePageSettings.cookedGlyph`](/mod/game-api/types/global-e-h/ediblepagesettings#m-cookedglyph), [`EdiblePageSettings.ripeGlyph`](/mod/game-api/types/global-e-h/ediblepagesettings#m-ripeglyph), [`EdiblePageSettings.unripeGlyph`](/mod/game-api/types/global-e-h/ediblepagesettings#m-unripeglyph), [`GeneratedPageProvider<T>.GenerateEffectAndBorder`](/mod/game-api/types/global-e-h/generatedpageprovider-t#m-generateeffectandborder), [`GeneratedPageSettings.circleSegment1`](/mod/game-api/types/global-e-h/generatedpagesettings#m-circlesegment1), [`GeneratedPageSettings.circleSegment10`](/mod/game-api/types/global-e-h/generatedpagesettings#m-circlesegment10), [`GeneratedPageSettings.effectModifierBorderGlyph`](/mod/game-api/types/global-e-h/generatedpagesettings#m-effectmodifierborderglyph), [`GeneratedPageSettings.extraEffectBorderGlyph`](/mod/game-api/types/global-e-h/generatedpagesettings#m-extraeffectborderglyph), [`GeneratedPageSettings.squareItemBorderGlyph`](/mod/game-api/types/global-e-h/generatedpagesettings#m-squareitemborderglyph), [`GlyphPosition.Create`](/mod/game-api/types/global-e-h/glyphposition#m-create), [`IngredientPageSettings.burntGlyph`](/mod/game-api/types/global-i-l/ingredientpagesettings#m-burntglyph), [`IngredientPageSettings.cookedGlyph`](/mod/game-api/types/global-i-l/ingredientpagesettings#m-cookedglyph), [`IngredientPageSettings.ripeGlyph`](/mod/game-api/types/global-i-l/ingredientpagesettings#m-ripeglyph), [`IngredientPageSettings.unripeGlyph`](/mod/game-api/types/global-i-l/ingredientpagesettings#m-unripeglyph).
