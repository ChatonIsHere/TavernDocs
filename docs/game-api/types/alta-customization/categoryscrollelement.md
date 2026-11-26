---
title: "CategoryScrollElement"
description: "One entry in the customization category scroller."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CategoryScrollElement

A **class** in `Root.Township`, `Alta.Customization`.

One entry in the customization category scroller. Shows a cosmetic category's icon and switches the cosmetic list to it when pressed.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`ScrollElement`](/game-api/types/global-s/scrollelement)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CategoryScrollElement()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | Animator with the `Visible` flag. |
| <Link id="m-cosmeticmanager" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticscrollmanager">{"CosmeticScrollManager"}</Link>{" cosmeticManager"}</code> | Cosmetic scroll manager switched when pressed. |
| <Link id="m-icon" /><code>{"private SpriteRenderer icon"}</code> | Sprite renderer for the category icon. |
| <Link id="m-manager" /><code>{"private "}<Link to="/game-api/types/alta-customization/categoryscrollmanager">{"CategoryScrollManager"}</Link>{" manager"}</code> | Category scroll manager that lists the available categories. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-category" /><code><Link to="/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{" Category { get; private set; }"}</code> | The cosmetic category this element shows. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hide" /><code>{"override void Hide()"}</code> | Hides the element through its animator. |
| <Link id="m-pressed" /><code>{"void Pressed()"}</code> | If shown, tells the cosmetic scroll manager to show this category. |
| <Link id="m-show" /><code>{"override void Show(int index)"}</code> | Picks the available category for the index (wrapping), sets the icon and shows it. |
