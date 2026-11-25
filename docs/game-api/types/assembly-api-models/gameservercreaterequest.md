---
title: "GameServerCreateRequest"
description: "class GameServerCreateRequest in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameServerCreateRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GameServerCreateRequest()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-accesspolicies" /><code>{"HashSet<string> AccessPolicies { get; set; }"}</code> |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> |
| <Link id="m-fleetname" /><code>{"string FleetName { get; set; }"}</code> |
| <Link id="m-groupidentifier" /><code>{"int? GroupIdentifier { get; set; }"}</code> |
| <Link id="m-jointype" /><code><Link to="/game-api/types/assembly-api-models/serverjointype">{"ServerJoinType"}</Link>{" JoinType { get; set; }"}</code> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> |
| <Link id="m-ownertype" /><code><Link to="/game-api/types/assembly-api-models/serverownertype">{"ServerOwnerType"}</Link>{" OwnerType { get; set; }"}</code> |
| <Link id="m-region" /><code>{"string Region { get; set; }"}</code> |
| <Link id="m-sceneindex" /><code>{"int SceneIndex { get; set; }"}</code> |

## Used in

Members of other types that take, return or hold a `GameServerCreateRequest`:

[`IServerApiClient.CreateNewServerAsync`](/game-api/types/assembly-api-client/iserverapiclient#m-createnewserverasync), [`OfflineServerApiClient.CreateNewServerAsync`](/game-api/types/assembly-api-client/offlineserverapiclient#m-createnewserverasync), [`ServerApiClient.CreateNewServerAsync`](/game-api/types/assembly-api-client/serverapiclient#m-createnewserverasync), [`LowLevelApiClient.CreateServer`](/game-api/types/assembly-api-client/lowlevelapiclient#m-createserver).
