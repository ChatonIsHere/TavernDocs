---
title: "GeneratedPageProvider<T>"
description: "abstract class GeneratedPageProvider<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneratedPageProvider&lt;T&gt;

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`PageProvider`](/game-api/types/global-p/pageprovider)
- **Derived types** [`ChiselRecipePageProvider`](/game-api/types/global-c-d/chiselrecipepageprovider), [`EdiblePageProvider`](/game-api/types/global-e-h/ediblepageprovider), [`GenericCraftingRecipePageProvider`](/game-api/types/global-e-h/genericcraftingrecipepageprovider), [`IngredientPageProvider`](/game-api/types/global-i-l/ingredientpageprovider), [`StewRecipePageProvider`](/game-api/types/global-s/stewrecipepageprovider)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected GeneratedPageProvider()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatepage" /><code>{"abstract "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GeneratePage(T from)"}</code> |  |
| <Link id="m-load" /><code>{"override "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" Load("}<Link to="/game-api/types/alta-items/pageinstancesavedata">{"PageInstanceSaveData"}</Link>{" saveData)"}</code> |  |
| <Link id="m-save" /><code>{"override void Save("}<Link to="/game-api/types/alta-items/pageinstancesavedata">{"PageInstanceSaveData"}</Link>{" saveData, "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> |  |
| <Link id="m-generatecirclesegments" /><code>{"protected static void GenerateCircleSegments("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" pageData, "}<Link to="/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{" glyphPosition, int numberOfSegments, float segment1Scale, float segment10Scale)"}</code> |  |
| <Link id="m-generateeffectandborder" /><code>{"protected static void GenerateEffectAndBorder("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" pageData, "}<Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" effectGlyph, "}<Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" borderGlyph, "}<Link to="/game-api/types/global-e-h/glyphposition">{"GlyphPosition"}</Link>{" glyphPosition, float borderScale)"}</code> |  |
