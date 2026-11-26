---
title: "SpawnCommandModule"
description: "Console module spawn: spawns prefabs, saved-object strings and population areas in front of players."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `spawn`: spawns prefabs, saved-object strings and population areas in front of players. Play mode only; on simple servers needs `debug_features`. Spawned entities become the console selection.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested types** [`MouldDefinitionInfo`](/mod/game-api/types/alta-console/spawncommandmodule-moulddefinitioninfo), [`Moulds`](/mod/game-api/types/alta-console/spawncommandmodule-moulds), [`Packages`](/mod/game-api/types/alta-console/spawncommandmodule-packages), [`PageCollectionInfo`](/mod/game-api/types/alta-console/spawncommandmodule-pagecollectioninfo), [`Pages`](/mod/game-api/types/alta-console/spawncommandmodule-pages), [`PopulationType`](/mod/game-api/types/alta-console/spawncommandmodule-populationtype), [`SpawnLists`](/mod/game-api/types/alta-console/spawncommandmodule-spawnlists)
- **Attributes** `PlayOnly`, `NonSimpleServer`, `Module`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger shared by this module and its submodules. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-listpopulations" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/hashediteminfo">{"HashedItemInfo"}</Link>{"> ListPopulations()"}</code> | Server: `spawn population-list` lists all population definitions. |
| <Link id="m-spawn" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Spawn("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, int count, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, Vector3 position, Quaternion rotation, string[] arguments)"}</code> | Spawns a prefab at a position, passes arguments to its `ISpawnArguments` components, puts stackable counts above 1 in a pouch, sets the chunk and selects it. |
| <Link id="m-spawnpopulation" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{" SpawnPopulation("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" population, "}<Link to="/mod/game-api/types/alta-console/spawncommandmodule-populationtype">{"SpawnCommandModule.PopulationType"}</Link>{" populationType = 0, float size = 5, int startingPopulation = 5, int maxPopulation = 20)"}</code> | Server: `spawn population` places a disk, sphere or directional population spawn area on the ground in front of the player and sets it up. |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-findprefab" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/hashediteminfo">{"HashedItemInfo"}</Link>{"> FindPrefab(string name)"}</code> | `spawn find`: lists command-spawnable prefabs whose name contains the text. |
| <Link id="m-findprefabandspawn" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> FindPrefabAndSpawn("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, string name, string[] args)"}</code> | `spawn multi`: spawns every command-spawnable prefab whose name contains the text for the players. |
| <Link id="m-for" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> For("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | Server: `spawn` spawns a prefab 2 units in front of each player's head (or at the original spawn point with no players), passing extra arguments on. |
| <Link id="m-for-2" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> For("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, params string[] arguments)"}</code> | Server: `spawn` spawns a prefab 2 units in front of each player's head (or at the original spawn point with no players), passing extra arguments on. |
| <Link id="m-infodump" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/prefabinfodump">{"PrefabInfoDump"}</Link>{"> InfoDump() (iterator)"}</code> | Server: `spawn infodump` returns info for every command-spawnable prefab. |
| <Link id="m-parsespawncount" /><code>{"private static int ParseSpawnCount(string[] arguments)"}</code> | Returns the first whole-number argument of at least 1 as the spawn count, or 1. |
| <Link id="m-spawnatposition" /><code>{"private static "}<Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{" SpawnAtPosition(Vector3 position, Vector3 rotation, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, params string[] arguments)"}</code> | Server: `spawn exact` spawns a prefab at a given position and Euler rotation. |
| <Link id="m-spawnfull" /><code>{"private static "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnFull("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, int count, Vector3 position, Quaternion? rotation, params string[] arguments)"}</code> | Spawns a prefab at a position in the best containing location chunk. Used by the spawn commands. |
| <Link id="m-spawnlocal" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> SpawnLocal("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | `spawn local` (dev only): spawns a prefab unchunked on the local player's side only. |
| <Link id="m-spawnstring" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> SpawnString("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players)"}</code> | `spawn string`: spawns a saved-object string (or the clipboard) 2 units in front of each player in their chunk. |
| <Link id="m-spawnstring-2" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> SpawnString("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, string value) (iterator)"}</code> | `spawn string`: spawns a saved-object string (or the clipboard) 2 units in front of each player in their chunk. |
| <Link id="m-spawnstringraw" /><code>{"private static "}<Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{" SpawnStringRaw(string value)"}</code> | `spawn string-raw`: spawns a saved-object string at its saved position and selects it. |

</details>
