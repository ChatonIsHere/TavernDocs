---
title: "SocialAnalyticsEventOrigin"
description: "Where a social analytics event came from: the main menu, the social tablet or a friend request token."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SocialAnalyticsEventOrigin

An **enum** in `Root.Township`, the global namespace.

Where a social analytics event came from: the main menu, the social tablet or a friend request token.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)

## Values

| Member |
| --- |
| <Link id="m-friendrequesttoken" /><code>{"FriendRequestToken = 2"}</code> |
| <Link id="m-mainmenu" /><code>{"MainMenu = 0"}</code> |
| <Link id="m-socialtablet" /><code>{"SocialTablet = 1"}</code> |

## Used in

Members of other types that take, return or hold a `SocialAnalyticsEventOrigin`:

[`BanPlayerSocialAnalyticsEvent.BanPlayerSocialAnalyticsEvent`](/mod/game-api/types/game-other-namespaces/banplayersocialanalyticsevent#m-ctor), [`SocialAnalyticsEvent.SocialAnalyticsEvent`](/mod/game-api/types/game-other-namespaces/socialanalyticsevent#m-ctor), [`PlayerCommunityAnalytics.FriendlyText`](/mod/game-api/types/global-p/playercommunityanalytics#m-friendlytext), [`PlayerCommunityAnalytics.FriendRequestedFrom`](/mod/game-api/types/global-p/playercommunityanalytics#m-friendrequestedfrom), [`PlayerCommunityAnalytics.ReportPlayer`](/mod/game-api/types/global-p/playercommunityanalytics#m-reportplayer), [`PlayerCommunityAnalytics.RespondFriendRequestFrom`](/mod/game-api/types/global-p/playercommunityanalytics#m-respondfriendrequestfrom), [`PlayerCommunityAnalytics.UnFriend`](/mod/game-api/types/global-p/playercommunityanalytics#m-unfriend), [`RecentPlayerActionPage.Origin`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-origin).
