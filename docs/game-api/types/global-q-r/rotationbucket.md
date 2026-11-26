---
title: "RotationBucket"
description: "One part that FaceObject turns to face the hands holding its handle pickups."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RotationBucket

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One part that `FaceObject` turns to face the hands holding its handle pickups.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotationBucket()"}</code> | Creates a `RotationBucket` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-clampdegrees" /><code>{"float clampDegrees"}</code> | In advanced mode, the most the part may turn away from its rest rotation. |
| <Link id="m-handlepickups" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] handlePickups"}</code> | Pickups whose holders' hand positions are averaged to get the point to face. |
| <Link id="m-isusingadvanced" /><code>{"bool isUsingAdvanced"}</code> | Uses the advanced mode, which works in local space and clamps the angle. |
| <Link id="m-lastto" /><code>{"Vector3 lastTo"}</code> | Direction to the tracked point from the last update. |
| <Link id="m-lerpspeed" /><code>{"float lerpSpeed"}</code> | Smoothing speed when `slerp` is on. |
| <Link id="m-rotatingobject" /><code>{"Transform rotatingObject"}</code> | The transform that gets rotated. |
| <Link id="m-rotationaxis" /><code>{"Vector3 rotationAxis"}</code> | The axis the part turns around. |
| <Link id="m-slerp" /><code>{"bool slerp"}</code> | Smooths the turn with a slerp at `lerpSpeed`. |
| <Link id="m-trackingvector" /><code>{"Vector3 trackingVector"}</code> | Current average hand position the part turns towards. |

## Used in

Members of other types that take, return or hold a `RotationBucket`:

[`FaceObject.Advanced`](/game-api/types/global-e-h/faceobject#m-advanced), [`FaceObject.partsToRotate`](/game-api/types/global-e-h/faceobject#m-partstorotate), [`FaceObject.Simple`](/game-api/types/global-e-h/faceobject#m-simple), [`RotatePickupPuzzleOLD.Advanced`](/game-api/types/global-q-r/rotatepickuppuzzleold#m-advanced), [`RotatePickupPuzzleOLD.partsToRotate`](/game-api/types/global-q-r/rotatepickuppuzzleold#m-partstorotate), [`RotatePickupPuzzleOLD.Simple`](/game-api/types/global-q-r/rotatepickuppuzzleold#m-simple).
