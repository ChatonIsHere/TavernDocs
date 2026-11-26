---
title: "PrefabInfoDump.NetworkEntityInfoDump"
description: "One network entity inside a prefab, as listed by PrefabInfoDump."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabInfoDump.NetworkEntityInfoDump

A **class** in `Root.Township`, `Alta.Console.Commands`.

One network entity inside a prefab, as listed by `PrefabInfoDump`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested in** [`PrefabInfoDump`](/game-api/types/alta-console/prefabinfodump)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkEntityInfoDump()"}</code> | Creates a `PrefabInfoDump.NetworkEntityInfoDump` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash" /><code>{"uint Hash { get; set; }"}</code> | The entity's hash. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | The entity's GameObject name. |
| <Link id="m-savables" /><code>{"List<"}<Link to="/game-api/types/alta-console/prefabinfodump-savableinfodump">{"PrefabInfoDump.SavableInfoDump"}</Link>{"> Savables { get; }"}</code> | The savable components on the entity. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/game-api/types/alta-console/prefabinfodump-networkentityinfodump">{"PrefabInfoDump.NetworkEntityInfoDump"}</Link>{" op_Implicit("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Builds the dump from a `NetworkEntity`, listing each `ISavableSaveBase` component on it. |

## Used in

Members of other types that take, return or hold a `NetworkEntityInfoDump`:

[`PrefabInfoDump.Embedded`](/game-api/types/alta-console/prefabinfodump#m-embedded).
