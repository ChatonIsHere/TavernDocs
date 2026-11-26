---
title: "NetworkEntityInfo"
description: "A short summary of a network entity (ID and name) returned by console commands such as spawn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkEntityInfo

A **class** in `Root.Township`, `Alta.Console.Commands`.

A short summary of a network entity (ID and name) returned by console commands such as spawn. Any `NetworkEntity` converts to it.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkEntityInfo()"}</code> | <span className="api-desc">Creates a `NetworkEntityInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"uint Identifier { get; set; }"}</code> | <span className="api-desc">The entity's network ID.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">The entity's original name, without the ID prefix added when it's initialized.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{" op_Implicit("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Builds the summary from a network entity.</span> |

## Used in

Members of other types that take, return or hold a `NetworkEntityInfo`:

<div className="api-used-in">

[`RepairBoxModule.SpawnBox`](/mod/game-api/types/alta-console/repairboxmodule#m-spawnbox), [`SelectionCommandModule.FindObjects`](/mod/game-api/types/alta-console/selectioncommandmodule#m-findobjects), [`SpawnCommandModule.FindPrefabAndSpawn`](/mod/game-api/types/alta-console/spawncommandmodule#m-findprefabandspawn), [`SpawnCommandModule.For`](/mod/game-api/types/alta-console/spawncommandmodule#m-for), [`SpawnCommandModule.SpawnAtPosition`](/mod/game-api/types/alta-console/spawncommandmodule#m-spawnatposition), [`SpawnCommandModule.SpawnLocal`](/mod/game-api/types/alta-console/spawncommandmodule#m-spawnlocal), [`SpawnCommandModule.SpawnPopulation`](/mod/game-api/types/alta-console/spawncommandmodule#m-spawnpopulation), [`SpawnCommandModule.SpawnString`](/mod/game-api/types/alta-console/spawncommandmodule#m-spawnstring), [`SpawnCommandModule.SpawnStringRaw`](/mod/game-api/types/alta-console/spawncommandmodule#m-spawnstringraw), [`UserInfoDetailed.Body`](/mod/game-api/types/alta-console/userinfodetailed#m-body).

</div>
