---
title: "CaveTeleporterProxy"
description: "Stands in for one layer's cave teleporter in CaveTeleporterManager, holding its fuel and arrival position even while the real teleporter isn't loaded."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveTeleporterProxy

A **class** in `Root.Township`, `Alta.Caves`.

Stands in for one layer's cave teleporter in `CaveTeleporterManager`, holding its fuel and arrival position even while the real teleporter isn't loaded. Fuel changes go to the real teleporter when one is registered.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveTeleporterProxy("}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" data)"}</code> | Creates a `CaveTeleporterProxy` from `layer`, `position` and `fuel`. |
| <Link id="m-ctor-2" /><code>{"CaveTeleporterProxy(int layer, int fuel)"}</code> | Creates a `CaveTeleporterProxy` from `layer`, `position` and `fuel`. |
| <Link id="m-ctor-3" /><code>{"CaveTeleporterProxy(int layer, Vector3 position, int fuel)"}</code> | Creates a `CaveTeleporterProxy` from `layer`, `position` and `fuel`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-teleporter" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/caveteleporter">{"CaveTeleporter"}</Link>{" teleporter"}</code> | The loaded teleporter for this layer, if any. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" Data { get; }"}</code> | The saved data: layer, arrival position and fuel. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatedfuel" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxy">{"CaveTeleporterProxy"}</Link>{"> UpdatedFuel"}</code> | Raised when the stored fuel changes. The manager listens to save it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addfuel" /><code>{"void AddFuel(int fuelQuantity)"}</code> | Adds fuel: spawns fuel into the real teleporter's dock if registered, otherwise adds to the stored count. |
| <Link id="m-consumefuel" /><code>{"void ConsumeFuel(int cost)"}</code> | Removes fuel from the real teleporter's dock if registered, otherwise from the stored count. |
| <Link id="m-registerteleporter" /><code>{"void RegisterTeleporter("}<Link to="/mod/game-api/types/alta-world-generation/caveteleporter">{"CaveTeleporter"}</Link>{" teleporter)"}</code> | Links the loaded teleporter and follows its fuel changes. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatefuel" /><code>{"private void UpdateFuel()"}</code> | Copies the real teleporter's fuel into `Data` and raises `UpdatedFuel`. |

</details>

## Used in

Members of other types that take, return or hold a `CaveTeleporterProxy`:

[`CaveTeleporterManager.AvailableLayers`](/mod/game-api/types/alta-world-generation/caveteleportermanager#m-availablelayers), [`CaveTeleporterManager.ProxyUpdatedFuel`](/mod/game-api/types/alta-world-generation/caveteleportermanager#m-proxyupdatedfuel), [`ProgressCommandModule.CaveTeleporterDetails.CaveTeleporterDetails`](/mod/game-api/types/alta-console/progresscommandmodule-caveteleporterdetails#m-ctor).
