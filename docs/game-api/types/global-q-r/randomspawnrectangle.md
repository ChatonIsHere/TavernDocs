---
title: "RandomSpawnRectangle"
description: "class RandomSpawnRectangle in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomSpawnRectangle

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<RandomSpawnRectangleSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<RandomSpawnRectangleSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`RandomSpawnRectangleSaveData`](/game-api/types/global-q-r/randomspawnrectanglesavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomSpawnRectangle()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distribution" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution"}</code> |  |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> |  |
| <Link id="m-minimum" /><code>{"private int minimum"}</code> |  |
| <Link id="m-minimumup" /><code>{"private float minimumUp"}</code> |  |
| <Link id="m-size" /><code>{"private Vector3 size"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-spawnitems" /><code>{"private void SpawnItems("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
