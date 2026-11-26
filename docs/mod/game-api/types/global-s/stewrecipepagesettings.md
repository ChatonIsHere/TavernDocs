---
title: "StewRecipePageSettings"
description: "Global settings for generated stew recipe pages: the page template and where ingredient and effect glyphs go."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StewRecipePageSettings

A **class** in `Root.Township`, the global namespace.

Global settings for generated stew recipe pages: the page template and where ingredient and effect glyphs go.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`GlobalSettings<StewRecipePageSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`StewRecipePageSettings`](/mod/game-api/types/global-s/stewrecipepagesettings), [`StewRecipePageSettings.Create`](/mod/game-api/types/global-s/stewrecipepagesettings-create)
- **Nested types** [`Create`](/mod/game-api/types/global-s/stewrecipepagesettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StewRecipePageSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-borderglyphscale" /><code>{"float borderGlyphScale"}</code> | Scale of the border glyph around each effect. |
| <Link id="m-circlesegment10scale" /><code>{"float circleSegment10Scale"}</code> | Scale of the circle segment glyph that stands for ten segments. |
| <Link id="m-circlesegment1scale" /><code>{"float circleSegment1Scale"}</code> | Scale of the single circle segment glyph. |
| <Link id="m-effects" /><code><Link to="/mod/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{"[] effects"}</code> | Glyph positions for effects: extra effects first, then effect modifiers. |
| <Link id="m-ingredients" /><code><Link to="/mod/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{"[] ingredients"}</code> | Glyph positions for ingredients, in recipe order. |
| <Link id="m-template" /><code><Link to="/mod/game-api/types/alta-items/page">{"Page"}</Link>{" template"}</code> | Page whose glyphs every stew recipe page starts from. |
| <Link id="m-valuepersegment" /><code>{"float valuePerSegment"}</code> | Effect strength each circle segment stands for. |
