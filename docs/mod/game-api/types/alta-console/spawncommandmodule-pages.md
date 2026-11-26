---
title: "SpawnCommandModule.Pages"
description: "Console submodule spawn pages: spawns every page of a page collection as paper."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnCommandModule.Pages

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console submodule `spawn pages`: spawns every page of a page collection as paper.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`SpawnCommandModule`](/mod/game-api/types/alta-console/spawncommandmodule)
- **Attributes** `Module`

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-droppackage" /><code>{"private static void DropPackage("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/mod/game-api/types/alta-items/pagecollection">{"PageCollection"}</Link>{" collection)"}</code> | <span className="api-desc">Server: `spawn pages spawn` spawns the collection's pages in front of each player, or at the original spawn point with no players.</span> |
| <Link id="m-list" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/spawncommandmodule-pagecollectioninfo">{"SpawnCommandModule.PageCollectionInfo"}</Link>{"> List()"}</code> | <span className="api-desc">`spawn pages list`: lists page collections with their descriptions.</span> |
| <Link id="m-spawnfull" /><code>{"private static void SpawnFull("}<Link to="/mod/game-api/types/alta-items/pagecollection">{"PageCollection"}</Link>{" collection, Vector3 position)"}</code> | <span className="api-desc">Spawns one `Paper` page per page in the collection at a position, each set to its generated page.</span> |

</details>
