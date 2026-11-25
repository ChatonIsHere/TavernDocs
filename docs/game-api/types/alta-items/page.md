---
title: "Page"
description: "class Page in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Page

A **class** in `Root.Township`, `Alta.Pages`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`SimpleHashedGeneralValue<Page>`](/game-api/types/alta-utilities/simplehashedgeneralvalue-t), [`IPageBasis`](/game-api/types/alta-items/ipagebasis)
- **Derived types** [`Page`](/game-api/types/alta-items/page), [`Page.Create`](/game-api/types/alta-items/page-create)
- **Nested types** [`Create`](/game-api/types/alta-items/page-create)
- **Attributes** `HashedPath`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Page()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-pixelsize" /><code>{"static readonly Vector2 PixelSize"}</code> |  |
| <Link id="m-sizeratio" /><code>{"static readonly float SizeRatio"}</code> |  |
| <Link id="m-components" /><code>{"private "}<Link to="/game-api/types/assembly-other/hashedgeneralvalue">{"HashedGeneralValue"}</Link>{"[] components"}</code> |  |
| <Link id="m-data" /><code>{"private "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" data"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-components-2" /><code><Link to="/game-api/types/assembly-other/hashedgeneralvalue">{"HashedGeneralValue"}</Link>{"[] Components { get; }"}</code> |  |
| <Link id="m-data-2" /><code><Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" Data { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gethash" /><code>{"uint GetHash()"}</code> |  |
| <Link id="m-getproviderid" /><code>{"int GetProviderID(int preferredProvider)"}</code> |  |
| <Link id="m-createpage" /><code>{"private "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" Alta.Pages.IPageBasis.CreatePage(int preferredProvider)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Page`:

[`PageData.SetupStatic`](/game-api/types/alta-items/pagedata#m-setupstatic), [`PageInstanceSaveData1.page`](/game-api/types/alta-items/pageinstancesavedata1#m-page), [`PageRenderer.page`](/game-api/types/alta-items/pagerenderer#m-page), [`ChiselRecipePageSettings.template`](/game-api/types/global-c-d/chiselrecipepagesettings#m-template), [`EdiblePageSettings.template`](/game-api/types/global-e-h/ediblepagesettings#m-template), [`GenericCraftingRecipePageSettings.template`](/game-api/types/global-e-h/genericcraftingrecipepagesettings#m-template), [`IngredientPageSettings.template`](/game-api/types/global-i-l/ingredientpagesettings#m-template), [`StaticPageProvider.page`](/game-api/types/global-s/staticpageprovider#m-page), [`StewRecipePageSettings.template`](/game-api/types/global-s/stewrecipepagesettings#m-template).
