---
title: "PageLootSettings"
description: "Global settings asset for page loot (Page Loot Settings), listing loot providers that pages are kept out of."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PageLootSettings

A **class** in `Root.Township`, the global namespace.

Global settings asset for page loot (Page Loot Settings), listing loot providers that pages are kept out of.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`GlobalSettings<PageLootSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`PageLootSettings`](/mod/game-api/types/global-p/pagelootsettings), [`PageLootSettings.Create`](/mod/game-api/types/global-p/pagelootsettings-create)
- **Nested types** [`Create`](/mod/game-api/types/global-p/pagelootsettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PageLootSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-excludedproviderids" /><code>{"int[] excludedProviderIds"}</code> | <span className="api-desc">IDs of loot providers excluded from page loot. Probably used where pages are added to loot tables.</span> |
