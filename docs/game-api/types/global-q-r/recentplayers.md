---
title: "RecentPlayers"
description: "static class RecentPlayers in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecentPlayers

A **static class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Attributes** `Extension`, `PlayOnly`, `ClientOnly`, `Module`, `Alias`

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-recentstatustime" /><code>{"private const string RecentStatusTime"}</code> |  |
| <Link id="m-voicechat" /><code>{"private static "}<Link to="/game-api/types/alta-networking/ivoicechat">{"IVoiceChat"}</Link>{" voiceChat"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-voicechat-2" /><code>{"private static "}<Link to="/game-api/types/alta-networking/ivoicechat">{"IVoiceChat"}</Link>{" VoiceChat { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-friendlytext" /><code>{"static string FriendlyText("}<Link to="/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" type)"}</code> |  |
| <Link id="m-getallrecentplayerinteractions" /><code>{"static async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{">> GetAllRecentPlayerInteractions()"}</code> |  |
| <Link id="m-getfriendshiptype" /><code>{"static "}<Link to="/game-api/types/assembly-api-models/friendshiptype">{"FriendshipType"}</Link>{" GetFriendshipType("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> |  |
| <Link id="m-getrecentplayerinteractionsforserver" /><code>{"static async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{">> GetRecentPlayerInteractionsForServer(int serverId)"}</code> |  |
| <Link id="m-getstatustextapprox" /><code>{"static string GetStatusTextApprox("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> |  |
| <Link id="m-hasbeenfriendrequestedbyme" /><code>{"static bool HasBeenFriendRequestedByMe("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> |  |
| <Link id="m-hasfriendshiprequestedme" /><code>{"static bool HasFriendshipRequestedMe("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> |  |
| <Link id="m-isfriend" /><code>{"static bool IsFriend("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> |  |
| <Link id="m-ismuted" /><code>{"static bool IsMuted("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> |  |
| <Link id="m-recordinteraction" /><code>{"static async void RecordInteraction("}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" userInfo, "}<Link to="/game-api/types/assembly-api-models/recentplayerinteractiontype">{"RecentPlayerInteractionType"}</Link>{" interactionType)"}</code> |  |
| <Link id="m-testrecordinteraction" /><code>{"static async Task TestRecordInteraction(string name, int id, int interactionType)"}</code> |  |
| <Link id="m-toprettyformat" /><code>{"static string ToPrettyFormat(TimeSpan span)"}</code> |  |
| <Link id="m-toprettyformatapprox" /><code>{"static string ToPrettyFormatApprox(TimeSpan span)"}</code> |  |
| <Link id="m-querydbforinteractions" /><code>{"private static async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{">> QueryDbForInteractions(int? serverIdToCheck = null)"}</code> |  |
| <Link id="m-timesince" /><code>{"private static TimeSpan TimeSince("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" info)"}</code> |  |
