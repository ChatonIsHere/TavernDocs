---
title: "PositionRecord"
description: "A saved position and rotation, either in world space or relative to another transform depending on which constructor made it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionRecord

A **struct** in `Root.Township`, no namespace.

A saved position and rotation, either in world space or relative to another transform depending on which constructor made it.

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionRecord(Vector3 position, Quaternion rotation)"}</code> | Creates a `PositionRecord` from `to` and `from`. |
| <Link id="m-ctor-2" /><code>{"PositionRecord(Transform transform)"}</code> | Creates a `PositionRecord` from `to` and `from`. |
| <Link id="m-ctor-3" /><code>{"PositionRecord(Transform to, Transform from)"}</code> | Creates a `PositionRecord` from `to` and `from`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | The position, world or local to the reference transform. |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | The rotation, world or local to the reference transform. |

## Used in

Members of other types that take, return or hold a `PositionRecord`:

[`ImpactGenerator.FromTool`](/game-api/types/alta-items/impactgenerator#m-fromtool), [`PositionRecorder.positionArray`](/game-api/types/global-p/positionrecorder#m-positionarray), [`PositionRecorder.Positions`](/game-api/types/global-p/positionrecorder#m-positions).
