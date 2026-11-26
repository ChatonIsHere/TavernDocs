---
title: "SocialTabletPlayerReportData"
description: "Payload of the ConsoleEvents.SocialTabletPlayerReported console event, raised when a player reports someone from the social tablet's recent players page."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SocialTabletPlayerReportData

A **class** in `Root.Township`, `ATT.PlayerStates`.

Payload of the `ConsoleEvents.SocialTabletPlayerReported` console event, raised when a player reports someone from the social tablet's recent players page.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Documented in** [Console events](/mod/game-api/console-and-utilities/console-events)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SocialTabletPlayerReportData()"}</code> | <span className="api-desc">Creates a `SocialTabletPlayerReportData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-reason" /><code>{"string Reason"}</code> | <span className="api-desc">The reason the reporter gave.</span> |
| <Link id="m-reportedby" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" ReportedBy"}</code> | <span className="api-desc">The player who made the report.</span> |
| <Link id="m-reportedplayer" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" ReportedPlayer"}</code> | <span className="api-desc">The player who was reported.</span> |

## Used in

Members of other types that take, return or hold a `SocialTabletPlayerReportData`:

<div className="api-used-in">

[`ConsoleEvents.SocialTabletPlayerReported`](/mod/game-api/types/alta-console/consoleevents#m-socialtabletplayerreported).

</div>
