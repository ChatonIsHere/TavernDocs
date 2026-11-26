---
title: "LoginCommandModule"
description: "Console module login: signs in to the game with a username and password through LoginManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoginCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `login`: signs in to the game with a username and password through `LoginManager`. Play mode only.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `Module`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this module. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loginasync" /><code>{"private static async Task LoginAsync(string username, string password)"}</code> | `login`: signs in with the given username and password and logs the error if it fails. |

</details>
