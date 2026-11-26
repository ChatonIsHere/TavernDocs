---
title: "CategoryScrollManager"
description: "Customisation menu component holding the cosmetic categories the category scroller shows, filtered to those the player owns options for."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CategoryScrollManager

A **class** in `Root.Township`, `Alta.Customization`.

Customisation menu component holding the cosmetic categories the category scroller shows, filtered to those the player owns options for.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CategoryScrollManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-available" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{"[] available"}</code> | Cached result of `GetAvailableCategories`. |
| <Link id="m-categories" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{"[] categories"}</code> | All categories set in the inspector. |
| <Link id="m-customizationmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" customizationManager"}</code> | Backing field for `CustomizationManager`. |
| <Link id="m-purchased" /><code>{"private IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/playercosmeticdefinition">{"PlayerCosmeticDefinition"}</Link>{"> purchased"}</code> | Unused in this build. |
| <Link id="m-refresh" /><code>{"private Task refresh"}</code> | Unused in this build. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-customizationmanager-2" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" CustomizationManager { get; }"}</code> | The cosmetic customisation manager whose owned cosmetics decide which categories are available. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getallcategories" /><code><Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{"[] GetAllCategories()"}</code> | Every category set in the inspector. |
| <Link id="m-getavailablecategories" /><code><Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{"[] GetAvailableCategories()"}</code> | Visible categories with at least one owned option. Worked out once and cached. |

## Used in

Members of other types that take, return or hold a `CategoryScrollManager`:

[`CategoryScrollElement.manager`](/mod/game-api/types/alta-customization/categoryscrollelement#m-manager), [`CategoryScrubberController.scrollManager`](/mod/game-api/types/alta-customization/categoryscrubbercontroller#m-scrollmanager).
