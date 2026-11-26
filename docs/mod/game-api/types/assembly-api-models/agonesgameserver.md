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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`AgonesObject`](/mod/game-api/types/assembly-api-models/agonesobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgonesGameServer()"}</code> | <span className="api-desc">Creates an `AgonesGameServer` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-apigroup" /><code>{"override string ApiGroup { get; set; }"}</code> | <span className="api-desc">Kubernetes API group, `agones.dev`.</span> |
| <Link id="m-kind" /><code>{"override string Kind { get; set; }"}</code> | <span className="api-desc">Kubernetes kind, `GameServer`.</span> |
| <Link id="m-spec" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverspec">{"GameServerSpec"}</Link>{" Spec { get; set; }"}</code> | <span className="api-desc">The game server spec: ports and container template.</span> |

## Used in

Members of other types that take, return or hold a `AgonesGameServer`:

<div className="api-used-in">

[`AgonesServerList.Items`](/mod/game-api/types/assembly-api-models/agonesserverlist#m-items).

</div>
