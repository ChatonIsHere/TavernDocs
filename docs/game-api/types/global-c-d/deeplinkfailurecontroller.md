---
title: "DeepLinkFailureController"
description: "Client: when a server join fails, shows an error popup and sends a fail analytics event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeepLinkFailureController

A **static class** in `Root.Township`, no namespace.

Client: when a server join fails, shows an error popup and sends a fail analytics event. Used by `JoinedServerGameMode` and `OculusDeepLinkService`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boardtitle" /><code>{"private const string BoardTitle"}</code> | Popup title, An Error Occurred. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger; unused here. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-displayerrormessageforjoinresult" /><code>{"static void DisplayErrorMessageForJoinResult("}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" joinResult)"}</code> | Maps the join result to a message and reason, sends the fail event with the Oculus server ID, and shows the popup. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-displaydefaultorspecificmessage" /><code>{"private static string DisplayDefaultOrSpecificMessage("}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" clientJoinResult)"}</code> | Returns the join result's error message, or a generic try-again message if it has none. |
| <Link id="m-getfailreasonandmessage" /><code>{"private static void GetFailReasonAndMessage("}<Link to="/game-api/types/alta-networking/joinresult">{"JoinResult"}</Link>{" joinResult, out string message, out "}<Link to="/game-api/types/global-c-d/deeplinkeventfailreason">{"DeeplinkEventFailReason"}</Link>{" failReason)"}</code> | Picks the message and fail reason for bans, wrong version and private servers; anything else counts as other error. |

</details>
