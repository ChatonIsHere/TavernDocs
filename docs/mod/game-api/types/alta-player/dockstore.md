---
title: "DockStore"
description: "Inventory store wrapping one PickupDock (back, hip or belt slot) so Inventory can push, pop and search it like the hands."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockStore

A **class** in `Root.Township`, `Alta.Character`.

Inventory store wrapping one `PickupDock` (back, hip or belt slot) so `Inventory` can push, pop and search it like the hands.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`IInventoryStore<PickupDock>`](/mod/game-api/types/alta-player/iinventorystore-outt)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockStore("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | <span className="api-desc">How many items the dock holds (`QuantityStored`).</span> |
| <Link id="m-source" /><code><Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" Source { get; }"}</code> | <span className="api-desc">The wrapped dock.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canadd" /><code>{"bool CanAdd("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">True if the dock would accept the pickup.</span> |
| <Link id="m-peek" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" Peek()"}</code> | <span className="api-desc">The docked pickup, or null.</span> |
| <Link id="m-search" /><code>{"bool Search(Func<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{", bool> predicate)"}</code> | <span className="api-desc">Tests the docked pickup with the predicate. For a pouch, tests the items in its sub-docks instead.</span> |
| <Link id="m-trypeek" /><code>{"bool TryPeek(out "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Gets the docked pickup and returns whether there is one.</span> |
| <Link id="m-trypop" /><code>{"bool TryPop(out "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Undocks one of the docked item, optionally only if it matches the predicate.</span> |
| <Link id="m-trypop-2" /><code>{"bool TryPop(out "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, Func<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{", bool> predicate)"}</code> | <span className="api-desc">Undocks one of the docked item, optionally only if it matches the predicate.</span> |
| <Link id="m-trypush" /><code>{"bool TryPush("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Docks one of the pickup into this dock. True if the dock returned `Ok`.</span> |
