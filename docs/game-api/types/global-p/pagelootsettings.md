---
title: "PageLootSettings"
description: "Global settings asset for page loot (Page Loot Settings), listing loot providers that pages are kept out of."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PageLootSettings

A **class** in `Root.Township`, no namespace.

Global settings asset for page loot (Page Loot Settings), listing loot providers that pages are kept out of.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`GlobalSettings<PageLootSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`PageLootSettings`](/game-api/types/global-p/pagelootsettings), [`PageLootSettings.Create`](/game-api/types/global-p/pagelootsettings-create)
- **Nested types** [`Create`](/game-api/types/global-p/pagelootsettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PageLootSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-excludedproviderids" /><code>{"int[] excludedProviderIds"}</code> | IDs of loot providers excluded from page loot. Probably used where pages are added to loot tables. |
