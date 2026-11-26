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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PageData("}<Link to="/game-api/types/global-p/pageprovider">{"PageProvider"}</Link>{" pageProvider, object providerData)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-components" /><code>{"private List<object> components"}</code> | Objects attached to the page (the provider data, or the static page and its components), searched by `GetPageComponent`. |
| <Link id="m-glyphs" /><code>{"private List<"}<Link to="/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{"> glyphs"}</code> | Backing field for `Glyphs`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-glyphs-2" /><code>{"List<"}<Link to="/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{"> Glyphs { get; }"}</code> | The glyphs placed on the page with their position, scale and rotation. |
| <Link id="m-provider" /><code><Link to="/game-api/types/global-p/pageprovider">{"PageProvider"}</Link>{" Provider { get; private set; }"}</code> | The provider that generates this page, or null for a hand-drawn glyph page. |
| <Link id="m-providerdata" /><code>{"object ProviderData { get; private set; }"}</code> | Provider-specific data for the page. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | True when both have the same provider, provider data and identical glyphs (glyph, scale, rotation and position). |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash from the provider id and the glyphs. |
| <Link id="m-getpagecomponent" /><code>{"T GetPageComponent<T>()"}</code> | Returns the first attached component of the given type, such as the static `Page` or provider data. |
| <Link id="m-op-equality" /><code>{"static bool op_Equality("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" a, "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" b)"}</code> | Value comparison using `Equals`; two nulls are equal. |
| <Link id="m-op-inequality" /><code>{"static bool op_Inequality("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" a, "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" b)"}</code> | Opposite of `==`. |
| <Link id="m-serialize" /><code>{"static void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" pageData)"}</code> | Static: reads or writes a page. Glyph pages send up to 63 glyphs; provider pages let the provider serialise its own data. |
| <Link id="m-setupstatic" /><code>{"void SetupStatic("}<Link to="/game-api/types/alta-items/page">{"Page"}</Link>{" page)"}</code> | Makes this a static page backed by a `Page` asset, using provider 1 and the page's components. |

## Used in

Members of other types that take, return or hold a `PageData`:

