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
| <Link id="m-ctor" /><code>{"IngredientPageSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-borderglyphscale" /><code>{"float borderGlyphScale"}</code> | <span className="api-desc">Scale of the border glyph drawn around each effect glyph.</span> |
| <Link id="m-burntglyph" /><code><Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" burntGlyph"}</code> | <span className="api-desc">Glyph shown for a burnt item.</span> |
| <Link id="m-circlesegment10scale" /><code>{"float circleSegment10Scale"}</code> | <span className="api-desc">Scale of the circle segment glyph that stands for ten.</span> |
| <Link id="m-circlesegment1scale" /><code>{"float circleSegment1Scale"}</code> | <span className="api-desc">Scale of the circle segment glyph that stands for one.</span> |
| <Link id="m-cookedglyph" /><code><Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" cookedGlyph"}</code> | <span className="api-desc">Glyph shown for a cooked item.</span> |
| <Link id="m-cookingstageposition" /><code><Link to="/mod/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{" cookingStagePosition"}</code> | <span className="api-desc">Where the cooking stage glyph goes.</span> |
| <Link id="m-effects" /><code><Link to="/mod/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{"[] effects"}</code> | <span className="api-desc">Where each effect goes, in order.</span> |
| <Link id="m-itemposition" /><code><Link to="/mod/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{" itemPosition"}</code> | <span className="api-desc">Where the item's own glyph goes.</span> |
| <Link id="m-ripeglyph" /><code><Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" ripeGlyph"}</code> | <span className="api-desc">Glyph shown for a ripe item.</span> |
| <Link id="m-template" /><code><Link to="/mod/game-api/types/alta-items/page">{"Page"}</Link>{" template"}</code> | <span className="api-desc">The page whose glyphs every ingredient page starts with.</span> |
| <Link id="m-unripeglyph" /><code><Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" unripeGlyph"}</code> | <span className="api-desc">Glyph shown for an unripe item.</span> |
| <Link id="m-valuepersegment" /><code>{"float valuePerSegment"}</code> | <span className="api-desc">Effect strength per circle segment.</span> |
