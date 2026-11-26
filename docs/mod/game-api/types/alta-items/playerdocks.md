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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Player inventory](/mod/game-api/items/player-inventory)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerDocks()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-docks" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] docks"}</code> | <span className="api-desc">The child pickup docks being restricted.</span> |
| <Link id="m-owner" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" owner"}</code> | <span className="api-desc">The player controller allowed to use these docks.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Adds `Filter` to every dock's interaction filter.</span> |
| <Link id="m-filter" /><code>{"private void Filter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Blocks the interaction when the interactor's player controller is not `owner`.</span> |

</details>
