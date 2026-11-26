---
title: "PrefabInfoDump.SavableInfoDump"
description: "One savable component type on an entity, as listed by PrefabInfoDump."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabInfoDump.SavableInfoDump

A **class** in `Root.Township`, `Alta.Console.Commands`.

One savable component type on an entity, as listed by `PrefabInfoDump`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested in** [`PrefabInfoDump`](/game-api/types/alta-console/prefabinfodump)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SavableInfoDump()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash" /><code>{"uint Hash { get; set; }"}</code> | The savable's save hash, from its `SavingInfoAttribute`. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | The savable's type name. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/game-api/types/alta-console/prefabinfodump-savableinfodump">{"PrefabInfoDump.SavableInfoDump"}</Link>{" op_Implicit(Type savable)"}</code> | Builds the dump from a savable component's `Type`. |

## Used in

Members of other types that take, return or hold a `SavableInfoDump`:

[`PrefabInfoDump.NetworkEntityInfoDump.Savables`](/game-api/types/alta-console/prefabinfodump-networkentityinfodump#m-savables).
