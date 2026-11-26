---
title: "ModMuteArgument"
description: "Payload for ModsMicMuteManager's mute request: which moderator is muting and whether it's on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModMuteArgument

A **struct** in `Root.Township`, `Alta.QuickAccessActions`.

Payload for `ModsMicMuteManager`'s mute request: which moderator is muting and whether it's on. The server only accepts it from players with Developer status or higher.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool isActive"}</code> | True to start muting, false to stop. |
| <Link id="m-modplayeridentifier" /><code>{"uint modPlayerIdentifier"}</code> | Identifier of the moderator player the request is for. |

## Used in

Members of other types that take, return or hold a `ModMuteArgument`:

[`ModsMicMuteManager.SendRequest`](/mod/game-api/types/alta-player/modsmicmutemanager#m-sendrequest), [`ModsMicMuteManager.syncRequest`](/mod/game-api/types/alta-player/modsmicmutemanager#m-syncrequest), [`ModsMicMuteManager.SyncRequest`](/mod/game-api/types/alta-player/modsmicmutemanager#m-syncrequest-2).
