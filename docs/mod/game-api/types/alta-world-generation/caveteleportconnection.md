---
title: "CaveTeleportConnection"
description: "A link between two cave teleporter layers and its fuel costs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveTeleportConnection

A **class** in `Root.Township`, `Alta.Caves`.

A link between two cave teleporter layers and its fuel costs. Watches fuel on both layers and raises events as the link becomes usable or not.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Documented in** [Caves](/mod/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor-2" /><code>{"CaveTeleportConnection("}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" fromLayer, "}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" toLayer, int fromCost, int toCost)"}</code> | Creates a `CaveTeleportConnection` from `fromLayer`, `toLayer`, `fromCost`, `toCost`, `hasTo` and `hasFuelTo`. |
| <Link id="m-ctor-3" /><code>{"CaveTeleportConnection("}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" fromLayer, int toLayer, int fromCost, int toCost)"}</code> | Creates a `CaveTeleportConnection` from `fromLayer`, `toLayer`, `fromCost`, `toCost`, `hasTo` and `hasFuelTo`. |

<details>
<summary>2 private and internal constructors</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private CaveTeleportConnection()"}</code> | Creates a `CaveTeleportConnection` from `fromLayer`, `toLayer`, `fromCost`, `toCost`, `hasTo` and `hasFuelTo`. |
| <Link id="m-ctor-4" /><code>{"private CaveTeleportConnection("}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" fromLayer, int toLayer, int fromCost, int toCost, bool hasTo, bool hasFuelTo)"}</code> | Creates a `CaveTeleportConnection` from `fromLayer`, `toLayer`, `fromCost`, `toCost`, `hasTo` and `hasFuelTo`. |

</details>

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-nullconnection" /><code>{"static "}<Link to="/mod/game-api/types/alta-world-generation/caveteleportconnection">{"CaveTeleportConnection"}</Link>{" NullConnection"}</code> | A shared placeholder connection that's never valid. |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fromlayerdata" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" fromLayerData"}</code> | Teleporter proxy data of the starting layer, checked for fuel. |
| <Link id="m-tolayerdata" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" toLayerData"}</code> | Teleporter proxy data of the target layer, set once it exists. |
| <Link id="m-wasvalid" /><code>{"private bool wasValid"}</code> | Last `IsValid` value, so `IsValidChanged` only fires on change. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fromcost" /><code>{"int FromCost { get; }"}</code> | Fuel the starting layer needs for the trip. |
| <Link id="m-fromlayer" /><code>{"int FromLayer { get; }"}</code> | The layer the trip starts from. |
| <Link id="m-hasfuelto" /><code>{"bool HasFuelTo { get; private set; }"}</code> | Whether the destination layer has at least `ToCost` fuel. |
| <Link id="m-hasto" /><code>{"bool HasTo { get; private set; }"}</code> | Whether the destination layer has a teleporter. |
| <Link id="m-isvalid" /><code>{"bool IsValid { get; }"}</code> | True when the destination exists and both layers have enough fuel. |
| <Link id="m-tocost" /><code>{"int ToCost { get; }"}</code> | Fuel the destination layer needs for the trip. |
| <Link id="m-tolayer" /><code>{"int ToLayer { get; }"}</code> | The layer the trip goes to. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-hasfueltochanged" /><code>{"event Action<bool> HasFuelToChanged"}</code> | Raised when `HasFuelTo` changes. |
| <Link id="m-hastochanged" /><code>{"event Action<bool> HasToChanged"}</code> | Raised when a teleporter first shows up on the destination layer. |
| <Link id="m-isvalidchanged" /><code>{"event Action<bool> IsValidChanged"}</code> | Raised when `IsValid` changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | Stops listening for fuel updates. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatevalid" /><code>{"private void UpdateValid("}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" modifiedLayer)"}</code> | Handler for proxy fuel updates; refreshes `HasTo`, `HasFuelTo` and `IsValid` and fires their change events. |

</details>

## Used in

Members of other types that take, return or hold a `CaveTeleportConnection`:

[`CaveTeleporter.currentConnection`](/mod/game-api/types/alta-world-generation/caveteleporter#m-currentconnection), [`CaveTeleporter.UpdateConnection`](/mod/game-api/types/alta-world-generation/caveteleporter#m-updateconnection), [`CaveTeleporterManager.RequestConnection`](/mod/game-api/types/alta-world-generation/caveteleportermanager#m-requestconnection), [`CaveTeleporterPip.connection`](/mod/game-api/types/alta-world-generation/caveteleporterpip#m-connection), [`CaveTeleporterPip.SetupConnection`](/mod/game-api/types/alta-world-generation/caveteleporterpip#m-setupconnection), [`LevelSelectCaveTeleporter.connections`](/mod/game-api/types/alta-world-generation/levelselectcaveteleporter#m-connections).
