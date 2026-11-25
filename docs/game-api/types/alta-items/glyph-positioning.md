---
title: "Glyph.Positioning"
description: "Where a glyph sits on a page: position, rotation and scale, snapped to steps so it syncs compactly (0.01 position, 10 degrees, 0.1 scale)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Glyph.Positioning

A **class** in `Root.Township`, `Alta.Pages`.

Where a glyph sits on a page: position, rotation and scale, snapped to steps so it syncs compactly (0.01 position, 10 degrees, 0.1 scale).

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
| <Link id="m-glyph-2" /><code><Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" "}<Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" { get; }"}</code> | The glyph drawn. |
| <Link id="m-position-2" /><code>{"Vector2 Position { get; }"}</code> | Position on the page: x from 0 to 1, y from 0 to the page's size ratio. |
| <Link id="m-rotation-2" /><code>{"float Rotation { get; }"}</code> | Rotation in degrees, 0 to 350. |
| <Link id="m-scale-2" /><code>{"float Scale { get; }"}</code> | Scale, from 0.25 to 4.5. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyto" /><code>{"void ApplyTo(Transform transform)"}</code> | Places a transform on the page from this positioning. |
| <Link id="m-calculatefrom" /><code>{"void CalculateFrom(Transform transform)"}</code> | Reads a transform's place on the page, snaps it to the steps, clamps it and moves the transform to match. |
| <Link id="m-copy" /><code><Link to="/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{" Copy()"}</code> | Returns a copy. |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash of the snapped values and the glyph's hash. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the glyph hash and snapped values. |
| <Link id="m-validate" /><code>{"void Validate()"}</code> | Clamps position, rotation and scale to their ranges. |

## Used in

Members of other types that take, return or hold a `Positioning`:

[`GenericCraftingRecipe.uniqueGlyphs`](/game-api/types/alta-crafting/genericcraftingrecipe#m-uniqueglyphs), [`GenericCraftingRecipe.UniqueGlyphs`](/game-api/types/alta-crafting/genericcraftingrecipe#m-uniqueglyphs-2), [`GlyphInstance.details`](/game-api/types/alta-items/glyphinstance#m-details), [`GlyphInstance.Details`](/game-api/types/alta-items/glyphinstance#m-details-2), [`GlyphInstance.Load`](/game-api/types/alta-items/glyphinstance#m-load), [`PageData.glyphs`](/game-api/types/alta-items/pagedata#m-glyphs), [`PageData.Glyphs`](/game-api/types/alta-items/pagedata#m-glyphs-2), [`PageInstanceSaveData.custom`](/game-api/types/alta-items/pageinstancesavedata#m-custom), [`PageInstanceSaveData1.custom`](/game-api/types/alta-items/pageinstancesavedata1#m-custom), [`PageInstanceSaveData2.custom`](/game-api/types/alta-items/pageinstancesavedata2#m-custom), [`ChiselRecipePageSettings.sizeBrackets`](/game-api/types/global-c-d/chiselrecipepagesettings#m-sizebrackets), [`ChiselRecipePageSettings.woodBlocks`](/game-api/types/global-c-d/chiselrecipepagesettings#m-woodblocks), [`GlyphPosition.Create`](/game-api/types/global-e-h/glyphposition#m-create).
