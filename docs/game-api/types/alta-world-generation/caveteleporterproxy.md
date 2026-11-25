---
title: "CaveTeleporterProxy"
description: "class CaveTeleporterProxy in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveTeleporterProxy

A **class** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveTeleporterProxy("}<Link to="/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" data)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"CaveTeleporterProxy(int layer, int fuel)"}</code> |  |
| <Link id="m-ctor-3" /><code>{"CaveTeleporterProxy(int layer, Vector3 position, int fuel)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-teleporter" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/caveteleporter">{"CaveTeleporter"}</Link>{" teleporter"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" Data { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatedfuel" /><code>{"event Action<"}<Link to="/game-api/types/alta-world-generation/caveteleporterproxy">{"CaveTeleporterProxy"}</Link>{"> UpdatedFuel"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addfuel" /><code>{"void AddFuel(int fuelQuantity)"}</code> |  |
| <Link id="m-consumefuel" /><code>{"void ConsumeFuel(int cost)"}</code> |  |
| <Link id="m-registerteleporter" /><code>{"void RegisterTeleporter("}<Link to="/game-api/types/alta-world-generation/caveteleporter">{"CaveTeleporter"}</Link>{" teleporter)"}</code> |  |
| <Link id="m-updatefuel" /><code>{"private void UpdateFuel()"}</code> |  |

## Used in

Members of other types that take, return or hold a `CaveTeleporterProxy`:

[`CaveTeleporterManager.AvailableLayers`](/game-api/types/alta-world-generation/caveteleportermanager#m-availablelayers), [`CaveTeleporterManager.ProxyUpdatedFuel`](/game-api/types/alta-world-generation/caveteleportermanager#m-proxyupdatedfuel), [`ProgressCommandModule.CaveTeleporterDetails.CaveTeleporterDetails`](/game-api/types/alta-console/progresscommandmodule-caveteleporterdetails#m-ctor).
