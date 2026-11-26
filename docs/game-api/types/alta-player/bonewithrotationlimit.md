---
title: "BoneWithRotationLimit"
description: "A spine bone with a swing limit as well as the twist limit from BoneWithTwistLimit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoneWithRotationLimit

A **class** in `Root.Township`, `Alta.Character`.

A spine bone with a swing limit as well as the twist limit from `BoneWithTwistLimit`. `SpineIKHelper` keeps three of these and turns them into `RotationLimitAngle` components on the spine IK.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`BoneWithTwistLimit`](/game-api/types/alta-player/bonewithtwistlimit)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoneWithRotationLimit()"}</code> | Creates a `BoneWithRotationLimit` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-rotationangle" /><code>{"private float rotationAngle"}</code> | Backing field for `RotationAngle`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-rotationangle-2" /><code>{"float RotationAngle { get; set; }"}</code> | Swing limit in degrees (0 to 180), copied to the bone's `RotationLimitAngle.limit` when the spine IK is set up. |

## Used in

Members of other types that take, return or hold a `BoneWithRotationLimit`:

[`NeckIKControllerHelper.neckBones`](/game-api/types/alta-player/neckikcontrollerhelper#m-neckbones), [`SpineIKHelper.spineBones`](/game-api/types/alta-player/spineikhelper#m-spinebones).
