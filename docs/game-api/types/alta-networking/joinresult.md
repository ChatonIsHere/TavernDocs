---
title: "JoinResult"
description: "class JoinResult in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinResult

A **class** in `Root.Township`, `Alta.Networking.Servers`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JoinResult()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectiontoserver" /><code><Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" ConnectionToServer { get; private set; }"}</code> |  |
| <Link id="m-errormessage" /><code>{"string ErrorMessage { get; }"}</code> |  |
| <Link id="m-isrecoverablefailure" /><code>{"bool IsRecoverableFailure { get; }"}</code> |  |
| <Link id="m-message" /><code>{"string Message { get; private set; }"}</code> |  |
| <Link id="m-result" /><code><Link to="/game-api/types/global-c-d/clientjoinresult">{"ClientJoinResult"}</Link>{" Result { get; private set; }"}</code> |  |
| <Link id="m-serverinfo" /><code><Link to="/game-api/types/alta-networking/joinedserverinfo">{"JoinedServerInfo"}</Link>{" ServerInfo { get; private set; }"}</code> |  |
| <Link id="m-wassuccessful" /><code>{"bool WasSuccessful { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-failedresult" /><code>{"static "}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" FailedResult("}<Link to="/game-api/types/global-c-d/clientjoinresult">{"ClientJoinResult"}</Link>{" result, string message = null)"}</code> |  |
| <Link id="m-successresult" /><code>{"static "}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" SuccessResult("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connectionToServer, "}<Link to="/game-api/types/alta-networking/joinedserverinfo">{"JoinedServerInfo"}</Link>{" serverInfo)"}</code> |  |

## Used in

Members of other types that take, return or hold a `JoinResult`:

[`ConnectToServerUtility.ConnectToServer`](/game-api/types/alta-networking/connecttoserverutility#m-connecttoserver), [`ConnectToServerUtility.HandleConnectionResultToServer`](/game-api/types/alta-networking/connecttoserverutility#m-handleconnectionresulttoserver), [`DeepLinkFailureController.DisplayDefaultOrSpecificMessage`](/game-api/types/global-c-d/deeplinkfailurecontroller#m-displaydefaultorspecificmessage), [`DeepLinkFailureController.DisplayErrorMessageForJoinResult`](/game-api/types/global-c-d/deeplinkfailurecontroller#m-displayerrormessageforjoinresult), [`DeepLinkFailureController.GetFailReasonAndMessage`](/game-api/types/global-c-d/deeplinkfailurecontroller#m-getfailreasonandmessage), [`JoinedServerGameMode.ConnectToServer`](/game-api/types/global-i-l/joinedservergamemode#m-connecttoserver), [`JoinedServerGameMode.LoadGameScene`](/game-api/types/global-i-l/joinedservergamemode#m-loadgamescene), [`JoinedServerGameMode.ReturnToMainMenuOnFailure`](/game-api/types/global-i-l/joinedservergamemode#m-returntomainmenuonfailure), [`JoinServerGameModeBase.SetupClientScene`](/game-api/types/global-i-l/joinservergamemodebase#m-setupclientscene), [`JoinServerPipeline.AttemptToConnectToServer`](/game-api/types/global-i-l/joinserverpipeline#m-attempttoconnecttoserver), [`JoinServerPipeline.waitForServerResponse`](/game-api/types/global-i-l/joinserverpipeline#m-waitforserverresponse).
