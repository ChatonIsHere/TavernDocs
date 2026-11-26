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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Nested in** [`Glyph`](/mod/game-api/types/alta-items/glyph)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Positioning()"}</code> | <span className="api-desc">Creates a `Glyph.Positioning` from `glyph`, `position`, `rotation` and `scale`.</span> |
| <Link id="m-ctor-2" /><code>{"Positioning("}<Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" glyph, Vector2 position, float rotation, float scale)"}</code> | <span className="api-desc">Creates a `Glyph.Positioning` from `glyph`, `position`, `rotation` and `scale`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-glyph" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" glyph"}</code> | <span className="api-desc">Backing field for `Glyph`, the glyph placed.</span> |
| <Link id="m-position" /><code>{"private Vector2 position"}</code> | <span className="api-desc">Backing field for `Position`, where the glyph sits on the page. Defaults to (0.5, 0.75).</span> |
| <Link id="m-rotation" /><code>{"private float rotation"}</code> | <span className="api-desc">Backing field for `Rotation`.</span> |
| <Link id="m-scale" /><code>{"private float scale"}</code> | <span className="api-desc">Backing field for `Scale` (1 by default).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-glyph-2" /><code><Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" { get; }"}</code> | <span className="api-desc">The glyph drawn.</span> |
| <Link id="m-position-2" /><code>{"Vector2 Position { get; }"}</code> | <span className="api-desc">Position on the page: x from 0 to 1, y from 0 to the page's size ratio.</span> |
| <Link id="m-rotation-2" /><code>{"float Rotation { get; }"}</code> | <span className="api-desc">Rotation in degrees, 0 to 350.</span> |
| <Link id="m-scale-2" /><code>{"float Scale { get; }"}</code> | <span className="api-desc">Scale, from 0.25 to 4.5.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyto" /><code>{"void ApplyTo(Transform transform)"}</code> | <span className="api-desc">Places a transform on the page from this positioning.</span> |
| <Link id="m-calculatefrom" /><code>{"void CalculateFrom(Transform transform)"}</code> | <span className="api-desc">Reads a transform's place on the page, snaps it to the steps, clamps it and moves the transform to match.</span> |
| <Link id="m-copy" /><code><Link to="/mod/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{" Copy()"}</code> | <span className="api-desc">Returns a copy.</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash of the snapped values and the glyph's hash.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the glyph hash and snapped values.</span> |
| <Link id="m-validate" /><code>{"void Validate()"}</code> | <span className="api-desc">Clamps position, rotation and scale to their ranges.</span> |

## Used in

Members of other types that take, return or hold a `Positioning`:

<div className="api-used-in">

[`GenericCraftingRecipe.uniqueGlyphs`](/mod/game-api/types/alta-crafting/genericcraftingrecipe#m-uniqueglyphs), [`GenericCraftingRecipe.UniqueGlyphs`](/mod/game-api/types/alta-crafting/genericcraftingrecipe#m-uniqueglyphs-2), [`GlyphInstance.details`](/mod/game-api/types/alta-items/glyphinstance#m-details), [`GlyphInstance.Details`](/mod/game-api/types/alta-items/glyphinstance#m-details-2), [`GlyphInstance.Load`](/mod/game-api/types/alta-items/glyphinstance#m-load), [`PageData.glyphs`](/mod/game-api/types/alta-items/pagedata#m-glyphs), [`PageData.Glyphs`](/mod/game-api/types/alta-items/pagedata#m-glyphs-2), [`PageInstanceSaveData.custom`](/mod/game-api/types/alta-items/pageinstancesavedata#m-custom), [`PageInstanceSaveData1.custom`](/mod/game-api/types/alta-items/pageinstancesavedata1#m-custom), [`PageInstanceSaveData2.custom`](/mod/game-api/types/alta-items/pageinstancesavedata2#m-custom), [`ChiselRecipePageSettings.sizeBrackets`](/mod/game-api/types/global-c-d/chiselrecipepagesettings#m-sizebrackets), [`ChiselRecipePageSettings.woodBlocks`](/mod/game-api/types/global-c-d/chiselrecipepagesettings#m-woodblocks), [`GlyphPosition.Create`](/mod/game-api/types/global-e-h/glyphposition#m-create).

</div>
