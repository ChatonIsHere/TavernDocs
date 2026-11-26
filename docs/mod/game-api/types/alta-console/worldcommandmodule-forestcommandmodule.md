---
title: "WorldCommandModule.ForestCommandModule"
description: "Console commands under world forest."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WorldCommandModule.ForestCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console commands under `world forest`. Server only.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`WorldCommandModule`](/mod/game-api/types/alta-console/worldcommandmodule)
- **Nested types** [`ForestInfo`](/mod/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo)
- **Attributes** `Module`
- **Documented in** [Forest](/mod/game-api/world/forest#console-commands-worldcommandmoduleforestcommandmodule)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"static async Task Reset("}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest)"}</code> | <span className="api-desc">`world forest reset` (alias `wipe`): wipes a forest.</span> |
| <Link id="m-teleport" /><code>{"static async Task Teleport("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest, int nodeIndex = -1)"}</code> | <span className="api-desc">`world forest teleport` (alias `tp`): moves players to a forest's first entrance, or to a node if `nodeIndex` is given.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-info" /><code>{"private static async Task<"}<Link to="/mod/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo">{"WorldCommandModule.ForestCommandModule.ForestInfo"}</Link>{"> Info("}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest)"}</code> | <span className="api-desc">`world forest info`: returns a forest's seed, bounds, outline, entrances, biomes, encounters and graph, and logs it as JSON.</span> |
| <Link id="m-list" /><code>{"private static IEnumerable<string> List() (iterator)"}</code> | <span className="api-desc">`world forest list`: lists every forest generator.</span> |

</details>
