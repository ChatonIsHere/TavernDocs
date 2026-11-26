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
| <Link id="m-ctor" /><code>{"JoinServerPipeline("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server, "}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> | <span className="api-desc">Creates a `JoinServerPipeline` from `server` and `socket`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connectioninfo" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" connectionInfo"}</code> | <span className="api-desc">Address and port from the API. Swapped for the local or loopback address when the server is on your own public IP.</span> |
| <Link id="m-isdisplayingprerequisitemessages" /><code>{"private bool isDisplayingPrerequisiteMessages"}</code> | <span className="api-desc">Whether prerequisite messages are being shown yet.</span> |
| <Link id="m-isdoingprerequisites" /><code>{"private bool isDoingPrerequisites"}</code> | <span className="api-desc">Whether the server has accepted and is still running prerequisites.</span> |
| <Link id="m-joinedinfo" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/joinedserverinfo">{"JoinedServerInfo"}</Link>{" joinedInfo"}</code> | <span className="api-desc">Joined server info from the server's first accepted response.</span> |
| <Link id="m-joinresult" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/serverjoinresult">{"ServerJoinResult"}</Link>{" joinResult"}</code> | <span className="api-desc">The API's join result, with the connection info and an optional join token.</span> |
| <Link id="m-lastprerequisitemessage" /><code>{"private string lastPrerequisiteMessage"}</code> | <span className="api-desc">The most recent server status message.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-socket" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket"}</code> | <span className="api-desc">The socket used to open the connection.</span> |
| <Link id="m-waitforserverresponse" /><code>{"private TaskCompletionSource<"}<Link to="/mod/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{"> waitForServerResponse"}</code> | <span className="api-desc">Completed with the final join result by whichever handler finishes first.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectiontoserver" /><code><Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" ConnectionToServer { get; private set; }"}</code> | <span className="api-desc">The connection being set up. Null until a connect succeeds or after disposal.</span> |
| <Link id="m-serverconnectingto" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" ServerConnectingTo { get; private set; }"}</code> | <span className="api-desc">The server being joined. Its identifier is updated from the API join result.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempttoconnecttoserver" /><code>{"async Task<"}<Link to="/mod/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{"> AttemptToConnectToServer()"}</code> | <span className="api-desc">Runs the whole join: API join check, connect (15 tries, 1s apart), wait for the server's answer, then clear the handlers.</span> |
| <Link id="m-cancelattempt" /><code>{"void CancelAttempt()"}</code> | <span className="api-desc">Ends the attempt with a cancelled result and disposes the connection.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connectionapprovedbyserver" /><code>{"private void ConnectionApprovedByServer("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Once the socket connects, sends the join request with user ID, token, player mode, platform and version, and sets the response handlers.</span> |
| <Link id="m-connectionsequence" /><code>{"private void ConnectionSequence("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Handles server status messages during prerequisites, showing them if they last more than 2s.</span> |
| <Link id="m-connectiontoserverfailed" /><code>{"private void ConnectionToServerFailed("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Disconnect before approval: fails the attempt as connection failed at the end of receiving.</span> |
| <Link id="m-connectiontoserverlost" /><code>{"private void ConnectionToServerLost("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Disconnect after approval: shows a message and fails the attempt as connection lost.</span> |
| <Link id="m-disposeconnection" /><code>{"private void DisposeConnection()"}</code> | <span className="api-desc">Disposes and clears `ConnectionToServer`.</span> |
| <Link id="m-handleserverconnectionresponse" /><code>{"private void HandleServerConnectionResponse("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads the server's join response: stores joined server info while prerequisites run, succeeds when they finish, or rejects.</span> |
| <Link id="m-onserverrejectedrequest" /><code>{"private void OnServerRejectedRequest("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/alta-networking/confirmjoinmessage">{"ConfirmJoinMessage"}</Link>{" joinMessage)"}</code> | <span className="api-desc">Logs the rejection, fails the attempt with the server's reason and disposes the connection.</span> |
| <Link id="m-showmessage" /><code>{"private void ShowMessage()"}</code> | <span className="api-desc">Shows the last prerequisite message on the player's message display, or on the loading screen.</span> |

</details>

## Used in

Members of other types that take, return or hold a `JoinServerPipeline`:

<div className="api-used-in">

[`ConnectToServerUtility.joinServerPipeline`](/mod/game-api/types/alta-networking/connecttoserverutility#m-joinserverpipeline).

</div>
