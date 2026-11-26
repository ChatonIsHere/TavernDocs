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
| <Link id="m-ctor-2" /><code>{"CaveTeleportConnection("}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" fromLayer, "}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" toLayer, int fromCost, int toCost)"}</code> | <span className="api-desc">Creates a `CaveTeleportConnection` from `fromLayer`, `toLayer`, `fromCost`, `toCost`, `hasTo` and `hasFuelTo`.</span> |
| <Link id="m-ctor-3" /><code>{"CaveTeleportConnection("}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" fromLayer, int toLayer, int fromCost, int toCost)"}</code> | <span className="api-desc">Creates a `CaveTeleportConnection` from `fromLayer`, `toLayer`, `fromCost`, `toCost`, `hasTo` and `hasFuelTo`.</span> |

<details className="api-private">
<summary>2 private and internal constructors</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private CaveTeleportConnection()"}</code> | <span className="api-desc">Creates a `CaveTeleportConnection` from `fromLayer`, `toLayer`, `fromCost`, `toCost`, `hasTo` and `hasFuelTo`.</span> |
| <Link id="m-ctor-4" /><code>{"private CaveTeleportConnection("}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" fromLayer, int toLayer, int fromCost, int toCost, bool hasTo, bool hasFuelTo)"}</code> | <span className="api-desc">Creates a `CaveTeleportConnection` from `fromLayer`, `toLayer`, `fromCost`, `toCost`, `hasTo` and `hasFuelTo`.</span> |

</details>

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-nullconnection" /><code>{"static "}<Link to="/mod/game-api/types/alta-world-generation/caveteleportconnection">{"CaveTeleportConnection"}</Link>{" NullConnection"}</code> | <span className="api-desc">A shared placeholder connection that's never valid.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fromlayerdata" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" fromLayerData"}</code> | <span className="api-desc">Teleporter proxy data of the starting layer, checked for fuel.</span> |
| <Link id="m-tolayerdata" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" toLayerData"}</code> | <span className="api-desc">Teleporter proxy data of the target layer, set once it exists.</span> |
| <Link id="m-wasvalid" /><code>{"private bool wasValid"}</code> | <span className="api-desc">Last `IsValid` value, so `IsValidChanged` only fires on change.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fromcost" /><code>{"int FromCost { get; }"}</code> | <span className="api-desc">Fuel the starting layer needs for the trip.</span> |
| <Link id="m-fromlayer" /><code>{"int FromLayer { get; }"}</code> | <span className="api-desc">The layer the trip starts from.</span> |
| <Link id="m-hasfuelto" /><code>{"bool HasFuelTo { get; private set; }"}</code> | <span className="api-desc">Whether the destination layer has at least `ToCost` fuel.</span> |
| <Link id="m-hasto" /><code>{"bool HasTo { get; private set; }"}</code> | <span className="api-desc">Whether the destination layer has a teleporter.</span> |
| <Link id="m-isvalid" /><code>{"bool IsValid { get; }"}</code> | <span className="api-desc">True when the destination exists and both layers have enough fuel.</span> |
| <Link id="m-tocost" /><code>{"int ToCost { get; }"}</code> | <span className="api-desc">Fuel the destination layer needs for the trip.</span> |
| <Link id="m-tolayer" /><code>{"int ToLayer { get; }"}</code> | <span className="api-desc">The layer the trip goes to.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-hasfueltochanged" /><code>{"event Action<bool> HasFuelToChanged"}</code> | <span className="api-desc">Raised when `HasFuelTo` changes.</span> |
| <Link id="m-hastochanged" /><code>{"event Action<bool> HasToChanged"}</code> | <span className="api-desc">Raised when a teleporter first shows up on the destination layer.</span> |
| <Link id="m-isvalidchanged" /><code>{"event Action<bool> IsValidChanged"}</code> | <span className="api-desc">Raised when `IsValid` changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | <span className="api-desc">Stops listening for fuel updates.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatevalid" /><code>{"private void UpdateValid("}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" modifiedLayer)"}</code> | <span className="api-desc">Handler for proxy fuel updates; refreshes `HasTo`, `HasFuelTo` and `IsValid` and fires their change events.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CaveTeleportConnection`:

<div className="api-used-in">

[`CaveTeleporter.currentConnection`](/mod/game-api/types/alta-world-generation/caveteleporter#m-currentconnection), [`CaveTeleporter.UpdateConnection`](/mod/game-api/types/alta-world-generation/caveteleporter#m-updateconnection), [`CaveTeleporterManager.RequestConnection`](/mod/game-api/types/alta-world-generation/caveteleportermanager#m-requestconnection), [`CaveTeleporterPip.connection`](/mod/game-api/types/alta-world-generation/caveteleporterpip#m-connection), [`CaveTeleporterPip.SetupConnection`](/mod/game-api/types/alta-world-generation/caveteleporterpip#m-setupconnection), [`LevelSelectCaveTeleporter.connections`](/mod/game-api/types/alta-world-generation/levelselectcaveteleporter#m-connections).

</div>
