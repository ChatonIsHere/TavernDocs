---
title: "DeepLinkAnalyticsService.DeepLinkEventCancelReason"
description: "Reasons a deep link join was cancelled: skipped for the tutorial, or the player was already on the server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeepLinkAnalyticsService.DeepLinkEventCancelReason

An **enum** in `Root.Township`, the global namespace.

Reasons a deep link join was cancelled: skipped for the tutorial, or the player was already on the server. Nothing uses this one in this build; `DeeplinkEventCancelReason` is the one passed to `CreateCancelEvent`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Nested in** [`DeepLinkAnalyticsService`](/mod/game-api/types/global-c-d/deeplinkanalyticsservice)

## Values

| Member |
| --- |
| <Link id="m-playerwasalreadyinserver" /><code>{"PlayerWasAlreadyInServer = 1"}</code> |
| <Link id="m-skippeddeeplinkfortutorial" /><code>{"SkippedDeepLinkForTutorial = 0"}</code> |

## Used in

Members of other types that take, return or hold a `DeepLinkEventCancelReason`:

[`DeepLinkAnalyticsService.CreateCancelEvent`](/mod/game-api/types/global-c-d/deeplinkanalyticsservice#m-createcancelevent-2), [`DeepLinkAnalyticsService.GetCancelReasonAsFormattedString`](/mod/game-api/types/global-c-d/deeplinkanalyticsservice#m-getcancelreasonasformattedstring-2).
