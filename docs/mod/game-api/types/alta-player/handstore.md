---
title: "HandStore"
description: "Inventory store wrapping one hand's Interactor, so Inventory can put items in and take them out of a hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandStore

A **class** in `Root.Township`, `Alta.Character`.

Inventory store wrapping one hand's Interactor, so `Inventory` can put items in and take them out of a hand. Grabs and releases are forced.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`IInventoryStore<Interactor>`](/mod/game-api/types/alta-player/iinventorystore-outt)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandStore("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" sourceController)"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sourcecontroller" /><code>{"private readonly "}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" sourceController"}</code> | The hand controller this store wraps. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | 0 if the hand is empty, the pouch's stored count if it holds a pouch, otherwise 1. |
| <Link id="m-source" /><code><Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" Source { get; }"}</code> | The hand's Interactor. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canadd" /><code>{"bool CanAdd("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | True if the pickup isn't null and the hand is empty. |
| <Link id="m-peek" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" Peek()"}</code> | The held pickup. Throws `InvalidOperationException` if the hand is empty. |
| <Link id="m-search" /><code>{"bool Search(Func<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{", bool> predicate)"}</code> | Tests the held pickup with the predicate. Unlike `DockStore`, doesn't look inside pouches. |
| <Link id="m-trypeek" /><code>{"bool TryPeek(out "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Gets the held pickup and returns whether the hand holds one. |
| <Link id="m-trypop" /><code>{"bool TryPop(out "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Releases the held pickup, optionally only if it matches the predicate, and returns it. |
| <Link id="m-trypop-2" /><code>{"bool TryPop(out "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, Func<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{", bool> predicate)"}</code> | Releases the held pickup, optionally only if it matches the predicate, and returns it. |
| <Link id="m-trypush" /><code>{"bool TryPush("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Forces the hand to grab the pickup (as server when on the server). |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pop" /><code>{"private bool Pop()"}</code> | Force-stops the hand's interaction (as server when on the server) and returns whether it is now empty. |

</details>
