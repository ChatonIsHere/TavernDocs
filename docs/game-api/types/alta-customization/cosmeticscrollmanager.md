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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`ScrollManager`](/game-api/types/alta-customization/scrollmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticScrollManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentcategory" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{" currentCategory"}</code> | The category currently listed. |
| <Link id="m-initialcategory" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{" initialCategory"}</code> | Category shown when the list first starts. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatecategory" /><code>{"void UpdateCategory("}<Link to="/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{" category)"}</code> | Switches the list to another cosmetic category and refills it with the owned options in it. Does nothing if it's already showing that category. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Shows `initialCategory`, or waits for `CustomizationManager.OnInitialized` if owned cosmetics aren't loaded yet. |
| <Link id="m-updatecategories" /><code>{"private void UpdateCategories()"}</code> | Handler for `CustomizationManager.OnInitialized` that shows `initialCategory`. |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticScrollManager`:

[`CategoryScrollElement.cosmeticManager`](/game-api/types/alta-customization/categoryscrollelement#m-cosmeticmanager), [`CosmeticScrollElement.manager`](/game-api/types/alta-customization/cosmeticscrollelement#m-manager), [`StoreScrollManager.regularScroll`](/game-api/types/alta-customization/storescrollmanager#m-regularscroll).
