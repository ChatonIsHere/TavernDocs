---
title: "ShakeDetectorHelper"
description: "Plain helper that tracks how hard a rigidbody is being shaken back and forth and fires an event past a threshold."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShakeDetectorHelper

A **class** in `Root.Township`, the global namespace.

Plain helper that tracks how hard a rigidbody is being shaken back and forth and fires an event past a threshold. Made by `ShakeDetector`, `ShakeDetectorFactory` and `ShakeInput`, which call `CalculateShake` each frame.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShakeDetectorHelper(float velocityThresholdSquared, float threshold, float fadePerSecond, float jumpPerChange, Rigidbody targetRigidBody)"}</code> | <span className="api-desc">Creates a `ShakeDetectorHelper` from `velocityThresholdSquared`, `threshold`, `fadePerSecond`, `jumpPerChange` and `targetRigidBody`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadepersecond" /><code>{"private float fadePerSecond"}</code> | <span className="api-desc">How much `Strength` drops per second.</span> |
| <Link id="m-jumpperchange" /><code>{"private float jumpPerChange"}</code> | <span className="api-desc">Strength added for a full reversal of direction (scaled by how opposite the new direction is).</span> |
| <Link id="m-olddirection" /><code>{"private Vector3 oldDirection"}</code> | <span className="api-desc">Velocity direction from the last check, compared with the current one.</span> |
| <Link id="m-targetrigidbody" /><code>{"private Rigidbody targetRigidBody"}</code> | <span className="api-desc">The rigidbody whose velocity is watched.</span> |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> | <span className="api-desc">Strength at which `Shaken` fires. Zero or less turns firing off.</span> |
| <Link id="m-velocitythresholdsquared" /><code>{"private float velocityThresholdSquared"}</code> | <span className="api-desc">Squared speed below which movement is ignored.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-strength" /><code>{"float Strength { get; private set; }"}</code> | <span className="api-desc">Current shake strength. Grows with each direction reversal and fades over time.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-shaken" /><code>{"event Action Shaken"}</code> | <span className="api-desc">Raised when `Strength` passes the threshold. The handler must be set, as it is called without a null check.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculateshake" /><code>{"void CalculateShake()"}</code> | <span className="api-desc">Fades `Strength`, then adds to it when the velocity reverses direction; raises `Shaken` and resets once it passes `threshold`.</span> |

## Used in

Members of other types that take, return or hold a `ShakeDetectorHelper`:

<div className="api-used-in">

[`FireBug.shakeDetector`](/mod/game-api/types/alta-intelligence/firebug#m-shakedetector), [`ShakeDetector.helper`](/mod/game-api/types/global-s/shakedetector#m-helper), [`ShakeDetectorFactory.GetHelper`](/mod/game-api/types/global-s/shakedetectorfactory#m-gethelper), [`ShakeInput.shakeHelper`](/mod/game-api/types/global-s/shakeinput#m-shakehelper).

</div>
