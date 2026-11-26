---
title: "CosmeticScrollSource"
description: "Holds the list of cosmetic hashes a customisation scroll list shows, and raises an event when it changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticScrollSource

A **class** in `Root.Township`, `Alta.Customization`.

Holds the list of cosmetic hashes a customisation scroll list shows, and raises an event when it changes. Read by `ScrollManager` and `CosmeticScrollElement`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticScrollSource()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code>{"private List<uint> items"}</code> | Backing field for `Items`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-items-2" /><code>{"List<uint> Items { get; set; }"}</code> | Cosmetic hashes to show. Setting it raises `ItemsChanged`. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itemschanged" /><code>{"event Action ItemsChanged"}</code> | Raised when `Items` is replaced or `OnItemsChanged` is called. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onitemschanged" /><code>{"void OnItemsChanged()"}</code> | Raises `ItemsChanged`. Call it after editing the list in place. |

## Used in

Members of other types that take, return or hold a `CosmeticScrollSource`:

[`CosmeticScrollElement.scrollSource`](/game-api/types/alta-customization/cosmeticscrollelement#m-scrollsource), [`ScrollManager.target`](/game-api/types/alta-customization/scrollmanager#m-target).
