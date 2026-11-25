---
title: "IInventoryStore<T>"
description: "interface IInventoryStore<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IInventoryStore&lt;T&gt;

An **interface** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Derived types** [`DockStore`](/game-api/types/alta-player/dockstore), [`HandStore`](/game-api/types/alta-player/handstore)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |  |
| <Link id="m-source" /><code>{"T Source { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canadd" /><code>{"bool CanAdd("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-peek" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" Peek()"}</code> |  |
| <Link id="m-search" /><code>{"bool Search(Func<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{", bool> predicate)"}</code> |  |
| <Link id="m-trypeek" /><code>{"bool TryPeek(out "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-trypop" /><code>{"bool TryPop(out "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-trypop-2" /><code>{"bool TryPop(out "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, Func<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{", bool> predicate)"}</code> |  |
| <Link id="m-trypush" /><code>{"bool TryPush("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IInventoryStore&lt;T>`:

[`Inventory.BackDock`](/game-api/types/alta-player/inventory#m-backdock), [`Inventory.LeftBeltDock`](/game-api/types/alta-player/inventory#m-leftbeltdock), [`Inventory.LeftHand`](/game-api/types/alta-player/inventory#m-lefthand), [`Inventory.LeftHipDock`](/game-api/types/alta-player/inventory#m-lefthipdock), [`Inventory.RightBeltDock`](/game-api/types/alta-player/inventory#m-rightbeltdock), [`Inventory.RightHand`](/game-api/types/alta-player/inventory#m-righthand), [`Inventory.RightHipDock`](/game-api/types/alta-player/inventory#m-righthipdock).
