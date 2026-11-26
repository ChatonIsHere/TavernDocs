---
title: "PrefabInfoDump"
description: "Server: one prefab's entry in the spawn infodump command output, with its hash, name and the network entities inside it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabInfoDump

A **class** in `Root.Township`, `Alta.Console.Commands`.

Server: one prefab's entry in the `spawn infodump` command output, with its hash, name and the network entities inside it.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested types** [`NetworkEntityInfoDump`](/mod/game-api/types/alta-console/prefabinfodump-networkentityinfodump), [`SavableInfoDump`](/mod/game-api/types/alta-console/prefabinfodump-savableinfodump)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PrefabInfoDump()"}</code> | <span className="api-desc">Creates a `PrefabInfoDump` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-embedded" /><code>{"List<"}<Link to="/mod/game-api/types/alta-console/prefabinfodump-networkentityinfodump">{"PrefabInfoDump.NetworkEntityInfoDump"}</Link>{"> Embedded { get; }"}</code> | <span className="api-desc">Every network entity in the prefab, including inactive ones, with their savable components.</span> |
| <Link id="m-hash" /><code>{"uint Hash { get; set; }"}</code> | <span className="api-desc">The prefab's hash.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">The prefab's name.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/prefabinfodump">{"PrefabInfoDump"}</Link>{" op_Implicit("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | <span className="api-desc">Builds the dump from a `NetworkPrefab`.</span> |

## Used in

Members of other types that take, return or hold a `PrefabInfoDump`:

<div className="api-used-in">

[`SpawnCommandModule.InfoDump`](/mod/game-api/types/alta-console/spawncommandmodule#m-infodump).

</div>
