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

- **Listed in** [World generation](/game-api/types/alta-world-generation)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"static bool Spawn("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData, IEnumerable<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> targets, float incrementingFailChance)"}</code> | Empties the docks, then picks random empty docks and spawns loot from the biome's loot tables until all are filled or a growing fail chance stops it. Returns true if anything spawned. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlefail" /><code>{"private static void HandleFail("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Moves a pickup that failed to dock to the dock's position and destroys it. |
| <Link id="m-spawn-2" /><code>{"private static bool Spawn("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData, int count)"}</code> | Empties the docks, then picks random empty docks and spawns loot from the biome's loot tables until all are filled or a growing fail chance stops it. Returns true if anything spawned. |

</details>
