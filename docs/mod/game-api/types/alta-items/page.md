---
title: "Page"
description: "Asset for a fixed (hand-made) page, such as a recipe or lore page, with its glyph layout."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Page

A **class** in `Root.Township`, `Alta.Pages`.

Asset for a fixed (hand-made) page, such as a recipe or lore page, with its glyph layout. Served by the static page provider.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`SimpleHashedGeneralValue<Page>`](/mod/game-api/types/alta-utilities/simplehashedgeneralvalue-t), [`IPageBasis`](/mod/game-api/types/alta-items/ipagebasis)
- **Derived types** [`Page`](/mod/game-api/types/alta-items/page), [`Page.Create`](/mod/game-api/types/alta-items/page-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-items/page-create)
- **Attributes** `HashedPath`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Page()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-pixelsize" /><code>{"static readonly Vector2 PixelSize"}</code> | Page size in pixels: 640 by 768. |
| <Link id="m-sizeratio" /><code>{"static readonly float SizeRatio"}</code> | Height divided by width of a page. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-components" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/hashedgeneralvalue">{"HashedGeneralValue"}</Link>{"[] components"}</code> | Backing field for `Components`, the hashed assets shown on the page. |
| <Link id="m-data" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" data"}</code> | Backing field for `Data`, the page content. Reading `Data` first ties it to this page. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-components-2" /><code><Link to="/mod/game-api/types/assembly-other/hashedgeneralvalue">{"HashedGeneralValue"}</Link>{"[] Components { get; }"}</code> | Hashed assets the page refers to. |
| <Link id="m-data-2" /><code><Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" Data { get; }"}</code> | The page's layout data, linked back to this asset before it's returned. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gethash" /><code>{"uint GetHash()"}</code> | The asset's hash. |
| <Link id="m-getproviderid" /><code>{"int GetProviderID(int preferredProvider)"}</code> | Always the static page provider's id, whatever is preferred. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createpage" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" Alta.Pages.IPageBasis.CreatePage(int preferredProvider)"}</code> | Explicit `IPageBasis` implementation: returns this page's static `Data`. |

</details>

## Used in

Members of other types that take, return or hold a `Page`:

[`PageData.SetupStatic`](/mod/game-api/types/alta-items/pagedata#m-setupstatic), [`PageInstanceSaveData1.page`](/mod/game-api/types/alta-items/pageinstancesavedata1#m-page), [`PageRenderer.page`](/mod/game-api/types/alta-items/pagerenderer#m-page), [`ChiselRecipePageSettings.template`](/mod/game-api/types/global-c-d/chiselrecipepagesettings#m-template), [`EdiblePageSettings.template`](/mod/game-api/types/global-e-h/ediblepagesettings#m-template), [`GenericCraftingRecipePageSettings.template`](/mod/game-api/types/global-e-h/genericcraftingrecipepagesettings#m-template), [`IngredientPageSettings.template`](/mod/game-api/types/global-i-l/ingredientpagesettings#m-template), [`StaticPageProvider.page`](/mod/game-api/types/global-s/staticpageprovider#m-page), [`StewRecipePageSettings.template`](/mod/game-api/types/global-s/stewrecipepagesettings#m-template).
