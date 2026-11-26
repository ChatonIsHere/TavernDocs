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
| <Link id="m-ctor" /><code>{"DeepLinkAnalyticsService()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>23 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancelreasonkey" /><code>{"private const string CancelReasonKey"}</code> | <span className="api-desc">Event field name for the cancel reason.</span> |
| <Link id="m-deeplinkcancelkey" /><code>{"private const string DeepLinkCancelKey"}</code> | <span className="api-desc">Event name for a cancelled deep link.</span> |
| <Link id="m-deeplinkfailkey" /><code>{"private const string DeepLinkFailKey"}</code> | <span className="api-desc">Event name for a failed deep link.</span> |
| <Link id="m-deeplinkjoinkey" /><code>{"private const string DeepLinkJoinKey"}</code> | <span className="api-desc">Event name for a successful deep-link join.</span> |
| <Link id="m-deeplinkstartkey" /><code>{"private const string DeepLinkStartKey"}</code> | <span className="api-desc">Event name for a deep link starting.</span> |
| <Link id="m-eventdata" /><code>{"private static readonly Dictionary<string, object> eventData"}</code> | <span className="api-desc">Fields for the event being built; cleared after each send.</span> |
| <Link id="m-failreasonkey" /><code>{"private const string FailReasonKey"}</code> | <span className="api-desc">Event field name for the fail reason.</span> |
| <Link id="m-firsttimeplayerkey" /><code>{"private const string FirstTimePlayerKey"}</code> | <span className="api-desc">Event field name for the first-time player flag.</span> |
| <Link id="m-insideserverkey" /><code>{"private const string InsideServerKey"}</code> | <span className="api-desc">Join source text when the player was in a game scene.</span> |
| <Link id="m-isfirsttimeplayer" /><code>{"private static bool isFirstTimePlayer"}</code> | <span className="api-desc">Set by `SetFirstTimePlayer`, cleared after any event is sent.</span> |
| <Link id="m-joinsourcekey" /><code>{"private const string JoinSourceKey"}</code> | <span className="api-desc">Event field name for the join source.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for send failures.</span> |
| <Link id="m-mainmenukey" /><code>{"private const string MainMenuKey"}</code> | <span className="api-desc">Join source text when the player was in the menu scene.</span> |
| <Link id="m-oculusid" /><code>{"private static string oculusId"}</code> | <span className="api-desc">Cached Oculus user ID sent with every event.</span> |
| <Link id="m-othererrorkey" /><code>{"private const string OtherErrorKey"}</code> | <span className="api-desc">Fail reason text for any other error.</span> |
| <Link id="m-outsidegamekey" /><code>{"private const string OutsideGameKey"}</code> | <span className="api-desc">Join source text for any other scene.</span> |
| <Link id="m-playerbannedkey" /><code>{"private const string PlayerBannedKey"}</code> | <span className="api-desc">Fail reason text for a ban.</span> |
| <Link id="m-playerwasalreadyinserverkey" /><code>{"private const string PlayerWasAlreadyInServerKey"}</code> | <span className="api-desc">Cancel reason text when the player was already on that server.</span> |
| <Link id="m-privateserverkey" /><code>{"private const string PrivateServerKey"}</code> | <span className="api-desc">Fail reason text for a private server.</span> |
| <Link id="m-serverfullkey" /><code>{"private const string ServerFullKey"}</code> | <span className="api-desc">Fail reason text for a full server.</span> |
| <Link id="m-serveridkey" /><code>{"private const string ServerIdKey"}</code> | <span className="api-desc">Event field name for the server ID.</span> |
| <Link id="m-skippeddeeplinkfortutorialkey" /><code>{"private const string SkippedDeepLinkForTutorialKey"}</code> | <span className="api-desc">Cancel reason text when the tutorial was done first.</span> |
| <Link id="m-wrongversionkey" /><code>{"private const string WrongVersionKey"}</code> | <span className="api-desc">Fail reason text for a version mismatch.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createcancelevent" /><code>{"static void CreateCancelEvent("}<Link to="/mod/game-api/types/global-c-d/deeplinkanalyticsservice-deeplinkeventcancelreason-global">{"DeepLinkAnalyticsService.DeeplinkEventCancelReason"}</Link>{" cancelReason)"}</code> | <span className="api-desc">Sends a cancel event with the reason as text. Two overloads for the two cancel reason enums.</span> |
| <Link id="m-createcancelevent-2" /><code>{"static void CreateCancelEvent("}<Link to="/mod/game-api/types/global-c-d/deeplinkanalyticsservice-deeplinkeventcancelreason">{"DeepLinkAnalyticsService.DeepLinkEventCancelReason"}</Link>{" cancelReason)"}</code> | <span className="api-desc">Sends a cancel event with the reason as text. Two overloads for the two cancel reason enums.</span> |
| <Link id="m-createfailevent" /><code>{"static void CreateFailEvent("}<Link to="/mod/game-api/types/global-c-d/deeplinkeventfailreason">{"DeeplinkEventFailReason"}</Link>{" failReason, int? serverId)"}</code> | <span className="api-desc">Sends a fail event with the reason as text and the server ID.</span> |
| <Link id="m-createjoinevent" /><code>{"static void CreateJoinEvent(int? serverId)"}</code> | <span className="api-desc">Sends a join event with the server ID and whether this is a first-time player.</span> |
| <Link id="m-createstartevent" /><code>{"static void CreateStartEvent()"}</code> | <span className="api-desc">Sends a start event saying where the link was opened: main menu, inside a server, or outside the game.</span> |
| <Link id="m-setfirsttimeplayer" /><code>{"static void SetFirstTimePlayer()"}</code> | <span className="api-desc">Marks the next event as from a first-time player.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createdeeplinkevent" /><code>{"private static async void CreateDeepLinkEvent(string eventTypeKey, int? serverId)"}</code> | <span className="api-desc">Gets the Oculus ID once, adds the server ID, posts the event, then clears the data and the first-time flag.</span> |
| <Link id="m-getcancelreasonasformattedstring" /><code>{"private static string GetCancelReasonAsFormattedString("}<Link to="/mod/game-api/types/global-c-d/deeplinkanalyticsservice-deeplinkeventcancelreason-global">{"DeepLinkAnalyticsService.DeeplinkEventCancelReason"}</Link>{" cancelReason)"}</code> | <span className="api-desc">Turns a cancel reason into its readable text. Throws on unknown values.</span> |
| <Link id="m-getcancelreasonasformattedstring-2" /><code>{"private static string GetCancelReasonAsFormattedString("}<Link to="/mod/game-api/types/global-c-d/deeplinkanalyticsservice-deeplinkeventcancelreason">{"DeepLinkAnalyticsService.DeepLinkEventCancelReason"}</Link>{" cancelReason)"}</code> | <span className="api-desc">Turns a cancel reason into its readable text. Throws on unknown values.</span> |
| <Link id="m-getfailreasonasformattedstring" /><code>{"private static string GetFailReasonAsFormattedString("}<Link to="/mod/game-api/types/global-c-d/deeplinkeventfailreason">{"DeeplinkEventFailReason"}</Link>{" failReason)"}</code> | <span className="api-desc">Turns a fail reason into its readable text. Throws on unknown values.</span> |
| <Link id="m-getjoinsourceasformattedstring" /><code>{"private static string GetJoinSourceAsFormattedString(string joinSceneName)"}</code> | <span className="api-desc">Maps the active scene name to main menu, inside server or outside game.</span> |

</details>
