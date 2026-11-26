---
title: "BanPlayerSocialAnalyticsEvent"
description: "Social analytics event for banning a player, with where the ban was made and the role chosen."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BanPlayerSocialAnalyticsEvent

A **class** in `Root.Township`, `ATT.Analytics.Social`.

Social analytics event for banning a player, with where the ban was made and the role chosen.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`SocialAnalyticsEvent`](/mod/game-api/types/game-other-namespaces/socialanalyticsevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BanPlayerSocialAnalyticsEvent("}<Link to="/mod/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" origin, "}<Link to="/mod/game-api/types/global-a-b/banrole">{"BanRole"}</Link>{" banRole, "}<Link to="/mod/game-api/types/global-s/socialanalyticsbanmenupanelorigin">{"SocialAnalyticsBanMenuPanelOrigin"}</Link>{"? menuPanelOrigin = null)"}</code> | Creates a `BanPlayerSocialAnalyticsEvent` from `origin`, `banRole` and `menuPanelOrigin`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-originkey" /><code>{"const string OriginKey"}</code> | Property key for the main menu page the ban came from, if any. |
| <Link id="m-rolekey" /><code>{"const string RoleKey"}</code> | Property key for the ban role picked on the social tablet. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eventname" /><code>{"private const string EventName"}</code> | Event name "Ban Player". |

</details>
