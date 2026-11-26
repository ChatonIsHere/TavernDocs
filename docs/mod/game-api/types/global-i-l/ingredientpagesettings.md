---
title: "IngredientPageSettings"
description: "Global settings for the generated pages that describe a cooking ingredient."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IngredientPageSettings

A **class** in `Root.Township`, the global namespace.

Global settings for the generated pages that describe a cooking ingredient. Same fields as `EdiblePageSettings`, used by `IngredientPageProvider`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`GlobalSettings<IngredientPageSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`IngredientPageSettings`](/mod/game-api/types/global-i-l/ingredientpagesettings), [`IngredientPageSettings.Create`](/mod/game-api/types/global-i-l/ingredientpagesettings-create)
- **Nested types** [`Create`](/mod/game-api/types/global-i-l/ingredientpagesettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IngredientPageSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-borderglyphscale" /><code>{"float borderGlyphScale"}</code> | Scale of the border glyph drawn around each effect glyph. |
| <Link id="m-burntglyph" /><code><Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" burntGlyph"}</code> | Glyph shown for a burnt item. |
| <Link id="m-circlesegment10scale" /><code>{"float circleSegment10Scale"}</code> | Scale of the circle segment glyph that stands for ten. |
| <Link id="m-circlesegment1scale" /><code>{"float circleSegment1Scale"}</code> | Scale of the circle segment glyph that stands for one. |
| <Link id="m-cookedglyph" /><code><Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" cookedGlyph"}</code> | Glyph shown for a cooked item. |
| <Link id="m-cookingstageposition" /><code><Link to="/mod/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{" cookingStagePosition"}</code> | Where the cooking stage glyph goes. |
| <Link id="m-effects" /><code><Link to="/mod/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{"[] effects"}</code> | Where each effect goes, in order. |
| <Link id="m-itemposition" /><code><Link to="/mod/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{" itemPosition"}</code> | Where the item's own glyph goes. |
| <Link id="m-ripeglyph" /><code><Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" ripeGlyph"}</code> | Glyph shown for a ripe item. |
| <Link id="m-template" /><code><Link to="/mod/game-api/types/alta-items/page">{"Page"}</Link>{" template"}</code> | The page whose glyphs every ingredient page starts with. |
| <Link id="m-unripeglyph" /><code><Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" unripeGlyph"}</code> | Glyph shown for an unripe item. |
| <Link id="m-valuepersegment" /><code>{"float valuePerSegment"}</code> | Effect strength per circle segment. |
