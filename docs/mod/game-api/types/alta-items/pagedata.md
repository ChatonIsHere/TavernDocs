---
title: "PageData"
description: "The content of a book or paper page: a list of placed glyphs, or data from a PageProvider for generated pages."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PageData

A **class** in `Root.Township`, `Alta.Pages`.

The content of a book or paper page: a list of placed glyphs, or data from a `PageProvider` for generated pages. Serialised over the network and compared by value.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PageData("}<Link to="/mod/game-api/types/global-p/pageprovider">{"PageProvider"}</Link>{" pageProvider, object providerData)"}</code> | <span className="api-desc">Creates a `PageData` from `pageProvider` and `providerData`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-components" /><code>{"private List<object> components"}</code> | <span className="api-desc">Objects attached to the page (the provider data, or the static page and its components), searched by `GetPageComponent`.</span> |
| <Link id="m-glyphs" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{"> glyphs"}</code> | <span className="api-desc">Backing field for `Glyphs`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-glyphs-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{"> Glyphs { get; }"}</code> | <span className="api-desc">The glyphs placed on the page with their position, scale and rotation.</span> |
| <Link id="m-provider" /><code><Link to="/mod/game-api/types/global-p/pageprovider">{"PageProvider"}</Link>{" Provider { get; private set; }"}</code> | <span className="api-desc">The provider that generates this page, or null for a hand-drawn glyph page.</span> |
| <Link id="m-providerdata" /><code>{"object ProviderData { get; private set; }"}</code> | <span className="api-desc">Provider-specific data for the page.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">True when both have the same provider, provider data and identical glyphs (glyph, scale, rotation and position).</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash from the provider id and the glyphs.</span> |
| <Link id="m-getpagecomponent" /><code>{"T GetPageComponent<T>()"}</code> | <span className="api-desc">Returns the first attached component of the given type, such as the static `Page` or provider data.</span> |
| <Link id="m-op-equality" /><code>{"static bool op_Equality("}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" a, "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" b)"}</code> | <span className="api-desc">Value comparison using `Equals`; two nulls are equal.</span> |
| <Link id="m-op-inequality" /><code>{"static bool op_Inequality("}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" a, "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" b)"}</code> | <span className="api-desc">Opposite of `==`.</span> |
| <Link id="m-serialize" /><code>{"static void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" pageData)"}</code> | <span className="api-desc">Static: reads or writes a page. Glyph pages send up to 63 glyphs; provider pages let the provider serialise its own data.</span> |
| <Link id="m-setupstatic" /><code>{"void SetupStatic("}<Link to="/mod/game-api/types/alta-items/page">{"Page"}</Link>{" page)"}</code> | <span className="api-desc">Makes this a static page backed by a `Page` asset, using provider 1 and the page's components.</span> |

## Used in

Members of other types that take, return or hold a `PageData`:

<div className="api-used-in">

