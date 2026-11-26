---
title: "GenericCraftingRecipePageSettings"
description: "Global settings for generated crafting recipe pages: the page template and where the item and material glyphs go."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingRecipePageSettings

A **class** in `Root.Township`, the global namespace.

Global settings for generated crafting recipe pages: the page template and where the item and material glyphs go.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`GlobalSettings<GenericCraftingRecipePageSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`GenericCraftingRecipePageSettings`](/mod/game-api/types/global-e-h/genericcraftingrecipepagesettings), [`GenericCraftingRecipePageSettings.Create`](/mod/game-api/types/global-e-h/genericcraftingrecipepagesettings-create)
- **Nested types** [`Create`](/mod/game-api/types/global-e-h/genericcraftingrecipepagesettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingRecipePageSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-circlesegment10scale" /><code>{"float circleSegment10Scale"}</code> | <span className="api-desc">Scale of the circle segment glyph for tens.</span> |
| <Link id="m-circlesegment1scale" /><code>{"float circleSegment1Scale"}</code> | <span className="api-desc">Scale of the circle segment glyph for units.</span> |
| <Link id="m-itemposition" /><code><Link to="/mod/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{" itemPosition"}</code> | <span className="api-desc">Glyph position of the crafted item.</span> |
| <Link id="m-materialpositions" /><code><Link to="/mod/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{"[] materialPositions"}</code> | <span className="api-desc">Glyph positions of the materials.</span> |
| <Link id="m-template" /><code><Link to="/mod/game-api/types/alta-items/page">{"Page"}</Link>{" template"}</code> | <span className="api-desc">The page used as the template.</span> |
| <Link id="m-valuepersegment" /><code>{"float valuePerSegment"}</code> | <span className="api-desc">Amount one circle segment stands for.</span> |
