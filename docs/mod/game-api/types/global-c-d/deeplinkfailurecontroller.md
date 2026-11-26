---
title: "DeepLinkFailureController"
description: "Client: when a server join fails, shows an error popup and sends a fail analytics event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeepLinkFailureController

A **static class** in `Root.Township`, the global namespace.

Client: when a server join fails, shows an error popup and sends a fail analytics event. Used by `JoinedServerGameMode` and `OculusDeepLinkService`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boardtitle" /><code>{"private const string BoardTitle"}</code> | <span className="api-desc">Popup title, An Error Occurred.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger; unused here.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-displayerrormessageforjoinresult" /><code>{"static void DisplayErrorMessageForJoinResult("}<Link to="/mod/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" joinResult)"}</code> | <span className="api-desc">Maps the join result to a message and reason, sends the fail event with the Oculus server ID, and shows the popup.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-displaydefaultorspecificmessage" /><code>{"private static string DisplayDefaultOrSpecificMessage("}<Link to="/mod/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" clientJoinResult)"}</code> | <span className="api-desc">Returns the join result's error message, or a generic try-again message if it has none.</span> |
| <Link id="m-getfailreasonandmessage" /><code>{"private static void GetFailReasonAndMessage("}<Link to="/mod/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" joinResult, out string message, out "}<Link to="/mod/game-api/types/global-c-d/deeplinkeventfailreason">{"DeeplinkEventFailReason"}</Link>{" failReason)"}</code> | <span className="api-desc">Picks the message and fail reason for bans, wrong version and private servers; anything else counts as other error.</span> |

</details>
