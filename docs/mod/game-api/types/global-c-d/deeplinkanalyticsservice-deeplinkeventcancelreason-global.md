---
title: "DeepLinkAnalyticsService.DeeplinkEventCancelReason"
description: "Reason passed to DeepLinkAnalyticsService.CreateCancelEvent when a deep link join is cancelled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeepLinkAnalyticsService.DeeplinkEventCancelReason

An **enum** in `Root.Township`, the global namespace.

Reason passed to `DeepLinkAnalyticsService.CreateCancelEvent` when a deep link join is cancelled. Only has the skipped-for-tutorial reason.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Nested in** [`DeepLinkAnalyticsService`](/mod/game-api/types/global-c-d/deeplinkanalyticsservice)

## Values

| Member |
| --- |
| <Link id="m-skippeddeeplinkfortutorial" /><code>{"SkippedDeepLinkForTutorial = 0"}</code> |

## Used in

Members of other types that take, return or hold a `DeeplinkEventCancelReason`:

[`DeepLinkAnalyticsService.CreateCancelEvent`](/mod/game-api/types/global-c-d/deeplinkanalyticsservice#m-createcancelevent), [`DeepLinkAnalyticsService.GetCancelReasonAsFormattedString`](/mod/game-api/types/global-c-d/deeplinkanalyticsservice#m-getcancelreasonasformattedstring).
