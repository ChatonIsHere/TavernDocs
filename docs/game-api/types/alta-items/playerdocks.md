---
title: "PlayerDocks"
description: "On the body; adds an InteractionFilter to every dock so only the owner can take from them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerDocks

A **class** in `Root.Township`, `Alta.Inventory`.

On the body; adds an `InteractionFilter` to every dock so only the owner can take from them.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Player inventory](/game-api/items/player-inventory)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerDocks()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-docks" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] docks"}</code> |
| <Link id="m-owner" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" owner"}</code> |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-filter" /><code>{"private void Filter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |

</details>
