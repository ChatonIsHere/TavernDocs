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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `WithPermissionOnly`, `Module`

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this module.</span> |

</details>

## Methods

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-all" /><code>{"private static void All()"}</code> | <span className="api-desc">Command `info`: runs all the info commands.</span> |
| <Link id="m-commandlinearguments" /><code>{"private static void CommandLineArguments()"}</code> | <span className="api-desc">Command `info cli`: empty in this build.</span> |
| <Link id="m-currentversion" /><code>{"private static void CurrentVersion()"}</code> | <span className="api-desc">Command `info version`: logs the build version.</span> |
| <Link id="m-playermode" /><code>{"private static void PlayerMode()"}</code> | <span className="api-desc">Command `info player-mode`: logs the current player mode.</span> |
| <Link id="m-server" /><code>{"private static void Server()"}</code> | <span className="api-desc">Command `info server`: empty in this build.</span> |
| <Link id="m-systeminfo" /><code>{"private static void SystemInfo()"}</code> | <span className="api-desc">Command `info system`: empty in this build.</span> |
| <Link id="m-user" /><code>{"private static void User()"}</code> | <span className="api-desc">Command `info user`: empty in this build.</span> |

</details>
