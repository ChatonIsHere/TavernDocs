---
title: "PageInstanceSaveData"
description: "Save data for a PageInstance: either a reference to a page from a page provider, or a list of custom glyph positions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PageInstanceSaveData

A **class** in `Root.Township`, `Alta.Pages`.

Save data for a `PageInstance`: either a reference to a page from a page provider, or a list of custom glyph positions.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<PageInstance, PageInstanceSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PageInstance`](/mod/game-api/types/alta-items/pageinstance), [`PageInstanceSaveData`](/mod/game-api/types/alta-items/pageinstancesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PageInstanceSaveData()"}</code> | <span className="api-desc">Creates a `PageInstanceSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-custom" /><code><Link to="/mod/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{"[] custom"}</code> | <span className="api-desc">Glyph positions of a custom page, used when `isPredefined` is false.</span> |
| <Link id="m-isduplicate" /><code>{"bool isDuplicate"}</code> | <span className="api-desc">Whether the page is marked as a duplicate. Restored to the instance's `IsDuplicate` on load.</span> |
| <Link id="m-ispredefined" /><code>{"bool isPredefined"}</code> | <span className="api-desc">True if the page comes from a page provider, false for a custom glyph page.</span> |
| <Link id="m-pageprovider" /><code>{"int pageProvider"}</code> | <span className="api-desc">Index into `PageProvider.Providers` of the provider that loads the page.</span> |
| <Link id="m-predefinedhash" /><code>{"uint predefinedHash"}</code> | <span className="api-desc">Hash of the predefined page, filled in by the page provider.</span> |

## Used in

Members of other types that take, return or hold a `PageInstanceSaveData`:

<div className="api-used-in">

[`GeneratedPageProvider<T>.Load`](/mod/game-api/types/global-e-h/generatedpageprovider-t#m-load), [`GeneratedPageProvider<T>.Save`](/mod/game-api/types/global-e-h/generatedpageprovider-t#m-save), [`PageProvider.Load`](/mod/game-api/types/global-p/pageprovider#m-load), [`PageProvider.Save`](/mod/game-api/types/global-p/pageprovider#m-save), [`StaticPageProvider.Load`](/mod/game-api/types/global-s/staticpageprovider#m-load), [`StaticPageProvider.Save`](/mod/game-api/types/global-s/staticpageprovider#m-save).

</div>
