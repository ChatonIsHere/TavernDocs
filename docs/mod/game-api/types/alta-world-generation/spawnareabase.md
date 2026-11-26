---
title: "SpawnAreaBase"
description: "Base for components that give a random spawn position, such as CircularSpawnPointGenerator."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnAreaBase

An **abstract class** in `Root.Township`, `Alta.Populations`.

Base for components that give a random spawn position, such as `CircularSpawnPointGenerator`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CircularSpawnPointGenerator`](/mod/game-api/types/alta-world-generation/circularspawnpointgenerator)
- **Documented in** [Populations and spawners](/mod/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SpawnAreaBase()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandomspawnposition" /><code>{"abstract Vector3 GetRandomSpawnPosition()"}</code> | <span className="api-desc">A random world position inside the area.</span> |