[`ChiselDefinition.CreatePage`](/mod/game-api/types/alta-crafting/chiseldefinition#m-createpage), [`StewRecipe.CreatePage`](/mod/game-api/types/alta-crafting/stewrecipe#m-createpage), [`GenericCraftingRecipe.CreatePage`](/mod/game-api/types/alta-crafting/genericcraftingrecipe#m-createpage), [`Item.CreatePage`](/mod/game-api/types/alta-items/item#m-createpage), [`Book.AddNewPage`](/mod/game-api/types/alta-items/book#m-addnewpage), [`Book.bookPages`](/mod/game-api/types/alta-items/book#m-bookpages), [`Book.BookRemovePage`](/mod/game-api/types/alta-items/book#m-bookremovepage), [`Book.DuplicatePage`](/mod/game-api/types/alta-items/book#m-duplicatepage), [`Book.inserting`](/mod/game-api/types/alta-items/book#m-inserting), [`Book.InsertPage`](/mod/game-api/types/alta-items/book#m-insertpage), [`GlobalPagesManager.AddPage`](/mod/game-api/types/alta-items/globalpagesmanager#m-addpage), [`IPageBasis.CreatePage`](/mod/game-api/types/alta-items/ipagebasis#m-createpage), [`Page.CreatePage`](/mod/game-api/types/alta-items/page#m-createpage), [`Page.data`](/mod/game-api/types/alta-items/page#m-data), [`Page.Data`](/mod/game-api/types/alta-items/page#m-data-2), [`PageCollection.GeneratePage`](/mod/game-api/types/alta-items/pagecollection#m-generatepage), [`PageInstance.data`](/mod/game-api/types/alta-items/pageinstance#m-data), [`PageInstance.Data`](/mod/game-api/types/alta-items/pageinstance#m-data-2), [`PageInstance.DelayRender`](/mod/game-api/types/alta-items/pageinstance#m-delayrender), [`PageInstance.renderedData`](/mod/game-api/types/alta-items/pageinstance#m-rendereddata), [`PageInstance.Set`](/mod/game-api/types/alta-items/pageinstance#m-set), [`PageRenderer.Load`](/mod/game-api/types/alta-items/pagerenderer#m-load), [`PageRenderer.poolData`](/mod/game-api/types/alta-items/pagerenderer#m-pooldata), [`PageRenderer.Release`](/mod/game-api/types/alta-items/pagerenderer#m-release), [`PageRenderer.Render`](/mod/game-api/types/alta-items/pagerenderer#m-render), [`PageRenderer.savedPages`](/mod/game-api/types/alta-items/pagerenderer#m-savedpages), [`PageRenderer.useCounts`](/mod/game-api/types/alta-items/pagerenderer#m-usecounts), [`ChiselRecipePageProvider.GeneratePage`](/mod/game-api/types/global-c-d/chiselrecipepageprovider#m-generatepage), [`ChiselRecipePageProvider.GetRandom`](/mod/game-api/types/global-c-d/chiselrecipepageprovider#m-getrandom), [`ChiselRecipePageProvider.Serialize`](/mod/game-api/types/global-c-d/chiselrecipepageprovider#m-serialize), [`EdiblePageProvider.GeneratePage`](/mod/game-api/types/global-e-h/ediblepageprovider#m-generatepage), [`EdiblePageProvider.GetRandom`](/mod/game-api/types/global-e-h/ediblepageprovider#m-getrandom), [`EdiblePageProvider.Serialize`](/mod/game-api/types/global-e-h/ediblepageprovider#m-serialize), [`GeneratedPageProvider<T>.GenerateCircleSegments`](/mod/game-api/types/global-e-h/generatedpageprovider-t#m-generatecirclesegments), [`GeneratedPageProvider<T>.GenerateEffectAndBorder`](/mod/game-api/types/global-e-h/generatedpageprovider-t#m-generateeffectandborder), [`GeneratedPageProvider<T>.GeneratePage`](/mod/game-api/types/global-e-h/generatedpageprovider-t#m-generatepage), [`GeneratedPageProvider<T>.Load`](/mod/game-api/types/global-e-h/generatedpageprovider-t#m-load), [`GeneratedPageProvider<T>.Save`](/mod/game-api/types/global-e-h/generatedpageprovider-t#m-save), [`GenericCraftingRecipePageProvider.GeneratePage`](/mod/game-api/types/global-e-h/genericcraftingrecipepageprovider#m-generatepage), [`GenericCraftingRecipePageProvider.GetRandom`](/mod/game-api/types/global-e-h/genericcraftingrecipepageprovider#m-getrandom), [`GenericCraftingRecipePageProvider.Serialize`](/mod/game-api/types/global-e-h/genericcraftingrecipepageprovider#m-serialize), [`IngredientPageProvider.GeneratePage`](/mod/game-api/types/global-i-l/ingredientpageprovider#m-generatepage), [`IngredientPageProvider.GetRandom`](/mod/game-api/types/global-i-l/ingredientpageprovider#m-getrandom), [`IngredientPageProvider.Serialize`](/mod/game-api/types/global-i-l/ingredientpageprovider#m-serialize), [`PageProvider.GetRandom`](/mod/game-api/types/global-p/pageprovider#m-getrandom), [`PageProvider.GetRandomSpawn`](/mod/game-api/types/global-p/pageprovider#m-getrandomspawn), [`PageProvider.Load`](/mod/game-api/types/global-p/pageprovider#m-load), [`PageProvider.Save`](/mod/game-api/types/global-p/pageprovider#m-save), [`PageProvider.Serialize`](/mod/game-api/types/global-p/pageprovider#m-serialize), [`StaticPageProvider.GetRandom`](/mod/game-api/types/global-s/staticpageprovider#m-getrandom), [`StaticPageProvider.Load`](/mod/game-api/types/global-s/staticpageprovider#m-load), [`StaticPageProvider.Save`](/mod/game-api/types/global-s/staticpageprovider#m-save), [`StaticPageProvider.Serialize`](/mod/game-api/types/global-s/staticpageprovider#m-serialize), [`StewRecipePageProvider.GeneratePage`](/mod/game-api/types/global-s/stewrecipepageprovider#m-generatepage), [`StewRecipePageProvider.GetRandom`](/mod/game-api/types/global-s/stewrecipepageprovider#m-getrandom), [`StewRecipePageProvider.Serialize`](/mod/game-api/types/global-s/stewrecipepageprovider#m-serialize).

</div>
