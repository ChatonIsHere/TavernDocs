---
title: "SocialTabletActionType"
description: "Moderation action sent from the social tablet's recent players page: report, ban or unban."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SocialTabletActionType

An **enum** in `Root.Township`, `Alta.UserInterface.SocialTablet`.

Moderation action sent from the social tablet's recent players page: report, ban or unban.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)

## Values

| Member |
| --- |
| <Link id="m-ban" /><code>{"Ban = 1"}</code> |
| <Link id="m-report" /><code>{"Report = 0"}</code> |
| <Link id="m-unban" /><code>{"Unban = 2"}</code> |

## Used in

Members of other types that take, return or hold a `SocialTabletActionType`:

[`SocialTabletActionSyncStruct.ActionType`](/game-api/types/alta-menus/socialtabletactionsyncstruct#m-actiontype).
