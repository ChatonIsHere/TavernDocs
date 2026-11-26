---
title: "PositionRecord"
description: "A saved position and rotation, either in world space or relative to another transform depending on which constructor made it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionRecord

A **struct** in `Root.Township`, the global namespace.

A saved position and rotation, either in world space or relative to another transform depending on which constructor made it.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionRecord(Vector3 position, Quaternion rotation)"}</code> | <span className="api-desc">Creates a `PositionRecord` from `to` and `from`.</span> |
| <Link id="m-ctor-2" /><code>{"PositionRecord(Transform transform)"}</code> | <span className="api-desc">Creates a `PositionRecord` from `to` and `from`.</span> |
| <Link id="m-ctor-3" /><code>{"PositionRecord(Transform to, Transform from)"}</code> | <span className="api-desc">Creates a `PositionRecord` from `to` and `from`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">The position, world or local to the reference transform.</span> |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | <span className="api-desc">The rotation, world or local to the reference transform.</span> |

## Used in

Members of other types that take, return or hold a `PositionRecord`:

<div className="api-used-in">

[`ImpactGenerator.FromTool`](/mod/game-api/types/alta-items/impactgenerator#m-fromtool), [`PositionRecorder.positionArray`](/mod/game-api/types/global-p/positionrecorder#m-positionarray), [`PositionRecorder.Positions`](/mod/game-api/types/global-p/positionrecorder#m-positions).

</div>
