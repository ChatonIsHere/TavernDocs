---
title: "ServerConfiguration"
description: "A server's join list, saved as JSON in the server's server_config file."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerConfiguration

A **class** in `Root.Township`, the global namespace.

A server's join list, saved as JSON in the server's `server_config` file. The old join handler checks it when a player connects.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `ICloneable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerConfiguration()"}</code> | <span className="api-desc">Creates a `ServerConfiguration` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-listtype" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverlisttype">{"ServerListType"}</Link>{" listType"}</code> | <span className="api-desc">Backing field for `ListType`.</span> |
| <Link id="m-playerslist" /><code>{"private List<int> playersList"}</code> | <span className="api-desc">Backing field for `PlayersList`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-listtype-2" /><code><Link to="/mod/game-api/types/global-s/serverlisttype">{"ServerListType"}</Link>{" ListType { get; set; }"}</code> | <span className="api-desc">Whether the list is unused, a block list or an allow list. Defaults to `BlackList`.</span> |
| <Link id="m-playerslist-2" /><code>{"List<int> PlayersList { get; set; }"}</code> | <span className="api-desc">Player user IDs on the list.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isplayerallowed" /><code>{"bool IsPlayerAllowed(int playerID)"}</code> | <span className="api-desc">Checks a player ID against the list: everyone with `None`, not on it for `BlackList`, on it for `WhiteList`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"private object System.ICloneable.Clone()"}</code> | <span className="api-desc">Returns a copy with its own copy of the player list.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ServerConfiguration`:

<div className="api-used-in">

[`ServerHandler.Config`](/mod/game-api/types/alta-networking/serverhandler#m-config), [`ServerConfigFileManager.GetConfigFile`](/mod/game-api/types/global-s/serverconfigfilemanager#m-getconfigfile).

</div>
