---
title: "DeepLinkAnalyticsService"
description: "class DeepLinkAnalyticsService in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeepLinkAnalyticsService

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`DeepLinkEventCancelReason`](/game-api/types/global-c-d/deeplinkanalyticsservice-deeplinkeventcancelreason), [`DeeplinkEventCancelReason`](/game-api/types/global-c-d/deeplinkanalyticsservice-deeplinkeventcancelreason-global)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DeepLinkAnalyticsService()"}</code> |

## Fields

<details>
<summary>23 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-cancelreasonkey" /><code>{"private const string CancelReasonKey"}</code> |
| <Link id="m-deeplinkcancelkey" /><code>{"private const string DeepLinkCancelKey"}</code> |
| <Link id="m-deeplinkfailkey" /><code>{"private const string DeepLinkFailKey"}</code> |
| <Link id="m-deeplinkjoinkey" /><code>{"private const string DeepLinkJoinKey"}</code> |
| <Link id="m-deeplinkstartkey" /><code>{"private const string DeepLinkStartKey"}</code> |
| <Link id="m-eventdata" /><code>{"private static readonly Dictionary<string, object> eventData"}</code> |
| <Link id="m-failreasonkey" /><code>{"private const string FailReasonKey"}</code> |
| <Link id="m-firsttimeplayerkey" /><code>{"private const string FirstTimePlayerKey"}</code> |
| <Link id="m-insideserverkey" /><code>{"private const string InsideServerKey"}</code> |
| <Link id="m-isfirsttimeplayer" /><code>{"private static bool isFirstTimePlayer"}</code> |
| <Link id="m-joinsourcekey" /><code>{"private const string JoinSourceKey"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-mainmenukey" /><code>{"private const string MainMenuKey"}</code> |
| <Link id="m-oculusid" /><code>{"private static string oculusId"}</code> |
| <Link id="m-othererrorkey" /><code>{"private const string OtherErrorKey"}</code> |
| <Link id="m-outsidegamekey" /><code>{"private const string OutsideGameKey"}</code> |
| <Link id="m-playerbannedkey" /><code>{"private const string PlayerBannedKey"}</code> |
| <Link id="m-playerwasalreadyinserverkey" /><code>{"private const string PlayerWasAlreadyInServerKey"}</code> |
| <Link id="m-privateserverkey" /><code>{"private const string PrivateServerKey"}</code> |
| <Link id="m-serverfullkey" /><code>{"private const string ServerFullKey"}</code> |
| <Link id="m-serveridkey" /><code>{"private const string ServerIdKey"}</code> |
| <Link id="m-skippeddeeplinkfortutorialkey" /><code>{"private const string SkippedDeepLinkForTutorialKey"}</code> |
| <Link id="m-wrongversionkey" /><code>{"private const string WrongVersionKey"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-createcancelevent" /><code>{"static void CreateCancelEvent("}<Link to="/game-api/types/global-c-d/deeplinkanalyticsservice-deeplinkeventcancelreason-global">{"DeepLinkAnalyticsService.DeeplinkEventCancelReason"}</Link>{" cancelReason)"}</code> |
| <Link id="m-createcancelevent-2" /><code>{"static void CreateCancelEvent("}<Link to="/game-api/types/global-c-d/deeplinkanalyticsservice-deeplinkeventcancelreason">{"DeepLinkAnalyticsService.DeepLinkEventCancelReason"}</Link>{" cancelReason)"}</code> |
| <Link id="m-createfailevent" /><code>{"static void CreateFailEvent("}<Link to="/game-api/types/global-c-d/deeplinkeventfailreason">{"DeeplinkEventFailReason"}</Link>{" failReason, int? serverId)"}</code> |
| <Link id="m-createjoinevent" /><code>{"static void CreateJoinEvent(int? serverId)"}</code> |
| <Link id="m-createstartevent" /><code>{"static void CreateStartEvent()"}</code> |
| <Link id="m-setfirsttimeplayer" /><code>{"static void SetFirstTimePlayer()"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-createdeeplinkevent" /><code>{"private static async void CreateDeepLinkEvent(string eventTypeKey, int? serverId)"}</code> |
| <Link id="m-getcancelreasonasformattedstring" /><code>{"private static string GetCancelReasonAsFormattedString("}<Link to="/game-api/types/global-c-d/deeplinkanalyticsservice-deeplinkeventcancelreason-global">{"DeepLinkAnalyticsService.DeeplinkEventCancelReason"}</Link>{" cancelReason)"}</code> |
| <Link id="m-getcancelreasonasformattedstring-2" /><code>{"private static string GetCancelReasonAsFormattedString("}<Link to="/game-api/types/global-c-d/deeplinkanalyticsservice-deeplinkeventcancelreason">{"DeepLinkAnalyticsService.DeepLinkEventCancelReason"}</Link>{" cancelReason)"}</code> |
| <Link id="m-getfailreasonasformattedstring" /><code>{"private static string GetFailReasonAsFormattedString("}<Link to="/game-api/types/global-c-d/deeplinkeventfailreason">{"DeeplinkEventFailReason"}</Link>{" failReason)"}</code> |
| <Link id="m-getjoinsourceasformattedstring" /><code>{"private static string GetJoinSourceAsFormattedString(string joinSceneName)"}</code> |

</details>
