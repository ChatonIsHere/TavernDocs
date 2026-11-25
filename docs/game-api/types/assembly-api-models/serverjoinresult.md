---
title: "ServerJoinResult"
description: "class ServerJoinResult in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerJoinResult

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerJoinResult()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-connectioninfo" /><code><Link to="/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" { get; set; }"}</code> |
| <Link id="m-failreason" /><code><Link to="/game-api/types/assembly-api-models/serverjoinfailresult">{"ServerJoinFailResult"}</Link>{" FailReason { get; set; }"}</code> |
| <Link id="m-isallowed" /><code>{"bool IsAllowed { get; set; }"}</code> |
| <Link id="m-iscoldstart" /><code>{"bool IsColdStart { get; set; }"}</code> |
| <Link id="m-message" /><code>{"string Message { get; set; }"}</code> |
| <Link id="m-serveridentifier" /><code>{"int ServerIdentifier { get; set; }"}</code> |
| <Link id="m-token" /><code>{"JwtSecurityToken Token { get; set; }"}</code> |
| <Link id="m-wasrejected" /><code>{"bool WasRejected { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-settofailstate" /><code>{"void SetToFailState(string failMessage, "}<Link to="/game-api/types/assembly-api-models/serverjoinfailresult">{"ServerJoinFailResult"}</Link>{" failReason)"}</code> |

## Used in

Members of other types that take, return or hold a `ServerJoinResult`:

[`IServerApiClient.ConnectConsole`](/game-api/types/assembly-api-client/iserverapiclient#m-connectconsole), [`IServerApiClient.JoinServer`](/game-api/types/assembly-api-client/iserverapiclient#m-joinserver), [`OfflineServerApiClient.ConnectConsole`](/game-api/types/assembly-api-client/offlineserverapiclient#m-connectconsole), [`OfflineServerApiClient.JoinServer`](/game-api/types/assembly-api-client/offlineserverapiclient#m-joinserver), [`ServerApiClient.ConnectConsole`](/game-api/types/assembly-api-client/serverapiclient#m-connectconsole), [`ServerApiClient.JoinServer`](/game-api/types/assembly-api-client/serverapiclient#m-joinserver), [`LowLevelApiClient.ConnectConsole`](/game-api/types/assembly-api-client/lowlevelapiclient#m-connectconsole), [`LowLevelApiClient.JoinServer`](/game-api/types/assembly-api-client/lowlevelapiclient#m-joinserver), [`GameServerInfoExtensions.JoinServerAsync`](/game-api/types/global-e-h/gameserverinfoextensions#m-joinserverasync), [`JoinServerPipeline.joinResult`](/game-api/types/global-i-l/joinserverpipeline#m-joinresult).
