---
title: "CharacterCollisionControllerHelper.BoneCollider"
description: "Base settings for a collider built on one character bone."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterCollisionControllerHelper.BoneCollider

A **class** in `Root.Township`, `Alta.Character`.

Base settings for a collider built on one character bone. Subclasses add capsule, box, mesh or palm settings.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`CharacterCollisionControllerHelper`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper)
- **Derived types** [`CharacterCollisionControllerHelper.BoneBoxCollider`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-boneboxcollider), [`CharacterCollisionControllerHelper.BoneCapsuleCollider`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecapsulecollider), [`CharacterCollisionControllerHelper.BoneMeshCollider`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-bonemeshcollider)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoneCollider()"}</code> | Creates a `CharacterCollisionControllerHelper.BoneCollider` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bone" /><code>{"private Transform bone"}</code> | Backing field for `Bone`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bone-2" /><code>{"Transform Bone { get; set; }"}</code> | The bone transform the collider is created on. |
