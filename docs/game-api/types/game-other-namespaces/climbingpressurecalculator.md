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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClimbingPressureCalculator("}<Link to="/game-api/types/global-c-d/climbingsettings">{"ClimbingSettings"}</Link>{" settings, "}<Link to="/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" thisHand, "}<Link to="/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" otherHand)"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-otherhand" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" otherHand"}</code> | The opposite climbing hand. |
| <Link id="m-pressuredirectionpower" /><code>{"private float pressureDirectionPower"}</code> | Direction factor from the last pressure calculation, reused when resisting. |
| <Link id="m-remainingpressure" /><code>{"private float remainingPressure"}</code> | Backing field for `RemainingPressure`. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/global-c-d/climbingsettings">{"ClimbingSettings"}</Link>{" settings"}</code> | Climbing settings that give the per-hand pressure limits. |
| <Link id="m-thishand" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" thisHand"}</code> | The climbing hand this calculator is for. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-remainingpressure-2" /><code>{"float RemainingPressure { get; }"}</code> | Pressure left after the last `GetCurrentPressure` call, including the extra resist pressure while climbing. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculateresistance" /><code>{"Vector3 CalculateResistance(Vector3 resistanceUnit)"}</code> | Returns the hand's resisting force along the given direction, scaled by the remaining pressure. |
| <Link id="m-getcurrentpressure" /><code>{"Vector3 GetCurrentPressure(float downwardGravityForce, float deltaTime)"}</code> | Returns the hand's pressure force for this step. Gravity is halved when the other hand is also climbing. |

## Used in

Members of other types that take, return or hold a `ClimbingPressureCalculator`:

[`ClimbingHandler.leftHandPressureCalculator`](/game-api/types/game-other-namespaces/climbinghandler#m-lefthandpressurecalculator), [`ClimbingHandler.rightHandPressureCalculator`](/game-api/types/game-other-namespaces/climbinghandler#m-righthandpressurecalculator).
