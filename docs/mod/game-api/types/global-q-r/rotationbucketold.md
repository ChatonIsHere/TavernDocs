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
| <Link id="m-ctor" /><code>{"RotationBucketOLD()"}</code> | Creates a `RotationBucketOLD` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-clampdegrees" /><code>{"float clampDegrees"}</code> | Maximum degrees the part can turn from its rest rotation. Default 360. |
| <Link id="m-handlepickups" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] handlePickups"}</code> | Pickups the player grabs to turn the part. |
| <Link id="m-isusingadvanced" /><code>{"bool isUsingAdvanced"}</code> | Uses the local-space, clamped rotation mode instead of the simple one. |
| <Link id="m-lastto" /><code>{"Vector3 lastTo"}</code> | Direction to the hands last frame. Runtime only. |
| <Link id="m-lerpspeed" /><code>{"float lerpSpeed"}</code> | How fast the direction is smoothed when `slerp` is on. |
| <Link id="m-rotatingobject" /><code>{"Transform rotatingObject"}</code> | The transform that turns. |
| <Link id="m-rotationaxis" /><code>{"Vector3 rotationAxis"}</code> | Axis the part turns around. Default up. |
| <Link id="m-slerp" /><code>{"bool slerp"}</code> | Smooths the tracked direction with a slerp. |
| <Link id="m-trackingvector" /><code>{"Vector3 trackingVector"}</code> | Current point the part tracks (the hands' midpoint). Runtime only. |
