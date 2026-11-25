---
title: "NetworkAxisRotation"
description: "class NetworkAxisRotation in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkAxisRotation

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkAxisValue`](/game-api/types/alta-networking/networkaxisvalue)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkAxisRotation()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-addrotationmultiplier" /><code>{"private float addRotationMultiplier"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"protected override float CurrentValue { get; }"}</code> |  |
| <Link id="m-maximumvalue" /><code>{"protected override float MaximumValue { get; }"}</code> |  |
| <Link id="m-minimumvalue" /><code>{"protected override float MinimumValue { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-rotateangle" /><code>{"void RotateAngle(float angle)"}</code> |  |
| <Link id="m-applyvalue" /><code>{"protected override void ApplyValue(float value)"}</code> |  |
| <Link id="m-clampvalue" /><code>{"private float ClampValue(float value)"}</code> |  |
| <Link id="m-getdifference" /><code>{"protected override float GetDifference(float currentValue, float value)"}</code> |  |
| <Link id="m-lerptovalue" /><code>{"protected override float LerpToValue(float value, float lerpValue)"}</code> |  |

## Used in

Members of other types that take, return or hold a `NetworkAxisRotation`:

[`Rotator.axisRotation`](/game-api/types/game-other-namespaces/rotator#m-axisrotation).
