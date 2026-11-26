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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`NewSaveData<PlayerProxy, PlayerProxyData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PlayerProxy`](/game-api/types/alta-player/playerproxy), [`PlayerProxyData`](/game-api/types/alta-player/playerproxydata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerProxyData()"}</code> | Creates a `PlayerProxyData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-status" /><code><Link to="/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" status"}</code> | The proxy's member status. |
| <Link id="m-title" /><code>{"string title"}</code> | The proxy's title. |
| <Link id="m-username" /><code>{"string userName"}</code> | The proxy's name. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Returns a copy of this data. |
