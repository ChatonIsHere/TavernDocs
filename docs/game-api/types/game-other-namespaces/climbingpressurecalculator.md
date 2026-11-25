---
title: "ClimbingPressureCalculator"
description: "class ClimbingPressureCalculator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingPressureCalculator

A **class** in `Root.Township`, `Features.Climbing`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClimbingPressureCalculator("}<Link to="/game-api/types/global-c-d/climbingsettings">{"ClimbingSettings"}</Link>{" settings, "}<Link to="/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" thisHand, "}<Link to="/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" otherHand)"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-otherhand" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" otherHand"}</code> |
| <Link id="m-pressuredirectionpower" /><code>{"private float pressureDirectionPower"}</code> |
| <Link id="m-remainingpressure" /><code>{"private float remainingPressure"}</code> |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/global-c-d/climbingsettings">{"ClimbingSettings"}</Link>{" settings"}</code> |
| <Link id="m-thishand" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/climbinghand">{"ClimbingHand"}</Link>{" thisHand"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-remainingpressure-2" /><code>{"float RemainingPressure { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-calculateresistance" /><code>{"Vector3 CalculateResistance(Vector3 resistanceUnit)"}</code> |
| <Link id="m-getcurrentpressure" /><code>{"Vector3 GetCurrentPressure(float downwardGravityForce, float deltaTime)"}</code> |

## Used in

Members of other types that take, return or hold a `ClimbingPressureCalculator`:

[`ClimbingHandler.leftHandPressureCalculator`](/game-api/types/game-other-namespaces/climbinghandler#m-lefthandpressurecalculator), [`ClimbingHandler.rightHandPressureCalculator`](/game-api/types/game-other-namespaces/climbinghandler#m-righthandpressurecalculator).
