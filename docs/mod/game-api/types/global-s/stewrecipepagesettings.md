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
| <Link id="m-ctor" /><code>{"StewRecipePageSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-borderglyphscale" /><code>{"float borderGlyphScale"}</code> | <span className="api-desc">Scale of the border glyph around each effect.</span> |
| <Link id="m-circlesegment10scale" /><code>{"float circleSegment10Scale"}</code> | <span className="api-desc">Scale of the circle segment glyph that stands for ten segments.</span> |
| <Link id="m-circlesegment1scale" /><code>{"float circleSegment1Scale"}</code> | <span className="api-desc">Scale of the single circle segment glyph.</span> |
| <Link id="m-effects" /><code><Link to="/mod/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{"[] effects"}</code> | <span className="api-desc">Glyph positions for effects: extra effects first, then effect modifiers.</span> |
| <Link id="m-ingredients" /><code><Link to="/mod/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{"[] ingredients"}</code> | <span className="api-desc">Glyph positions for ingredients, in recipe order.</span> |
| <Link id="m-template" /><code><Link to="/mod/game-api/types/alta-items/page">{"Page"}</Link>{" template"}</code> | <span className="api-desc">Page whose glyphs every stew recipe page starts from.</span> |
| <Link id="m-valuepersegment" /><code>{"float valuePerSegment"}</code> | <span className="api-desc">Effect strength each circle segment stands for.</span> |
