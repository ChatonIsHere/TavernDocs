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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PageInstanceSaveData1()"}</code> | Creates a `PageInstanceSaveData1` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-custom" /><code><Link to="/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{"[] custom"}</code> | Custom glyph positions written on the page. |
| <Link id="m-ispredefined" /><code>{"bool isPredefined"}</code> | Whether the page is a predefined page. |
| <Link id="m-page" /><code><Link to="/game-api/types/alta-items/page">{"Page"}</Link>{" page"}</code> | The `Page` asset the instance used. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to the current save format using the page's hash; returns null if the page is missing. |

## Used in

Members of other types that take, return or hold a `PageInstanceSaveData1`:

[`BookSaveData.pages`](/game-api/types/alta-items/booksavedata#m-pages).
