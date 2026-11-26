---
title: "ServerJoinResult"
description: "Web API reply to a request to join a game server: whether it's allowed, why not, and the connection details and token if so."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerJoinResult

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Web API reply to a request to join a game server: whether it's allowed, why not, and the connection details and token if so.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerJoinResult()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectioninfo" /><code><Link to="/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" { get; set; }"}</code> | Address and ports to connect to when the join is allowed. |
| <Link id="m-failreason" /><code><Link to="/game-api/types/assembly-api-models/serverjoinfailresult">{"ServerJoinFailResult"}</Link>{" FailReason { get; set; }"}</code> | Why the join failed, as a `ServerJoinFailResult`. |
| <Link id="m-isallowed" /><code>{"bool IsAllowed { get; set; }"}</code> | True when the player may join. |
| <Link id="m-iscoldstart" /><code>{"bool IsColdStart { get; set; }"}</code> | Set by the API (`cold_start`); probably means the server had to be started for this join. |
| <Link id="m-message" /><code>{"string Message { get; set; }"}</code> | Human-readable message, set on failure. |
| <Link id="m-serveridentifier" /><code>{"int ServerIdentifier { get; set; }"}</code> | ID of the server the result is for. |
| <Link id="m-token" /><code>{"JwtSecurityToken Token { get; set; }"}</code> | JWT the client presents to the game server when connecting. |
| <Link id="m-wasrejected" /><code>{"bool WasRejected { get; set; }"}</code> | True when the join was refused, as opposed to just not allowed yet. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settofailstate" /><code>{"void SetToFailState(string failMessage, "}<Link to="/game-api/types/assembly-api-models/serverjoinfailresult">{"ServerJoinFailResult"}</Link>{" failReason)"}</code> | Marks the result as rejected and sets the message and fail reason. |

## Used in

Members of other types that take, return or hold a `ServerJoinResult`:

[`IServerApiClient.ConnectConsole`](/game-api/types/assembly-api-client/iserverapiclient#m-connectconsole), [`IServerApiClient.JoinServer`](/game-api/types/assembly-api-client/iserverapiclient#m-joinserver), [`OfflineServerApiClient.ConnectConsole`](/game-api/types/assembly-api-client/offlineserverapiclient#m-connectconsole), [`OfflineServerApiClient.JoinServer`](/game-api/types/assembly-api-client/offlineserverapiclient#m-joinserver), [`ServerApiClient.ConnectConsole`](/game-api/types/assembly-api-client/serverapiclient#m-connectconsole), [`ServerApiClient.JoinServer`](/game-api/types/assembly-api-client/serverapiclient#m-joinserver), [`LowLevelApiClient.ConnectConsole`](/game-api/types/assembly-api-client/lowlevelapiclient#m-connectconsole), [`LowLevelApiClient.JoinServer`](/game-api/types/assembly-api-client/lowlevelapiclient#m-joinserver), [`GameServerInfoExtensions.JoinServerAsync`](/game-api/types/global-e-h/gameserverinfoextensions#m-joinserverasync), [`JoinServerPipeline.joinResult`](/game-api/types/global-i-l/joinserverpipeline#m-joinresult).
