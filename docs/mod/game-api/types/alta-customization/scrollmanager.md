---
title: "ScrollManager"
description: "Base for a scrolling grid of cosmetic items in the customization room."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScrollManager

An **abstract class** in `Root.Township`, `Alta.Customization`.

Base for a scrolling grid of cosmetic items in the customization room. Holds the item hashes and resizes the scroller when they change.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CosmeticScrollManager`](/mod/game-api/types/alta-customization/cosmeticscrollmanager), [`StoreScrollManager`](/mod/game-api/types/alta-customization/storescrollmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ScrollManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-columncount" /><code>{"private int columnCount"}</code> | <span className="api-desc">Columns per page.</span> |
| <Link id="m-columnsize" /><code>{"private int columnSize"}</code> | <span className="api-desc">Items per column.</span> |
| <Link id="m-customizationmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" customizationManager"}</code> | <span className="api-desc">Backing field for `CustomizationManager`.</span> |
| <Link id="m-items" /><code>{"private List<uint> items"}</code> | <span className="api-desc">Backing field for `Items`.</span> |
| <Link id="m-itemscroller" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/itemscroller">{"ItemScroller"}</Link>{" itemScroller"}</code> | <span className="api-desc">The scroller that shows the grid.</span> |
| <Link id="m-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticscrollsource">{"CosmeticScrollSource"}</Link>{" target"}</code> | <span className="api-desc">The scroll source that receives the items.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-customizationmanager-2" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" CustomizationManager { get; }"}</code> | <span className="api-desc">The cosmetic customization manager this grid works with.</span> |
| <Link id="m-items-2" /><code>{"List<uint> Items { get; set; }"}</code> | <span className="api-desc">Hashes of the items in the grid. Setting it calls `OnItemsChanged`.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itemschanged" /><code>{"event Action ItemsChanged"}</code> | <span className="api-desc">Raised when the item list changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onitemschanged" /><code>{"void OnItemsChanged()"}</code> | <span className="api-desc">Resizes the scroller to fit the items, raises `ItemsChanged` and passes the items to the scroll source.</span> |

## Used in

Members of other types that take, return or hold a `ScrollManager`:

<div className="api-used-in">

[`SwipePromptController.scrollManagers`](/mod/game-api/types/global-s/swipepromptcontroller#m-scrollmanagers).

</div>
