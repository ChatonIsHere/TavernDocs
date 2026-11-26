---
title: "SocialAnalyticsBanMenuPanelOrigin"
description: "Which menu panel a ban was made from (inbox, reports or group page)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SocialAnalyticsBanMenuPanelOrigin

An **enum** in `Root.Township`, no namespace.

Which menu panel a ban was made from (inbox, reports or group page). Sent with the ban player social analytics event.

- **Listed in** [No namespace: S](/game-api/types/global-s)

## Values

| Member |
| --- |
| <Link id="m-grouppage" /><code>{"GroupPage = 2"}</code> |
| <Link id="m-inbox" /><code>{"Inbox = 0"}</code> |
| <Link id="m-reports" /><code>{"Reports = 1"}</code> |

## Used in

Members of other types that take, return or hold a `SocialAnalyticsBanMenuPanelOrigin`:

[`PlayerReportBaseNotification.BanUserFromReport`](/game-api/types/alta-menus/playerreportbasenotification#m-banuserfromreport), [`BanPlayerSocialAnalyticsEvent.BanPlayerSocialAnalyticsEvent`](/game-api/types/game-other-namespaces/banplayersocialanalyticsevent#m-ctor), [`PlayerCommunityAnalytics.BanPlayerInMainMenu`](/game-api/types/global-p/playercommunityanalytics#m-banplayerinmainmenu).
