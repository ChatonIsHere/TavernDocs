---
title: "DeeplinkEventFailReason"
description: "Why joining a server from a deeplink failed: server full, banned, private server, wrong version or another error."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeeplinkEventFailReason

An **enum** in `Root.Township`, the global namespace.

Why joining a server from a deeplink failed: server full, banned, private server, wrong version or another error.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Values

| Member |
| --- |
| <Link id="m-banned" /><code>{"Banned = 1"}</code> |
| <Link id="m-othererror" /><code>{"OtherError = 4"}</code> |
| <Link id="m-privateserver" /><code>{"PrivateServer = 2"}</code> |
| <Link id="m-serverfull" /><code>{"ServerFull = 0"}</code> |
| <Link id="m-wrongversion" /><code>{"WrongVersion = 3"}</code> |

## Used in

Members of other types that take, return or hold a `DeeplinkEventFailReason`:

<div className="api-used-in">

[`DeepLinkAnalyticsService.CreateFailEvent`](/mod/game-api/types/global-c-d/deeplinkanalyticsservice#m-createfailevent), [`DeepLinkAnalyticsService.GetFailReasonAsFormattedString`](/mod/game-api/types/global-c-d/deeplinkanalyticsservice#m-getfailreasonasformattedstring), [`DeepLinkFailureController.GetFailReasonAndMessage`](/mod/game-api/types/global-c-d/deeplinkfailurecontroller#m-getfailreasonandmessage).

</div>
