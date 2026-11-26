---
title: "PlayerProxyData"
description: "Save data (version 1) for a PlayerProxy, a stand-in player with a name, title and member status."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerProxyData

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Save data (version 1) for a `PlayerProxy`, a stand-in player with a name, title and member status.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`NewSaveData<PlayerProxy, PlayerProxyData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PlayerProxy`](/mod/game-api/types/alta-player/playerproxy), [`PlayerProxyData`](/mod/game-api/types/alta-player/playerproxydata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerProxyData()"}</code> | <span className="api-desc">Creates a `PlayerProxyData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-status" /><code><Link to="/mod/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" status"}</code> | <span className="api-desc">The proxy's member status.</span> |
| <Link id="m-title" /><code>{"string title"}</code> | <span className="api-desc">The proxy's title.</span> |
| <Link id="m-username" /><code>{"string userName"}</code> | <span className="api-desc">The proxy's name.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Returns a copy of this data.</span> |
