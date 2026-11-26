---
title: "TerrainModificationRegister"
description: "Singleton that gives each GenerationStarter an id and makes sure terrain is only modified once per id."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TerrainModificationRegister

A **class** in `Root.Township`, no namespace.

Singleton that gives each `GenerationStarter` an id and makes sure terrain is only modified once per id.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`SingletonBehaviour<TerrainModificationRegister>`](/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`TerrainModificationRegister`](/game-api/types/global-t-x/terrainmodificationregister)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TerrainModificationRegister()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nextid" /><code>{"private uint nextId"}</code> | Next id to hand out. |
| <Link id="m-spawned" /><code>{"private HashSet<uint> spawned"}</code> | Ids that have already modified terrain. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkmodify" /><code>{"bool CheckModify(uint id)"}</code> | Returns true the first time an id is checked, so the caller should modify terrain; false after that. |
| <Link id="m-getnextid" /><code>{"uint GetNextId()"}</code> | Returns a new id, counting up from 1. |
