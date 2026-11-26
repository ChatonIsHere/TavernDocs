---
title: "CaveTeleporterProxyData"
description: "Light record of one cave teleporter: its cave layer, position and fuel."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveTeleporterProxyData

A **class** in `Root.Township`, `Alta.Caves`.

Light record of one cave teleporter: its cave layer, position and fuel. Used by `CaveTeleportConnection` and `CaveTeleporterManager`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveTeleporterProxyData()"}</code> | Creates a `CaveTeleporterProxyData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fuel" /><code>{"int fuel"}</code> | Fuel stored in the teleporter. |
| <Link id="m-layer" /><code>{"int layer"}</code> | Cave layer it is on. 0 is the surface. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | World position. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcopy" /><code><Link to="/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" GetCopy()"}</code> | A copy with the same values. |

## Used in

Members of other types that take, return or hold a `CaveTeleporterProxyData`:

[`CaveTeleportConnection.CaveTeleportConnection`](/game-api/types/alta-world-generation/caveteleportconnection#m-ctor-2), [`CaveTeleportConnection.fromLayerData`](/game-api/types/alta-world-generation/caveteleportconnection#m-fromlayerdata), [`CaveTeleportConnection.toLayerData`](/game-api/types/alta-world-generation/caveteleportconnection#m-tolayerdata), [`CaveTeleportConnection.UpdateValid`](/game-api/types/alta-world-generation/caveteleportconnection#m-updatevalid), [`CaveTeleporterManager.OnProxyUpdatedfuel`](/game-api/types/alta-world-generation/caveteleportermanager#m-onproxyupdatedfuel), [`CaveTeleporterManagerData.proxiesData`](/game-api/types/alta-world-generation/caveteleportermanagerdata#m-proxiesdata), [`CaveTeleporterProxy.CaveTeleporterProxy`](/game-api/types/alta-world-generation/caveteleporterproxy#m-ctor), [`CaveTeleporterProxy.Data`](/game-api/types/alta-world-generation/caveteleporterproxy#m-data).
