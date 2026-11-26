---
title: "JoinResult"
description: "Client: the outcome of trying to join a server, with a player-facing message for each failure."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinResult

A **class** in `Root.Township`, `Alta.Networking.Servers`.

Client: the outcome of trying to join a server, with a player-facing message for each failure.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JoinResult()"}</code> | <span className="api-desc">Creates a `JoinResult` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectiontoserver" /><code><Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" ConnectionToServer { get; private set; }"}</code> | <span className="api-desc">The connection on success.</span> |
| <Link id="m-errormessage" /><code>{"string ErrorMessage { get; }"}</code> | <span className="api-desc">The text shown to the player for this result.</span> |
| <Link id="m-isrecoverablefailure" /><code>{"bool IsRecoverableFailure { get; }"}</code> | <span className="api-desc">True for results worth retrying, such as the server starting up, lost connection or busy.</span> |
| <Link id="m-message" /><code>{"string Message { get; private set; }"}</code> | <span className="api-desc">Extra message passed with a failure.</span> |
| <Link id="m-result" /><code><Link to="/mod/game-api/types/global-c-d/clientjoinresult">{"ClientJoinResult"}</Link>{" Result { get; private set; }"}</code> | <span className="api-desc">The join result code.</span> |
| <Link id="m-serverinfo" /><code><Link to="/mod/game-api/types/alta-networking/joinedserverinfo">{"JoinedServerInfo"}</Link>{" ServerInfo { get; private set; }"}</code> | <span className="api-desc">Info about the joined server on success.</span> |
| <Link id="m-wassuccessful" /><code>{"bool WasSuccessful { get; private set; }"}</code> | <span className="api-desc">True if the join worked.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-failedresult" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" FailedResult("}<Link to="/mod/game-api/types/global-c-d/clientjoinresult">{"ClientJoinResult"}</Link>{" result, string message = null)"}</code> | <span className="api-desc">Makes a failed result with a code and optional message.</span> |
| <Link id="m-successresult" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" SuccessResult("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connectionToServer, "}<Link to="/mod/game-api/types/alta-networking/joinedserverinfo">{"JoinedServerInfo"}</Link>{" serverInfo)"}</code> | <span className="api-desc">Makes a successful result with the connection and server info.</span> |

## Used in

Members of other types that take, return or hold a `JoinResult`:

<div className="api-used-in">

[`ConnectToServerUtility.ConnectToServer`](/mod/game-api/types/alta-networking/connecttoserverutility#m-connecttoserver), [`ConnectToServerUtility.HandleConnectionResultToServer`](/mod/game-api/types/alta-networking/connecttoserverutility#m-handleconnectionresulttoserver), [`DeepLinkFailureController.DisplayDefaultOrSpecificMessage`](/mod/game-api/types/global-c-d/deeplinkfailurecontroller#m-displaydefaultorspecificmessage), [`DeepLinkFailureController.DisplayErrorMessageForJoinResult`](/mod/game-api/types/global-c-d/deeplinkfailurecontroller#m-displayerrormessageforjoinresult), [`DeepLinkFailureController.GetFailReasonAndMessage`](/mod/game-api/types/global-c-d/deeplinkfailurecontroller#m-getfailreasonandmessage), [`JoinedServerGameMode.ConnectToServer`](/mod/game-api/types/global-i-l/joinedservergamemode#m-connecttoserver), [`JoinedServerGameMode.LoadGameScene`](/mod/game-api/types/global-i-l/joinedservergamemode#m-loadgamescene), [`JoinedServerGameMode.ReturnToMainMenuOnFailure`](/mod/game-api/types/global-i-l/joinedservergamemode#m-returntomainmenuonfailure), [`JoinServerGameModeBase.SetupClientScene`](/mod/game-api/types/global-i-l/joinservergamemodebase#m-setupclientscene), [`JoinServerPipeline.AttemptToConnectToServer`](/mod/game-api/types/global-i-l/joinserverpipeline#m-attempttoconnecttoserver), [`JoinServerPipeline.waitForServerResponse`](/mod/game-api/types/global-i-l/joinserverpipeline#m-waitforserverresponse).

</div>
