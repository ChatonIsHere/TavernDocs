---
title: "GenericCraftingRecipePageSettings"
description: "Global settings for generated crafting recipe pages: the page template and where the item and material glyphs go."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingRecipePageSettings

A **class** in `Root.Township`, no namespace.

Global settings for generated crafting recipe pages: the page template and where the item and material glyphs go.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`GlobalSettings<GenericCraftingRecipePageSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`GenericCraftingRecipePageSettings`](/game-api/types/global-e-h/genericcraftingrecipepagesettings), [`GenericCraftingRecipePageSettings.Create`](/game-api/types/global-e-h/genericcraftingrecipepagesettings-create)
- **Nested types** [`Create`](/game-api/types/global-e-h/genericcraftingrecipepagesettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingRecipePageSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-circlesegment10scale" /><code>{"float circleSegment10Scale"}</code> | Scale of the circle segment glyph for tens. |
| <Link id="m-circlesegment1scale" /><code>{"float circleSegment1Scale"}</code> | Scale of the circle segment glyph for units. |
| <Link id="m-itemposition" /><code><Link to="/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{" itemPosition"}</code> | Glyph position of the crafted item. |
| <Link id="m-materialpositions" /><code><Link to="/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{"[] materialPositions"}</code> | Glyph positions of the materials. |
| <Link id="m-template" /><code><Link to="/game-api/types/alta-items/page">{"Page"}</Link>{" template"}</code> | The page used as the template. |
| <Link id="m-valuepersegment" /><code>{"float valuePerSegment"}</code> | Amount one circle segment stands for. |
