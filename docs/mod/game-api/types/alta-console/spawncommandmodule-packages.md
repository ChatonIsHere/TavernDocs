---
title: "SpawnCommandModule.Packages"
description: "Console submodule spawn package: drops named spawn packages through PackageManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnCommandModule.Packages

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console submodule `spawn package`: drops named spawn packages through `PackageManager`.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`SpawnCommandModule`](/mod/game-api/types/alta-console/spawncommandmodule)
- **Attributes** `Module`

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-droppackage" /><code>{"private static void DropPackage("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, params string[] arguments)"}</code> | Server: `spawn package drop` drops the named package for each player (or with no player), passing the rest of the arguments on. |
| <Link id="m-list" /><code>{"private static IEnumerable<string> List()"}</code> | `spawn package list`: lists the names of all packages. |

</details>
