---
title: "ServerConfiguration"
description: "class ServerConfiguration in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerConfiguration

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `ICloneable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerConfiguration()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-listtype" /><code>{"private "}<Link to="/game-api/types/global-s/serverlisttype">{"ServerListType"}</Link>{" listType"}</code> |
| <Link id="m-playerslist" /><code>{"private List<int> playersList"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-listtype-2" /><code><Link to="/game-api/types/global-s/serverlisttype">{"ServerListType"}</Link>{" ListType { get; set; }"}</code> |
| <Link id="m-playerslist-2" /><code>{"List<int> PlayersList { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-isplayerallowed" /><code>{"bool IsPlayerAllowed(int playerID)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-clone" /><code>{"private object System.ICloneable.Clone()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ServerConfiguration`:

[`ServerHandler.Config`](/game-api/types/alta-networking/serverhandler#m-config), [`ServerConfigFileManager.GetConfigFile`](/game-api/types/global-s/serverconfigfilemanager#m-getconfigfile).
