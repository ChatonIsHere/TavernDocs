---
title: "EmptyDockAfterTimePeriod"
description: "Server only: empties a dock on start and again a set time after each item is docked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmptyDockAfterTimePeriod

A **class** in `Root.Township`, the global namespace.

Server only: empties a dock on start and again a set time after each item is docked. Removes itself on clients.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmptyDockAfterTimePeriod()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroydockedtimer" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" destroyDockedTimer"}</code> | <span className="api-desc">The pending Timeline entry that will empty the dock.</span> |
| <Link id="m-dock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | <span className="api-desc">The dock to empty.</span> |
| <Link id="m-resettimeinminutes" /><code>{"private float resetTimeInMinutes"}</code> | <span className="api-desc">Minutes after docking before the dock is emptied (5 by default).</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyitem" /><code>{"private void DestroyItem()"}</code> | <span className="api-desc">Destroys everything stored in the dock.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the dock event and cancels the timer.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Server: empties the dock and hooks `ItemDocked`. Client: destroys this component.</span> |
| <Link id="m-startdestroytimer" /><code>{"private void StartDestroyTimer("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Starts a timer to empty the dock after `resetTimeInMinutes`. A new dock replaces the stored timer without cancelling the old one.</span> |

</details>
