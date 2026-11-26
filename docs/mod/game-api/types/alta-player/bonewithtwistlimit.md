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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Derived types** [`BoneWithRotationLimit`](/mod/game-api/types/alta-player/bonewithrotationlimit)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoneWithTwistLimit()"}</code> | <span className="api-desc">Creates a `BoneWithTwistLimit` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bone" /><code>{"private Transform bone"}</code> | <span className="api-desc">Backing field for `Bone`.</span> |
| <Link id="m-rotationtwist" /><code>{"private float rotationTwist"}</code> | <span className="api-desc">Backing field for `RotationTwist`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bone-2" /><code>{"Transform Bone { get; set; }"}</code> | <span className="api-desc">The bone transform.</span> |
| <Link id="m-rotationtwist-2" /><code>{"float RotationTwist { get; set; }"}</code> | <span className="api-desc">Twist limit in degrees, from 0 to 180.</span> |

## Used in

Members of other types that take, return or hold a `BoneWithTwistLimit`:

<div className="api-used-in">

[`ShoulderTwistControllerHelper.twistLimit`](/mod/game-api/types/alta-player/shouldertwistcontrollerhelper#m-twistlimit).

</div>
