---
title: "GameServerCreateRequest"
description: "Request body for creating a game server through Alta's web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameServerCreateRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Request body for creating a game server through Alta's web API.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameServerCreateRequest()"}</code> | Creates a `GameServerCreateRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accesspolicies" /><code>{"HashSet<string> AccessPolicies { get; set; }"}</code> | Access policies the server needs from joining players. Defaults to `server_access_pre_alpha`. |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | Server description shown in lists. |
| <Link id="m-fleetname" /><code>{"string FleetName { get; set; }"}</code> | Hosting fleet to run it on. Defaults to `att-release`. |
| <Link id="m-groupidentifier" /><code>{"int? GroupIdentifier { get; set; }"}</code> | The group that owns the server, if any. |
| <Link id="m-jointype" /><code><Link to="/game-api/types/assembly-api-models/serverjointype">{"ServerJoinType"}</Link>{" JoinType { get; set; }"}</code> | Who may join the server. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | Server name. |
| <Link id="m-ownertype" /><code><Link to="/game-api/types/assembly-api-models/serverownertype">{"ServerOwnerType"}</Link>{" OwnerType { get; set; }"}</code> | What kind of owner the server has. |
| <Link id="m-region" /><code>{"string Region { get; set; }"}</code> | The hosting region. |
| <Link id="m-sceneindex" /><code>{"int SceneIndex { get; set; }"}</code> | Which game scene the server loads. |

## Used in

Members of other types that take, return or hold a `GameServerCreateRequest`:

[`IServerApiClient.CreateNewServerAsync`](/game-api/types/assembly-api-client/iserverapiclient#m-createnewserverasync), [`OfflineServerApiClient.CreateNewServerAsync`](/game-api/types/assembly-api-client/offlineserverapiclient#m-createnewserverasync), [`ServerApiClient.CreateNewServerAsync`](/game-api/types/assembly-api-client/serverapiclient#m-createnewserverasync), [`LowLevelApiClient.CreateServer`](/game-api/types/assembly-api-client/lowlevelapiclient#m-createserver).
