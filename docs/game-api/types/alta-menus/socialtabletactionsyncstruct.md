---
title: "SocialTabletActionSyncStruct"
description: "Message a client sends from the social tablet's recent player page after reporting, banning or unbanning someone."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SocialTabletActionSyncStruct

A **internal struct** in `Root.Township`, `Alta.UserInterface.SocialTablet`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Message a client sends from the social tablet's recent player page after reporting, banning or unbanning someone. The server looks up the target and raises the matching console event.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-actiontype" /><code><Link to="/game-api/types/alta-menus/socialtabletactiontype">{"SocialTabletActionType"}</Link>{" ActionType"}</code> | Report, ban or unban. |
| <Link id="m-reason" /><code>{"string Reason"}</code> | Report reason as text. Only set for reports. |
| <Link id="m-targetplayerid" /><code>{"int TargetPlayerId"}</code> | User identifier of the player acted on. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the target ID, action type and reason on the stream. |

## Used in

Members of other types that take, return or hold a `SocialTabletActionSyncStruct`:

[`RecentPlayerActionPage.syncSocialTabletAction`](/game-api/types/global-q-r/recentplayeractionpage#m-syncsocialtabletaction), [`RecentPlayerActionPage.SyncSocialTabletAction`](/game-api/types/global-q-r/recentplayeractionpage#m-syncsocialtabletaction-2).
