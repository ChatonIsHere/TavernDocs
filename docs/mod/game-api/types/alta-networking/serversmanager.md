---
title: "ServersManager"
description: "Client meta tool that, on login, fetches the servers the player can control from the Alta API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServersManager

A **class** in `Root.Township`, `Alta.Meta.Servers`.

Client meta tool that, on login, fetches the servers the player can control from the Alta API. Mostly a stub: the other handlers are empty.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`LoggedInTool`](/mod/game-api/types/global-i-l/loggedintool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServersManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-friendsmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/friendsmanager">{"FriendsManager"}</Link>{" friendsManager"}</code> | <span className="api-desc">Serialized `FriendsManager` reference; not used in this class.</span> |
| <Link id="m-servers" /><code>{"private List<"}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{"> servers"}</code> | <span className="api-desc">The controllable servers from the last login.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-selectedserverchanged" /><code>{"async void SelectedServerChanged("}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" server)"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> | <span className="api-desc">Fetches the player's controllable servers from the API and stores them in `servers`.</span> |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | <span className="api-desc">Does nothing.</span> |
