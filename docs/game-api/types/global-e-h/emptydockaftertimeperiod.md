---
title: "EmptyDockAfterTimePeriod"
description: "Server only: empties a dock on start and again a set time after each item is docked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmptyDockAfterTimePeriod

A **class** in `Root.Township`, no namespace.

Server only: empties a dock on start and again a set time after each item is docked. Removes itself on clients.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmptyDockAfterTimePeriod()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroydockedtimer" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" destroyDockedTimer"}</code> | The pending Timeline entry that will empty the dock. |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | The dock to empty. |
| <Link id="m-resettimeinminutes" /><code>{"private float resetTimeInMinutes"}</code> | Minutes after docking before the dock is emptied (5 by default). |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyitem" /><code>{"private void DestroyItem()"}</code> | Destroys everything stored in the dock. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the dock event and cancels the timer. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Server: empties the dock and hooks `ItemDocked`. Client: destroys this component. |
| <Link id="m-startdestroytimer" /><code>{"private void StartDestroyTimer("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Starts a timer to empty the dock after `resetTimeInMinutes`. A new dock replaces the stored timer without cancelling the old one. |

</details>
