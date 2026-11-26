---
title: "RepairBoxModule"
description: "Console module repair-box: spawns a repair box at a player that takes up to three item inputs and produces a chosen prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RepairBoxModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `repair-box`: spawns a repair box at a player that takes up to three item inputs and produces a chosen prefab. Server and play mode only; on simple servers needs `debug_features`.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `ServerOnly`, `PlayOnly`, `Module`, `NonSimpleServer`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-listitems" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/hashediteminfo">{"HashedItemInfo"}</Link>{"> ListItems()"}</code> | `repair-box list-items`: lists items whose prefab can be spawned by command. |
| <Link id="m-spawnbox" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{" SpawnBox("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item1, uint count1, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" output)"}</code> | Spawns a repair box (prefab hash 3458) at the player, sets its input items and counts and its output prefab, and returns the entity. Output spawns 5 units forward unless given. |
| <Link id="m-spawnbox-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{" SpawnBox("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item1, uint count1, "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item2, uint count2, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" output)"}</code> | Spawns a repair box (prefab hash 3458) at the player, sets its input items and counts and its output prefab, and returns the entity. Output spawns 5 units forward unless given. |
| <Link id="m-spawnbox-3" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{" SpawnBox("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item1, uint count1, "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item2, uint count2, "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item3, uint count3, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" output)"}</code> | Spawns a repair box (prefab hash 3458) at the player, sets its input items and counts and its output prefab, and returns the entity. Output spawns 5 units forward unless given. |
| <Link id="m-spawnbox-4" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{" SpawnBox("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item1, uint count1, "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item2, uint count2, "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item3, uint count3, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" output, Vector3 localSpawnPosition)"}</code> | Spawns a repair box (prefab hash 3458) at the player, sets its input items and counts and its output prefab, and returns the entity. Output spawns 5 units forward unless given. |
