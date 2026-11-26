---
title: "PageInstanceSaveData1"
description: "Old (version 1) save data for a PageInstance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PageInstanceSaveData1

A **class** in `Root.Township`, `Alta.Pages`.

Old (version 1) save data for a `PageInstance`. It is migrated to `PageInstanceSaveData` on load.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PageInstanceSaveData1()"}</code> | <span className="api-desc">Creates a `PageInstanceSaveData1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-custom" /><code><Link to="/mod/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{"[] custom"}</code> | <span className="api-desc">Custom glyph positions written on the page.</span> |
| <Link id="m-ispredefined" /><code>{"bool isPredefined"}</code> | <span className="api-desc">Whether the page is a predefined page.</span> |
| <Link id="m-page" /><code><Link to="/mod/game-api/types/alta-items/page">{"Page"}</Link>{" page"}</code> | <span className="api-desc">The `Page` asset the instance used.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to the current save format using the page's hash; returns null if the page is missing.</span> |

## Used in

Members of other types that take, return or hold a `PageInstanceSaveData1`:

<div className="api-used-in">

[`BookSaveData.pages`](/mod/game-api/types/alta-items/booksavedata#m-pages).

</div>
