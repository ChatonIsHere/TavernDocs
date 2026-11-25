---
title: "SpawnCommandModule"
description: "static class SpawnCommandModule in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested types** [`MouldDefinitionInfo`](/game-api/types/alta-console/spawncommandmodule-moulddefinitioninfo), [`Moulds`](/game-api/types/alta-console/spawncommandmodule-moulds), [`Packages`](/game-api/types/alta-console/spawncommandmodule-packages), [`PageCollectionInfo`](/game-api/types/alta-console/spawncommandmodule-pagecollectioninfo), [`Pages`](/game-api/types/alta-console/spawncommandmodule-pages), [`PopulationType`](/game-api/types/alta-console/spawncommandmodule-populationtype), [`SpawnLists`](/game-api/types/alta-console/spawncommandmodule-spawnlists)
- **Attributes** `PlayOnly`, `NonSimpleServer`, `Module`

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-listpopulations" /><code>{"static IEnumerable<"}<Link to="/game-api/types/alta-console/hashediteminfo">{"HashedItemInfo"}</Link>{"> ListPopulations()"}</code> |  |
| <Link id="m-spawn" /><code>{"static "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Spawn("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, int count, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, Vector3 position, Quaternion rotation, string[] arguments)"}</code> |  |
| <Link id="m-spawnpopulation" /><code>{"static "}<Link to="/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{" SpawnPopulation("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" population, "}<Link to="/game-api/types/alta-console/spawncommandmodule-populationtype">{"SpawnCommandModule.PopulationType"}</Link>{" populationType = 0, float size = 5, int startingPopulation = 5, int maxPopulation = 20)"}</code> |  |
| <Link id="m-findprefab" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/hashediteminfo">{"HashedItemInfo"}</Link>{"> FindPrefab(string name)"}</code> |  |
| <Link id="m-findprefabandspawn" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> FindPrefabAndSpawn("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, string name, string[] args)"}</code> |  |
| <Link id="m-for" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> For("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> |  |
| <Link id="m-for-2" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> For("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, params string[] arguments)"}</code> |  |
| <Link id="m-infodump" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/prefabinfodump">{"PrefabInfoDump"}</Link>{"> InfoDump() (iterator)"}</code> |  |
| <Link id="m-parsespawncount" /><code>{"private static int ParseSpawnCount(string[] arguments)"}</code> |  |
| <Link id="m-spawnatposition" /><code>{"private static "}<Link to="/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{" SpawnAtPosition(Vector3 position, Vector3 rotation, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, params string[] arguments)"}</code> |  |
| <Link id="m-spawnfull" /><code>{"private static "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnFull("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, int count, Vector3 position, Quaternion? rotation, params string[] arguments)"}</code> |  |
| <Link id="m-spawnlocal" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> SpawnLocal("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> |  |
| <Link id="m-spawnstring" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> SpawnString("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players)"}</code> |  |
| <Link id="m-spawnstring-2" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> SpawnString("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, string value) (iterator)"}</code> |  |
| <Link id="m-spawnstringraw" /><code>{"private static "}<Link to="/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{" SpawnStringRaw(string value)"}</code> |  |
