---
title: "InfoCommandModule"
description: "Console module info about game systems."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InfoCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `info` about game systems. Needs the `server_owner` permission. Only `version` and `player-mode` print anything in this build.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Attributes** `WithPermissionOnly`, `Module`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this module. |

</details>

## Methods

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-all" /><code>{"private static void All()"}</code> | Command `info`: runs all the info commands. |
| <Link id="m-commandlinearguments" /><code>{"private static void CommandLineArguments()"}</code> | Command `info cli`: empty in this build. |
| <Link id="m-currentversion" /><code>{"private static void CurrentVersion()"}</code> | Command `info version`: logs the build version. |
| <Link id="m-playermode" /><code>{"private static void PlayerMode()"}</code> | Command `info player-mode`: logs the current player mode. |
| <Link id="m-server" /><code>{"private static void Server()"}</code> | Command `info server`: empty in this build. |
| <Link id="m-systeminfo" /><code>{"private static void SystemInfo()"}</code> | Command `info system`: empty in this build. |
| <Link id="m-user" /><code>{"private static void User()"}</code> | Command `info user`: empty in this build. |

</details>
