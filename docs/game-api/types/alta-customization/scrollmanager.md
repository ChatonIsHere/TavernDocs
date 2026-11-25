---
title: "ScrollManager"
description: "abstract class ScrollManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScrollManager

An **abstract class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CosmeticScrollManager`](/game-api/types/alta-customization/cosmeticscrollmanager), [`StoreScrollManager`](/game-api/types/alta-customization/storescrollmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ScrollManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-columncount" /><code>{"private int columnCount"}</code> |  |
| <Link id="m-columnsize" /><code>{"private int columnSize"}</code> |  |
| <Link id="m-customizationmanager" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" customizationManager"}</code> |  |
| <Link id="m-items" /><code>{"private List<uint> items"}</code> |  |
| <Link id="m-itemscroller" /><code>{"private "}<Link to="/game-api/types/global-i-l/itemscroller">{"ItemScroller"}</Link>{" itemScroller"}</code> |  |
| <Link id="m-target" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticscrollsource">{"CosmeticScrollSource"}</Link>{" target"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-customizationmanager-2" /><code><Link to="/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" CustomizationManager { get; }"}</code> |  |
| <Link id="m-items-2" /><code>{"List<uint> Items { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itemschanged" /><code>{"event Action ItemsChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onitemschanged" /><code>{"void OnItemsChanged()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ScrollManager`:

[`SwipePromptController.scrollManagers`](/game-api/types/global-s/swipepromptcontroller#m-scrollmanagers).
