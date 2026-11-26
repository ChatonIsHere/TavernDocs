---
title: "TwistLimit"
description: "A FinalIK rotation limit that only caps twist around the limit's axis."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TwistLimit

A **class** in `Root.Township`, no namespace.

A FinalIK rotation limit that only caps twist around the limit's axis.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `RotationLimit`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TwistLimit()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-twistlimit" /><code>{"private float twistLimit"}</code> | Maximum twist in degrees, 0 to 180. Backing field for `TwistLimitAngle`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-twistlimitangle" /><code>{"float TwistLimitAngle { get; set; }"}</code> | Gets or sets the twist limit in degrees. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-limitrotation" /><code>{"protected override Quaternion LimitRotation(Quaternion rotation)"}</code> | Applies `RotationLimit.LimitTwist` with the axis, secondary axis and `twistLimit`. |
