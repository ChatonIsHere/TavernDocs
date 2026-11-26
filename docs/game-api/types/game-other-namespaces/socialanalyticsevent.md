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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`AnalyticsEvent`](/game-api/types/assembly-other/analyticsevent)
- **Derived types** [`BanPlayerSocialAnalyticsEvent`](/game-api/types/game-other-namespaces/banplayersocialanalyticsevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SocialAnalyticsEvent(string eventName, "}<Link to="/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" eventOrigin)"}</code> | Creates a `SocialAnalyticsEvent` from `eventName` and `eventOrigin`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-acceptfriend" /><code>{"const string AcceptFriend"}</code> | Event name for answering a friend request. |
| <Link id="m-actionoriginkey" /><code>{"const string ActionOriginKey"}</code> | Property key for where the action came from. |
| <Link id="m-removefriend" /><code>{"const string RemoveFriend"}</code> | Event name for removing a friend. |
| <Link id="m-reportplayer" /><code>{"const string ReportPlayer"}</code> | Event name for reporting a player. |
| <Link id="m-requestfriend" /><code>{"const string RequestFriend"}</code> | Event name for sending a friend request. |
| <Link id="m-unbanplayer" /><code>{"const string UnbanPlayer"}</code> | Event name for unbanning a player. |
