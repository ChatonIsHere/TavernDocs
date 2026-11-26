---
title: "TwistLimit"
description: "A FinalIK rotation limit that only caps twist around the limit's axis."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TwistLimit

A **class** in `Root.Township`, the global namespace.

A FinalIK rotation limit that only caps twist around the limit's axis.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `RotationLimit`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TwistLimit()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-twistlimit" /><code>{"private float twistLimit"}</code> | <span className="api-desc">Maximum twist in degrees, 0 to 180. Backing field for `TwistLimitAngle`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-twistlimitangle" /><code>{"float TwistLimitAngle { get; set; }"}</code> | <span className="api-desc">Gets or sets the twist limit in degrees.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-limitrotation" /><code>{"protected override Quaternion LimitRotation(Quaternion rotation)"}</code> | <span className="api-desc">Applies `RotationLimit.LimitTwist` with the axis, secondary axis and `twistLimit`.</span> |
