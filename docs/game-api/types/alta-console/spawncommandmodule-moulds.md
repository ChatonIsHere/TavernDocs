---
title: "SpawnCommandModule.Moulds"
description: "Console submodule spawn moulds: spawns casting moulds for a given mould definition."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnCommandModule.Moulds

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console submodule `spawn moulds`: spawns casting moulds for a given mould definition. Marked as under construction in the code.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested in** [`SpawnCommandModule`](/game-api/types/alta-console/spawncommandmodule)
- **Attributes** `Module`

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-droppackage" /><code>{"private static void DropPackage("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" definition)"}</code> | Server: `spawn moulds` spawns a mould with the definition (or the one matching a prefab's item) in front of each player. |
| <Link id="m-droppackage-2" /><code>{"private static void DropPackage("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | Server: `spawn moulds` spawns a mould with the definition (or the one matching a prefab's item) in front of each player. |
| <Link id="m-list" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/spawncommandmodule-moulddefinitioninfo">{"SpawnCommandModule.MouldDefinitionInfo"}</Link>{"> List()"}</code> | `spawn moulds list`: lists all mould definitions. |
| <Link id="m-spawnfull" /><code>{"private static void SpawnFull("}<Link to="/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" definition, Vector3 position)"}</code> | Spawns one `mould` prefab at a position with the given definition. |

</details>
