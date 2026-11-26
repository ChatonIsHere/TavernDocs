---
title: "PlayerInteractionManager.Tracker"
description: "How many interactions one player has left on one limited object, keyed by id in PlayerInteractionManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerInteractionManager.Tracker

A **class** in `Root.Township`, the global namespace.

How many interactions one player has left on one limited object, keyed by id in `PlayerInteractionManager`. The server sends it to that player when it changes; trackers clear once a game day.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PlayerInteractionManager`](/mod/game-api/types/global-p/playerinteractionmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Tracker()"}</code> | <span className="api-desc">Creates a `PlayerInteractionManager.Tracker` from `id` and `interactionsLeft`.</span> |
| <Link id="m-ctor-2" /><code>{"Tracker(int id, int interactionsLeft)"}</code> | <span className="api-desc">Creates a `PlayerInteractionManager.Tracker` from `id` and `interactionsLeft`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"int id"}</code> | <span className="api-desc">The limited object's id, handed out by `PlayerInteractionManager.GetId`.</span> |
| <Link id="m-interactionsleft" /><code>{"int interactionsLeft"}</code> | <span className="api-desc">Interactions this player still has on that object until the next refresh.</span> |

## Used in

Members of other types that take, return or hold a `Tracker`:

<div className="api-used-in">

[`PlayerInteractionManager.GetTracker`](/mod/game-api/types/global-p/playerinteractionmanager#m-gettracker), [`PlayerInteractionManager.playersTrackers`](/mod/game-api/types/global-p/playerinteractionmanager#m-playerstrackers), [`PlayerInteractionManager.syncMarker`](/mod/game-api/types/global-p/playerinteractionmanager#m-syncmarker), [`PlayerInteractionManager.SyncMarker`](/mod/game-api/types/global-p/playerinteractionmanager#m-syncmarker-2), [`PlayerInteractionManagerData.PlayerData.PlayerData`](/mod/game-api/types/global-p/playerinteractionmanagerdata-playerdata#m-ctor-2).

</div>
