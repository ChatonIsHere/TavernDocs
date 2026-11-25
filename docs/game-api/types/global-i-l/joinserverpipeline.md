---
title: "JoinServerPipeline"
description: "class JoinServerPipeline in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinServerPipeline

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JoinServerPipeline("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server, "}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-connectioninfo" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" connectionInfo"}</code> |  |
| <Link id="m-isdisplayingprerequisitemessages" /><code>{"private bool isDisplayingPrerequisiteMessages"}</code> |  |
| <Link id="m-isdoingprerequisites" /><code>{"private bool isDoingPrerequisites"}</code> |  |
| <Link id="m-joinedinfo" /><code>{"private "}<Link to="/game-api/types/alta-networking/joinedserverinfo">{"JoinedServerInfo"}</Link>{" joinedInfo"}</code> |  |
| <Link id="m-joinresult" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/serverjoinresult">{"ServerJoinResult"}</Link>{" joinResult"}</code> |  |
| <Link id="m-lastprerequisitemessage" /><code>{"private string lastPrerequisiteMessage"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-socket" /><code>{"private "}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket"}</code> |  |
| <Link id="m-waitforserverresponse" /><code>{"private TaskCompletionSource<"}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{"> waitForServerResponse"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectiontoserver" /><code><Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" ConnectionToServer { get; private set; }"}</code> |  |
| <Link id="m-serverconnectingto" /><code><Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" ServerConnectingTo { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempttoconnecttoserver" /><code>{"async Task<"}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{"> AttemptToConnectToServer()"}</code> |  |
| <Link id="m-cancelattempt" /><code>{"void CancelAttempt()"}</code> |  |
| <Link id="m-connectionapprovedbyserver" /><code>{"private void ConnectionApprovedByServer("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |  |
| <Link id="m-connectionsequence" /><code>{"private void ConnectionSequence("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-connectiontoserverfailed" /><code>{"private void ConnectionToServerFailed("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |  |
| <Link id="m-connectiontoserverlost" /><code>{"private void ConnectionToServerLost("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |  |
| <Link id="m-disposeconnection" /><code>{"private void DisposeConnection()"}</code> |  |
| <Link id="m-handleserverconnectionresponse" /><code>{"private void HandleServerConnectionResponse("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-onserverrejectedrequest" /><code>{"private void OnServerRejectedRequest("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/alta-networking/confirmjoinmessage">{"ConfirmJoinMessage"}</Link>{" joinMessage)"}</code> |  |
| <Link id="m-showmessage" /><code>{"private void ShowMessage()"}</code> |  |

## Used in

Members of other types that take, return or hold a `JoinServerPipeline`:

[`ConnectToServerUtility.joinServerPipeline`](/game-api/types/alta-networking/connecttoserverutility#m-joinserverpipeline).
