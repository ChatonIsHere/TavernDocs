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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameServerCreateRequest()"}</code> | <span className="api-desc">Creates a `GameServerCreateRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accesspolicies" /><code>{"HashSet<string> AccessPolicies { get; set; }"}</code> | <span className="api-desc">Access policies the server needs from joining players. Defaults to `server_access_pre_alpha`.</span> |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | <span className="api-desc">Server description shown in lists.</span> |
| <Link id="m-fleetname" /><code>{"string FleetName { get; set; }"}</code> | <span className="api-desc">Hosting fleet to run it on. Defaults to `att-release`.</span> |
| <Link id="m-groupidentifier" /><code>{"int? GroupIdentifier { get; set; }"}</code> | <span className="api-desc">The group that owns the server, if any.</span> |
| <Link id="m-jointype" /><code><Link to="/mod/game-api/types/assembly-api-models/serverjointype">{"ServerJoinType"}</Link>{" JoinType { get; set; }"}</code> | <span className="api-desc">Who may join the server.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">Server name.</span> |
| <Link id="m-ownertype" /><code><Link to="/mod/game-api/types/assembly-api-models/serverownertype">{"ServerOwnerType"}</Link>{" OwnerType { get; set; }"}</code> | <span className="api-desc">What kind of owner the server has.</span> |
| <Link id="m-region" /><code>{"string Region { get; set; }"}</code> | <span className="api-desc">The hosting region.</span> |
| <Link id="m-sceneindex" /><code>{"int SceneIndex { get; set; }"}</code> | <span className="api-desc">Which game scene the server loads.</span> |

## Used in

Members of other types that take, return or hold a `GameServerCreateRequest`:

<div className="api-used-in">

[`IServerApiClient.CreateNewServerAsync`](/mod/game-api/types/assembly-api-client/iserverapiclient#m-createnewserverasync), [`OfflineServerApiClient.CreateNewServerAsync`](/mod/game-api/types/assembly-api-client/offlineserverapiclient#m-createnewserverasync), [`ServerApiClient.CreateNewServerAsync`](/mod/game-api/types/assembly-api-client/serverapiclient#m-createnewserverasync), [`LowLevelApiClient.CreateServer`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-createserver).

</div>
