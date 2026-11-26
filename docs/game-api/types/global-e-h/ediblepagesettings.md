---
title: "EdiblePageSettings"
description: "Global settings for the generated pages that describe an edible item: the page template, where each glyph goes and how effect strength is drawn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EdiblePageSettings

A **class** in `Root.Township`, no namespace.

Global settings for the generated pages that describe an edible item: the page template, where each glyph goes and how effect strength is drawn. Used by `EdiblePageProvider`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`GlobalSettings<EdiblePageSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`EdiblePageSettings`](/game-api/types/global-e-h/ediblepagesettings), [`EdiblePageSettings.Create`](/game-api/types/global-e-h/ediblepagesettings-create)
- **Nested types** [`Create`](/game-api/types/global-e-h/ediblepagesettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EdiblePageSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-borderglyphscale" /><code>{"float borderGlyphScale"}</code> | Scale of the border glyph drawn around each effect glyph. |
| <Link id="m-burntglyph" /><code><Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" burntGlyph"}</code> | Glyph shown for a burnt item. |
| <Link id="m-circlesegment10scale" /><code>{"float circleSegment10Scale"}</code> | Scale of the circle segment glyph that stands for ten. |
| <Link id="m-circlesegment1scale" /><code>{"float circleSegment1Scale"}</code> | Scale of the circle segment glyph that stands for one. |
| <Link id="m-cookedglyph" /><code><Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" cookedGlyph"}</code> | Glyph shown for a cooked item. |
| <Link id="m-cookingstageposition" /><code><Link to="/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{" cookingStagePosition"}</code> | Where the cooking stage glyph goes. |
| <Link id="m-effects" /><code><Link to="/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{"[] effects"}</code> | Where each consumption effect goes, in order. |
| <Link id="m-itemposition" /><code><Link to="/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{" itemPosition"}</code> | Where the item's own glyph goes. |
| <Link id="m-ripeglyph" /><code><Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" ripeGlyph"}</code> | Glyph shown for a ripe item. |
| <Link id="m-template" /><code><Link to="/game-api/types/alta-items/page">{"Page"}</Link>{" template"}</code> | The page whose glyphs every edible page starts with. |
| <Link id="m-unripeglyph" /><code><Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" unripeGlyph"}</code> | Glyph shown for an unripe item. |
| <Link id="m-valuepersegment" /><code>{"float valuePerSegment"}</code> | Effect strength per circle segment. One effect (hash 3280) always uses 1 instead. |
