---
title: "SocialAnalyticsEvent"
description: "Analytics event for a social action (friends, reports, bans), always with where in the UI it came from."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SocialAnalyticsEvent

A **class** in `Root.Township`, `ATT.Analytics.Social`.

Analytics event for a social action (friends, reports, bans), always with where in the UI it came from.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`AnalyticsEvent`](/mod/game-api/types/assembly-other/analyticsevent)
- **Derived types** [`BanPlayerSocialAnalyticsEvent`](/mod/game-api/types/game-other-namespaces/banplayersocialanalyticsevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SocialAnalyticsEvent(string eventName, "}<Link to="/mod/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" eventOrigin)"}</code> | <span className="api-desc">Creates a `SocialAnalyticsEvent` from `eventName` and `eventOrigin`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-acceptfriend" /><code>{"const string AcceptFriend"}</code> | <span className="api-desc">Event name for answering a friend request.</span> |
| <Link id="m-actionoriginkey" /><code>{"const string ActionOriginKey"}</code> | <span className="api-desc">Property key for where the action came from.</span> |
| <Link id="m-removefriend" /><code>{"const string RemoveFriend"}</code> | <span className="api-desc">Event name for removing a friend.</span> |
| <Link id="m-reportplayer" /><code>{"const string ReportPlayer"}</code> | <span className="api-desc">Event name for reporting a player.</span> |
| <Link id="m-requestfriend" /><code>{"const string RequestFriend"}</code> | <span className="api-desc">Event name for sending a friend request.</span> |
| <Link id="m-unbanplayer" /><code>{"const string UnbanPlayer"}</code> | <span className="api-desc">Event name for unbanning a player.</span> |
