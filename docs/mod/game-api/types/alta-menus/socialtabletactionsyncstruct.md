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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-actiontype" /><code><Link to="/mod/game-api/types/alta-menus/socialtabletactiontype">{"SocialTabletActionType"}</Link>{" ActionType"}</code> | <span className="api-desc">Report, ban or unban.</span> |
| <Link id="m-reason" /><code>{"string Reason"}</code> | <span className="api-desc">Report reason as text. Only set for reports.</span> |
| <Link id="m-targetplayerid" /><code>{"int TargetPlayerId"}</code> | <span className="api-desc">User identifier of the player acted on.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the target ID, action type and reason on the stream.</span> |

## Used in

Members of other types that take, return or hold a `SocialTabletActionSyncStruct`:

<div className="api-used-in">

[`RecentPlayerActionPage.syncSocialTabletAction`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-syncsocialtabletaction), [`RecentPlayerActionPage.SyncSocialTabletAction`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-syncsocialtabletaction-2).

</div>
