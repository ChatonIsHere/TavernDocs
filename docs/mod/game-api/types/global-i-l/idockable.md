---
title: "IDockable"
description: "Something pickups can be docked into and undocked from."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IDockable

An **interface** in `Root.Township`, the global namespace.

Something pickups can be docked into and undocked from.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`PickupDock`](/mod/game-api/types/alta-items/pickupdock)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"void Dock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, int quantity, bool isInstantMovementForced = false)"}</code> | <span className="api-desc">Docks a quantity of the pickup, optionally forcing it to move there at once.</span> |
| <Link id="m-undock" /><code>{"void Undock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, int quantity)"}</code> | <span className="api-desc">Takes a quantity of the pickup out.</span> |
