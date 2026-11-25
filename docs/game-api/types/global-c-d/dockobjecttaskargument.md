---
title: "DockObjectTaskArgument"
description: "class DockObjectTaskArgument in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockObjectTaskArgument

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`GameTaskActionArgument`](/game-api/types/global-e-h/gametaskactionargument)
- **Derived types** [`DockPageTask`](/game-api/types/alta-items/dockpagetask), [`DockObjectTask`](/game-api/types/global-c-d/dockobjecttask)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockObjectTaskArgument(int count, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" dockSettings, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" dockPrefab, bool isSelf)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> |  |
| <Link id="m-dockprefab" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" DockPrefab { get; }"}</code> |  |
| <Link id="m-docksettings" /><code><Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" DockSettings { get; }"}</code> |  |
| <Link id="m-isself" /><code>{"bool IsSelf { get; }"}</code> |  |
| <Link id="m-pickup" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `DockObjectTaskArgument`:

[`DockPageTask.IsValid`](/game-api/types/alta-items/dockpagetask#m-isvalid), [`DockObjectTask.IsValid`](/game-api/types/global-c-d/dockobjecttask#m-isvalid).
