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
| <Link id="m-ctor" /><code>{"protected ScrollManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-columncount" /><code>{"private int columnCount"}</code> | Columns per page. |
| <Link id="m-columnsize" /><code>{"private int columnSize"}</code> | Items per column. |
| <Link id="m-customizationmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" customizationManager"}</code> | Backing field for `CustomizationManager`. |
| <Link id="m-items" /><code>{"private List<uint> items"}</code> | Backing field for `Items`. |
| <Link id="m-itemscroller" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/itemscroller">{"ItemScroller"}</Link>{" itemScroller"}</code> | The scroller that shows the grid. |
| <Link id="m-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticscrollsource">{"CosmeticScrollSource"}</Link>{" target"}</code> | The scroll source that receives the items. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-customizationmanager-2" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" CustomizationManager { get; }"}</code> | The cosmetic customization manager this grid works with. |
| <Link id="m-items-2" /><code>{"List<uint> Items { get; set; }"}</code> | Hashes of the items in the grid. Setting it calls `OnItemsChanged`. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itemschanged" /><code>{"event Action ItemsChanged"}</code> | Raised when the item list changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onitemschanged" /><code>{"void OnItemsChanged()"}</code> | Resizes the scroller to fit the items, raises `ItemsChanged` and passes the items to the scroll source. |

## Used in

Members of other types that take, return or hold a `ScrollManager`:

[`SwipePromptController.scrollManagers`](/mod/game-api/types/global-s/swipepromptcontroller#m-scrollmanagers).
