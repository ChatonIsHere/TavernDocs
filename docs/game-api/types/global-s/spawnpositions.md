---
title: "SpawnPositions"
description: "class SpawnPositions in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnPositions

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`ISpawnPositions`](/game-api/types/global-i-l/ispawnpositions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnPositions()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-btncache" /><code>{"private bool btnCache"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-positions" /><code>{"private Vector3[] positions"}</code> |  |
| <Link id="m-rotations" /><code>{"private Quaternion[] rotations"}</code> |  |
| <Link id="m-transforms" /><code>{"private Transform[] transforms"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cache" /><code>{"void Cache()"}</code> |  |
| <Link id="m-getlocalspawnposition" /><code><Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetLocalSpawnPosition(int index)"}</code> |  |
| <Link id="m-getspawnposition" /><code><Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetSpawnPosition(int index)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-setsize" /><code>{"private void ISpawnPositions.SetSize(float size)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SpawnPositions`:

[`PotatoSapling.positions`](/game-api/types/global-p/potatosapling#m-positions), [`StaticPositionSpawner.positions`](/game-api/types/global-s/staticpositionspawner#m-positions).
