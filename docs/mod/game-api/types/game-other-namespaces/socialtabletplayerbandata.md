---
title: "SocialTabletPlayerBanData"
description: "Payload of the ConsoleEvents.SocialTabletPlayerBanned console event, raised when a player bans or unbans someone from the social tablet's recent players page."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SocialTabletPlayerBanData

A **class** in `Root.Township`, `ATT.PlayerStates`.

Payload of the `ConsoleEvents.SocialTabletPlayerBanned` console event, raised when a player bans or unbans someone from the social tablet's recent players page.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Documented in** [Console events](/mod/game-api/console-and-utilities/console-events)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SocialTabletPlayerBanData()"}</code> | Creates a `SocialTabletPlayerBanData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bannedby" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" BannedBy"}</code> | The player who used the ban or unban button. |
| <Link id="m-bannedplayer" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" BannedPlayer"}</code> | The player who was banned or unbanned. |
| <Link id="m-isban" /><code>{"bool IsBan"}</code> | True for a ban, false for an unban. |

## Used in

Members of other types that take, return or hold a `SocialTabletPlayerBanData`:

[`ConsoleEvents.SocialTabletPlayerBanned`](/mod/game-api/types/alta-console/consoleevents#m-socialtabletplayerbanned).
