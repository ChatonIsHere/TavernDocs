---
title: "TerrainModificationRegister"
description: "Singleton that gives each GenerationStarter an id and makes sure terrain is only modified once per id."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TerrainModificationRegister

A **class** in `Root.Township`, the global namespace.

Singleton that gives each `GenerationStarter` an id and makes sure terrain is only modified once per id.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`SingletonBehaviour<TerrainModificationRegister>`](/mod/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`TerrainModificationRegister`](/mod/game-api/types/global-t-x/terrainmodificationregister)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TerrainModificationRegister()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nextid" /><code>{"private uint nextId"}</code> | <span className="api-desc">Next id to hand out.</span> |
| <Link id="m-spawned" /><code>{"private HashSet<uint> spawned"}</code> | <span className="api-desc">Ids that have already modified terrain.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkmodify" /><code>{"bool CheckModify(uint id)"}</code> | <span className="api-desc">Returns true the first time an id is checked, so the caller should modify terrain; false after that.</span> |
| <Link id="m-getnextid" /><code>{"uint GetNextId()"}</code> | <span className="api-desc">Returns a new id, counting up from 1.</span> |
