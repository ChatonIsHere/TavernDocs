---
title: "DockStore"
description: "class DockStore in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockStore

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`IInventoryStore<PickupDock>`](/game-api/types/alta-player/iinventorystore-outt)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockStore("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |  |
| <Link id="m-source" /><code><Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" Source { get; }"}</code> |  |

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
