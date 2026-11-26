---
title: "PlayerDocks"
description: "Restricts a set of docks on a player (such as belt and shoulder slots) so only their owner can use them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerDocks

A **class** in `Root.Township`, `Alta.Inventory`.

Restricts a set of docks on a player (such as belt and shoulder slots) so only their owner can use them.

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

| Member | What it is |
| --- | --- |
| <Link id="m-docks" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] docks"}</code> | The child pickup docks being restricted. |
| <Link id="m-owner" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" owner"}</code> | The player controller allowed to use these docks. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Adds `Filter` to every dock's interaction filter. |
| <Link id="m-filter" /><code>{"private void Filter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Blocks the interaction when the interactor's player controller is not `owner`. |

</details>
