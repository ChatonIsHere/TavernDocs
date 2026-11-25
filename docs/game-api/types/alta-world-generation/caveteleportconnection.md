---
title: "CaveTeleportConnection"
description: "A link between two cave teleporter layers and its fuel costs. Watches fuel on both layers and raises events as the link becomes usable or not."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveTeleportConnection

A **class** in `Root.Township`, `Alta.Caves`.

A link between two cave teleporter layers and its fuel costs. Watches fuel on both layers and raises events as the link becomes usable or not.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor-2" /><code>{"CaveTeleportConnection("}<Link to="/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" fromLayer, "}<Link to="/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" toLayer, int fromCost, int toCost)"}</code> |  |
| <Link id="m-ctor-3" /><code>{"CaveTeleportConnection("}<Link to="/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" fromLayer, int toLayer, int fromCost, int toCost)"}</code> |  |
| <Link id="m-ctor" /><code>{"private CaveTeleportConnection()"}</code> |  |
| <Link id="m-ctor-4" /><code>{"private CaveTeleportConnection("}<Link to="/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" fromLayer, int toLayer, int fromCost, int toCost, bool hasTo, bool hasFuelTo)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-nullconnection" /><code>{"static "}<Link to="/game-api/types/alta-world-generation/caveteleportconnection">{"CaveTeleportConnection"}</Link>{" NullConnection"}</code> | A shared placeholder connection that's never valid. |
| <Link id="m-fromlayerdata" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" fromLayerData"}</code> |  |
| <Link id="m-tolayerdata" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" toLayerData"}</code> |  |
| <Link id="m-wasvalid" /><code>{"private bool wasValid"}</code> |  |

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
| <Link id="m-updatevalid" /><code>{"private void UpdateValid("}<Link to="/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" modifiedLayer)"}</code> |  |

## Used in

Members of other types that take, return or hold a `CaveTeleportConnection`:

[`CaveTeleporter.currentConnection`](/game-api/types/alta-world-generation/caveteleporter#m-currentconnection), [`CaveTeleporter.UpdateConnection`](/game-api/types/alta-world-generation/caveteleporter#m-updateconnection), [`CaveTeleporterManager.RequestConnection`](/game-api/types/alta-world-generation/caveteleportermanager#m-requestconnection), [`CaveTeleporterPip.connection`](/game-api/types/alta-world-generation/caveteleporterpip#m-connection), [`CaveTeleporterPip.SetupConnection`](/game-api/types/alta-world-generation/caveteleporterpip#m-setupconnection), [`LevelSelectCaveTeleporter.connections`](/game-api/types/alta-world-generation/levelselectcaveteleporter#m-connections).
