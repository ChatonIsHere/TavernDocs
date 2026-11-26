---
title: "StoreScrollManager"
description: "Scroll list showing the cosmetics on the store right now."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StoreScrollManager

A **class** in `Root.Township`, `Alta.Customization`.

Scroll list showing the cosmetics on the store right now.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`ScrollManager`](/mod/game-api/types/alta-customization/scrollmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StoreScrollManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-regularscroll" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticscrollmanager">{"CosmeticScrollManager"}</Link>{" regularScroll"}</code> | <span className="api-desc">The normal cosmetic scroller, reset when the store opens.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-open" /><code>{"void Open()"}</code> | <span className="api-desc">Fills the list with cosmetic definitions currently on the store and clears the regular scroller's category.</span> |
