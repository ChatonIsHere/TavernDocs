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
| <Link id="m-ctor" /><code>{"RotationLimitWrapper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iscachingbonerotation" /><code>{"private bool isCachingBoneRotation"}</code> | <span className="api-desc">When true (the default), the last rotation inside the limit is kept and restored.</span> |
| <Link id="m-lastwristrotation" /><code>{"private Quaternion lastWristRotation"}</code> | <span className="api-desc">The last local rotation that needed no correction.</span> |
| <Link id="m-rotationlimit" /><code>{"private RotationLimit rotationLimit"}</code> | <span className="api-desc">Backing field for `RotationLimit`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-rotationlimit-2" /><code>{"RotationLimit RotationLimit { get; set; }"}</code> | <span className="api-desc">The rotation limit to apply.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | <span className="api-desc">Applies the limit. With caching on, keeps the rotation if no correction was needed, otherwise puts back the last good one.</span> |

## Used in

Members of other types that take, return or hold a `RotationLimitWrapper`:

<div className="api-used-in">

[`ArmIKController.rotationLimitWrapper`](/mod/game-api/types/alta-player/armikcontroller#m-rotationlimitwrapper).

</div>
