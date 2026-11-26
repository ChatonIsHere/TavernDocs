---
title: "RotationLimitWrapper"
description: "Character component that applies a rotation limit to a bone (such as a wrist) every physics step, optionally falling back to the last rotation that was..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RotationLimitWrapper

A **class** in `Root.Township`, `Alta.Character`.

Character component that applies a rotation limit to a bone (such as a wrist) every physics step, optionally falling back to the last rotation that was within the limit.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/mod/game-api/types/alta-player/charactercomponentcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotationLimitWrapper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iscachingbonerotation" /><code>{"private bool isCachingBoneRotation"}</code> | When true (the default), the last rotation inside the limit is kept and restored. |
| <Link id="m-lastwristrotation" /><code>{"private Quaternion lastWristRotation"}</code> | The last local rotation that needed no correction. |
| <Link id="m-rotationlimit" /><code>{"private RotationLimit rotationLimit"}</code> | Backing field for `RotationLimit`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-rotationlimit-2" /><code>{"RotationLimit RotationLimit { get; set; }"}</code> | The rotation limit to apply. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | Applies the limit. With caching on, keeps the rotation if no correction was needed, otherwise puts back the last good one. |

## Used in

Members of other types that take, return or hold a `RotationLimitWrapper`:

[`ArmIKController.rotationLimitWrapper`](/mod/game-api/types/alta-player/armikcontroller#m-rotationlimitwrapper).
