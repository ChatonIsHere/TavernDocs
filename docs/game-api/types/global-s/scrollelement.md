---
title: "ScrollElement"
description: "Base for an item in a scrolling list that is shown or hidden by index."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScrollElement

A **class** in `Root.Township`, no namespace.

Base for an item in a scrolling list that is shown or hidden by index.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CategoryScrollElement`](/game-api/types/alta-customization/categoryscrollelement), [`CosmeticScrollElement`](/game-api/types/alta-customization/cosmeticscrollelement)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScrollElement()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"int Index { get; private set; }"}</code> | The list index it was last shown for. |
| <Link id="m-isshown" /><code>{"bool IsShown { get; protected set; }"}</code> | True while shown. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hide" /><code>{"virtual void Hide()"}</code> | Hides the element. |
| <Link id="m-show" /><code>{"virtual async void Show(int index)"}</code> | Shows the element for a list index. |

## Used in

Members of other types that take, return or hold a `ScrollElement`:

[`ItemScroller.instances`](/game-api/types/global-i-l/itemscroller#m-instances), [`ItemScroller.prefab`](/game-api/types/global-i-l/itemscroller#m-prefab).
