---
title: "AgonesObject"
description: "Base for Agones (Kubernetes game server manager) objects as the Alta API reads and writes them in JSON."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgonesObject

An **abstract class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Agones`.

Base for Agones (Kubernetes game server manager) objects as the Alta API reads and writes them in JSON.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Derived types** [`AgonesGameServer`](/mod/game-api/types/assembly-api-models/agonesgameserver), [`GameServerAllocation`](/mod/game-api/types/assembly-api-models/gameserverallocation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected AgonesObject()"}</code> | <span className="api-desc">Creates an `AgonesObject` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-apigroup" /><code>{"virtual string ApiGroup { get; set; }"}</code> | <span className="api-desc">Agones API group, `allocation.agones.dev` by default. Not serialised itself.</span> |
| <Link id="m-apiversion" /><code>{"string ApiVersion { get; set; }"}</code> | <span className="api-desc">Serialised as `apiVersion`; built from `ApiGroup` and `Version`. Setting it does nothing.</span> |
| <Link id="m-kind" /><code>{"virtual string Kind { get; set; }"}</code> | <span className="api-desc">The Kubernetes object kind.</span> |
| <Link id="m-metadata" /><code><Link to="/mod/game-api/types/assembly-api-models/metadata">{"Metadata"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/metadata">{"Metadata"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The object's Kubernetes metadata.</span> |
| <Link id="m-status" /><code><Link to="/mod/game-api/types/assembly-api-models/status">{"Status"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/status">{"Status"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The object's status as Agones reports it.</span> |
| <Link id="m-version" /><code>{"string Version { get; set; }"}</code> | <span className="api-desc">API version part, `v1` by default. Not serialised itself.</span> |
