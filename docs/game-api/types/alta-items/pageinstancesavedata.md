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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<PageInstance, PageInstanceSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PageInstance`](/game-api/types/alta-items/pageinstance), [`PageInstanceSaveData`](/game-api/types/alta-items/pageinstancesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PageInstanceSaveData()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-custom" /><code><Link to="/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{"[] custom"}</code> | Glyph positions of a custom page, used when `isPredefined` is false. |
| <Link id="m-isduplicate" /><code>{"bool isDuplicate"}</code> | Whether the page is marked as a duplicate. Restored to the instance's `IsDuplicate` on load. |
| <Link id="m-ispredefined" /><code>{"bool isPredefined"}</code> | True if the page comes from a page provider, false for a custom glyph page. |
| <Link id="m-pageprovider" /><code>{"int pageProvider"}</code> | Index into `PageProvider.Providers` of the provider that loads the page. |
| <Link id="m-predefinedhash" /><code>{"uint predefinedHash"}</code> | Hash of the predefined page, filled in by the page provider. |

## Used in

Members of other types that take, return or hold a `PageInstanceSaveData`:

[`GeneratedPageProvider<T>.Load`](/game-api/types/global-e-h/generatedpageprovider-t#m-load), [`GeneratedPageProvider<T>.Save`](/game-api/types/global-e-h/generatedpageprovider-t#m-save), [`PageProvider.Load`](/game-api/types/global-p/pageprovider#m-load), [`PageProvider.Save`](/game-api/types/global-p/pageprovider#m-save), [`StaticPageProvider.Load`](/game-api/types/global-s/staticpageprovider#m-load), [`StaticPageProvider.Save`](/game-api/types/global-s/staticpageprovider#m-save).
