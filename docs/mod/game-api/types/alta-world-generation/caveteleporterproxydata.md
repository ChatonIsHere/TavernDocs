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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveTeleporterProxyData()"}</code> | <span className="api-desc">Creates a `CaveTeleporterProxyData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fuel" /><code>{"int fuel"}</code> | <span className="api-desc">Fuel stored in the teleporter.</span> |
| <Link id="m-layer" /><code>{"int layer"}</code> | <span className="api-desc">Cave layer it is on. 0 is the surface.</span> |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">World position.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcopy" /><code><Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{" GetCopy()"}</code> | <span className="api-desc">A copy with the same values.</span> |

## Used in

Members of other types that take, return or hold a `CaveTeleporterProxyData`:

<div className="api-used-in">

[`CaveTeleportConnection.CaveTeleportConnection`](/mod/game-api/types/alta-world-generation/caveteleportconnection#m-ctor-2), [`CaveTeleportConnection.fromLayerData`](/mod/game-api/types/alta-world-generation/caveteleportconnection#m-fromlayerdata), [`CaveTeleportConnection.toLayerData`](/mod/game-api/types/alta-world-generation/caveteleportconnection#m-tolayerdata), [`CaveTeleportConnection.UpdateValid`](/mod/game-api/types/alta-world-generation/caveteleportconnection#m-updatevalid), [`CaveTeleporterManager.OnProxyUpdatedfuel`](/mod/game-api/types/alta-world-generation/caveteleportermanager#m-onproxyupdatedfuel), [`CaveTeleporterManagerData.proxiesData`](/mod/game-api/types/alta-world-generation/caveteleportermanagerdata#m-proxiesdata), [`CaveTeleporterProxy.CaveTeleporterProxy`](/mod/game-api/types/alta-world-generation/caveteleporterproxy#m-ctor), [`CaveTeleporterProxy.Data`](/mod/game-api/types/alta-world-generation/caveteleporterproxy#m-data).

</div>
