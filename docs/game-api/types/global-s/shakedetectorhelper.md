---
title: "ShakeDetectorHelper"
description: "class ShakeDetectorHelper in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShakeDetectorHelper

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShakeDetectorHelper(float velocityThresholdSquared, float threshold, float fadePerSecond, float jumpPerChange, Rigidbody targetRigidBody)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fadepersecond" /><code>{"private float fadePerSecond"}</code> |  |
| <Link id="m-jumpperchange" /><code>{"private float jumpPerChange"}</code> |  |
| <Link id="m-olddirection" /><code>{"private Vector3 oldDirection"}</code> |  |
| <Link id="m-targetrigidbody" /><code>{"private Rigidbody targetRigidBody"}</code> |  |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> |  |
| <Link id="m-velocitythresholdsquared" /><code>{"private float velocityThresholdSquared"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-strength" /><code>{"float Strength { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-shaken" /><code>{"event Action Shaken"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculateshake" /><code>{"void CalculateShake()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ShakeDetectorHelper`:

[`FireBug.shakeDetector`](/game-api/types/alta-intelligence/firebug#m-shakedetector), [`ShakeDetector.helper`](/game-api/types/global-s/shakedetector#m-helper), [`ShakeDetectorFactory.GetHelper`](/game-api/types/global-s/shakedetectorfactory#m-gethelper), [`ShakeInput.shakeHelper`](/game-api/types/global-s/shakeinput#m-shakehelper).
