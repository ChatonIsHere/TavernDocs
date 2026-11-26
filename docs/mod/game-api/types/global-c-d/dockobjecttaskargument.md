---
title: "DockObjectTaskArgument"
description: "Game task argument raised when a pickup is docked, for tasks on the DockObject channel."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockObjectTaskArgument

A **class** in `Root.Township`, the global namespace.

Game task argument raised when a pickup is docked, for tasks on the `DockObject` channel.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`GameTaskActionArgument`](/mod/game-api/types/global-e-h/gametaskactionargument)
- **Derived types** [`DockPageTask`](/mod/game-api/types/alta-items/dockpagetask), [`DockObjectTask`](/mod/game-api/types/global-c-d/dockobjecttask)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockObjectTaskArgument(int count, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" dockSettings, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" dockPrefab, bool isSelf)"}</code> | Creates a `DockObjectTaskArgument` from `count`, `pickup`, `dockSettings`, `dockPrefab` and `isSelf`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/mod/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | `GameActionChannel.DockObject`. |
| <Link id="m-dockprefab" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" DockPrefab { get; }"}</code> | Prefab that owns the dock. |
| <Link id="m-docksettings" /><code><Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" DockSettings { get; }"}</code> | Settings of the dock used. |
| <Link id="m-isself" /><code>{"bool IsSelf { get; }"}</code> | True when the dock belongs to the player who docked the item (their own body docks). |
| <Link id="m-pickup" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The pickup that was docked. |

## Used in

Members of other types that take, return or hold a `DockObjectTaskArgument`:

[`DockPageTask.IsValid`](/mod/game-api/types/alta-items/dockpagetask#m-isvalid), [`DockObjectTask.IsValid`](/mod/game-api/types/global-c-d/dockobjecttask#m-isvalid).
