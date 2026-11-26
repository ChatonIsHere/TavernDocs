---
title: "IInventoryStore<T>"
description: "A stack-like store of pickups in the player's inventory."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IInventoryStore&lt;T&gt;

An **interface** in `Root.Township`, `Alta.Character`.

A stack-like store of pickups in the player's inventory.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Derived types** [`DockStore`](/mod/game-api/types/alta-player/dockstore), [`HandStore`](/mod/game-api/types/alta-player/handstore)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | <span className="api-desc">Number of pickups stored.</span> |
| <Link id="m-source" /><code>{"T Source { get; }"}</code> | <span className="api-desc">The object holding the store.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canadd" /><code>{"bool CanAdd("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Whether a pickup can be added.</span> |
| <Link id="m-peek" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" Peek()"}</code> | <span className="api-desc">The top pickup without taking it.</span> |
| <Link id="m-search" /><code>{"bool Search(Func<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{", bool> predicate)"}</code> | <span className="api-desc">True if any stored pickup matches a test.</span> |
| <Link id="m-trypeek" /><code>{"bool TryPeek(out "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Gets the top pickup without taking it. False if empty.</span> |
| <Link id="m-trypop" /><code>{"bool TryPop(out "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Takes the top pickup, or the first one matching a test. False if none.</span> |
| <Link id="m-trypop-2" /><code>{"bool TryPop(out "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, Func<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{", bool> predicate)"}</code> | <span className="api-desc">Takes the top pickup, or the first one matching a test. False if none.</span> |
| <Link id="m-trypush" /><code>{"bool TryPush("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Adds a pickup. False if it can't.</span> |

## Used in

Members of other types that take, return or hold a `IInventoryStore&lt;T>`:

<div className="api-used-in">

[`Inventory.BackDock`](/mod/game-api/types/alta-player/inventory#m-backdock), [`Inventory.LeftBeltDock`](/mod/game-api/types/alta-player/inventory#m-leftbeltdock), [`Inventory.LeftHand`](/mod/game-api/types/alta-player/inventory#m-lefthand), [`Inventory.LeftHipDock`](/mod/game-api/types/alta-player/inventory#m-lefthipdock), [`Inventory.RightBeltDock`](/mod/game-api/types/alta-player/inventory#m-rightbeltdock), [`Inventory.RightHand`](/mod/game-api/types/alta-player/inventory#m-righthand), [`Inventory.RightHipDock`](/mod/game-api/types/alta-player/inventory#m-righthipdock).

</div>
