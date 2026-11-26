---
title: "UsersCommandModule"
description: "Console module users: user statistics from the Alta API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UsersCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `users`: user statistics from the Alta API. Needs login and `server_owner`.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `WithPermissionOnly`, `LoggedInOnly`, `Module`

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this module.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loginasync" /><code>{"private static async Task LoginAsync("}<Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user)"}</code> | <span className="api-desc">`users statistics`: logs a user's play time in hours and sign-up date. Named `LoginAsync` but has nothing to do with login.</span> |

</details>
