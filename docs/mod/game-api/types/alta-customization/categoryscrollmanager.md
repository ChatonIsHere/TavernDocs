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
| <Link id="m-ctor" /><code>{"CategoryScrollManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-available" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{"[] available"}</code> | <span className="api-desc">Cached result of `GetAvailableCategories`.</span> |
| <Link id="m-categories" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{"[] categories"}</code> | <span className="api-desc">All categories set in the inspector.</span> |
| <Link id="m-customizationmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" customizationManager"}</code> | <span className="api-desc">Backing field for `CustomizationManager`.</span> |
| <Link id="m-purchased" /><code>{"private IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/playercosmeticdefinition">{"PlayerCosmeticDefinition"}</Link>{"> purchased"}</code> | <span className="api-desc">Unused in this build.</span> |
| <Link id="m-refresh" /><code>{"private Task refresh"}</code> | <span className="api-desc">Unused in this build.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-customizationmanager-2" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" CustomizationManager { get; }"}</code> | <span className="api-desc">The cosmetic customisation manager whose owned cosmetics decide which categories are available.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getallcategories" /><code><Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{"[] GetAllCategories()"}</code> | <span className="api-desc">Every category set in the inspector.</span> |
| <Link id="m-getavailablecategories" /><code><Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{"[] GetAvailableCategories()"}</code> | <span className="api-desc">Visible categories with at least one owned option. Worked out once and cached.</span> |

## Used in

Members of other types that take, return or hold a `CategoryScrollManager`:

<div className="api-used-in">

[`CategoryScrollElement.manager`](/mod/game-api/types/alta-customization/categoryscrollelement#m-manager), [`CategoryScrubberController.scrollManager`](/mod/game-api/types/alta-customization/categoryscrubbercontroller#m-scrollmanager).

</div>
