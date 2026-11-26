---
title: "PageInstanceSaveData2"
description: "Old version 2 save data for a PageInstance, kept so old saves can load."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PageInstanceSaveData2

A **class** in `Root.Township`, `Alta.Pages`.

Old version 2 save data for a `PageInstance`, kept so old saves can load.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PageInstanceSaveData2()"}</code> | <span className="api-desc">Creates a `PageInstanceSaveData2` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-custom" /><code><Link to="/mod/game-api/types/alta-items/glyph-positioning">{"Glyph.Positioning"}</Link>{"[] custom"}</code> | <span className="api-desc">Glyph positions for a custom (player-written) page.</span> |
| <Link id="m-ispredefined" /><code>{"bool isPredefined"}</code> | <span className="api-desc">True if the page is a predefined page rather than a custom one.</span> |
| <Link id="m-pageprovider" /><code>{"int pageProvider"}</code> | <span className="api-desc">Id of the page provider.</span> |
| <Link id="m-predefinedhash" /><code>{"uint predefinedHash"}</code> | <span className="api-desc">Hash of the predefined page, when `isPredefined` is set.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Copies every field into the current `PageInstanceSaveData`.</span> |
