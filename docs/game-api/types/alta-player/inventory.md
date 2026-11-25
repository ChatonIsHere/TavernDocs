---
title: "Inventory"
description: "PlayerCharacter.Inventory is a small helper the micro tutorial uses:"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Inventory

A **class** in `Root.Township`, `Alta.Character`.

`PlayerCharacter.Inventory` is a small helper the micro tutorial uses:

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Documented in** [Player inventory](/game-api/items/player-inventory#altacharacterinventory)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Inventory("}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character)"}</code> |

## Properties

<details>
<summary>7 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-backdock" /><code>{"private "}<Link to="/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> BackDock { get; }"}</code> |
| <Link id="m-leftbeltdock" /><code>{"private "}<Link to="/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> LeftBeltDock { get; }"}</code> |
| <Link id="m-lefthand" /><code>{"private "}<Link to="/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> LeftHand { get; }"}</code> |
| <Link id="m-lefthipdock" /><code>{"private "}<Link to="/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> LeftHipDock { get; }"}</code> |
| <Link id="m-rightbeltdock" /><code>{"private "}<Link to="/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> RightBeltDock { get; }"}</code> |
| <Link id="m-righthand" /><code>{"private "}<Link to="/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> RightHand { get; }"}</code> |
| <Link id="m-righthipdock" /><code>{"private "}<Link to="/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> RightHipDock { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-dockhelditemstoback" /><code>{"void DockHeldItemsToBack()"}</code> |
| <Link id="m-drophelditems" /><code>{"void DropHeldItems()"}</code> |
| <Link id="m-drophelditems-2" /><code>{"void DropHeldItems(IEnumerable<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> tags)"}</code> |

## Used in

Members of other types that take, return or hold a `Inventory`:

[`PlayerCharacter.Inventory`](/game-api/types/alta-player/playercharacter#m-inventory).
