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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Nested in** [`CharacterCollisionControllerHelper`](/game-api/types/alta-player/charactercollisioncontrollerhelper)
- **Inherits or implements** [`CharacterCollisionControllerHelper.BoneCollider`](/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecollider)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BoneMeshCollider()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-meshes" /><code>{"private Mesh[] meshes"}</code> | Backing field for `Meshes`. |
| <Link id="m-positionoffset" /><code>{"private Vector3 positionOffset"}</code> | Backing field for `PositionOffset`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-meshes-2" /><code>{"Mesh[] Meshes { get; }"}</code> | The meshes to make colliders from, one collider each. |
| <Link id="m-positionoffset-2" /><code>{"Vector3 PositionOffset { get; }"}</code> | Local position of the child object that holds the colliders. |

## Used in

Members of other types that take, return or hold a `BoneMeshCollider`:

[`CharacterCollisionControllerHelper.meshColliders`](/game-api/types/alta-player/charactercollisioncontrollerhelper#m-meshcolliders).
