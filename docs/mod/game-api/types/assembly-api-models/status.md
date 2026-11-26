---
title: "Status"
description: "Status of an Agones game server: its state, address and ports."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Status

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Agones`.

Status of an Agones game server: its state, address and ports.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Nested types** [`GameServerState`](/mod/game-api/types/assembly-api-models/status-gameserverstate)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Status()"}</code> | <span className="api-desc">Creates a `Status` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-address" /><code>{"IPAddress Address { get; set; }"}</code> | <span className="api-desc">IP address of the game server.</span> |
| <Link id="m-gameservername" /><code>{"string GameServerName { get; set; }"}</code> | <span className="api-desc">Name of the Agones game server.</span> |
| <Link id="m-nodename" /><code>{"string NodeName { get; set; }"}</code> | <span className="api-desc">Kubernetes node the server runs on.</span> |
| <Link id="m-ports" /><code><Link to="/mod/game-api/types/assembly-api-models/portconfig">{"PortConfig"}</Link>{"[] Ports { get; set; }"}</code> | <span className="api-desc">Ports the server has been given.</span> |
| <Link id="m-state" /><code><Link to="/mod/game-api/types/assembly-api-models/status-gameserverstate">{"Status.GameServerState"}</Link>{" State { get; set; }"}</code> | <span className="api-desc">Current Agones state, such as `Ready` or `Allocated`.</span> |

## Used in

Members of other types that take, return or hold a `Status`:

<div className="api-used-in">

[`AgonesObject.Status`](/mod/game-api/types/assembly-api-models/agonesobject#m-status).

</div>
