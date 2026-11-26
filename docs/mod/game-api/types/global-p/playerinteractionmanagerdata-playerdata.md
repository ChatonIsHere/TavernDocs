---
title: "PlayerInteractionManagerData.PlayerData"
description: "Saved interaction trackers for one player in PlayerInteractionManager's save data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerInteractionManagerData.PlayerData

A **class** in `Root.Township`, the global namespace.

Saved interaction trackers for one player in `PlayerInteractionManager`'s save data.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PlayerInteractionManagerData`](/mod/game-api/types/global-p/playerinteractionmanagerdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerData()"}</code> | <span className="api-desc">Creates a `PlayerInteractionManagerData.PlayerData` from `playerIdentifier` and `trackers`.</span> |
| <Link id="m-ctor-2" /><code>{"PlayerData(int playerIdentifier, Dictionary<int, "}<Link to="/mod/game-api/types/global-p/playerinteractionmanager-tracker">{"PlayerInteractionManager.Tracker"}</Link>{"> trackers)"}</code> | <span className="api-desc">Creates a `PlayerInteractionManagerData.PlayerData` from `playerIdentifier` and `trackers`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-playeridentifier" /><code>{"int playerIdentifier"}</code> | <span className="api-desc">The player's user id.</span> |
| <Link id="m-trackerdatas" /><code><Link to="/mod/game-api/types/global-p/playerinteractionmanagerdata-trackerdata">{"PlayerInteractionManagerData.TrackerData"}</Link>{"[] trackerDatas"}</code> | <span className="api-desc">The player's trackers and how many interactions each has left.</span> |

## Used in

Members of other types that take, return or hold a `PlayerData`:

<div className="api-used-in">

[`PlayerInteractionManagerData.trackers`](/mod/game-api/types/global-p/playerinteractionmanagerdata#m-trackers).

</div>
