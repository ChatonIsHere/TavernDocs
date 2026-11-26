---
title: "ChiselRecipePageSettings"
description: "Global settings asset with the template and glyph positions for chisel recipe pages."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChiselRecipePageSettings

A **class** in `Root.Township`, no namespace.

Global settings asset with the template and glyph positions for chisel recipe pages.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`GlobalSettings<ChiselRecipePageSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`ChiselRecipePageSettings`](/game-api/types/global-c-d/chiselrecipepagesettings), [`ChiselRecipePageSettings.Create`](/game-api/types/global-c-d/chiselrecipepagesettings-create)
- **Nested types** [`Create`](/game-api/types/global-c-d/chiselrecipepagesettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ChiselRecipePageSettings()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-iconposition" /><code><Link to="/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{" iconPosition"}</code> | Where the recipe icon glyph goes on the page. |
| <Link id="m-sizebrackets" /><code><Link to="/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{"[] sizeBrackets"}</code> | Bracket glyph positions, one per size step. |
| <Link id="m-template" /><code><Link to="/game-api/types/alta-items/page">{"Page"}</Link>{" template"}</code> | Base page whose glyphs every chisel recipe page starts from. |
| <Link id="m-woodblocks" /><code><Link to="/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{"[] woodBlocks"}</code> | Wood block glyph positions, one per size step. |
