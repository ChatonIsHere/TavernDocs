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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidGravity(Transform relativeTo)"}</code> | <span className="api-desc">Creates a `LiquidGravity` from `relativeTo`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disableframes" /><code>{"private int disableFrames"}</code> | <span className="api-desc">Frames left to skip in `Update`. Reset by `ResetDisableFrames` or `Reset`.</span> |
| <Link id="m-disableframeswhilestationary" /><code>{"private const int DisableFramesWhileStationary"}</code> | <span className="api-desc">Number of frames (30) `Update` skips after the liquid's up direction stops changing.</span> |
| <Link id="m-localup" /><code>{"private Vector3 localUp"}</code> | <span className="api-desc">The liquid's up direction in the container's local space, kept between frames.</span> |
| <Link id="m-oldposition" /><code>{"private Vector3 oldPosition"}</code> | <span className="api-desc">Container position last frame, used to push the liquid when the container moves.</span> |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | <span className="api-desc">The container transform the liquid is simulated in.</span> |
| <Link id="m-velocity" /><code>{"private float velocity"}</code> | <span className="api-desc">Current swing speed of the liquid's up direction, in degrees per second.</span> |
| <Link id="m-velocityaxis" /><code>{"private Vector3 velocityAxis"}</code> | <span className="api-desc">Axis the liquid's up direction is swinging around.</span> |
| <Link id="m-worldup" /><code>{"private Vector3 worldUp"}</code> | <span className="api-desc">Backing field for `WorldUp`, the simulated up direction in world space.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-gravitymultiplier" /><code>{"float GravityMultiplier { get; set; }"}</code> | <span className="api-desc">How strongly gravity pulls the surface back level.</span> |
| <Link id="m-maximumvelocity" /><code>{"float MaximumVelocity { get; set; }"}</code> | <span className="api-desc">Cap on how fast the surface can swing, in degrees per second.</span> |
| <Link id="m-movementmultiplier" /><code>{"float MovementMultiplier { get; set; }"}</code> | <span className="api-desc">How much moving the container tilts the surface.</span> |
| <Link id="m-tip" /><code>{"float Tip { get; private set; }"}</code> | <span className="api-desc">Minus the local up's height: above 0 once the surface points below the container's horizontal.</span> |
| <Link id="m-tippingthreshold" /><code>{"float TippingThreshold { get; set; }"}</code> | <span className="api-desc">Tip value where `TippingValue` starts rising above 0.</span> |
| <Link id="m-tippingvalue" /><code>{"float TippingValue { get; private set; }"}</code> | <span className="api-desc">0 to 1, how far `Tip` is between `TippingThreshold` and fully upside down.</span> |
| <Link id="m-velocitydrag" /><code>{"float VelocityDrag { get; set; }"}</code> | <span className="api-desc">How quickly sloshing dies down.</span> |
| <Link id="m-visualtiplimit" /><code>{"float VisualTipLimit { get; set; }"}</code> | <span className="api-desc">Limit on `Tip` for the drawn surface, so it does not tip past this.</span> |
| <Link id="m-visualup" /><code>{"Vector3 VisualUp { get; private set; }"}</code> | <span className="api-desc">Surface up direction to draw, clamped by `VisualTipLimit`.</span> |
| <Link id="m-worldup-2" /><code>{"Vector3 WorldUp { get; }"}</code> | <span className="api-desc">Simulated surface up direction in world space.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | <span className="api-desc">Levels the surface and stops all motion.</span> |
| <Link id="m-resetdisableframes" /><code>{"void ResetDisableFrames()"}</code> | <span className="api-desc">Wakes the simulation up if it went idle.</span> |
| <Link id="m-update" /><code>{"bool Update(float deltaTime)"}</code> | <span className="api-desc">Steps the simulation. Returns false while idle (it sleeps 30 frames after the surface stops moving).</span> |

## Used in

Members of other types that take, return or hold a `LiquidGravity`:

<div className="api-used-in">

[`LiquidGravityAdjustment.SetThickness`](/mod/game-api/types/alta-stats-effects/liquidgravityadjustment#m-setthickness), [`LiquidSurfaceVisual.liquidGravity`](/mod/game-api/types/alta-stats-effects/liquidsurfacevisual#m-liquidgravity), [`LiquidSurfaceVisual.LiquidGravity`](/mod/game-api/types/alta-stats-effects/liquidsurfacevisual#m-liquidgravity-2).

</div>
