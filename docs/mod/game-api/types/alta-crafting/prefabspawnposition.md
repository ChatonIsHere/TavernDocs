---
title: "PrefabSpawnPosition"
description: "A prefab and the local position and rotation to spawn it at."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabSpawnPosition

A **class** in `Root.Township`, `Alta.Carpentry`.

A prefab and the local position and rotation to spawn it at. Used for the pieces a `TimberBlock` spawns as its crafted result.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PrefabSpawnPosition()"}</code> | Creates a `PrefabSpawnPosition` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Backing field for `Position`. |
| <Link id="m-prefabhash" /><code>{"private uint prefabHash"}</code> | Backing field for `PrefabHash`. |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | Backing field for `Rotation`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | Local position relative to the spawn point. |
| <Link id="m-prefabhash-2" /><code>{"uint PrefabHash { get; }"}</code> | Hash of the network prefab to spawn. |
| <Link id="m-rotation-2" /><code>{"Quaternion Rotation { get; }"}</code> | Local rotation relative to the spawn point. |

## Used in

Members of other types that take, return or hold a `PrefabSpawnPosition`:

[`ChiselDefinition.prefabs`](/mod/game-api/types/alta-crafting/chiseldefinition#m-prefabs), [`ChiselDefinition.Prefabs`](/mod/game-api/types/alta-crafting/chiseldefinition#m-prefabs-2).
