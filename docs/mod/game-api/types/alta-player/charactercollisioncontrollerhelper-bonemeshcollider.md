---
title: "CharacterCollisionControllerHelper.BoneMeshCollider"
description: "Settings for mesh colliders on a character bone."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterCollisionControllerHelper.BoneMeshCollider

A **class** in `Root.Township`, `Alta.Character`.

Settings for mesh colliders on a character bone. `CharacterCollisionControllerHelper` adds one `MeshCollider` per mesh on a child object of the bone.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`CharacterCollisionControllerHelper`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper)
- **Inherits or implements** [`CharacterCollisionControllerHelper.BoneCollider`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecollider)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoneMeshCollider()"}</code> | <span className="api-desc">Creates a `CharacterCollisionControllerHelper.BoneMeshCollider` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-meshes" /><code>{"private Mesh[] meshes"}</code> | <span className="api-desc">Backing field for `Meshes`.</span> |
| <Link id="m-positionoffset" /><code>{"private Vector3 positionOffset"}</code> | <span className="api-desc">Backing field for `PositionOffset`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-meshes-2" /><code>{"Mesh[] Meshes { get; }"}</code> | <span className="api-desc">The meshes to make colliders from, one collider each.</span> |
| <Link id="m-positionoffset-2" /><code>{"Vector3 PositionOffset { get; }"}</code> | <span className="api-desc">Local position of the child object that holds the colliders.</span> |

## Used in

Members of other types that take, return or hold a `BoneMeshCollider`:

<div className="api-used-in">

[`CharacterCollisionControllerHelper.meshColliders`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper#m-meshcolliders).

</div>
