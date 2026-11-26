---
title: "CosmeticScrollManager"
description: "Client: a scroll list of the cosmetics the local player owns in one category."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticScrollManager

A **class** in `Root.Township`, `Alta.Customization`.

Client: a scroll list of the cosmetics the local player owns in one category. Fills itself from `CustomizationManager.Owned` once customization has loaded.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`ScrollManager`](/mod/game-api/types/alta-customization/scrollmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticScrollManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentcategory" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{" currentCategory"}</code> | <span className="api-desc">The category currently listed.</span> |
| <Link id="m-initialcategory" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{" initialCategory"}</code> | <span className="api-desc">Category shown when the list first starts.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatecategory" /><code>{"void UpdateCategory("}<Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{" category)"}</code> | <span className="api-desc">Switches the list to another cosmetic category and refills it with the owned options in it. Does nothing if it's already showing that category.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Shows `initialCategory`, or waits for `CustomizationManager.OnInitialized` if owned cosmetics aren't loaded yet.</span> |
| <Link id="m-updatecategories" /><code>{"private void UpdateCategories()"}</code> | <span className="api-desc">Handler for `CustomizationManager.OnInitialized` that shows `initialCategory`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticScrollManager`:

<div className="api-used-in">

[`CategoryScrollElement.cosmeticManager`](/mod/game-api/types/alta-customization/categoryscrollelement#m-cosmeticmanager), [`CosmeticScrollElement.manager`](/mod/game-api/types/alta-customization/cosmeticscrollelement#m-manager), [`StoreScrollManager.regularScroll`](/mod/game-api/types/alta-customization/storescrollmanager#m-regularscroll).

</div>
