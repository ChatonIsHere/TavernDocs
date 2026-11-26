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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Derived types** [`DockStore`](/game-api/types/alta-player/dockstore), [`HandStore`](/game-api/types/alta-player/handstore)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of pickups stored. |
| <Link id="m-source" /><code>{"T Source { get; }"}</code> | The object holding the store. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canadd" /><code>{"bool CanAdd("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Whether a pickup can be added. |
| <Link id="m-peek" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" Peek()"}</code> | The top pickup without taking it. |
| <Link id="m-search" /><code>{"bool Search(Func<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{", bool> predicate)"}</code> | True if any stored pickup matches a test. |
| <Link id="m-trypeek" /><code>{"bool TryPeek(out "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Gets the top pickup without taking it. False if empty. |
| <Link id="m-trypop" /><code>{"bool TryPop(out "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Takes the top pickup, or the first one matching a test. False if none. |
| <Link id="m-trypop-2" /><code>{"bool TryPop(out "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, Func<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{", bool> predicate)"}</code> | Takes the top pickup, or the first one matching a test. False if none. |
| <Link id="m-trypush" /><code>{"bool TryPush("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Adds a pickup. False if it can't. |

## Used in

Members of other types that take, return or hold a `IInventoryStore&lt;T>`:

[`Inventory.BackDock`](/game-api/types/alta-player/inventory#m-backdock), [`Inventory.LeftBeltDock`](/game-api/types/alta-player/inventory#m-leftbeltdock), [`Inventory.LeftHand`](/game-api/types/alta-player/inventory#m-lefthand), [`Inventory.LeftHipDock`](/game-api/types/alta-player/inventory#m-lefthipdock), [`Inventory.RightBeltDock`](/game-api/types/alta-player/inventory#m-rightbeltdock), [`Inventory.RightHand`](/game-api/types/alta-player/inventory#m-righthand), [`Inventory.RightHipDock`](/game-api/types/alta-player/inventory#m-righthipdock).
