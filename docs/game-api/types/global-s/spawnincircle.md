---
title: "SpawnInCircle"
description: "class SpawnInCircle in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnInCircle

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<SpawnInCircleSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<SpawnInCircleSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`SpawnInCircleSaveData`](/game-api/types/global-s/spawnincirclesavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpawnInCircle()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-items" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" items"}</code> |
| <Link id="m-maxradius" /><code>{"private float maxRadius"}</code> |
| <Link id="m-minradius" /><code>{"private float minRadius"}</code> |
| <Link id="m-numofitems" /><code>{"private int numOfItems"}</code> |
| <Link id="m-randomoffset" /><code>{"private Vector3 randomOffset"}</code> |
| <Link id="m-shouldbekinematic" /><code>{"private bool shouldBeKinematic"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-circlespawn" /><code>{"void CircleSpawn()"}</code> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
