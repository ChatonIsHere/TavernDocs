---
title: "LiquidGravity"
description: "class LiquidGravity in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidGravity

A **class** in `Root.Township`, `Alta.Liquid`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidGravity(Transform relativeTo)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-disableframes" /><code>{"private int disableFrames"}</code> |  |
| <Link id="m-disableframeswhilestationary" /><code>{"private const int DisableFramesWhileStationary"}</code> |  |
| <Link id="m-localup" /><code>{"private Vector3 localUp"}</code> |  |
| <Link id="m-oldposition" /><code>{"private Vector3 oldPosition"}</code> |  |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> |  |
| <Link id="m-velocity" /><code>{"private float velocity"}</code> |  |
| <Link id="m-velocityaxis" /><code>{"private Vector3 velocityAxis"}</code> |  |
| <Link id="m-worldup" /><code>{"private Vector3 worldUp"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-gravitymultiplier" /><code>{"float GravityMultiplier { get; set; }"}</code> |  |
| <Link id="m-maximumvelocity" /><code>{"float MaximumVelocity { get; set; }"}</code> |  |
| <Link id="m-movementmultiplier" /><code>{"float MovementMultiplier { get; set; }"}</code> |  |
| <Link id="m-tip" /><code>{"float Tip { get; private set; }"}</code> |  |
| <Link id="m-tippingthreshold" /><code>{"float TippingThreshold { get; set; }"}</code> |  |
| <Link id="m-tippingvalue" /><code>{"float TippingValue { get; private set; }"}</code> |  |
| <Link id="m-velocitydrag" /><code>{"float VelocityDrag { get; set; }"}</code> |  |
| <Link id="m-visualtiplimit" /><code>{"float VisualTipLimit { get; set; }"}</code> |  |
| <Link id="m-visualup" /><code>{"Vector3 VisualUp { get; private set; }"}</code> |  |
| <Link id="m-worldup-2" /><code>{"Vector3 WorldUp { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"void Reset()"}</code> |  |
| <Link id="m-resetdisableframes" /><code>{"void ResetDisableFrames()"}</code> |  |
| <Link id="m-update" /><code>{"bool Update(float deltaTime)"}</code> |  |

## Used in

Members of other types that take, return or hold a `LiquidGravity`:

[`LiquidGravityAdjustment.SetThickness`](/game-api/types/alta-stats-effects/liquidgravityadjustment#m-setthickness), [`LiquidSurfaceVisual.liquidGravity`](/game-api/types/alta-stats-effects/liquidsurfacevisual#m-liquidgravity), [`LiquidSurfaceVisual.LiquidGravity`](/game-api/types/alta-stats-effects/liquidsurfacevisual#m-liquidgravity-2).
