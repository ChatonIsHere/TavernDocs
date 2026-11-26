---
title: "ShakeDetectorHelper"
description: "Plain helper that tracks how hard a rigidbody is being shaken back and forth and fires an event past a threshold."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShakeDetectorHelper

A **class** in `Root.Township`, no namespace.

Plain helper that tracks how hard a rigidbody is being shaken back and forth and fires an event past a threshold. Made by `ShakeDetector`, `ShakeDetectorFactory` and `ShakeInput`, which call `CalculateShake` each frame.

- **Listed in** [No namespace: S](/game-api/types/global-s)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ShakeDetectorHelper(float velocityThresholdSquared, float threshold, float fadePerSecond, float jumpPerChange, Rigidbody targetRigidBody)"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadepersecond" /><code>{"private float fadePerSecond"}</code> | How much `Strength` drops per second. |
| <Link id="m-jumpperchange" /><code>{"private float jumpPerChange"}</code> | Strength added for a full reversal of direction (scaled by how opposite the new direction is). |
| <Link id="m-olddirection" /><code>{"private Vector3 oldDirection"}</code> | Velocity direction from the last check, compared with the current one. |
| <Link id="m-targetrigidbody" /><code>{"private Rigidbody targetRigidBody"}</code> | The rigidbody whose velocity is watched. |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> | Strength at which `Shaken` fires. Zero or less turns firing off. |
| <Link id="m-velocitythresholdsquared" /><code>{"private float velocityThresholdSquared"}</code> | Squared speed below which movement is ignored. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-strength" /><code>{"float Strength { get; private set; }"}</code> | Current shake strength. Grows with each direction reversal and fades over time. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-shaken" /><code>{"event Action Shaken"}</code> | Raised when `Strength` passes the threshold. The handler must be set, as it is called without a null check. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculateshake" /><code>{"void CalculateShake()"}</code> | Fades `Strength`, then adds to it when the velocity reverses direction; raises `Shaken` and resets once it passes `threshold`. |

## Used in

Members of other types that take, return or hold a `ShakeDetectorHelper`:

[`FireBug.shakeDetector`](/game-api/types/alta-intelligence/firebug#m-shakedetector), [`ShakeDetector.helper`](/game-api/types/global-s/shakedetector#m-helper), [`ShakeDetectorFactory.GetHelper`](/game-api/types/global-s/shakedetectorfactory#m-gethelper), [`ShakeInput.shakeHelper`](/game-api/types/global-s/shakeinput#m-shakehelper).
