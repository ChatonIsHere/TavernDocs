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
| <Link id="m-ctor" /><code>{"Status()"}</code> | Creates a `Status` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-address" /><code>{"IPAddress Address { get; set; }"}</code> | IP address of the game server. |
| <Link id="m-gameservername" /><code>{"string GameServerName { get; set; }"}</code> | Name of the Agones game server. |
| <Link id="m-nodename" /><code>{"string NodeName { get; set; }"}</code> | Kubernetes node the server runs on. |
| <Link id="m-ports" /><code><Link to="/mod/game-api/types/assembly-api-models/portconfig">{"PortConfig"}</Link>{"[] Ports { get; set; }"}</code> | Ports the server has been given. |
| <Link id="m-state" /><code><Link to="/mod/game-api/types/assembly-api-models/status-gameserverstate">{"Status.GameServerState"}</Link>{" State { get; set; }"}</code> | Current Agones state, such as `Ready` or `Allocated`. |

## Used in

Members of other types that take, return or hold a `Status`:

[`AgonesObject.Status`](/mod/game-api/types/assembly-api-models/agonesobject#m-status).
