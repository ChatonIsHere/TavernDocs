---
title: "HandGrip.ThumbGripJoint"
description: "A thumb joint of a HandGrip."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandGrip.ThumbGripJoint

A **class** in `Root.Township`, `Alta.Character`.

A thumb joint of a `HandGrip`. The root thumb joint resets to the current thumb configuration's base rotation before curling.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`HandGrip`](/mod/game-api/types/alta-player/handgrip)
- **Inherits or implements** [`HandGrip.GripJoint`](/mod/game-api/types/alta-player/handgrip-gripjoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ThumbGripJoint()"}</code> | <span className="api-desc">Creates a `HandGrip.ThumbGripJoint` from `hand`, `joint`, `transform`, `rotations` and `isRoot`.</span> |
| <Link id="m-ctor-2" /><code>{"ThumbGripJoint("}<Link to="/mod/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{" hand, "}<Link to="/mod/game-api/types/alta-player/handgripconfiguration-finger-joint">{"HandGripConfiguration.Finger.Joint"}</Link>{" joint, Transform transform, "}<Link to="/mod/game-api/types/alta-player/handgripconfiguration-rotationsnapshots">{"HandGripConfiguration.RotationSnapshots"}</Link>{" rotations, bool isRoot)"}</code> | <span className="api-desc">Creates a `HandGrip.ThumbGripJoint` from `hand`, `joint`, `transform`, `rotations` and `isRoot`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isroot" /><code>{"private bool isRoot"}</code> | <span className="api-desc">True for the thumb's base joint.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-preparecurl" /><code>{"override void PrepareCurl()"}</code> | <span className="api-desc">For the root joint, sets its local rotation to the thumb configuration's base rotation, then does the normal joint prep.</span> |
