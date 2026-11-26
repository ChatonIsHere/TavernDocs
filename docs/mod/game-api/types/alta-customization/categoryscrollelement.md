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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`ScrollElement`](/mod/game-api/types/global-s/scrollelement)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CategoryScrollElement()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | <span className="api-desc">Animator with the `Visible` flag.</span> |
| <Link id="m-cosmeticmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticscrollmanager">{"CosmeticScrollManager"}</Link>{" cosmeticManager"}</code> | <span className="api-desc">Cosmetic scroll manager switched when pressed.</span> |
| <Link id="m-icon" /><code>{"private SpriteRenderer icon"}</code> | <span className="api-desc">Sprite renderer for the category icon.</span> |
| <Link id="m-manager" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/categoryscrollmanager">{"CategoryScrollManager"}</Link>{" manager"}</code> | <span className="api-desc">Category scroll manager that lists the available categories.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-category" /><code><Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{" Category { get; private set; }"}</code> | <span className="api-desc">The cosmetic category this element shows.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hide" /><code>{"override void Hide()"}</code> | <span className="api-desc">Hides the element through its animator.</span> |
| <Link id="m-pressed" /><code>{"void Pressed()"}</code> | <span className="api-desc">If shown, tells the cosmetic scroll manager to show this category.</span> |
| <Link id="m-show" /><code>{"override void Show(int index)"}</code> | <span className="api-desc">Picks the available category for the index (wrapping), sets the icon and shows it.</span> |
