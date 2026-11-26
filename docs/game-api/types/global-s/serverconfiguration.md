---
title: "ServerConfiguration"
description: "A server's join list, saved as JSON in the server's server_config file."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerConfiguration

A **class** in `Root.Township`, no namespace.

A server's join list, saved as JSON in the server's `server_config` file. The old join handler checks it when a player connects.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `ICloneable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerConfiguration()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-listtype" /><code>{"private "}<Link to="/game-api/types/global-s/serverlisttype">{"ServerListType"}</Link>{" listType"}</code> | Backing field for `ListType`. |
| <Link id="m-playerslist" /><code>{"private List<int> playersList"}</code> | Backing field for `PlayersList`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-listtype-2" /><code><Link to="/game-api/types/global-s/serverlisttype">{"ServerListType"}</Link>{" ListType { get; set; }"}</code> | Whether the list is unused, a block list or an allow list. Defaults to `BlackList`. |
| <Link id="m-playerslist-2" /><code>{"List<int> PlayersList { get; set; }"}</code> | Player user IDs on the list. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isplayerallowed" /><code>{"bool IsPlayerAllowed(int playerID)"}</code> | Checks a player ID against the list: everyone with `None`, not on it for `BlackList`, on it for `WhiteList`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"private object System.ICloneable.Clone()"}</code> | Returns a copy with its own copy of the player list. |

</details>

## Used in

Members of other types that take, return or hold a `ServerConfiguration`:

[`ServerHandler.Config`](/game-api/types/alta-networking/serverhandler#m-config), [`ServerConfigFileManager.GetConfigFile`](/game-api/types/global-s/serverconfigfilemanager#m-getconfigfile).
