---
title: "WorldCommandModule"
description: "Console module world: holder for the world forest and world caves submodules (forest info, teleport and reset; cave reset and teleport)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WorldCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `world`: holder for the `world forest` and `world caves` submodules (forest info, teleport and reset; cave reset and teleport). Server and play mode only.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested types** [`CaveCommandModule`](/game-api/types/alta-console/worldcommandmodule-cavecommandmodule), [`ForestCommandModule`](/game-api/types/alta-console/worldcommandmodule-forestcommandmodule)
- **Attributes** `PlayOnly`, `ServerOnly`, `Module`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger shared by the forest and cave submodules. |

</details>
