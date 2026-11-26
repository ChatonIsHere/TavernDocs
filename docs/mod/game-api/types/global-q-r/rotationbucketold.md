---
title: "RotationBucketOLD"
description: "Settings for one rotating part of the old pickup rotation puzzle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RotationBucketOLD

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Settings for one rotating part of the old pickup rotation puzzle. Serializable data only; nothing in this code uses it.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotationBucketOLD()"}</code> | <span className="api-desc">Creates a `RotationBucketOLD` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-clampdegrees" /><code>{"float clampDegrees"}</code> | <span className="api-desc">Maximum degrees the part can turn from its rest rotation. Default 360.</span> |
| <Link id="m-handlepickups" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] handlePickups"}</code> | <span className="api-desc">Pickups the player grabs to turn the part.</span> |
| <Link id="m-isusingadvanced" /><code>{"bool isUsingAdvanced"}</code> | <span className="api-desc">Uses the local-space, clamped rotation mode instead of the simple one.</span> |
| <Link id="m-lastto" /><code>{"Vector3 lastTo"}</code> | <span className="api-desc">Direction to the hands last frame. Runtime only.</span> |
| <Link id="m-lerpspeed" /><code>{"float lerpSpeed"}</code> | <span className="api-desc">How fast the direction is smoothed when `slerp` is on.</span> |
| <Link id="m-rotatingobject" /><code>{"Transform rotatingObject"}</code> | <span className="api-desc">The transform that turns.</span> |
| <Link id="m-rotationaxis" /><code>{"Vector3 rotationAxis"}</code> | <span className="api-desc">Axis the part turns around. Default up.</span> |
| <Link id="m-slerp" /><code>{"bool slerp"}</code> | <span className="api-desc">Smooths the tracked direction with a slerp.</span> |
| <Link id="m-trackingvector" /><code>{"Vector3 trackingVector"}</code> | <span className="api-desc">Current point the part tracks (the hands' midpoint). Runtime only.</span> |
