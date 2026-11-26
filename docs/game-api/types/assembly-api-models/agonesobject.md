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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Derived types** [`AgonesGameServer`](/game-api/types/assembly-api-models/agonesgameserver), [`GameServerAllocation`](/game-api/types/assembly-api-models/gameserverallocation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected AgonesObject()"}</code> | Creates an `AgonesObject` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-apigroup" /><code>{"virtual string ApiGroup { get; set; }"}</code> | Agones API group, `allocation.agones.dev` by default. Not serialised itself. |
| <Link id="m-apiversion" /><code>{"string ApiVersion { get; set; }"}</code> | Serialised as `apiVersion`; built from `ApiGroup` and `Version`. Setting it does nothing. |
| <Link id="m-kind" /><code>{"virtual string Kind { get; set; }"}</code> | The Kubernetes object kind. |
| <Link id="m-metadata" /><code><Link to="/game-api/types/assembly-api-models/metadata">{"Metadata"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/metadata">{"Metadata"}</Link>{" { get; set; }"}</code> | The object's Kubernetes metadata. |
| <Link id="m-status" /><code><Link to="/game-api/types/assembly-api-models/status">{"Status"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/status">{"Status"}</Link>{" { get; set; }"}</code> | The object's status as Agones reports it. |
| <Link id="m-version" /><code>{"string Version { get; set; }"}</code> | API version part, `v1` by default. Not serialised itself. |
