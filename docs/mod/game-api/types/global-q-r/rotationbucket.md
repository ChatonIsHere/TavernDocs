---
title: "RotationBucket"
description: "One part that FaceObject turns to face the hands holding its handle pickups."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RotationBucket

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One part that `FaceObject` turns to face the hands holding its handle pickups.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotationBucket()"}</code> | <span className="api-desc">Creates a `RotationBucket` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-clampdegrees" /><code>{"float clampDegrees"}</code> | <span className="api-desc">In advanced mode, the most the part may turn away from its rest rotation.</span> |
| <Link id="m-handlepickups" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] handlePickups"}</code> | <span className="api-desc">Pickups whose holders' hand positions are averaged to get the point to face.</span> |
| <Link id="m-isusingadvanced" /><code>{"bool isUsingAdvanced"}</code> | <span className="api-desc">Uses the advanced mode, which works in local space and clamps the angle.</span> |
| <Link id="m-lastto" /><code>{"Vector3 lastTo"}</code> | <span className="api-desc">Direction to the tracked point from the last update.</span> |
| <Link id="m-lerpspeed" /><code>{"float lerpSpeed"}</code> | <span className="api-desc">Smoothing speed when `slerp` is on.</span> |
| <Link id="m-rotatingobject" /><code>{"Transform rotatingObject"}</code> | <span className="api-desc">The transform that gets rotated.</span> |
| <Link id="m-rotationaxis" /><code>{"Vector3 rotationAxis"}</code> | <span className="api-desc">The axis the part turns around.</span> |
| <Link id="m-slerp" /><code>{"bool slerp"}</code> | <span className="api-desc">Smooths the turn with a slerp at `lerpSpeed`.</span> |
| <Link id="m-trackingvector" /><code>{"Vector3 trackingVector"}</code> | <span className="api-desc">Current average hand position the part turns towards.</span> |

## Used in

Members of other types that take, return or hold a `RotationBucket`:

<div className="api-used-in">

[`FaceObject.Advanced`](/mod/game-api/types/global-e-h/faceobject#m-advanced), [`FaceObject.partsToRotate`](/mod/game-api/types/global-e-h/faceobject#m-partstorotate), [`FaceObject.Simple`](/mod/game-api/types/global-e-h/faceobject#m-simple), [`RotatePickupPuzzleOLD.Advanced`](/mod/game-api/types/global-q-r/rotatepickuppuzzleold#m-advanced), [`RotatePickupPuzzleOLD.partsToRotate`](/mod/game-api/types/global-q-r/rotatepickuppuzzleold#m-partstorotate), [`RotatePickupPuzzleOLD.Simple`](/mod/game-api/types/global-q-r/rotatepickuppuzzleold#m-simple).

</div>
