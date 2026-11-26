---
title: "GlyphPosition"
description: "Where a glyph goes on a page: position, rotation and scale."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlyphPosition

A **struct** in `Root.Township`, the global namespace.

Where a glyph goes on a page: position, rotation and scale. Used by the generated page settings.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlyphPosition(Vector2 position, float rotation, float scale)"}</code> | <span className="api-desc">Creates a `GlyphPosition` from `position`, `rotation` and `scale`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"Vector2 position"}</code> | <span className="api-desc">Position on the page.</span> |
| <Link id="m-rotation" /><code>{"float rotation"}</code> | <span className="api-desc">Rotation on the page.</span> |
| <Link id="m-scale" /><code>{"float scale"}</code> | <span className="api-desc">Size on the page.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code><Link to="/mod/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{" Create("}<Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" glyph)"}</code> | <span className="api-desc">Places a glyph at this position.</span> |

## Used in

Members of other types that take, return or hold a `GlyphPosition`:

<div className="api-used-in">

[`ChiselRecipePageSettings.iconPosition`](/mod/game-api/types/global-c-d/chiselrecipepagesettings#m-iconposition), [`EdiblePageSettings.cookingStagePosition`](/mod/game-api/types/global-e-h/ediblepagesettings#m-cookingstageposition), [`EdiblePageSettings.effects`](/mod/game-api/types/global-e-h/ediblepagesettings#m-effects), [`EdiblePageSettings.itemPosition`](/mod/game-api/types/global-e-h/ediblepagesettings#m-itemposition), [`GeneratedPageProvider<T>.GenerateCircleSegments`](/mod/game-api/types/global-e-h/generatedpageprovider-t#m-generatecirclesegments), [`GeneratedPageProvider<T>.GenerateEffectAndBorder`](/mod/game-api/types/global-e-h/generatedpageprovider-t#m-generateeffectandborder), [`GenericCraftingRecipePageSettings.itemPosition`](/mod/game-api/types/global-e-h/genericcraftingrecipepagesettings#m-itemposition), [`GenericCraftingRecipePageSettings.materialPositions`](/mod/game-api/types/global-e-h/genericcraftingrecipepagesettings#m-materialpositions), [`IngredientPageSettings.cookingStagePosition`](/mod/game-api/types/global-i-l/ingredientpagesettings#m-cookingstageposition), [`IngredientPageSettings.effects`](/mod/game-api/types/global-i-l/ingredientpagesettings#m-effects), [`IngredientPageSettings.itemPosition`](/mod/game-api/types/global-i-l/ingredientpagesettings#m-itemposition), [`StewRecipePageSettings.effects`](/mod/game-api/types/global-s/stewrecipepagesettings#m-effects), [`StewRecipePageSettings.ingredients`](/mod/game-api/types/global-s/stewrecipepagesettings#m-ingredients).

</div>
