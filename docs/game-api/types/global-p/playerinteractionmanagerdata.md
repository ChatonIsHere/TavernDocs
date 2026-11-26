---
title: "PlayerInteractionManagerData"
description: "Save data for PlayerInteractionManager: how many interactions each player has left on each tracked restrictor."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerInteractionManagerData

A **class** in `Root.Township`, no namespace.

Save data for `PlayerInteractionManager`: how many interactions each player has left on each tracked restrictor.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NewSaveData<PlayerInteractionManager, PlayerInteractionManagerData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PlayerInteractionManager`](/game-api/types/global-p/playerinteractionmanager), [`PlayerInteractionManagerData`](/game-api/types/global-p/playerinteractionmanagerdata)
- **Nested types** [`PlayerData`](/game-api/types/global-p/playerinteractionmanagerdata-playerdata), [`TrackerData`](/game-api/types/global-p/playerinteractionmanagerdata-trackerdata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerInteractionManagerData()"}</code> | Creates a `PlayerInteractionManagerData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-nextid" /><code>{"int nextID"}</code> | Next id to hand out to a new restrictor. |
| <Link id="m-trackers" /><code><Link to="/game-api/types/global-p/playerinteractionmanagerdata-playerdata">{"PlayerInteractionManagerData.PlayerData"}</Link>{"[] trackers"}</code> | One entry per player, each holding the interactions left per restrictor id. |
