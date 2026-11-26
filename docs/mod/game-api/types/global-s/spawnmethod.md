---
title: "SpawnMethod"
description: "How a spawner picks its next spawn point: in order or at random."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnMethod

An **enum** in `Root.Township`, the global namespace.

How a spawner picks its next spawn point: in order or at random.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)

## Values

| Member |
| --- |
| <Link id="m-random" /><code>{"Random = 1"}</code> |
| <Link id="m-sequence" /><code>{"Sequence = 0"}</code> |

## Used in

Members of other types that take, return or hold a `SpawnMethod`:

[`MultipleSpawner.SimpleSpawner.method`](/mod/game-api/types/global-m-o/multiplespawner-simplespawner#m-method), [`MultipleSpawner.SimpleSpawner.Method`](/mod/game-api/types/global-m-o/multiplespawner-simplespawner#m-method-2), [`SpawnerBase.method`](/mod/game-api/types/global-s/spawnerbase#m-method).
