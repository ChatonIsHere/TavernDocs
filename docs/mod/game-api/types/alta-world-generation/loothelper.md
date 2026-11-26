---
title: "LootHelper"
description: "Static helper that fills a set of pickup docks with random loot for a biome and prosperity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LootHelper

A **static class** in `Root.Township`, `Alta.Loot`.

Static helper that fills a set of pickup docks with random loot for a biome and prosperity. Server side; used by `GeneratedLoot` and `LootModule`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"static bool Spawn("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData, IEnumerable<"}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> targets, float incrementingFailChance)"}</code> | <span className="api-desc">Empties the docks, then picks random empty docks and spawns loot from the biome's loot tables until all are filled or a growing fail chance stops it. Returns true if anything spawned.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlefail" /><code>{"private static void HandleFail("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Moves a pickup that failed to dock to the dock's position and destroys it.</span> |
| <Link id="m-spawn-2" /><code>{"private static bool Spawn("}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/mod/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene, "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData, int count)"}</code> | <span className="api-desc">Empties the docks, then picks random empty docks and spawns loot from the biome's loot tables until all are filled or a growing fail chance stops it. Returns true if anything spawned.</span> |

</details>
