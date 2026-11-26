---
title: "ChiselRecipePageSettings"
description: "Global settings asset with the template and glyph positions for chisel recipe pages."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChiselRecipePageSettings

A **class** in `Root.Township`, the global namespace.

Global settings asset with the template and glyph positions for chisel recipe pages.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`GlobalSettings<ChiselRecipePageSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`ChiselRecipePageSettings`](/mod/game-api/types/global-c-d/chiselrecipepagesettings), [`ChiselRecipePageSettings.Create`](/mod/game-api/types/global-c-d/chiselrecipepagesettings-create)
- **Nested types** [`Create`](/mod/game-api/types/global-c-d/chiselrecipepagesettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChiselRecipePageSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-iconposition" /><code><Link to="/mod/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{" iconPosition"}</code> | <span className="api-desc">Where the recipe icon glyph goes on the page.</span> |
| <Link id="m-sizebrackets" /><code><Link to="/mod/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{"[] sizeBrackets"}</code> | <span className="api-desc">Bracket glyph positions, one per size step.</span> |
| <Link id="m-template" /><code><Link to="/mod/game-api/types/alta-items/page">{"Page"}</Link>{" template"}</code> | <span className="api-desc">Base page whose glyphs every chisel recipe page starts from.</span> |
| <Link id="m-woodblocks" /><code><Link to="/mod/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{"[] woodBlocks"}</code> | <span className="api-desc">Wood block glyph positions, one per size step.</span> |
