---
title: "Inventory"
description: "Simple view of a player character's hands and body docks, made by PlayerCharacter and reached through its Inventory property."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Inventory

A **class** in `Root.Township`, `Alta.Character`.

Simple view of a player character's hands and body docks, made by `PlayerCharacter` and reached through its `Inventory` property. Used for things like the micro tutorial.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Documented in** [Player inventory](/game-api/items/player-inventory#altacharacterinventory)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Inventory("}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character)"}</code> |

## Properties

<details>
<summary>7 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backdock" /><code>{"private "}<Link to="/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> BackDock { get; }"}</code> | Store for the first back dock. |
| <Link id="m-leftbeltdock" /><code>{"private "}<Link to="/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> LeftBeltDock { get; }"}</code> | Store for the second belt dock. |
| <Link id="m-lefthand" /><code>{"private "}<Link to="/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> LeftHand { get; }"}</code> | Store for what the left hand holds. |
| <Link id="m-lefthipdock" /><code>{"private "}<Link to="/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> LeftHipDock { get; }"}</code> | Store for the first belt dock. |
| <Link id="m-rightbeltdock" /><code>{"private "}<Link to="/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> RightBeltDock { get; }"}</code> | Store for the fourth belt dock. |
| <Link id="m-righthand" /><code>{"private "}<Link to="/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> RightHand { get; }"}</code> | Store for what the right hand holds. |
| <Link id="m-righthipdock" /><code>{"private "}<Link to="/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> RightHipDock { get; }"}</code> | Store for the third belt dock. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dockhelditemstoback" /><code>{"void DockHeldItemsToBack()"}</code> | If the back dock is empty, docks the left hand's item there, or the right hand's if that fails. |
| <Link id="m-drophelditems" /><code>{"void DropHeldItems()"}</code> | Drops what both hands hold. The overload only drops items with one of the given tags (or with no item). |
| <Link id="m-drophelditems-2" /><code>{"void DropHeldItems(IEnumerable<"}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> tags)"}</code> | Drops what both hands hold. The overload only drops items with one of the given tags (or with no item). |

## Used in

Members of other types that take, return or hold a `Inventory`:

[`PlayerCharacter.Inventory`](/game-api/types/alta-player/playercharacter#m-inventory).
