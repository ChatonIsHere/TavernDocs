---
title: "WorldCommandModule.CaveCommandModule"
description: "Console commands under world caves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WorldCommandModule.CaveCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console commands under `world caves`. Server only.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested in** [`WorldCommandModule`](/game-api/types/alta-console/worldcommandmodule)
- **Attributes** `Module`
- **Documented in** [Caves](/game-api/world/caves#console-commands-worldcommandmodulecavecommandmodule)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-caveteleport" /><code>{"static async Task CaveTeleport("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, int layer)"}</code> | `world caves teleport`: generates caves down to a layer and teleports players to its portal. Probably does nothing if the layer was already generated. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cavewipe" /><code>{"private static async Task CaveWipe()"}</code> | `world caves reset`: wipes all cave chunks and moves players in the caves to the surface, unless a wipe is already running. |

</details>
