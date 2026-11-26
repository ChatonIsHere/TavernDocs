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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`BoneWithTwistLimit`](/mod/game-api/types/alta-player/bonewithtwistlimit)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoneWithRotationLimit()"}</code> | <span className="api-desc">Creates a `BoneWithRotationLimit` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-rotationangle" /><code>{"private float rotationAngle"}</code> | <span className="api-desc">Backing field for `RotationAngle`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-rotationangle-2" /><code>{"float RotationAngle { get; set; }"}</code> | <span className="api-desc">Swing limit in degrees (0 to 180), copied to the bone's `RotationLimitAngle.limit` when the spine IK is set up.</span> |

## Used in

Members of other types that take, return or hold a `BoneWithRotationLimit`:

<div className="api-used-in">

[`NeckIKControllerHelper.neckBones`](/mod/game-api/types/alta-player/neckikcontrollerhelper#m-neckbones), [`SpineIKHelper.spineBones`](/mod/game-api/types/alta-player/spineikhelper#m-spinebones).

</div>
