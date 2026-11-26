---
title: "CharacterCollisionControllerHelper.BoneBoxCollider"
description: "Settings for a box collider on a character bone, used by CharacterCollisionControllerHelper when it builds the body colliders."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterCollisionControllerHelper.BoneBoxCollider

A **class** in `Root.Township`, `Alta.Character`.

Settings for a box collider on a character bone, used by `CharacterCollisionControllerHelper` when it builds the body colliders.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`CharacterCollisionControllerHelper`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper)
- **Inherits or implements** [`CharacterCollisionControllerHelper.BoneCollider`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecollider)
- **Derived types** [`CharacterCollisionControllerHelper.HandPalmCollider`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-handpalmcollider)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoneBoxCollider()"}</code> | <span className="api-desc">Creates a `CharacterCollisionControllerHelper.BoneBoxCollider` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-center" /><code>{"private Vector3 center"}</code> | <span className="api-desc">Backing field for `Center`.</span> |
| <Link id="m-size" /><code>{"private Vector3 size"}</code> | <span className="api-desc">Backing field for `Size`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-center-2" /><code>{"Vector3 Center { get; }"}</code> | <span className="api-desc">Centre of the box in the bone's space.</span> |
| <Link id="m-size-2" /><code>{"Vector3 Size { get; }"}</code> | <span className="api-desc">Size of the box.</span> |

## Used in

Members of other types that take, return or hold a `BoneBoxCollider`:

<div className="api-used-in">

[`CharacterCollisionControllerHelper.CreateBoxCollider`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper#m-createboxcollider).

</div>
