---
title: "HashedItemInfo"
description: "A hash and name pair for console output, such as the list of spawnable prefabs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HashedItemInfo

A **class** in `Root.Township`, `Alta.Console`.

A hash and name pair for console output, such as the list of spawnable prefabs. Converts from prefabs, items and hashed values.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HashedItemInfo()"}</code> | <span className="api-desc">Creates a `HashedItemInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash" /><code>{"uint Hash { get; set; }"}</code> | <span className="api-desc">The object's hash.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">The object's asset name.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/hashediteminfo">{"HashedItemInfo"}</Link>{" op_Implicit("}<Link to="/mod/game-api/types/assembly-other/hashedgeneralvalue">{"HashedGeneralValue"}</Link>{" item)"}</code> | <span className="api-desc">Builds one from a `HashedGeneralValue`, `NetworkPrefab` or `Item`.</span> |
| <Link id="m-op-implicit-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/hashediteminfo">{"HashedItemInfo"}</Link>{" op_Implicit("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" item)"}</code> | <span className="api-desc">Builds one from a `HashedGeneralValue`, `NetworkPrefab` or `Item`.</span> |
| <Link id="m-op-implicit-3" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/hashediteminfo">{"HashedItemInfo"}</Link>{" op_Implicit("}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> | <span className="api-desc">Builds one from a `HashedGeneralValue`, `NetworkPrefab` or `Item`.</span> |

## Used in

Members of other types that take, return or hold a `HashedItemInfo`:

<div className="api-used-in">

[`ProgressCommandModule.ListBooks`](/mod/game-api/types/alta-console/progresscommandmodule#m-listbooks), [`RepairBoxModule.ListItems`](/mod/game-api/types/alta-console/repairboxmodule#m-listitems), [`SpawnCommandModule.FindPrefab`](/mod/game-api/types/alta-console/spawncommandmodule#m-findprefab), [`SpawnCommandModule.ListPopulations`](/mod/game-api/types/alta-console/spawncommandmodule#m-listpopulations), [`SpawnCommandModule.SpawnLists.GetAll`](/mod/game-api/types/alta-console/spawncommandmodule-spawnlists#m-getall), [`FestivityCommandModule.ListFestivities`](/mod/game-api/types/global-e-h/festivitycommandmodule#m-listfestivities).

</div>
