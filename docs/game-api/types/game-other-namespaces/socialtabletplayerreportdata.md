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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Documented in** [Console events](/game-api/console-and-utilities/console-events)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SocialTabletPlayerReportData()"}</code> | Creates a `SocialTabletPlayerReportData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-reason" /><code>{"string Reason"}</code> | The reason the reporter gave. |
| <Link id="m-reportedby" /><code><Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" ReportedBy"}</code> | The player who made the report. |
| <Link id="m-reportedplayer" /><code><Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" ReportedPlayer"}</code> | The player who was reported. |

## Used in

Members of other types that take, return or hold a `SocialTabletPlayerReportData`:

[`ConsoleEvents.SocialTabletPlayerReported`](/game-api/types/alta-console/consoleevents#m-socialtabletplayerreported).
