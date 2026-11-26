---
title: "RecentPlayers"
description: "Client-only helpers and the recent-players console module (alias recent) for the recent players list, which is stored through the Alta API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecentPlayers

A **static class** in `Root.Township`, the global namespace.

Client-only helpers and the `recent-players` console module (alias `recent`) for the recent players list, which is stored through the Alta API.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Attributes** `Extension`, `PlayOnly`, `ClientOnly`, `Module`, `Alias`

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for API errors.</span> |
| <Link id="m-recentstatustime" /><code>{"private const string RecentStatusTime"}</code> | <span className="api-desc">The text `a moment ago` used in status strings.</span> |
| <Link id="m-voicechat" /><code>{"private static "}<Link to="/mod/game-api/types/alta-networking/ivoicechat">{"IVoiceChat"}</Link>{" voiceChat"}</code> | <span className="api-desc">Backing field for `VoiceChat`.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-voicechat-2" /><code>{"private static "}<Link to="/mod/game-api/types/alta-networking/ivoicechat">{"IVoiceChat"}</Link>{" VoiceChat { get; }"}</code> | <span className="api-desc">Voice chat service, resolved on first use, used to check mutes.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-friendlytext" /><code>{"static string FriendlyText("}<Link to="/mod/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" type)"}</code> | <span className="api-desc">Display text for a report reason.</span> |
| <Link id="m-getallrecentplayerinteractions" /><code>{"static async Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{">> GetAllRecentPlayerInteractions()"}</code> | <span className="api-desc">Fetches all recent player interactions from the API. Returns empty on error.</span> |
| <Link id="m-getfriendshiptype" /><code>{"static "}<Link to="/mod/game-api/types/assembly-api-models/friendshiptype">{"FriendshipType"}</Link>{" GetFriendshipType("}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> | <span className="api-desc">The local player's friendship status with this recent player.</span> |
| <Link id="m-getrecentplayerinteractionsforserver" /><code>{"static async Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{">> GetRecentPlayerInteractionsForServer(int serverId)"}</code> | <span className="api-desc">Fetches interactions for one server, or all of them for server -1.</span> |
| <Link id="m-getstatustextapprox" /><code>{"static string GetStatusTextApprox("}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> | <span className="api-desc">Status text: offline with time since last seen, on the server, or nearby.</span> |
| <Link id="m-hasbeenfriendrequestedbyme" /><code>{"static bool HasBeenFriendRequestedByMe("}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> | <span className="api-desc">True if the local player has sent this player a friend request.</span> |
| <Link id="m-hasfriendshiprequestedme" /><code>{"static bool HasFriendshipRequestedMe("}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> | <span className="api-desc">True if this player has sent the local player a friend request.</span> |
| <Link id="m-isfriend" /><code>{"static bool IsFriend("}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> | <span className="api-desc">True if the local player is friends with this player.</span> |
| <Link id="m-ismuted" /><code>{"static bool IsMuted("}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> | <span className="api-desc">True if this player is muted in voice chat.</span> |
| <Link id="m-recordinteraction" /><code>{"static async void RecordInteraction("}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" userInfo, "}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractiontype">{"RecentPlayerInteractionType"}</Link>{" interactionType)"}</code> | <span className="api-desc">Records an interaction with another user through the API. Ignores the logged-in user.</span> |
| <Link id="m-testrecordinteraction" /><code>{"static async Task TestRecordInteraction(string name, int id, int interactionType)"}</code> | <span className="api-desc">Console command `test-record` (`tr`): records a test interaction with a made-up user.</span> |
| <Link id="m-toprettyformat" /><code>{"static string ToPrettyFormat(TimeSpan span)"}</code> | <span className="api-desc">Formats a time span as days, hours and minutes ago.</span> |
| <Link id="m-toprettyformatapprox" /><code>{"static string ToPrettyFormatApprox(TimeSpan span)"}</code> | <span className="api-desc">Formats a time span as its largest unit only, such as "3 hours ago".</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-querydbforinteractions" /><code>{"private static async Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{">> QueryDbForInteractions(int? serverIdToCheck = null)"}</code> | <span className="api-desc">Fetches recent player interactions from the API, for one server or all. Returns empty on error.</span> |
| <Link id="m-timesince" /><code>{"private static TimeSpan TimeSince("}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> | <span className="api-desc">Time since the interaction happened, in UTC.</span> |

</details>
