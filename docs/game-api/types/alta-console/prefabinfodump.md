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

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested types** [`NetworkEntityInfoDump`](/game-api/types/alta-console/prefabinfodump-networkentityinfodump), [`SavableInfoDump`](/game-api/types/alta-console/prefabinfodump-savableinfodump)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PrefabInfoDump()"}</code> | Creates a `PrefabInfoDump` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-embedded" /><code>{"List<"}<Link to="/game-api/types/alta-console/prefabinfodump-networkentityinfodump">{"PrefabInfoDump.NetworkEntityInfoDump"}</Link>{"> Embedded { get; }"}</code> | Every network entity in the prefab, including inactive ones, with their savable components. |
| <Link id="m-hash" /><code>{"uint Hash { get; set; }"}</code> | The prefab's hash. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | The prefab's name. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/game-api/types/alta-console/prefabinfodump">{"PrefabInfoDump"}</Link>{" op_Implicit("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | Builds the dump from a `NetworkPrefab`. |

## Used in

Members of other types that take, return or hold a `PrefabInfoDump`:

[`SpawnCommandModule.InfoDump`](/game-api/types/alta-console/spawncommandmodule#m-infodump).
