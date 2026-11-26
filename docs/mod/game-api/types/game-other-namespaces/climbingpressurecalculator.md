---
title: "ClimbingPressureCalculator"
description: "Works out how hard one climbing hand pushes against a surface and how much pressure it has left to resist with."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingPressureCalculator

A **class** in `Root.Township`, `Features.Climbing`.

Works out how hard one climbing hand pushes against a surface and how much pressure it has left to resist with. One per hand, built with the other hand for reference.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingPressureCalculator("}<Link to="/mod/game-api/types/global-c-d/climbingsettings">{"ClimbingSettings"}</Link>{" settings, "}<Link to="/mod/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" thisHand, "}<Link to="/mod/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" otherHand)"}</code> | <span className="api-desc">Creates a `ClimbingPressureCalculator` from `settings`, `thisHand` and `otherHand`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-otherhand" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" otherHand"}</code> | <span className="api-desc">The opposite climbing hand.</span> |
| <Link id="m-pressuredirectionpower" /><code>{"private float pressureDirectionPower"}</code> | <span className="api-desc">Direction factor from the last pressure calculation, reused when resisting.</span> |
| <Link id="m-remainingpressure" /><code>{"private float remainingPressure"}</code> | <span className="api-desc">Backing field for `RemainingPressure`.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/climbingsettings">{"ClimbingSettings"}</Link>{" settings"}</code> | <span className="api-desc">Climbing settings that give the per-hand pressure limits.</span> |
| <Link id="m-thishand" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" thisHand"}</code> | <span className="api-desc">The climbing hand this calculator is for.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-remainingpressure-2" /><code>{"float RemainingPressure { get; }"}</code> | <span className="api-desc">Pressure left after the last `GetCurrentPressure` call, including the extra resist pressure while climbing.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculateresistance" /><code>{"Vector3 CalculateResistance(Vector3 resistanceUnit)"}</code> | <span className="api-desc">Returns the hand's resisting force along the given direction, scaled by the remaining pressure.</span> |
| <Link id="m-getcurrentpressure" /><code>{"Vector3 GetCurrentPressure(float downwardGravityForce, float deltaTime)"}</code> | <span className="api-desc">Returns the hand's pressure force for this step. Gravity is halved when the other hand is also climbing.</span> |

## Used in

Members of other types that take, return or hold a `ClimbingPressureCalculator`:

<div className="api-used-in">

[`ClimbingHandler.leftHandPressureCalculator`](/mod/game-api/types/game-other-namespaces/climbinghandler#m-lefthandpressurecalculator), [`ClimbingHandler.rightHandPressureCalculator`](/mod/game-api/types/game-other-namespaces/climbinghandler#m-righthandpressurecalculator).

</div>
