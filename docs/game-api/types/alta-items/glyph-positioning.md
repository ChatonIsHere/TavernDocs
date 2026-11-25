---
title: "Glyph.Positioning"
description: "class Glyph.Positioning in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Glyph.Positioning

A **class** in `Root.Township`, `Alta.Pages`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Nested in** [`Glyph`](/game-api/types/alta-items/glyph)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Positioning()"}</code> |  |
| <Link id="m-ctor-2" /><code>{"Positioning("}<Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" glyph, Vector2 position, float rotation, float scale)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-glyph" /><code>{"private "}<Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" glyph"}</code> |  |
| <Link id="m-position" /><code>{"private Vector2 position"}</code> |  |
| <Link id="m-rotation" /><code>{"private float rotation"}</code> |  |
| <Link id="m-scale" /><code>{"private float scale"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-glyph-2" /><code><Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" "}<Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" { get; }"}</code> |  |
| <Link id="m-position-2" /><code>{"Vector2 Position { get; }"}</code> |  |
| <Link id="m-rotation-2" /><code>{"float Rotation { get; }"}</code> |  |
| <Link id="m-scale-2" /><code>{"float Scale { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyto" /><code>{"void ApplyTo(Transform transform)"}</code> |  |
| <Link id="m-calculatefrom" /><code>{"void CalculateFrom(Transform transform)"}</code> |  |
| <Link id="m-copy" /><code><Link to="/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{" Copy()"}</code> |  |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> |  |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-validate" /><code>{"void Validate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Positioning`:

[`GenericCraftingRecipe.uniqueGlyphs`](/game-api/types/alta-crafting/genericcraftingrecipe#m-uniqueglyphs), [`GenericCraftingRecipe.UniqueGlyphs`](/game-api/types/alta-crafting/genericcraftingrecipe#m-uniqueglyphs-2), [`GlyphInstance.details`](/game-api/types/alta-items/glyphinstance#m-details), [`GlyphInstance.Details`](/game-api/types/alta-items/glyphinstance#m-details-2), [`GlyphInstance.Load`](/game-api/types/alta-items/glyphinstance#m-load), [`PageData.glyphs`](/game-api/types/alta-items/pagedata#m-glyphs), [`PageData.Glyphs`](/game-api/types/alta-items/pagedata#m-glyphs-2), [`PageInstanceSaveData.custom`](/game-api/types/alta-items/pageinstancesavedata#m-custom), [`PageInstanceSaveData1.custom`](/game-api/types/alta-items/pageinstancesavedata1#m-custom), [`PageInstanceSaveData2.custom`](/game-api/types/alta-items/pageinstancesavedata2#m-custom), [`ChiselRecipePageSettings.sizeBrackets`](/game-api/types/global-c-d/chiselrecipepagesettings#m-sizebrackets), [`ChiselRecipePageSettings.woodBlocks`](/game-api/types/global-c-d/chiselrecipepagesettings#m-woodblocks), [`GlyphPosition.Create`](/game-api/types/global-e-h/glyphposition#m-create).
