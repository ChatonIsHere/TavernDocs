---
title: "LiquidGravity"
description: "Simulates which way a liquid surface points as its container moves and tips, with some sloshing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidGravity

A **class** in `Root.Township`, `Alta.Liquid`.

Simulates which way a liquid surface points as its container moves and tips, with some sloshing. `LiquidSurfaceVisual` uses one. Plain class, client visuals.

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
| <Link id="m-gravitymultiplier" /><code>{"float GravityMultiplier { get; set; }"}</code> | How strongly gravity pulls the surface back level. |
| <Link id="m-maximumvelocity" /><code>{"float MaximumVelocity { get; set; }"}</code> | Cap on how fast the surface can swing, in degrees per second. |
| <Link id="m-movementmultiplier" /><code>{"float MovementMultiplier { get; set; }"}</code> | How much moving the container tilts the surface. |
| <Link id="m-tip" /><code>{"float Tip { get; private set; }"}</code> | Minus the local up's height: above 0 once the surface points below the container's horizontal. |
| <Link id="m-tippingthreshold" /><code>{"float TippingThreshold { get; set; }"}</code> | Tip value where `TippingValue` starts rising above 0. |
| <Link id="m-tippingvalue" /><code>{"float TippingValue { get; private set; }"}</code> | 0 to 1, how far `Tip` is between `TippingThreshold` and fully upside down. |
| <Link id="m-velocitydrag" /><code>{"float VelocityDrag { get; set; }"}</code> | How quickly sloshing dies down. |
| <Link id="m-visualtiplimit" /><code>{"float VisualTipLimit { get; set; }"}</code> | Limit on `Tip` for the drawn surface, so it does not tip past this. |
| <Link id="m-visualup" /><code>{"Vector3 VisualUp { get; private set; }"}</code> | Surface up direction to draw, clamped by `VisualTipLimit`. |
| <Link id="m-worldup-2" /><code>{"Vector3 WorldUp { get; }"}</code> | Simulated surface up direction in world space. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Levels the surface and stops all motion. |
| <Link id="m-resetdisableframes" /><code>{"void ResetDisableFrames()"}</code> | Wakes the simulation up if it went idle. |
| <Link id="m-update" /><code>{"bool Update(float deltaTime)"}</code> | Steps the simulation. Returns false while idle (it sleeps 30 frames after the surface stops moving). |

## Used in

Members of other types that take, return or hold a `LiquidGravity`:

[`LiquidGravityAdjustment.SetThickness`](/game-api/types/alta-stats-effects/liquidgravityadjustment#m-setthickness), [`LiquidSurfaceVisual.liquidGravity`](/game-api/types/alta-stats-effects/liquidsurfacevisual#m-liquidgravity), [`LiquidSurfaceVisual.LiquidGravity`](/game-api/types/alta-stats-effects/liquidsurfacevisual#m-liquidgravity-2).
