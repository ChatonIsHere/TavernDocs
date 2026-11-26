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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CircularSpawnPointGenerator`](/game-api/types/alta-world-generation/circularspawnpointgenerator)
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected SpawnAreaBase()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandomspawnposition" /><code>{"abstract Vector3 GetRandomSpawnPosition()"}</code> | A random world position inside the area. |
