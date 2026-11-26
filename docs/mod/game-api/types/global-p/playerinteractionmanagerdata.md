---
title: "PlayerInteractionManagerData"
description: "Save data for PlayerInteractionManager: how many interactions each player has left on each tracked restrictor."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerInteractionManagerData

A **class** in `Root.Township`, the global namespace.

Save data for `PlayerInteractionManager`: how many interactions each player has left on each tracked restrictor.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NewSaveData<PlayerInteractionManager, PlayerInteractionManagerData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PlayerInteractionManager`](/mod/game-api/types/global-p/playerinteractionmanager), [`PlayerInteractionManagerData`](/mod/game-api/types/global-p/playerinteractionmanagerdata)
- **Nested types** [`PlayerData`](/mod/game-api/types/global-p/playerinteractionmanagerdata-playerdata), [`TrackerData`](/mod/game-api/types/global-p/playerinteractionmanagerdata-trackerdata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerInteractionManagerData()"}</code> | <span className="api-desc">Creates a `PlayerInteractionManagerData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-nextid" /><code>{"int nextID"}</code> | <span className="api-desc">Next id to hand out to a new restrictor.</span> |
| <Link id="m-trackers" /><code><Link to="/mod/game-api/types/global-p/playerinteractionmanagerdata-playerdata">{"PlayerInteractionManagerData.PlayerData"}</Link>{"[] trackers"}</code> | <span className="api-desc">One entry per player, each holding the interactions left per restrictor id.</span> |
