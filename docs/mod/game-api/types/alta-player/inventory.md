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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Documented in** [Player inventory](/mod/game-api/items/player-inventory#altacharacterinventory)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Inventory("}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character)"}</code> | <span className="api-desc">Creates an `Inventory` from `character`.</span> |

## Properties

<details className="api-private">
<summary>7 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> BackDock { get; }"}</code> | <span className="api-desc">Store for the first back dock.</span> |
| <Link id="m-leftbeltdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> LeftBeltDock { get; }"}</code> | <span className="api-desc">Store for the second belt dock.</span> |
| <Link id="m-lefthand" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> LeftHand { get; }"}</code> | <span className="api-desc">Store for what the left hand holds.</span> |
| <Link id="m-lefthipdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> LeftHipDock { get; }"}</code> | <span className="api-desc">Store for the first belt dock.</span> |
| <Link id="m-rightbeltdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> RightBeltDock { get; }"}</code> | <span className="api-desc">Store for the fourth belt dock.</span> |
| <Link id="m-righthand" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> RightHand { get; }"}</code> | <span className="api-desc">Store for what the right hand holds.</span> |
| <Link id="m-righthipdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/iinventorystore-outt">{"IInventoryStore"}</Link>{"<"}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> RightHipDock { get; }"}</code> | <span className="api-desc">Store for the third belt dock.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dockhelditemstoback" /><code>{"void DockHeldItemsToBack()"}</code> | <span className="api-desc">If the back dock is empty, docks the left hand's item there, or the right hand's if that fails.</span> |
| <Link id="m-drophelditems" /><code>{"void DropHeldItems()"}</code> | <span className="api-desc">Drops what both hands hold. The overload only drops items with one of the given tags (or with no item).</span> |
| <Link id="m-drophelditems-2" /><code>{"void DropHeldItems(IEnumerable<"}<Link to="/mod/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"> tags)"}</code> | <span className="api-desc">Drops what both hands hold. The overload only drops items with one of the given tags (or with no item).</span> |

## Used in

Members of other types that take, return or hold a `Inventory`:

<div className="api-used-in">

[`PlayerCharacter.Inventory`](/mod/game-api/types/alta-player/playercharacter#m-inventory).

</div>
