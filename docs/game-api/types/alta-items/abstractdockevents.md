---
title: "AbstractDockEvents"
description: "abstract class AbstractDockEvents in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AbstractDockEvents

An **abstract class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ItemDockedVfxEvent`](/game-api/types/alta-items/itemdockedvfxevent), [`DockEvents`](/game-api/types/global-c-d/dockevents)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected AbstractDockEvents()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> |  |
| <Link id="m-isrunonclient" /><code>{"private bool isRunOnClient"}</code> |  |
| <Link id="m-isrunonserver" /><code>{"private bool isRunOnServer"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-firstdocked" /><code>{"protected abstract void FirstDocked()"}</code> |  |
| <Link id="m-itemdocked" /><code>{"private void ItemDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-itemdocked-2" /><code>{"protected abstract void ItemDocked()"}</code> |  |
| <Link id="m-itemundocked" /><code>{"private void ItemUndocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-itemundocked-2" /><code>{"protected abstract void ItemUndocked()"}</code> |  |
| <Link id="m-lastundocked" /><code>{"protected abstract void LastUndocked()"}</code> |  |
| <Link id="m-shouldrun" /><code>{"private bool ShouldRun()"}</code> |  |
