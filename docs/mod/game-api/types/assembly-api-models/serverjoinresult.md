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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerJoinResult()"}</code> | <span className="api-desc">Creates a `ServerJoinResult` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectioninfo" /><code><Link to="/mod/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Address and ports to connect to when the join is allowed.</span> |
| <Link id="m-failreason" /><code><Link to="/mod/game-api/types/assembly-api-models/serverjoinfailresult">{"ServerJoinFailResult"}</Link>{" FailReason { get; set; }"}</code> | <span className="api-desc">Why the join failed, as a `ServerJoinFailResult`.</span> |
| <Link id="m-isallowed" /><code>{"bool IsAllowed { get; set; }"}</code> | <span className="api-desc">True when the player may join.</span> |
| <Link id="m-iscoldstart" /><code>{"bool IsColdStart { get; set; }"}</code> | <span className="api-desc">Set by the API (`cold_start`); probably means the server had to be started for this join.</span> |
| <Link id="m-message" /><code>{"string Message { get; set; }"}</code> | <span className="api-desc">Human-readable message, set on failure.</span> |
| <Link id="m-serveridentifier" /><code>{"int ServerIdentifier { get; set; }"}</code> | <span className="api-desc">ID of the server the result is for.</span> |
| <Link id="m-token" /><code>{"JwtSecurityToken Token { get; set; }"}</code> | <span className="api-desc">JWT the client presents to the game server when connecting.</span> |
| <Link id="m-wasrejected" /><code>{"bool WasRejected { get; set; }"}</code> | <span className="api-desc">True when the join was refused, as opposed to just not allowed yet.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settofailstate" /><code>{"void SetToFailState(string failMessage, "}<Link to="/mod/game-api/types/assembly-api-models/serverjoinfailresult">{"ServerJoinFailResult"}</Link>{" failReason)"}</code> | <span className="api-desc">Marks the result as rejected and sets the message and fail reason.</span> |

## Used in

Members of other types that take, return or hold a `ServerJoinResult`:

<div className="api-used-in">

[`IServerApiClient.ConnectConsole`](/mod/game-api/types/assembly-api-client/iserverapiclient#m-connectconsole), [`IServerApiClient.JoinServer`](/mod/game-api/types/assembly-api-client/iserverapiclient#m-joinserver), [`OfflineServerApiClient.ConnectConsole`](/mod/game-api/types/assembly-api-client/offlineserverapiclient#m-connectconsole), [`OfflineServerApiClient.JoinServer`](/mod/game-api/types/assembly-api-client/offlineserverapiclient#m-joinserver), [`ServerApiClient.ConnectConsole`](/mod/game-api/types/assembly-api-client/serverapiclient#m-connectconsole), [`ServerApiClient.JoinServer`](/mod/game-api/types/assembly-api-client/serverapiclient#m-joinserver), [`LowLevelApiClient.ConnectConsole`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-connectconsole), [`LowLevelApiClient.JoinServer`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-joinserver), [`GameServerInfoExtensions.JoinServerAsync`](/mod/game-api/types/global-e-h/gameserverinfoextensions#m-joinserverasync), [`JoinServerPipeline.joinResult`](/mod/game-api/types/global-i-l/joinserverpipeline#m-joinresult).

</div>
