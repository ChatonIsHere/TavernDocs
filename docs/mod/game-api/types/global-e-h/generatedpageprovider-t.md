---
title: "GeneratedPageProvider<T>"
description: "Base for a page provider that builds a page from a hashed asset (for example an effect or recipe), saving only the asset's hash."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneratedPageProvider&lt;T&gt;

An **abstract class** in `Root.Township`, the global namespace.

Base for a page provider that builds a page from a hashed asset (for example an effect or recipe), saving only the asset's hash.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`PageProvider`](/mod/game-api/types/global-p/pageprovider)
- **Derived types** [`ChiselRecipePageProvider`](/mod/game-api/types/global-c-d/chiselrecipepageprovider), [`EdiblePageProvider`](/mod/game-api/types/global-e-h/ediblepageprovider), [`GenericCraftingRecipePageProvider`](/mod/game-api/types/global-e-h/genericcraftingrecipepageprovider), [`IngredientPageProvider`](/mod/game-api/types/global-i-l/ingredientpageprovider), [`StewRecipePageProvider`](/mod/game-api/types/global-s/stewrecipepageprovider)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected GeneratedPageProvider()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatepage" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GeneratePage(T from)"}</code> | <span className="api-desc">Subclass: builds page data for an asset.</span> |
| <Link id="m-load" /><code>{"override "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" Load("}<Link to="/mod/game-api/types/alta-items/pageinstancesavedata">{"PageInstanceSaveData"}</Link>{" saveData)"}</code> | <span className="api-desc">Rebuilds a page from the saved asset hash.</span> |
| <Link id="m-save" /><code>{"override void Save("}<Link to="/mod/game-api/types/alta-items/pageinstancesavedata">{"PageInstanceSaveData"}</Link>{" saveData, "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> | <span className="api-desc">Saves the provider id and the asset's hash.</span> |
| <Link id="m-generatecirclesegments" /><code>{"protected static void GenerateCircleSegments("}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" pageData, "}<Link to="/mod/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{" glyphPosition, int numberOfSegments, float segment1Scale, float segment10Scale)"}</code> | <span className="api-desc">Adds circle segment glyphs to show a number, a big segment per 10 and a small one per unit.</span> |
| <Link id="m-generateeffectandborder" /><code>{"protected static void GenerateEffectAndBorder("}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" pageData, "}<Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" effectGlyph, "}<Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" borderGlyph, "}<Link to="/mod/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{" glyphPosition, float borderScale)"}</code> | <span className="api-desc">Adds an effect glyph and a border glyph around it.</span> |
