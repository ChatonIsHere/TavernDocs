---
title: "IDockable"
description: "Something pickups can be docked into and undocked from."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IDockable

An **interface** in `Root.Township`, no namespace.

Something pickups can be docked into and undocked from.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`PickupDock`](/game-api/types/alta-items/pickupdock)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"void Dock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, int quantity, bool isInstantMovementForced = false)"}</code> | Docks a quantity of the pickup, optionally forcing it to move there at once. |
| <Link id="m-undock" /><code>{"void Undock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, int quantity)"}</code> | Takes a quantity of the pickup out. |
