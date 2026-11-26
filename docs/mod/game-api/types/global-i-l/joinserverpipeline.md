---
title: "JoinServerPipeline"
description: "Client: one attempt to join a game server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinServerPipeline

A **class** in `Root.Township`, the global namespace.

Client: one attempt to join a game server. Asks the API for connection info, opens the connection, sends the join request and waits through the server's prerequisites for a `JoinResult`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JoinServerPipeline("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server, "}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> | Creates a `JoinServerPipeline` from `server` and `socket`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connectioninfo" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" connectionInfo"}</code> | Address and port from the API. Swapped for the local or loopback address when the server is on your own public IP. |
| <Link id="m-isdisplayingprerequisitemessages" /><code>{"private bool isDisplayingPrerequisiteMessages"}</code> | Whether prerequisite messages are being shown yet. |
| <Link id="m-isdoingprerequisites" /><code>{"private bool isDoingPrerequisites"}</code> | Whether the server has accepted and is still running prerequisites. |
| <Link id="m-joinedinfo" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/joinedserverinfo">{"JoinedServerInfo"}</Link>{" joinedInfo"}</code> | Joined server info from the server's first accepted response. |
| <Link id="m-joinresult" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/serverjoinresult">{"ServerJoinResult"}</Link>{" joinResult"}</code> | The API's join result, with the connection info and an optional join token. |
| <Link id="m-lastprerequisitemessage" /><code>{"private string lastPrerequisiteMessage"}</code> | The most recent server status message. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |
| <Link id="m-socket" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket"}</code> | The socket used to open the connection. |
| <Link id="m-waitforserverresponse" /><code>{"private TaskCompletionSource<"}<Link to="/mod/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{"> waitForServerResponse"}</code> | Completed with the final join result by whichever handler finishes first. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectiontoserver" /><code><Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" ConnectionToServer { get; private set; }"}</code> | The connection being set up. Null until a connect succeeds or after disposal. |
| <Link id="m-serverconnectingto" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" ServerConnectingTo { get; private set; }"}</code> | The server being joined. Its identifier is updated from the API join result. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempttoconnecttoserver" /><code>{"async Task<"}<Link to="/mod/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{"> AttemptToConnectToServer()"}</code> | Runs the whole join: API join check, connect (15 tries, 1s apart), wait for the server's answer, then clear the handlers. |
| <Link id="m-cancelattempt" /><code>{"void CancelAttempt()"}</code> | Ends the attempt with a cancelled result and disposes the connection. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connectionapprovedbyserver" /><code>{"private void ConnectionApprovedByServer("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Once the socket connects, sends the join request with user ID, token, player mode, platform and version, and sets the response handlers. |
| <Link id="m-connectionsequence" /><code>{"private void ConnectionSequence("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Handles server status messages during prerequisites, showing them if they last more than 2s. |
| <Link id="m-connectiontoserverfailed" /><code>{"private void ConnectionToServerFailed("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Disconnect before approval: fails the attempt as connection failed at the end of receiving. |
| <Link id="m-connectiontoserverlost" /><code>{"private void ConnectionToServerLost("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Disconnect after approval: shows a message and fails the attempt as connection lost. |
| <Link id="m-disposeconnection" /><code>{"private void DisposeConnection()"}</code> | Disposes and clears `ConnectionToServer`. |
| <Link id="m-handleserverconnectionresponse" /><code>{"private void HandleServerConnectionResponse("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads the server's join response: stores joined server info while prerequisites run, succeeds when they finish, or rejects. |
| <Link id="m-onserverrejectedrequest" /><code>{"private void OnServerRejectedRequest("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/alta-networking/confirmjoinmessage">{"ConfirmJoinMessage"}</Link>{" joinMessage)"}</code> | Logs the rejection, fails the attempt with the server's reason and disposes the connection. |
| <Link id="m-showmessage" /><code>{"private void ShowMessage()"}</code> | Shows the last prerequisite message on the player's message display, or on the loading screen. |

</details>

## Used in

Members of other types that take, return or hold a `JoinServerPipeline`:

[`ConnectToServerUtility.joinServerPipeline`](/mod/game-api/types/alta-networking/connecttoserverutility#m-joinserverpipeline).
