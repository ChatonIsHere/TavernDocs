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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`PrefabInfoDump`](/mod/game-api/types/alta-console/prefabinfodump)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkEntityInfoDump()"}</code> | <span className="api-desc">Creates a `PrefabInfoDump.NetworkEntityInfoDump` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash" /><code>{"uint Hash { get; set; }"}</code> | <span className="api-desc">The entity's hash.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">The entity's GameObject name.</span> |
| <Link id="m-savables" /><code>{"List<"}<Link to="/mod/game-api/types/alta-console/prefabinfodump-savableinfodump">{"PrefabInfoDump.SavableInfoDump"}</Link>{"> Savables { get; }"}</code> | <span className="api-desc">The savable components on the entity.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/prefabinfodump-networkentityinfodump">{"PrefabInfoDump.NetworkEntityInfoDump"}</Link>{" op_Implicit("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Builds the dump from a `NetworkEntity`, listing each `ISavableSaveBase` component on it.</span> |

## Used in

Members of other types that take, return or hold a `NetworkEntityInfoDump`:

<div className="api-used-in">

[`PrefabInfoDump.Embedded`](/mod/game-api/types/alta-console/prefabinfodump#m-embedded).

</div>
