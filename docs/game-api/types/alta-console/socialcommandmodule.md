---
title: "SocialCommandModule"
description: "Console module social: adds, removes and lists friends through the Alta API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SocialCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `social`: adds, removes and lists friends through the Alta API. Needs login, play mode and `server_owner`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Attributes** `WithPermissionOnly`, `LoggedInOnly`, `PlayOnly`, `Module`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this module. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addfriend" /><code>{"static async Task AddFriend("}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" player)"}</code> | `social addfriend`: sends a friend request to the player and logs the result. |
| <Link id="m-listfriends" /><code>{"static async Task ListFriends("}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user)"}</code> | `social listfriends`: logs a table of a user's friends and whether each is on this server. |
| <Link id="m-removefriend" /><code>{"static async Task RemoveFriend("}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" player)"}</code> | `social removefriend`: removes the player as a friend if they are one and updates their in-game friend status. |
