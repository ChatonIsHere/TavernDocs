---
title: "RecentPlayers"
description: "Client-only helpers and the recent-players console module (alias recent) for the recent players list, which is stored through the Alta API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecentPlayers

A **static class** in `Root.Township`, no namespace.

Client-only helpers and the `recent-players` console module (alias `recent`) for the recent players list, which is stored through the Alta API.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Attributes** `Extension`, `PlayOnly`, `ClientOnly`, `Module`, `Alias`

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for API errors. |
| <Link id="m-recentstatustime" /><code>{"private const string RecentStatusTime"}</code> | The text `a moment ago` used in status strings. |
| <Link id="m-voicechat" /><code>{"private static "}<Link to="/game-api/types/alta-networking/ivoicechat">{"IVoiceChat"}</Link>{" voiceChat"}</code> | Backing field for `VoiceChat`. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-voicechat-2" /><code>{"private static "}<Link to="/game-api/types/alta-networking/ivoicechat">{"IVoiceChat"}</Link>{" VoiceChat { get; }"}</code> | Voice chat service, resolved on first use, used to check mutes. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-friendlytext" /><code>{"static string FriendlyText("}<Link to="/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" type)"}</code> | Display text for a report reason. |
| <Link id="m-getallrecentplayerinteractions" /><code>{"static async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{">> GetAllRecentPlayerInteractions()"}</code> | Fetches all recent player interactions from the API. Returns empty on error. |
| <Link id="m-getfriendshiptype" /><code>{"static "}<Link to="/game-api/types/assembly-api-models/friendshiptype">{"FriendshipType"}</Link>{" GetFriendshipType("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> | The local player's friendship status with this recent player. |
| <Link id="m-getrecentplayerinteractionsforserver" /><code>{"static async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{">> GetRecentPlayerInteractionsForServer(int serverId)"}</code> | Fetches interactions for one server, or all of them for server -1. |
| <Link id="m-getstatustextapprox" /><code>{"static string GetStatusTextApprox("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> | Status text: offline with time since last seen, on the server, or nearby. |
| <Link id="m-hasbeenfriendrequestedbyme" /><code>{"static bool HasBeenFriendRequestedByMe("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> | True if the local player has sent this player a friend request. |
| <Link id="m-hasfriendshiprequestedme" /><code>{"static bool HasFriendshipRequestedMe("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> | True if this player has sent the local player a friend request. |
| <Link id="m-isfriend" /><code>{"static bool IsFriend("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> | True if the local player is friends with this player. |
| <Link id="m-ismuted" /><code>{"static bool IsMuted("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> | True if this player is muted in voice chat. |
| <Link id="m-recordinteraction" /><code>{"static async void RecordInteraction("}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" userInfo, "}<Link to="/game-api/types/assembly-api-models/recentplayerinteractiontype">{"RecentPlayerInteractionType"}</Link>{" interactionType)"}</code> | Records an interaction with another user through the API. Ignores the logged-in user. |
| <Link id="m-testrecordinteraction" /><code>{"static async Task TestRecordInteraction(string name, int id, int interactionType)"}</code> | Console command `test-record` (`tr`): records a test interaction with a made-up user. |
| <Link id="m-toprettyformat" /><code>{"static string ToPrettyFormat(TimeSpan span)"}</code> | Formats a time span as days, hours and minutes ago. |
| <Link id="m-toprettyformatapprox" /><code>{"static string ToPrettyFormatApprox(TimeSpan span)"}</code> | Formats a time span as its largest unit only, such as "3 hours ago". |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-querydbforinteractions" /><code>{"private static async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{">> QueryDbForInteractions(int? serverIdToCheck = null)"}</code> | Fetches recent player interactions from the API, for one server or all. Returns empty on error. |
| <Link id="m-timesince" /><code>{"private static TimeSpan TimeSince("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> | Time since the interaction happened, in UTC. |

</details>
