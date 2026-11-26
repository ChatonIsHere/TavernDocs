---
title: "DeepLinkAnalyticsService"
description: "Client: sends Oculus deep-link analytics events (start, join, fail, cancel) to the Alta API with the player's Oculus ID."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeepLinkAnalyticsService

A **class** in `Root.Township`, the global namespace.

Client: sends Oculus deep-link analytics events (start, join, fail, cancel) to the Alta API with the player's Oculus ID. All static; failures are logged and ignored.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`DeepLinkEventCancelReason`](/mod/game-api/types/global-c-d/deeplinkanalyticsservice-deeplinkeventcancelreason), [`DeeplinkEventCancelReason`](/mod/game-api/types/global-c-d/deeplinkanalyticsservice-deeplinkeventcancelreason-global)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeepLinkAnalyticsService()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>23 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancelreasonkey" /><code>{"private const string CancelReasonKey"}</code> | Event field name for the cancel reason. |
| <Link id="m-deeplinkcancelkey" /><code>{"private const string DeepLinkCancelKey"}</code> | Event name for a cancelled deep link. |
| <Link id="m-deeplinkfailkey" /><code>{"private const string DeepLinkFailKey"}</code> | Event name for a failed deep link. |
| <Link id="m-deeplinkjoinkey" /><code>{"private const string DeepLinkJoinKey"}</code> | Event name for a successful deep-link join. |
| <Link id="m-deeplinkstartkey" /><code>{"private const string DeepLinkStartKey"}</code> | Event name for a deep link starting. |
| <Link id="m-eventdata" /><code>{"private static readonly Dictionary<string, object> eventData"}</code> | Fields for the event being built; cleared after each send. |
| <Link id="m-failreasonkey" /><code>{"private const string FailReasonKey"}</code> | Event field name for the fail reason. |
| <Link id="m-firsttimeplayerkey" /><code>{"private const string FirstTimePlayerKey"}</code> | Event field name for the first-time player flag. |
| <Link id="m-insideserverkey" /><code>{"private const string InsideServerKey"}</code> | Join source text when the player was in a game scene. |
| <Link id="m-isfirsttimeplayer" /><code>{"private static bool isFirstTimePlayer"}</code> | Set by `SetFirstTimePlayer`, cleared after any event is sent. |
| <Link id="m-joinsourcekey" /><code>{"private const string JoinSourceKey"}</code> | Event field name for the join source. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for send failures. |
| <Link id="m-mainmenukey" /><code>{"private const string MainMenuKey"}</code> | Join source text when the player was in the menu scene. |
| <Link id="m-oculusid" /><code>{"private static string oculusId"}</code> | Cached Oculus user ID sent with every event. |
| <Link id="m-othererrorkey" /><code>{"private const string OtherErrorKey"}</code> | Fail reason text for any other error. |
| <Link id="m-outsidegamekey" /><code>{"private const string OutsideGameKey"}</code> | Join source text for any other scene. |
| <Link id="m-playerbannedkey" /><code>{"private const string PlayerBannedKey"}</code> | Fail reason text for a ban. |
| <Link id="m-playerwasalreadyinserverkey" /><code>{"private const string PlayerWasAlreadyInServerKey"}</code> | Cancel reason text when the player was already on that server. |
| <Link id="m-privateserverkey" /><code>{"private const string PrivateServerKey"}</code> | Fail reason text for a private server. |
| <Link id="m-serverfullkey" /><code>{"private const string ServerFullKey"}</code> | Fail reason text for a full server. |
| <Link id="m-serveridkey" /><code>{"private const string ServerIdKey"}</code> | Event field name for the server ID. |
| <Link id="m-skippeddeeplinkfortutorialkey" /><code>{"private const string SkippedDeepLinkForTutorialKey"}</code> | Cancel reason text when the tutorial was done first. |
| <Link id="m-wrongversionkey" /><code>{"private const string WrongVersionKey"}</code> | Fail reason text for a version mismatch. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createcancelevent" /><code>{"static void CreateCancelEvent("}<Link to="/mod/game-api/types/global-c-d/deeplinkanalyticsservice-deeplinkeventcancelreason-global">{"DeepLinkAnalyticsService.DeeplinkEventCancelReason"}</Link>{" cancelReason)"}</code> | Sends a cancel event with the reason as text. Two overloads for the two cancel reason enums. |
| <Link id="m-createcancelevent-2" /><code>{"static void CreateCancelEvent("}<Link to="/mod/game-api/types/global-c-d/deeplinkanalyticsservice-deeplinkeventcancelreason">{"DeepLinkAnalyticsService.DeepLinkEventCancelReason"}</Link>{" cancelReason)"}</code> | Sends a cancel event with the reason as text. Two overloads for the two cancel reason enums. |
| <Link id="m-createfailevent" /><code>{"static void CreateFailEvent("}<Link to="/mod/game-api/types/global-c-d/deeplinkeventfailreason">{"DeeplinkEventFailReason"}</Link>{" failReason, int? serverId)"}</code> | Sends a fail event with the reason as text and the server ID. |
| <Link id="m-createjoinevent" /><code>{"static void CreateJoinEvent(int? serverId)"}</code> | Sends a join event with the server ID and whether this is a first-time player. |
| <Link id="m-createstartevent" /><code>{"static void CreateStartEvent()"}</code> | Sends a start event saying where the link was opened: main menu, inside a server, or outside the game. |
| <Link id="m-setfirsttimeplayer" /><code>{"static void SetFirstTimePlayer()"}</code> | Marks the next event as from a first-time player. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createdeeplinkevent" /><code>{"private static async void CreateDeepLinkEvent(string eventTypeKey, int? serverId)"}</code> | Gets the Oculus ID once, adds the server ID, posts the event, then clears the data and the first-time flag. |
| <Link id="m-getcancelreasonasformattedstring" /><code>{"private static string GetCancelReasonAsFormattedString("}<Link to="/mod/game-api/types/global-c-d/deeplinkanalyticsservice-deeplinkeventcancelreason-global">{"DeepLinkAnalyticsService.DeeplinkEventCancelReason"}</Link>{" cancelReason)"}</code> | Turns a cancel reason into its readable text. Throws on unknown values. |
| <Link id="m-getcancelreasonasformattedstring-2" /><code>{"private static string GetCancelReasonAsFormattedString("}<Link to="/mod/game-api/types/global-c-d/deeplinkanalyticsservice-deeplinkeventcancelreason">{"DeepLinkAnalyticsService.DeepLinkEventCancelReason"}</Link>{" cancelReason)"}</code> | Turns a cancel reason into its readable text. Throws on unknown values. |
| <Link id="m-getfailreasonasformattedstring" /><code>{"private static string GetFailReasonAsFormattedString("}<Link to="/mod/game-api/types/global-c-d/deeplinkeventfailreason">{"DeeplinkEventFailReason"}</Link>{" failReason)"}</code> | Turns a fail reason into its readable text. Throws on unknown values. |
| <Link id="m-getjoinsourceasformattedstring" /><code>{"private static string GetJoinSourceAsFormattedString(string joinSceneName)"}</code> | Maps the active scene name to main menu, inside server or outside game. |

</details>
