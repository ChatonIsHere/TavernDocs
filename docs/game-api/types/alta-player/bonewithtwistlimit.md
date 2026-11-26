---
title: "BoneWithTwistLimit"
description: "A bone and how far it may twist, set in the inspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoneWithTwistLimit

A **class** in `Root.Township`, `Alta.Character`.

A bone and how far it may twist, set in the inspector. `ShoulderTwistControllerHelper` uses one, and `BoneWithRotationLimit` extends it.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Derived types** [`BoneWithRotationLimit`](/game-api/types/alta-player/bonewithrotationlimit)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BoneWithTwistLimit()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bone" /><code>{"private Transform bone"}</code> | Backing field for `Bone`. |
| <Link id="m-rotationtwist" /><code>{"private float rotationTwist"}</code> | Backing field for `RotationTwist`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bone-2" /><code>{"Transform Bone { get; set; }"}</code> | The bone transform. |
| <Link id="m-rotationtwist-2" /><code>{"float RotationTwist { get; set; }"}</code> | Twist limit in degrees, from 0 to 180. |

## Used in

Members of other types that take, return or hold a `BoneWithTwistLimit`:

[`ShoulderTwistControllerHelper.twistLimit`](/game-api/types/alta-player/shouldertwistcontrollerhelper#m-twistlimit).
