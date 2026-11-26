---
title: "AgonesGameServer"
description: "An Agones GameServer Kubernetes object, as sent to or read from the Agones API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgonesGameServer

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Agones`.

An Agones `GameServer` Kubernetes object, as sent to or read from the Agones API.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`AgonesObject`](/game-api/types/assembly-api-models/agonesobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgonesGameServer()"}</code> | Creates an `AgonesGameServer` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-apigroup" /><code>{"override string ApiGroup { get; set; }"}</code> | Kubernetes API group, `agones.dev`. |
| <Link id="m-kind" /><code>{"override string Kind { get; set; }"}</code> | Kubernetes kind, `GameServer`. |
| <Link id="m-spec" /><code><Link to="/game-api/types/assembly-api-models/gameserverspec">{"GameServerSpec"}</Link>{" Spec { get; set; }"}</code> | The game server spec: ports and container template. |

## Used in

Members of other types that take, return or hold a `AgonesGameServer`:

[`AgonesServerList.Items`](/game-api/types/assembly-api-models/agonesserverlist#m-items).
