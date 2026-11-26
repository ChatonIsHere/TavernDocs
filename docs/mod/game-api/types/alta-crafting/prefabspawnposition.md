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
| <Link id="m-ctor" /><code>{"PrefabSpawnPosition()"}</code> | <span className="api-desc">Creates a `PrefabSpawnPosition` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Backing field for `Position`.</span> |
| <Link id="m-prefabhash" /><code>{"private uint prefabHash"}</code> | <span className="api-desc">Backing field for `PrefabHash`.</span> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | <span className="api-desc">Backing field for `Rotation`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | <span className="api-desc">Local position relative to the spawn point.</span> |
| <Link id="m-prefabhash-2" /><code>{"uint PrefabHash { get; }"}</code> | <span className="api-desc">Hash of the network prefab to spawn.</span> |
| <Link id="m-rotation-2" /><code>{"Quaternion Rotation { get; }"}</code> | <span className="api-desc">Local rotation relative to the spawn point.</span> |

## Used in

Members of other types that take, return or hold a `PrefabSpawnPosition`:

<div className="api-used-in">

[`ChiselDefinition.prefabs`](/mod/game-api/types/alta-crafting/chiseldefinition#m-prefabs), [`ChiselDefinition.Prefabs`](/mod/game-api/types/alta-crafting/chiseldefinition#m-prefabs-2).

</div>
