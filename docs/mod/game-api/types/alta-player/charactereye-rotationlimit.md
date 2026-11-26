---
title: "CharacterEye.RotationLimit"
description: "Inspector settings that CharacterEye.Bake copies onto the RotationLimitSpline it adds to the eye bone."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterEye.RotationLimit

A **private class** in `Root.Township`, `Alta.Character`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Inspector settings that `CharacterEye.Bake` copies onto the `RotationLimitSpline` it adds to the eye bone.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`CharacterEye`](/mod/game-api/types/alta-player/charactereye)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotationLimit()"}</code> | <span className="api-desc">Creates a `CharacterEye.RotationLimit` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-axis" /><code>{"Vector3 axis"}</code> | <span className="api-desc">Main axis of the limit (forward by default).</span> |
| <Link id="m-defaultlocalrotation" /><code>{"Quaternion defaultLocalRotation"}</code> | <span className="api-desc">The eye's rest rotation that the limit is measured from.</span> |
| <Link id="m-spline" /><code>{"AnimationCurve spline"}</code> | <span className="api-desc">Curve that shapes the limit around the axis.</span> |
| <Link id="m-twistlimit" /><code>{"float twistLimit"}</code> | <span className="api-desc">Twist limit in degrees (180 by default, which is no limit).</span> |

## Used in

Members of other types that take, return or hold a `RotationLimit`:

<div className="api-used-in">

[`CharacterEye.limitArguments`](/mod/game-api/types/alta-player/charactereye#m-limitarguments).

</div>
