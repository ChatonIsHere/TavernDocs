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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Nested in** [`CharacterEye`](/game-api/types/alta-player/charactereye)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RotationLimit()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-axis" /><code>{"Vector3 axis"}</code> | Main axis of the limit (forward by default). |
| <Link id="m-defaultlocalrotation" /><code>{"Quaternion defaultLocalRotation"}</code> | The eye's rest rotation that the limit is measured from. |
| <Link id="m-spline" /><code>{"AnimationCurve spline"}</code> | Curve that shapes the limit around the axis. |
| <Link id="m-twistlimit" /><code>{"float twistLimit"}</code> | Twist limit in degrees (180 by default, which is no limit). |

## Used in

Members of other types that take, return or hold a `RotationLimit`:

[`CharacterEye.limitArguments`](/game-api/types/alta-player/charactereye#m-limitarguments).