[`ChiselDefinition.CreatePage`](/game-api/types/alta-crafting/chiseldefinition#m-createpage), [`StewRecipe.CreatePage`](/game-api/types/alta-crafting/stewrecipe#m-createpage), [`GenericCraftingRecipe.CreatePage`](/game-api/types/alta-crafting/genericcraftingrecipe#m-createpage), [`Item.CreatePage`](/game-api/types/alta-items/item#m-createpage), [`Book.AddNewPage`](/game-api/types/alta-items/book#m-addnewpage), [`Book.bookPages`](/game-api/types/alta-items/book#m-bookpages), [`Book.BookRemovePage`](/game-api/types/alta-items/book#m-bookremovepage), [`Book.DuplicatePage`](/game-api/types/alta-items/book#m-duplicatepage), [`Book.inserting`](/game-api/types/alta-items/book#m-inserting), [`Book.InsertPage`](/game-api/types/alta-items/book#m-insertpage), [`GlobalPagesManager.AddPage`](/game-api/types/alta-items/globalpagesmanager#m-addpage), [`IPageBasis.CreatePage`](/game-api/types/alta-items/ipagebasis#m-createpage), [`Page.CreatePage`](/game-api/types/alta-items/page#m-createpage), [`Page.data`](/game-api/types/alta-items/page#m-data), [`Page.Data`](/game-api/types/alta-items/page#m-data-2), [`PageCollection.GeneratePage`](/game-api/types/alta-items/pagecollection#m-generatepage), [`PageInstance.data`](/game-api/types/alta-items/pageinstance#m-data), [`PageInstance.Data`](/game-api/types/alta-items/pageinstance#m-data-2), [`PageInstance.DelayRender`](/game-api/types/alta-items/pageinstance#m-delayrender), [`PageInstance.renderedData`](/game-api/types/alta-items/pageinstance#m-rendereddata), [`PageInstance.Set`](/game-api/types/alta-items/pageinstance#m-set), [`PageRenderer.Load`](/game-api/types/alta-items/pagerenderer#m-load), [`PageRenderer.poolData`](/game-api/types/alta-items/pagerenderer#m-pooldata), [`PageRenderer.Release`](/game-api/types/alta-items/pagerenderer#m-release), [`PageRenderer.Render`](/game-api/types/alta-items/pagerenderer#m-render), [`PageRenderer.savedPages`](/game-api/types/alta-items/pagerenderer#m-savedpages), [`PageRenderer.useCounts`](/game-api/types/alta-items/pagerenderer#m-usecounts), [`ChiselRecipePageProvider.GeneratePage`](/game-api/types/global-c-d/chiselrecipepageprovider#m-generatepage), [`ChiselRecipePageProvider.GetRandom`](/game-api/types/global-c-d/chiselrecipepageprovider#m-getrandom), [`ChiselRecipePageProvider.Serialize`](/game-api/types/global-c-d/chiselrecipepageprovider#m-serialize), [`EdiblePageProvider.GeneratePage`](/game-api/types/global-e-h/ediblepageprovider#m-generatepage), [`EdiblePageProvider.GetRandom`](/game-api/types/global-e-h/ediblepageprovider#m-getrandom), [`EdiblePageProvider.Serialize`](/game-api/types/global-e-h/ediblepageprovider#m-serialize), [`GeneratedPageProvider<T>.GenerateCircleSegments`](/game-api/types/global-e-h/generatedpageprovider-t#m-generatecirclesegments), [`GeneratedPageProvider<T>.GenerateEffectAndBorder`](/game-api/types/global-e-h/generatedpageprovider-t#m-generateeffectandborder), [`GeneratedPageProvider<T>.GeneratePage`](/game-api/types/global-e-h/generatedpageprovider-t#m-generatepage), [`GeneratedPageProvider<T>.Load`](/game-api/types/global-e-h/generatedpageprovider-t#m-load), [`GeneratedPageProvider<T>.Save`](/game-api/types/global-e-h/generatedpageprovider-t#m-save), [`GenericCraftingRecipePageProvider.GeneratePage`](/game-api/types/global-e-h/genericcraftingrecipepageprovider#m-generatepage), [`GenericCraftingRecipePageProvider.GetRandom`](/game-api/types/global-e-h/genericcraftingrecipepageprovider#m-getrandom), [`GenericCraftingRecipePageProvider.Serialize`](/game-api/types/global-e-h/genericcraftingrecipepageprovider#m-serialize), [`IngredientPageProvider.GeneratePage`](/game-api/types/global-i-l/ingredientpageprovider#m-generatepage), [`IngredientPageProvider.GetRandom`](/game-api/types/global-i-l/ingredientpageprovider#m-getrandom), [`IngredientPageProvider.Serialize`](/game-api/types/global-i-l/ingredientpageprovider#m-serialize), [`PageProvider.GetRandom`](/game-api/types/global-p/pageprovider#m-getrandom), [`PageProvider.GetRandomSpawn`](/game-api/types/global-p/pageprovider#m-getrandomspawn), [`PageProvider.Load`](/game-api/types/global-p/pageprovider#m-load), [`PageProvider.Save`](/game-api/types/global-p/pageprovider#m-save), [`PageProvider.Serialize`](/game-api/types/global-p/pageprovider#m-serialize), [`StaticPageProvider.GetRandom`](/game-api/types/global-s/staticpageprovider#m-getrandom), [`StaticPageProvider.Load`](/game-api/types/global-s/staticpageprovider#m-load), [`StaticPageProvider.Save`](/game-api/types/global-s/staticpageprovider#m-save), [`StaticPageProvider.Serialize`](/game-api/types/global-s/staticpageprovider#m-serialize), [`StewRecipePageProvider.GeneratePage`](/game-api/types/global-s/stewrecipepageprovider#m-generatepage), [`StewRecipePageProvider.GetRandom`](/game-api/types/global-s/stewrecipepageprovider#m-getrandom), [`StewRecipePageProvider.Serialize`](/game-api/types/global-s/stewrecipepageprovider#m-serialize).
