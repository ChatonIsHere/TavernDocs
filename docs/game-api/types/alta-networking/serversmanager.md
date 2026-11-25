---
title: "ServersManager"
description: "class ServersManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServersManager

A **class** in `Root.Township`, `Alta.Meta.Servers`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`LoggedInTool`](/game-api/types/global-i-l/loggedintool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServersManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-friendsmanager" /><code>{"private "}<Link to="/game-api/types/alta-menus/friendsmanager">{"FriendsManager"}</Link>{" friendsManager"}</code> |  |
| <Link id="m-servers" /><code>{"private List<"}<Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{"> servers"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-selectedserverchanged" /><code>{"async void SelectedServerChanged("}<Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" server)"}</code> |  |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> |  |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> |  |
